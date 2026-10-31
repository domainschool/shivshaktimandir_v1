/**
 * Shri Shiv Shakti Mandir - Interactive Web Application Engine
 * Cultural Design System & Devotional Workflows
 */

// ==========================================================================
// 1. LOCALIZATION (i18n) DICTIONARY
// ==========================================================================
const translations = {
  en: {
    templeName: "Shri Shiv Shakti Mandir",
    templeTagline: "Sacred Sanctuary of Shiva & Shakti",
    ribbonMantra: "|| ॐ नमः शिवाय • ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ||",
    badgeTodayDarshan: "🪔 TODAY'S ALANKARAM & DARSHAN",
    darshanHeading: "Daily Divine Darshan",
    completedAarti: "Last Completed:",
    nextAarti: "Next Aarti:",
    badgePanchangam: "📅 VEDIC PANCHANGAM",
    panchangHeading: "Today's Sacred Almanac",
    lblTithi: "Tithi",
    lblNakshatra: "Nakshatra",
    lblAbhijit: "Abhijit Muhurat",
    lblRahuKalam: "Rahu Kalam",
    sunrise: "Sunrise:",
    sunset: "Sunset:",
    samvat: "Vikram Samvat:",
    yoga: "Yoga:",
    badgeAarti: "⏱️ AARTI & DARSHAN TIMETABLE",
    aartiHeading: "Daily Temple Schedule",
    badgePujas: "🏷️ SEVAS & PUJA BOOKINGS",
    pujasHeading: "Sacred Sevas with Sankalpam",
    subPujas: "In-person & Remote Sankalpam",
    badgeFestivals: "🍲 FESTIVALS & ANNADANAM",
    festivalsHeading: "Upcoming Utsavs & Sponsorship",
    badgeHundi: "💰 DIGITAL HUNDI & SEVA DAANA",
    hundiHeading: "Temple Giving & Support",
    navHome: "Home",
    navDarshan: "Darshan",
    navTimings: "Timings",
    navPujas: "Pujas",
    navDonate: "Donate",
    openNow: "OPEN NOW • Closes 1:00 PM",
    reopensEvening: "CLOSED • Reopens 4:30 PM (Evening Darshan)",
    openEvening: "OPEN NOW • Closes 9:00 PM",
    closedNight: "CLOSED • Reopens 7:00 AM (Mangala Aarti)"
  },
  hi: {
    templeName: "श्री शिव शक्ति मंदिर",
    templeTagline: "शिव एवं शक्ति का पावन धाम",
    ribbonMantra: "|| ॐ नमः शिवाय • ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ||",
    badgeTodayDarshan: "🪔 आज का अलङ्कार एवं दर्शन",
    darshanHeading: "दैनिक दिव्य दर्शन",
    completedAarti: "सम्पन्न आरती:",
    nextAarti: "अगली आरती:",
    badgePanchangam: "📅 वैदिक पञ्चाङ्गम्",
    panchangHeading: "आज का शुभ पञ्चाङ्ग",
    lblTithi: "तिथि",
    lblNakshatra: "नक्षत्र",
    lblAbhijit: "अभिजित् मुहूर्त",
    lblRahuKalam: "राहु काल",
    sunrise: "सूर्योदय:",
    sunset: "सूर्यास्त:",
    samvat: "विक्रम संवत्:",
    yoga: "योग:",
    badgeAarti: "⏱️ आरती एवं दर्शन समय सारणी",
    aartiHeading: "दैनिक मंदिर समय सारणी",
    badgePujas: "🏷️ सेवा एवं पूजा संकल्प बुकिंग",
    pujasHeading: "सङ्कल्प सहित पावन सेवाएँ",
    subPujas: "प्रत्यक्ष एवं ऑनलाइन सङ्कल्प",
    badgeFestivals: "🍲 आगामी उत्सव एवं अन्नदान",
    festivalsHeading: "पर्व दर्शन एवं अन्नदान सेवा",
    badgeHundi: "💰 डिजिटल हुंडी एवं सेवा दान",
    hundiHeading: "मंदिर सेवा एवं दक्षिणा अर्पण",
    navHome: "गृह",
    navDarshan: "दर्शन",
    navTimings: "आरती",
    navPujas: "पूजा",
    navDonate: "हुंडी",
    openNow: "🟢 मंदिर खुला है • विश्राम दोपहर 1:00 बजे",
    reopensEvening: "🟡 पट बंद • सायं दर्शन 4:30 बजे",
    openEvening: "🟢 सायं दर्शन खुला है • शयन 9:00 बजे",
    closedNight: "🔴 पट बंद • प्रातः दर्शन 7:00 बजे"
  },
  gu: {
    templeName: "શ્રી શિવ શક્તિ મંદિર",
    templeTagline: "શિવ અને શક્તિનું પવિત્ર ધામ",
    ribbonMantra: "|| ૐ નમઃ શિવાય • ૐ ઐં હ્રીં ક્લીં ચામુંડાયૈ વિચ્ચે ||",
    badgeTodayDarshan: "🪔 આજના શૃંગાર દર્શન",
    darshanHeading: "દૈનિક દિવ્ય દર્શન",
    completedAarti: "સંપન્ન આરતી:",
    nextAarti: "આગામી આરતી:",
    badgePanchangam: "📅 વૈદિક પંચાંગ",
    panchangHeading: "આજનું પવિત્ર પંચાંગ",
    lblTithi: "તિથિ",
    lblNakshatra: "નક્ષત્ર",
    lblAbhijit: "અભિજિત મુહૂર્ત",
    lblRahuKalam: "રાહુ કાળ",
    sunrise: "સૂર્યોદય:",
    sunset: "સૂર્યાસ્ત:",
    samvat: "વિક્રમ સંવત:",
    yoga: "યોગ:",
    badgeAarti: "⏱️ આરતી અને દર્શન સમયપત્રક",
    aartiHeading: "મંદિર દૈનિક કાર્યક્રમ",
    badgePujas: "🏷️ સેવા અને પૂજા બુકિંગ",
    pujasHeading: "સંકલ્પ સાથે પૂજા સેવા",
    subPujas: "પ્રત્યક્ષ અને પરોક્ષ સંકલ્પ",
    badgeFestivals: "🍲 આગામી ઉત્સવ અને અન્નદાન",
    festivalsHeading: "મહોત્સવ અને અન્નદાન સેવા",
    badgeHundi: "💰 ડિજિટલ દાનપેટી (હુંડી)",
    hundiHeading: "મંદિર સેવા સમર્પણ",
    navHome: "મુખ્ય",
    navDarshan: "દર્શન",
    navTimings: "આરતી",
    navPujas: "પૂજા",
    navDonate: "હુંડી",
    openNow: "🟢 મંદિર ખુલ્લું છે • બપોરે 1:00 વાગ્યે વિશ્રામ",
    reopensEvening: "🟡 પટ બંધ • સાંજે 4:30 વાગ્યે દર્શન",
    openEvening: "🟢 સાંજનું દર્શન ચાલુ • રાત્રે 9:00 સુધી",
    closedNight: "🔴 પટ બંધ • સવારે 7:00 વાગ્યે મંગળા આરતી"
  },
  sa: {
    templeName: "श्री शिव शक्ति मन्दिरम्",
    templeTagline: "शिव-शक्त्योः परमं पावनं धाम",
    ribbonMantra: "|| ॐ नमः शिवाय • ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ||",
    badgeTodayDarshan: "🪔 अद्यतनं शृङ्गार दर्शनम्",
    darshanHeading: "नित्य दिव्य दर्शनम्",
    completedAarti: "सम्पन्ना आरती:",
    nextAarti: "आगामिनी आरती:",
    badgePanchangam: "📅 वैदिक पञ्चाङ्गम्",
    panchangHeading: "अद्यतनं शुभ पञ्चाङ्गम्",
    lblTithi: "तिथिः",
    lblNakshatra: "नक्षत्रम्",
    lblAbhijit: "अभिजित् मुहूर्तः",
    lblRahuKalam: "राहुकालः",
    sunrise: "सूर्योदयः:",
    sunset: "सूर्यास्तः:",
    samvat: "विक्रम संवत्:",
    yoga: "योगः:",
    badgeAarti: "⏱️ आरती दर्शन समयसारिणी",
    aartiHeading: "दैनिक मन्दिर सारिणी",
    badgePujas: "🏷️ सङ्कल्प पूजा सेवा",
    pujasHeading: "सङ्कल्पसहिताः पावन सेवाः",
    subPujas: "प्रत्यक्षम् अथवा दूरतः सङ्कल्पः",
    badgeFestivals: "🍲 आगामी उत्सवाः अन्नदानञ्च",
    festivalsHeading: "उत्सव दर्शनम् अन्नदान सेवा",
    badgeHundi: "💰 डिजिटल हुण्डी एवं दानम्",
    hundiHeading: "मन्दिर सेवा दक्षिणा समर्पणम्",
    navHome: "गृहम्",
    navDarshan: "दर्शनम्",
    navTimings: "आरती",
    navPujas: "पूजा",
    navDonate: "हुण्डी",
    openNow: "🟢 उद्घाटितम् • विश्रामः अपराह्णे १:००",
    reopensEvening: "🟡 पिहितम् • सायं दर्शनम् ४:३०",
    openEvening: "🟢 सायं दर्शनम् • शयनम् ९:००",
    closedNight: "🔴 पिहितम् • प्रातः दर्शनम् ७:००"
  }
};

