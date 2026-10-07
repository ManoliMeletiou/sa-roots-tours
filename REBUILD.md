# Rebuild this site exactly

This file is the brief. The code in this repository is the finished site. Another person, designer, or AI should be able to reproduce it using only this repository.

If you are rebuilding: copy these files. Do not invent pages, partners, lodges, prices, or claims that are not written here.

## What the business is

SA Roots Tours is a pre-launch specialist, not a volume operator. It sells a conversation, not a ticket.

- First departures aimed at March–April 2027.
- 10 days / 9 nights. Cape Town, then Greater Kruger.
- Land-only. International flights are not included.
- Groups of 6–12 guests.
- Planning band: €3,850–€4,450 per person. The on-page sketch uses the middle of that band, €4,100, times the guest count (default 8).
- Dutch-first source market. The site is bilingual: English and Dutch.
- No money is taken until a travel agreement, insolvency protection, and insurance are in place.
- Do not name lodges, camps, or vehicles. Do not guarantee the Big Five, a specific sighting, or a specific lodge.
- Do not add a booking engine, a payment button, a “book now” label, or a fake availability calendar.

## Pages

| Path | Role |
|---|---|
| `/` | Home. Full-viewport Table Mountain hero, fact rows, manifesto, three pillars, flagship split, price band, honesty section, close. |
| `/journey` | Day-by-day sample programme, inclusions, exclusions, three extensions, things we will not promise. |
| `/approach` | How the trip is hosted. Fewer places, better days. |
| `/practical` | Provisional price, guest slider, group notes, travel papers, FAQ. |
| `/enquire` | Qualified enquiry form. Not a booking. |

Navigation labels: The journey, How we travel, Practical, Enquire. Dutch: De reis, Hoe we reizen, Praktisch, Aanvraag.

## Copy

`src/lib/content.ts` is the only copy source. Both locales are in that file. Do not paraphrase the legal or price language. The pre-launch line must stay visible in the footer and the mobile menu.

## Design

Editorial travel house. Warm paper, not a white SaaS page. No purple gradient, no Inter, no three-column feature grid of icons.

Tokens in `src/styles.css`:

| Token | Value |
|---|---|
| paper | `#f3eee4` |
| paper-2 | `#e8e0d2` |
| paper-3 | `#d9cfbe` |
| ink | `#1c1915` |
| ink-soft | `#3a342c` |
| muted | `#6e675c` |
| sage | `#3e5346` |
| sage-deep | `#2c3c33` |
| sage-fg | `#f3eee4` |
| border | `#d4cbba` |
| danger | `#8b3a2a` |

Type:

- Display: Cormorant Garamond, weights 500 and 600.
- Body: Figtree, weights 400, 500, and 600.
- Display size: `clamp(2.15rem, 0.7rem + 6.4vw, 5.5rem)`.
- Title size: `clamp(1.85rem, 1rem + 2.2vw, 3.25rem)`.

Buttons (`src/components/ui/button.tsx`):

- Primary: sage background, paper text.
- Invert: paper background, ink text. Used on photographs.
- Invert outline: paper border, `ink/55` fill, paper text. Must stay readable on a bright sky.
- Corners 6–10px. No pills. Press scale `0.96`.

Header is fixed and sits on the hero until the page scrolls, then it becomes paper. On a phone the header shows the logo, EN/NL chips, Enquire, and the menu. A paper bar fixed to the bottom repeats Enquire on screens under 640px, except on `/enquire`. Hero text and buttons sit above that bar.

Language is stored in `localStorage` as `sa-roots-locale`. Default is English. Enquiries are stored as `sa-roots-enquiries`.

## Photographs

Use the files in `public/images`. Do not swap in stock that shows a different place. Do not add people who are identifiable as real clients. Do not put text inside the photographs.

| File | Use |
|---|---|
| `hero-table-mountain.jpg` | Home hero. Table Mountain and Lion’s Head across Table Bay, golden hour. Also the last journey day. |
| `bokaap.jpg` | Home manifesto, left. Quiet Bo-Kaap street. |
| `penguins.jpg` | Home manifesto, right. African penguins at Boulders. |
| `cape-peninsula.jpg` | Flagship card and journey hero. Peninsula coastline. |
| `kruger-dawn.jpg` | Kruger card and bush days. Dawn bushveld. No promised species. |
| `lodge-dusk.jpg` | Home price band and a lodge-night extension. Deck at dusk. Unnamed lodge. |
| `protea.jpg` | Honesty section. King protea in fynbos. |
| `waterfront.jpg` | Practical hero and arrival day. Harbour at blue hour. |
| `city-dusk.jpg` | City evening on the journey. |
| `winelands.jpg` | Winelands day and extension. |
| `gamedrive.jpg` | Game-drive days. Vehicle in the bush, not a guaranteed sighting. |
| `favicon.svg` | Protea mark. |
| `og.jpg` | Share image. |

The protea mark in the logo is the inline SVG in `src/components/site/logo.tsx`.

## Behaviour that must survive a rebuild

- Enquiry form fields: name, email, optional phone, preferred dates, group size, rooming, budget, travel style, message. Validated. Success state thanks the person and says this is not a booking. Submissions stay in `localStorage` under `sa-roots-enquiries`. There is no server inbox.
- Price sketch: range 6–12 guests, step 1, default 8. Per person stays €4,100. Total is guests × 4,100. Format with `nl-NL` or `en-GB` currency, no cents.
- Journey page: a sticky row of buttons `01`–`10` jumps to `#day-1` … `#day-10`.
- FAQ items are native `<details>`. The plus is a visible control.
- Footer states the pre-launch limit and the year.

## Stack

TanStack Start, React, Vite, Tailwind CSS v4, deployed as a Vercel (Nitro) build. `@tanstack/react-start` must be `1.168.60` or newer.

```bash
npm install
npm run dev      # http://localhost:8080
npm run typecheck
npm run build
```

No Supabase project, no auth wall, and no payment provider belong on this site. Adding them would change the product.

## Instruction to the next builder

1. Read this file.
2. Treat `src/lib/content.ts`, `src/styles.css`, and `public/images` as locked.
3. Run the site. Match it. Do not “improve” the palette, the type, or the offer.
4. If a sentence is not in `content.ts`, do not publish it.
