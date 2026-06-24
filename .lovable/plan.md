## Goal

Track every button/link click on the site and display total counts per button on a simple dashboard page.

## Approach

Use Lovable Cloud (database) to store one row per click. Build a `/dashboard` route that aggregates counts.

### 1. Enable Lovable Cloud

Provision the backend so we can persist click data.

### 2. Database

Single table `button_clicks`:
- `id` uuid PK
- `button_id` text (stable identifier, e.g. `wishlist_hero`, `wishlist_pre_presskit`, `wishlist_cta`, `presskit_files`, `press_contact_email`, `steam_store_link`)
- `created_at` timestamptz default now()

RLS: allow `anon` + `authenticated` INSERT (public site visitors); SELECT restricted to `authenticated` (dashboard is gated). Grants follow project conventions.

### 3. Click tracking helper

`src/lib/trackClick.ts` exports `trackClick(buttonId: string)` — inserts a row via the Supabase client. Fire-and-forget, no UI blocking, errors swallowed.

### 4. Instrument every button/link CTA

Add `onClick={() => trackClick('<id>')}` to:
- Hero: Wishlist button (`wishlist_hero`)
- Index pre-presskit: Wishlist button (`wishlist_pre_presskit`)
- PresskitSection: screenshot thumbnails (`screenshot_<n>`), Press Kit Files link (`presskit_files`), Press contact email (`press_contact_email`), Steam Store link (`steam_store_link`)
- CtaSection: Wishlist button (`wishlist_cta`)

Existing `gtag` calls stay untouched.

### 5. Dashboard page

New route `/dashboard` (added to `src/App.tsx`):
- Lists each `button_id` with total count and last-7-days count
- Simple table styled to match the dark gold theme
- No auth gate built now (can be added later); page is unlinked from the public site

## Out of scope

- Per-user attribution, sessions, geo — only counts.
- Auth on the dashboard (link is unlisted).
- Replacing GA4.