let currentLang = 'en';

// ==========================================================================
// 2. TEMPLE BELL SOUND SYNTHESIZER (Web Audio API)
// Real physical bronze bell harmonics & soothing resonance
// ==========================================================================
class TempleBellSynth {
  constructor() {
    this.ctx = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  ring() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Authentic temple bell harmonic ratios (Bronze bell acoustic structure)
      const partials = [
        { freqRatio: 1.0,  gain: 0.7, decay: 3.2 }, // Fundamental ~587 Hz (D5)
        { freqRatio: 2.01, gain: 0.5, decay: 2.8 }, // Second partial
        { freqRatio: 3.12, gain: 0.35, decay: 2.2 }, // Third partial
        { freqRatio: 4.25, gain: 0.25, decay: 1.6 }, // Chime upper
        { freqRatio: 0.54, gain: 0.4, decay: 3.8 }  // Low strike hum
      ];

      const baseFreq = 587.33; // D5 pitch

      partials.forEach(p => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * p.freqRatio, now);

        gain.gain.setValueAtTime(p.gain, now);
        // Exponential bell strike ring & gradual decay
        gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + p.decay);
      });

      // Visual feedback on emblem
      const emblem = document.querySelector('.temple-emblem');
      if (emblem) {
        emblem.classList.add('ringing');
        setTimeout(() => emblem.classList.remove('ringing'), 800);
      }
    } catch (e) {
      console.warn('Web Audio Bell Synth notice:', e);
    }
  }
}

