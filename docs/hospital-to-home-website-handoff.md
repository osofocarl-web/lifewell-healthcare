# Hospital-to-Home Website Build Handoff

This branch carries the engineering handoff for a standalone service website. Start a fresh project for the build. Use the separately supplied master plan for the approved scope and owner review.

## Routes and visitor journeys

| Route | Purpose |
| --- | --- |
| / | Introduce the service and direct families and professionals to the right route |
| /how-it-works | Explain the proposed hospital assessment, journey, home visit and follow-up |
| /services | Describe therapy and rehabilitation services |
| /families | Explain suitability, practical questions and the enquiry process |
| /professionals | Explain how to arrange a professional referral discussion |
| /pricing | Explain packages and how to request a quote |
| /team | Publish approved biographies and credentials |
| /coverage | Explain the approved coverage and availability |
| /faq | Answer common discharge, transport and equipment questions |
| /contact | Present the approved family and professional enquiry routes |
| /privacy, /accessibility, /feedback | Publish approved policies and contacts |

## Build and review

- Use a standalone Next.js App Router and TypeScript project. Store service identity, pricing, coverage and public contact channels in typed configuration.
- Build accessible responsive pages, shared navigation and reusable calls to action. Target WCAG 2.2 AA and test keyboard use, visible focus and responsive layout.
- Start with a protected, noindex Vercel Preview. Use synthetic records and disable operational contact integrations in staging.
- Use an approved business contact route for initial enquiries and an approved secure channel for clinical referrals. Keep medical information and patient identifiers out of public web forms, GitHub, logs and analytics.
- Run a clean install and production build, verify routes and enquiry states, confirm production domain and metadata settings, and record the rollback procedure.
- Before production release, obtain approvals for the operating entity and brand, clinical claims, service scope, transport, prices, contact details and data handling. Confirm the destination repository and production hosting project with the service owner.

Build the first release against the internal master plan. Bring any conflicting service assumptions back to the service owner for resolution.
