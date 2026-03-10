import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();
  let accessControlState = AccessControl.initState();

  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public type ContactForm = {
    name : Text;
    phoneNumber : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contactFormSubmissions = Map.empty<Time.Time, ContactForm>();

  // Anyone (including guests) can submit a contact form — it's a public-facing form
  public shared ({ caller }) func submitContactForm(name : Text, phoneNumber : Text, message : Text) : async () {
    let timestamp = Time.now();
    let newContactForm : ContactForm = {
      name;
      phoneNumber;
      message;
      timestamp;
    };
    contactFormSubmissions.add(timestamp, newContactForm);
  };

  // Only admins (cafe owner) can review submitted contact form inquiries
  public query ({ caller }) func getContactFormSubmissions() : async [ContactForm] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contact form submissions");
    };
    contactFormSubmissions.values().toArray();
  };
};