const templeBell = new TempleBellSynth();

function ringTempleBellSound() {
  templeBell.ring();
  showToast("🔔 Sacred temple bell resonated! Om Namah Shivaya.");
}

// ==========================================================================
// 3. REAL-TIME TEMPLE STATUS & SCHEDULE CALCULATION
// Morning: 7:00 AM - 1:00 PM | Evening: 4:30 PM - 9:00 PM
// ==========================================================================
function updateTempleStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentDecTime = hours + minutes / 60;

  const badge = document.getElementById('templeStatusBadge');
  const textEl = document.getElementById('templeStatusText');
  const lastAartiEl = document.getElementById('lastCompletedAarti');
  const nextAartiEl = document.getElementById('nextUpcomingAarti');

  const t = translations[currentLang];

  let isOpen = false;
  let statusStr = "";

  if (currentDecTime >= 7.0 && currentDecTime < 13.0) {
    isOpen = true;
    statusStr = t.openNow;
  } else if (currentDecTime >= 13.0 && currentDecTime < 16.5) {
    isOpen = false;
    statusStr = t.reopensEvening;
  } else if (currentDecTime >= 16.5 && currentDecTime < 21.0) {
    isOpen = true;
    statusStr = t.openEvening;
  } else {
    isOpen = false;
    statusStr = t.closedNight;
  }

  if (badge && textEl) {
    textEl.textContent = statusStr;
    if (isOpen) {
      badge.classList.remove('closed');
    } else {
      badge.classList.add('closed');
    }
  }

  // Update aarti highlights based on time
  if (lastAartiEl && nextAartiEl) {
    if (currentDecTime < 7.0) {
      lastAartiEl.textContent = "Shej Aarti (Last night)";
      nextAartiEl.textContent = "Mangala Aarti (07:00 AM)";
    } else if (currentDecTime < 12.0) {
      lastAartiEl.textContent = "Mangala & Kakad Aarti (07:00 AM)";
      nextAartiEl.textContent = "Madhyanna Aarti (12:00 PM)";
    } else if (currentDecTime < 18.5) {
      lastAartiEl.textContent = "Madhyanna Aarti (12:00 PM)";
      nextAartiEl.textContent = "Sandhya Deeparadhana (06:30 PM)";
    } else if (currentDecTime < 20.75) {
      lastAartiEl.textContent = "Sandhya Aarti (06:30 PM)";
      nextAartiEl.textContent = "Shej Aarti & Shayan (08:45 PM)";
    } else {
      lastAartiEl.textContent = "Shej Aarti (08:45 PM)";
      nextAartiEl.textContent = "Tomorrow Mangala Aarti (07:00 AM)";
    }
  }
}

