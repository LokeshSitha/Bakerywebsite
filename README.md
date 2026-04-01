Bakerywebsite
===============

A Next.js + Tailwind bakery website.

Prerequisites
-------------
- Node.js v16+ and npm

Local setup
-----------
1. Clone the repo and change into it:
   git clone <your-repo-url> && cd Bakerywebsite
2. Install dependencies:
   npm install
3. Run the dev server:
   npm run dev

Build
-----
Build for production:

npm run build
npm run start

Vercel deployment
-----------------
This project is Next.js-ready and can be deployed to Vercel.

Option A — Connect Git provider (recommended):
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, create a new project and import the repo.
3. Vercel will detect Next.js. Use the default build command (npm run build) and output directory (.
   next).
4. Add any required environment variables in the Vercel dashboard under Settings > Environment Variables.

Option B — Use the Vercel CLI:
1. Install Vercel CLI: npm i -g vercel
2. Login: vercel login
3. From the project root run: vercel --prod

Vercel configuration
--------------------
A minimal vercel.json is included to ensure the Next.js builder is used. If you need custom rewrites or headers, edit vercel.json.

Environment variables
---------------------
- Add any .env values to Vercel under Settings > Environment Variables (do not commit .env files).

Notes
-----
- .gitignore excludes node_modules, build artifacts, and local env files. 
- If the project uses any additional services (Stripe, external APIs), configure their keys in Vercel.

Questions or want automated deployment help? Reply and specify the Git provider and repository URL.
