# Certificate Images Directory (`/public/assets/certificates/`)

You can customize or add your own certificate images anytime. This directory contains the image files displayed in the **Certifications** section and detail popup.

### Included Default Certificate Files:
1. `cert-lbef-degree.svg` — B.Sc. (Honours) in Information Technology (LBEF / APU)
2. `cert-laravel-enterprise.svg` — Enterprise Laravel & PHP Architecture
3. `cert-react-fullstack.svg` — Full Stack React & Modern Web Engineering
4. `cert-database-systems.svg` — High-Performance Database Architecture & SQL Optimization
5. `cert-cloud-firebase.svg` — Google Cloud Platform & Firebase Realtime Systems
6. `cert-japanese-ecommerce.svg` — Enterprise Software Delivery & QA (Miracle Interface)

### How to use your own scanned certificate images:
1. Drop your scanned certificate image (`.png`, `.jpg`, `.jpeg`, `.webp`, or `.svg`) into this directory:
   `/public/assets/certificates/`
2. Update the `imageUrl` property in `/src/data/portfolioData.ts` under the `CERTIFICATIONS` array to match your file name, for example:
   ```ts
   imageUrl: '/assets/certificates/my-real-certificate.jpg'
   ```
3. Or simply rename your file to match one of the default file names above (e.g. `cert-lbef-degree.jpg` or `cert-lbef-degree.png`) and update the extension!