// ==========================================================================
// 4. DEITY CAROUSEL LOGIC WITH TOUCH SWIPING
// ==========================================================================
let currentSlideIndex = 0;
const totalSlides = 3;
let carouselAutoPlayTimer = null;

function setSlide(index) {
  currentSlideIndex = (index + totalSlides) % totalSlides;
  const track = document.getElementById('darshanTrack');
  const dots = document.querySelectorAll('#carouselDots .dot');

  if (track) {
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });
}

function nextSlide() {
  setSlide(currentSlideIndex + 1);
}

function prevSlide() {
  setSlide(currentSlideIndex - 1);
}

function initCarousel() {
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const dots = document.querySelectorAll('#carouselDots .dot');
  const carouselEl = document.getElementById('darshanCard');

  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      setSlide(idx);
      resetAutoplay();
    });
  });

  // Touch Swipe Handler
  let touchStartX = 0;
  let touchEndX = 0;

  if (carouselEl) {
    carouselEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const threshold = 40;
    if (touchEndX < touchStartX - threshold) {
      nextSlide();
      resetAutoplay();
    } else if (touchEndX > touchStartX + threshold) {
      prevSlide();
      resetAutoplay();
    }
  }

  startAutoplay();
}

function startAutoplay() {
  clearInterval(carouselAutoPlayTimer);
  carouselAutoPlayTimer = setInterval(nextSlide, 7000);
}

function resetAutoplay() {
  clearInterval(carouselAutoPlayTimer);
  startAutoplay();
}

// ==========================================================================
// 5. FULLSCREEN DARSHAN ZOOM MODAL
// ==========================================================================
const deityData = {
  shiva: {
    title: "Shri Someshwar Jyotirlinga Alankaram",
    sub: "Adorned with fresh Bilva Patra, Marigold crowns, sacred Bhasma Tripundra, and pure Gomukhi Ganga water during morning Rudrabhishekam.",
    src: "assets/images/shiva_darshan.jpg"
  },
  durga: {
    title: "Mata Durga Shakti Rajarajeshwari",
    sub: "Adorned in royal crimson zari silk, fresh jasmine veni, fragrant kumkum archana, and golden trishula embellishments.",
    src: "assets/images/durga_darshan.jpg"
  },
  ganesha: {
    title: "Shri Siddhi Vinayaka Ganapati",
    sub: "Sanctified with Durva grass clusters, fragrant red hibiscus, sandalwood paste, and 21 fresh steamed modak prasadams.",
    src: "assets/images/ganesha_darshan.jpg"
  }
};

