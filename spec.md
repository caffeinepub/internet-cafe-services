# Specification

## Summary
**Goal:** Remove all pricing information from service cards on the Services page.

**Planned changes:**
- Remove all rupee symbols, price numbers, currency values, and pricing badges from every service card on the Services page (`frontend/src/pages/Services.tsx`)
- Remove or replace any "Starting at", "From", or similar price-indicating labels with a neutral dot placeholder (`•`) or nothing at all
- Ensure the change applies to all service categories (internet browsing, computer rental, government document services, printing, photocopying, lamination, etc.)

**User-visible outcome:** The Services page displays all service cards without any pricing or cost information, while the card layout and structure remain visually intact.
