import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phoneNumber,
      message,
    }: {
      name: string;
      phoneNumber: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Service not available. Please try again.");
      await actor.submitContactForm(name, phoneNumber, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactForms"] });
    },
  });
}