function openDarshanModal(deityKey) {
  const modal = document.getElementById('darshanZoomModal');
  const img = document.getElementById('darshanZoomImage');
  const title = document.getElementById('darshanZoomTitle');
  const desc = document.getElementById('darshanZoomSubtitle');

  const data = deityData[deityKey] || deityData.shiva;
  if (img) img.src = data.src;
  if (title) title.textContent = data.title;
  if (desc) desc.textContent = data.sub;

  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeDarshanModal() {
  const modal = document.getElementById('darshanZoomModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 6. MULTI-ACTION FLOATING ACTION BUTTON (FAB)
// Blueprint: Fixed bottom: 24px, right: 20px, z-index: 9999
// Default: Circular 60x60px Deep Vermillion (#9D0208) with glowing gold ring
// Expanded: 4 quick-action buttons (Directions, Call, Quick Hundi, WhatsApp)
// ==========================================================================
function initFAB() {
  const fabContainer = document.getElementById('fabContainer');
  const toggleBtn = document.getElementById('fabToggleBtn');
  const speedDial = document.getElementById('fabSpeedDial');

  if (!toggleBtn || !fabContainer) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = fabContainer.classList.toggle('expanded');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
    if (speedDial) {
      speedDial.setAttribute('aria-hidden', !isExpanded);
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (fabContainer.classList.contains('expanded') && !fabContainer.contains(e.target)) {
      fabContainer.classList.remove('expanded');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (speedDial) speedDial.setAttribute('aria-hidden', 'true');
    }
  });
}

// ==========================================================================
// 7. SEVAS & PUJA BOOKING WORKFLOW
// With Devotee Name, Gotra, Nakshatra, Occasion, and Dakshina
// ==========================================================================
let currentSelectedPuja = { name: "Nithya Archana", amount: 21 };

function openPujaModal(pujaName, amount) {
  currentSelectedPuja = { name: pujaName, amount: amount };
  const modal = document.getElementById('pujaModalBackdrop');
  const title = document.getElementById('selectedSevaSubtitle');
  const submitBtn = document.getElementById('pujaSubmitCta');
  const dateInput = document.getElementById('pujaDate');

  if (title) title.textContent = `${pujaName} ($${amount})`;
  if (submitBtn) submitBtn.textContent = `Confirm & Pay Dakshina ($${amount})`;

  // Set default date to tomorrow
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closePujaModal() {
  const modal = document.getElementById('pujaModalBackdrop');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function handlePujaBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('devoteeName')?.value || "Devotee";
  const gotra = document.getElementById('devoteeGotra')?.value || "Shiva Gotra";
  const nakshatra = document.getElementById('devoteeNakshatra')?.value || "Not Specified";
  const occasion = document.getElementById('sankalpamOccasion')?.value || "Family Health & Prosperity";
  const date = document.getElementById('pujaDate')?.value || "Tomorrow";
  const slot = document.getElementById('pujaTimeSlot')?.value || "Morning Session";
  const attendance = document.querySelector('input[name="attendanceMode"]:checked')?.value || "in-person";

  const bookingRef = "SSM-PUJA-" + Math.floor(100000 + Math.random() * 900000);

  // Close booking modal
  closePujaModal();

  // Ring the bell
  templeBell.ring();

  // Populate receipt
  const receiptContainer = document.getElementById('receiptContent');
  if (receiptContainer) {
    receiptContainer.innerHTML = `
      <div class="receipt-row">
        <span class="receipt-label">Booking Reference:</span>
        <span class="receipt-value" style="color:var(--color-saffron); font-family:monospace;">${bookingRef}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Seva Name:</span>
        <span class="receipt-value">${currentSelectedPuja.name}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Yajamana (Devotee):</span>
        <span class="receipt-value">${name}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Gotra & Nakshatra:</span>
        <span class="receipt-value">${gotra} • ${nakshatra}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Sankalpam Occasion:</span>
        <span class="receipt-value">${occasion}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Scheduled Date & Time:</span>
        <span class="receipt-value">${date} (${slot.split(' ')[0]})</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Mode:</span>
        <span class="receipt-value">${attendance === 'in-person' ? '🏛️ In-Person at Mandir' : '✉️ Remote Sankalpam (Prasadam Mailed)'}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Dakshina Offering:</span>
        <span class="receipt-value price">$${currentSelectedPuja.amount} (Paid)</span>
      </div>
    `;
  }

  // Open success modal
  openSuccessModal();
}

function filterSevas(category) {
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-cat') === category);
  });

  const cards = document.querySelectorAll('.pujas-grid .seva-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==========================================================================
// 8. DIGITAL HUNDI & TEMPLE GIVING
// Preset amounts, cause selection, instant receipt
// ==========================================================================
let currentHundiAmount = 51;

function selectHundiAmount(amt) {
  const chips = document.querySelectorAll('.amount-chips-group .amount-chip');
  const customRow = document.getElementById('customAmountRow');
  const customInput = document.getElementById('customAmountInput');
  const label = document.getElementById('hundiBtnLabel');

  chips.forEach(chip => {
    const val = chip.getAttribute('data-amount');
    chip.classList.toggle('active', val == amt);
  });

  if (amt === 'custom') {
    if (customRow) customRow.classList.remove('hidden');
    if (customInput) {
      customInput.focus();
      currentHundiAmount = parseFloat(customInput.value) || 51;
    }
  } else {
    if (customRow) customRow.classList.add('hidden');
    currentHundiAmount = amt;
  }

  if (label) {
    label.textContent = `Offer Dakshina ($${currentHundiAmount})`;
  }
}

function processHundiDonation() {
  const causeSelect = document.getElementById('hundiCauseSelect');
  const customInput = document.getElementById('customAmountInput');
  const customRow = document.getElementById('customAmountRow');

  if (customRow && !customRow.classList.contains('hidden') && customInput) {
    const entered = parseFloat(customInput.value);
    if (!entered || entered < 1) {
      showToast("Please enter a valid donation amount.");
      customInput.focus();
      return;
    }
    currentHundiAmount = entered;
  }

  const cause = causeSelect ? causeSelect.value : "Temple Maintenance";
  const ref = "SSM-HUNDI-" + Math.floor(100000 + Math.random() * 900000);

  templeBell.ring();

  const receiptContainer = document.getElementById('receiptContent');
  if (receiptContainer) {
    receiptContainer.innerHTML = `
      <div class="receipt-row">
        <span class="receipt-label">Donation Reference:</span>
        <span class="receipt-value" style="color:var(--color-saffron); font-family:monospace;">${ref}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Donation Purpose:</span>
        <span class="receipt-value">${cause}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Amount Offered:</span>
        <span class="receipt-value price">$${currentHundiAmount}</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Payment Method:</span>
        <span class="receipt-value">Instant Mobile Pay (Apple/Google/Card)</span>
      </div>
      <div class="receipt-row">
        <span class="receipt-label">Tax Exemption:</span>
        <span class="receipt-value">501(c)(3) Eligible • EIN: 94-3829104</span>
      </div>
    `;
  }

  openSuccessModal();
}

function openDonationModalWithCause(causeName, amount) {
  // Pre-select cause & amount in the Hundi section and scroll down smoothly
  const causeSelect = document.getElementById('hundiCauseSelect');
  if (causeSelect) {
    for (let i = 0; i < causeSelect.options.length; i++) {
      if (causeSelect.options[i].text.includes(causeName) || causeSelect.options[i].value.includes(causeName)) {
        causeSelect.selectedIndex = i;
        break;
      }
    }
  }
  selectHundiAmount(amount);

  // Close FAB if opened
  const fabContainer = document.getElementById('fabContainer');
  if (fabContainer) fabContainer.classList.remove('expanded');

  scrollToSection('donateSection');
  showToast(`🙏 Selected: ${causeName} ($${amount})`);
}

// ==========================================================================
// 9. SUCCESS & RECEIPT MODAL
// ==========================================================================
function openSuccessModal() {
  const modal = document.getElementById('successModalBackdrop');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('successModalBackdrop');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  showToast("🙏 Har Har Mahadev! Blessings upon you and your family.");
}

// ==========================================================================
// 10. ACCESSIBILITY: SENIOR FONT CONTROLS
// ==========================================================================
function initAccessibility() {
  const normalBtn = document.getElementById('fontNormalBtn');
  const largeBtn = document.getElementById('fontLargeBtn');

  if (!normalBtn || !largeBtn) return;

  const savedMode = localStorage.getItem('temple_font_mode') || 'normal';
  if (savedMode === 'large') {
    document.body.classList.add('senior-font-mode');
    largeBtn.classList.add('active');
    normalBtn.classList.remove('active');
  }

  normalBtn.addEventListener('click', () => {
    document.body.classList.remove('senior-font-mode');
    normalBtn.classList.add('active');
    largeBtn.classList.remove('active');
    localStorage.setItem('temple_font_mode', 'normal');
    showToast("Standard text size restored.");
  });

  largeBtn.addEventListener('click', () => {
    document.body.classList.add('senior-font-mode');
    largeBtn.classList.add('active');
    normalBtn.classList.remove('active');
    localStorage.setItem('temple_font_mode', 'large');
    showToast("Senior-friendly large text enabled.");
  });
}

// ==========================================================================
// 11. NAVIGATION & SCROLL HELPER
// ==========================================================================
function scrollToSection(elementId, clickedNavBtn = null) {
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (clickedNavBtn) {
    document.querySelectorAll('.mobile-bottom-nav .nav-item').forEach(btn => {
      btn.classList.remove('active');
    });
    clickedNavBtn.classList.add('active');
  }
}

// Update bottom nav active state on scroll
function initScrollObserver() {
  const sections = [
    { id: 'topHeader', navIndex: 0 },
    { id: 'darshanSection', navIndex: 1 },
    { id: 'timetableSection', navIndex: 2 },
    { id: 'pujasSection', navIndex: 3 },
    { id: 'donateSection', navIndex: 4 }
  ];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 180;
    const navItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionEl = document.getElementById(sections[i].id);
      if (sectionEl && scrollPos >= sectionEl.offsetTop) {
        navItems.forEach((btn, idx) => {
          btn.classList.toggle('active', idx === sections[i].navIndex);
        });
        break;
      }
    }
  }, { passive: true });
}

