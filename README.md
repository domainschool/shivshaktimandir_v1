# shivshaktimandir_v1

> **Shri Shiv Shakti Mandir** — A responsive, mobile-first Hindu Temple web portal designed for intergenerational devotees with an auspicious cultural design system, live deity darshan, daily Vedic panchangam, aarti timetable, online puja booking with Gotra & Nakshatra, digital hundi donations, and a multi-action speed dial Floating Action Button.

🌐 **Live Demo (GitHub Pages):** [https://domainschool.github.io/shivshaktimandir_v1/](https://domainschool.github.io/shivshaktimandir_v1/)

---

## 🪔 Cultural Design System & Color Palette

* **Sacred Saffron / Bhagwa (`#E85D04`):** Devotion, energy, sunrise (*Usha*).
* **Deep Vermillion / Kumkum (`#9D0208`):** Shakti, auspiciousness, primary buttons & speed dial.
* **Temple Gold / Haridra (`#FAA307`):** Brass deepam lamps, halos, badges, and accents.
* **Warm Sandalwood / Chandan (`#FFFDF7`):** Sattvic calm, low eye-strain surface.
* **Incense Charcoal (`#23211E`):** High contrast typography optimized for senior devotees.
* **Raw Silk Demarcation (`#F3E8D2`):** Traditional borders and card separation.

---

## ✨ Features

1. **Header & Live Temple Status:**
   - Real-time hours calculation (7:00 AM – 1:00 PM & 4:30 PM – 9:00 PM).
   - Auspicious Temple Bell with Web Audio API bronze harmonic synthesis.
   - Multilingual support: English (EN), Hindi (HI), Gujarati (GU), and Sanskrit (SA).
   - Senior-friendly font size toggle (`A` / `A+`).
2. **Daily Deity Darshan (Hero Carousel):**
   - High-resolution darshan photography for Lord Shiva (*Rudrabhishekam*), Goddess Durga (*Maa Shakti*), and Lord Ganesha (*Vighnaharta*).
   - Swipeable carousel with fullscreen darshan zoom modal.
3. **Daily Vedic Panchangam:**
   - Today's Tithi, Nakshatra, Rahu Kalam (avoid auspicious ceremonies), and Abhijit Muhurat (best timings).
   - Sunrise, sunset, and Vikram Samvat 2083.
4. **Aarti & Darshan Timetable:**
   - Live schedule with dynamic Completed / In-Progress / Upcoming status pills.
5. **Sevas & Puja Booking Workflow:**
   - Sankalpam form with Devotee Name, Gotra auto-suggestions, 27 Vedic Nakshatras, occasion, date, and attendance mode (In-person vs. Remote).
   - Instant downloadable Sankalpam receipt card with reference ID.
6. **Digital Hundi & Temple Giving:**
   - Sacred preset amount chips (`$21`, `$51`, `$101`, `$251`, `$501`, Custom).
   - Purpose selection: Daily Annadanam, Temple Maintenance, Goshala, Priest Welfare.
   - Instant 501(c)(3) tax receipt generation.
7. **Multi-Action Floating Action Button (FAB):**
   - Fixed 60×60px button with glowing pulse ring expanding into 4 quick actions:
     - 🧭 Get Directions (Google Maps)
     - 📞 Call Priest
     - 💰 Quick Hundi Donation
     - 💬 WhatsApp Priest Desk

---

## 🚀 How to Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/domainschool/shivshaktimandir_v1`
2. Click **Settings** ⚙️ > **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `root`
4. Click **Save**.
5. Your temple site will be live at:
   👉 **`https://domainschool.github.io/shivshaktimandir_v1/`**

---

## 📁 Repository Structure

```
shivshaktimandir_v1/
├── index.html              # Main mobile-optimized application
├── .nojekyll               # Prevents Jekyll processing on GitHub Pages
├── .gitignore              # Ignores OS and temporary files
├── README.md               # Documentation and setup guide
├── css/
│   └── style.css           # Cultural design system, fluid tokens, animations
├── js/
│   └── app.js              # Real-time engine, Web Audio synth, FAB, forms
├── assets/
│   └── images/             # Sacred deity darshan photography
│       ├── shiva_darshan.jpg
│       ├── durga_darshan.jpg
│       └── ganesha_darshan.jpg
└── instructions/
    └── hindu_temple_mobile_site_blueprint.md
```

---

*Dhanya Ho! ॐ नमः शिवाय*
