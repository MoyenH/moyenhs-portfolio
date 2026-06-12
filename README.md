# moyenhs.dev — Portfolio (Next.js + Tailwind CSS)

Your complete portfolio built with **Next.js 14** + **Tailwind CSS**.

---

## 🚀 Quick Deploy Guide (Step by Step)

### STEP 1 — Install Node.js (one time only)
1. Go to https://nodejs.org → Download **LTS** version
2. Install it (just click Next → Next → Finish)
3. Open **Command Prompt** (search "cmd" in Windows)
4. Type: `node -v` — you should see a version number ✅

---

### STEP 2 — Upload to GitHub
1. Go to https://github.com → Sign in as **MoyenH**
2. Click the **+** icon → **New repository**
3. Name: `moyenhs-portfolio` → Public → **Create repository**
4. On your computer, extract this ZIP folder
5. Open **Command Prompt** inside the extracted folder:
   ```
   cd path\to\moyenhs-portfolio
   ```
6. Run these commands one by one:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/MoyenH/moyenhs-portfolio.git
   git push -u origin main
   ```

---

### STEP 3 — Deploy on Vercel (free)
1. Go to https://vercel.com → Sign up with GitHub
2. Click **"Add New Project"**
3. Import **moyenhs-portfolio** from your GitHub
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** → 🎉 Your site is live at `moyenhs-portfolio.vercel.app`

---

### STEP 4 — Connect moyenhs.dev domain
1. In Vercel: go to your project → **Settings → Domains**
2. Type `moyenhs.dev` → click **Add**
3. Vercel shows you two DNS records to add
4. Go to **name.com** → your domain → **DNS Records**
5. Add:
   - Type `A` → `@` → `76.76.21.21`
   - Type `CNAME` → `www` → `cname.vercel-dns.com`
6. Wait 24 hours → **moyenhs.dev is live!** 🎉

---

## 🖼️ Add Your Profile Photo
1. Put your photo file named **`profile.png`** inside the `/public` folder
2. Commit and push:
   ```bash
   git add .
   git commit -m "add profile photo"
   git push
   ```
3. Vercel auto-deploys in ~30 seconds ✅

---

## 📄 Add Your CV
1. Put your CV file named **`Moyen_Curriculum_Vitae.pdf`** inside `/public`
2. Commit and push

---

## 🛠️ Run Locally (to preview before pushing)
```bash
npm install
npm run dev
```
Open http://localhost:3000 in your browser.

---

## ✏️ How to Edit Content
All content is in the component files inside `/components/`:
- `Hero.tsx` → name, description, terminal lines
- `About.tsx` → bio text, stats, tags
- `Skills.tsx` → skill bars and pills
- `Certifications.tsx` → certificates list
- `Education.tsx` → education timeline
- `Contact.tsx` → contact links
- `Navbar.tsx` → nav links, CV button

---

## 📁 Project Structure
```
moyenhs-portfolio/
├── app/
│   ├── globals.css     ← all custom CSS + Tailwind
│   ├── layout.tsx      ← HTML head, metadata
│   └── page.tsx        ← assembles all sections
├── components/
│   ├── Navbar.tsx
│   ├── Particles.tsx   ← animated background
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Divider.tsx
│   └── ScrollReveal.tsx
├── public/
│   ├── profile.png     ← ADD YOUR PHOTO HERE
│   └── Moyen_Curriculum_Vitae.pdf  ← ADD YOUR CV HERE
├── tailwind.config.js
├── package.json
└── README.md
```
