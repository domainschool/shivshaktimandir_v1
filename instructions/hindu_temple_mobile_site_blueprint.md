# Mobile-Optimized Hindu Temple Web Application Blueprint

## 1. Cultural Design System & Color Palette
The color scheme reflects auspicious traditions (*Shubh* colors), temple architecture, and sacred ritual elements:

* **Sacred Saffron / Bhagwa (Primary):** `#E85D04` — Energy, devotion, sunrise (*Usha*).
* **Deep Vermillion / Kumkum (Accent & CTAs):** `#9D0208` — Shakti, auspiciousness, primary buttons.
* **Temple Gold / Haridra (Highlights & Badges):** `#FAA307` — Prosperity, brass lamps, deity ornamentation.
* **Warm Sandalwood / Chandan (Background):** `#FFFDF7` — Sattvic peace, low eye-strain surface.
* **Incense Charcoal (Typography & Contrast):** `#23211E` — Readability for senior devotees.
* **Border & Card Accent:** `#F3E8D2` — Subtle demarcation reminiscent of raw silk.

---

## 2. Core Functional Requirements
1. **Target Viewport:** Mobile-first (390px – 430px baseline, fluid layout).
2. **Audience:** Intergenerational (seniors needing large touch targets, youths seeking quick bookings).
3. **Key Workflows:**
   * Instant temple hours and live open/closed status.
   * Aarti and puja timetable.
   * Puja/Archana booking with Gotra & Nakshatra fields.
   * Frictionless mobile donation (Apple Pay / Google Pay / UPI).
   * Floating Speed Dial Action Button for immediate access.

---

## 3. Screen Layout Mock-Up (ASCII Wireframe)

```
+---------------------------------------------------+
| [ 🕉️ Shri Siddhivinayak Temple ]      [ EN | HI ▾ ]|
| Status: 🟢 OPEN NOW  •  Closes 1:00 PM            |
+---------------------------------------------------+
| 🪔 TODAY'S ALANKARAM & DARSHAN                    |
| [ Hero Deity Photo Carousel with 'Live' Badge ]   |
| "Kakad Aarti completed at 6:30 AM"                |
+---------------------------------------------------+
| 📅 DAILY PANCHANGAM (Today: Shukla Paksha Dashami)|
| • Tithi: Dashami       • Nakshatra: Rohini        |
| • Rahu Kalam: 3:00 PM - 4:30 PM (Avoid Auspicious)|
+---------------------------------------------------+
| ⏱️ AARTI & DARSHAN TIMETABLE                       |
| [ Mangala Aarti   |  07:30 AM  | Completed ]      |
| [ Madhyanna Aarti |  12:00 PM  | Upcoming  ]      |
| [ Sandhya Aarti   |  06:30 PM  | Upcoming  ]      |
| [ Shej Aarti      |  08:45 PM  | Upcoming  ]      |
+---------------------------------------------------+
| 🏷️ SEVAS & PUJA BOOKINGS                           |
| [ Archana ($21) ]  [ Satyanarayan Puja ($101) ]   |
| [ Abhishekam ($51) ]  [ Vahan Puja ($51) ]        |
+---------------------------------------------------+
| 🍲 UPCOMING FESTIVALS & ANNOTATIONS               |
| • Maha Shivaratri - All Night Jaagran (Mar 8)     |
| • Sunday Prasadam / Annadanam Sponsor Available   |
+---------------------------------------------------+
|                                                   |
|                [ 🪔 Floating Action Button (FAB) ] |
|                                                   |
+---------------------------------------------------+
| [ Home ]   [ Pujas ]   [ Donate ]   [ Calendar ]   |
+---------------------------------------------------+
```

---

## 4. Multi-Action Floating Action Button (FAB) Specification

Position: Fixed `bottom: 24px`, `right: 20px`, `z-index: 9999`

### Default State:
* Circular button (60×60px) in **Deep Vermillion** (`#9D0208`) with a glowing gold ring (`#FAA307`).
* Icon: Diya / Lamp icon or 🕉️ symbol.

### Expanded State (Radial or Vertical Speed Dial):
When tapped, the FAB expands into 4 quick-action mini-buttons:
1. **🧭 Get Directions:** Direct intent to Google Maps / Apple Maps navigation.
2. **📞 Contact Priest / Temple:** One-tap telephone call dialog (`tel:+1...`).
3. **💰 Quick Hundi / Donation:** Direct shortcut to one-click donation modal.
4. **💬 WhatsApp Priest Desk:** Direct chat link (`https://wa.me/...`) for general inquiries.

---

## 5. UI Component Specifications for Code Generation

### A. Navigation & Status Bar
* Background: `#FFFDF7` with a fine bottom border `#F3E8D2`.
* Contains: Temple Logo/Name, current live status pill (Green dot + "Open until 1:00 PM"), and language selector dropdown.

### B. Daily Panchangam Widget
* Clean 2x2 grid displaying auspicious timings.
* Highlights `Rahu Kalam` and `Abhijit Muhurat` for devotee convenience.

### C. Puja Booking Quick-Card
* Fields:
  * Devotee Name (Text)
  * Gotra & Nakshatra (Dropdown / Optional text)
  * Sankalpam Occasion (Birthday, Anniversary, Shanti, Remembrance)
  * Preferred Date & Time
* Action: Saffron CTA button: `Confirm & Pay Dakshina`

### D. Digital Hundi / Giving Drawer
* Preset quick amounts: `$21`, `$51`, `$101`, `$251`, `Custom`.
* Toggle: "Sponsor Daily Annadanam (Prasadam)" or "General Maintenance".

---

## 6. Prompt Starter for AI Agent Builder

You can paste the block below into your AI Agent Builder prompt window:

```
Create a single-page responsive mobile web app for a local Hindu temple. 
Use the following specifications:
- Palette: Saffron (#E85D04), Kumkum Red (#9D0208), Gold (#FAA307), Chandan Ivory background (#FFFDF7).
- Include:
  1. Header with live open/closed indicator and language selector.
  2. Hero card showcasing today's deity darshan with collapsible aarti timings.
  3. Mini Panchangam card (Tithi, Nakshatra, Rahu Kalam).
  4. Quick Puja Booking form with devotee name, Nakshatra, and Gotra inputs.
  5. Expandable Floating Action Button (FAB) at bottom-right with 4 quick links:
     - Directions (Maps)
     - Call Priest
     - WhatsApp Inquiry
     - Quick Hundi Donation
- Ensure touch targets are at least 48x48px and text is senior-friendly.
```