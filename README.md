# Personal Web Developer Portfolio

A responsive, single-page portfolio using HTML, CSS, and vanilla JavaScript. White theme with navy blue, muted gold, soft-gray sections, responsive navigation, subtle scroll reveal effects, and CSS-built project previews.

## Before publishing

1. Search and replace `Your Name` with your name.
2. Replace `hello@example.com` with your real email address.
3. Update the GitHub and LinkedIn links in `index.html`.
4. Replace the illustrative project cards with your real projects and live repository links. The current project cards are explicitly marked as concepts.
5. Update the meta description and page title.

## Preview locally

Open `index.html` in a browser, or run a local server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Vercel (GitHub method)

1. Create a GitHub repository, for example `my-portfolio`.
2. Upload the contents of this folder to the repository root. `index.html`, `styles.css`, and `script.js` should be at the root, not nested inside another folder.
3. Sign in at https://vercel.com and choose **Add New → Project**.
4. Import the GitHub repository. Vercel should detect a static site; no build command is required. If prompted, choose **Other** as the framework preset and leave build/output settings empty/default.
5. Click **Deploy**.

## Connect your custom domain

1. Open the project in Vercel → **Settings → Domains**.
2. Add your exact domain (for example `example.com`) and follow the DNS instructions Vercel displays for your domain registrar.
3. Add the requested DNS records at the registrar. Do not remove existing records used for email or other services unless you know they are not needed.
4. Wait for Vercel to verify the domain and issue HTTPS. DNS propagation can take time.
5. Optionally add both the apex domain and `www` version, then choose one as the primary domain and redirect the other.

DNS values can vary by project/account, so use the exact records shown in your Vercel dashboard rather than copying generic values from a tutorial.
