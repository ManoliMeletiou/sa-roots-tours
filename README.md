# SA Roots Tours

Pre-launch marketing site for a small-group, land-only journey: Cape Town, then Greater Kruger. English and Dutch. Enquiry only. No bookings and no payments.

This repository is the site. Cloning it and running it produces the same site. Do not redesign it from memory.

Read [REBUILD.md](REBUILD.md) before changing anything. All customer-facing copy lives in [src/lib/content.ts](src/lib/content.ts). All photographs live in [public/images](public/images).

```bash
npm install
npm run dev
```

Open http://localhost:8080.

There is no database. Sending an enquiry opens the visitor’s email app, addressed to the operator in [src/lib/contact.ts](src/lib/contact.ts). Supabase is not part of this site.