// ==========================================================================
// 12. MULTILINGUAL SWITCHER
// ==========================================================================
function initLanguageSelector() {
  const selector = document.getElementById('langSelect');
  if (!selector) return;

  selector.addEventListener('change', (e) => {
    currentLang = e.target.value;
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const t = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  const ribbonEl = document.getElementById('ribbonMantra');
  if (ribbonEl && t.ribbonMantra) {
    ribbonEl.textContent = t.ribbonMantra;
  }

  updateTempleStatus();
  showToast(`Language changed to ${lang.toUpperCase()}`);
}

// ==========================================================================
// 13. TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3600);
}

function notifyAartiReminder() {
  templeBell.ring();
  showToast("🔔 Aarti reminder set for upcoming Sandhya Aarti at 6:30 PM! Mandir welcomes you.");
}

// ==========================================================================
// 14. APPLICATION INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Temple Status
  updateTempleStatus();
  setInterval(updateTempleStatus, 60000); // Check every minute

  // 2. Carousel & Touch Swipes
  initCarousel();

  // 3. Floating Action Button Speed Dial
  initFAB();

  // 4. Accessibility
  initAccessibility();

  // 5. Language selector
  initLanguageSelector();

  // 6. Navigation scroll observer
  initScrollObserver();

  // 7. Custom amount input listener
  const customInput = document.getElementById('customAmountInput');
  if (customInput) {
    customInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value) || 0;
      currentHundiAmount = val;
      const label = document.getElementById('hundiBtnLabel');
      if (label) label.textContent = `Offer Dakshina ($${val})`;
    });
  }

  // 8. Sacred Temple Bell buttons
  const bellBtn = document.getElementById('ringBellBtn');
  const emblem = document.getElementById('bellTrigger');
  if (bellBtn) bellBtn.addEventListener('click', ringTempleBellSound);
  if (emblem) emblem.addEventListener('click', ringTempleBellSound);

  console.log("🕉️ Shri Shiv Shakti Mandir Web Portal Initialized Successfully.");
});
