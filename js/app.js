/**
 * HAVENZA PROPERTIES — Interactive Application Engine
 * Handles live filtering, property modals, favorites, viewing scheduler,
 * mortgage calculator, animations, and toast notifications.
 */

(function () {
  'use strict';

  // Application State
  const state = {
    currency: 'PKR', // 'PKR' or 'USD'
    favorites: new Set(),
    activeFilter: {
      purpose: 'all',     // 'all', 'buy', 'rent'
      category: 'all',    // 'all', 'Villa', 'Penthouse', 'Apartment', 'House', 'Commercial', 'Plot'
      city: 'all',        // 'all', 'Lahore', 'Islamabad', 'Karachi', 'Rawalpindi', 'Faisalabad'
      priceRange: 'all',  // 'all', 'under-1cr', '1cr-10cr', '10cr-plus', 'under-3lakh', '3lakh-plus'
      bedrooms: 'all',    // 'all', '1', '2', '3', '4', '5'
      keyword: '',
      sort: 'default',    // 'default', 'price-asc', 'price-desc', 'beds-desc', 'newest'
      onlyFavorites: false
    },
    currentTestimonial: 0,
    activeModalProperty: null
  };

  // Helper: Format Numbers with Commas
  function formatNumber(num) {
    return Number(num).toLocaleString('en-US');
  }

  // Helper: Load and Save Favorites to localStorage
  function loadFavorites() {
    try {
      const saved = localStorage.getItem('havenza_favorites');
      if (saved) {
        state.favorites = new Set(JSON.parse(saved));
      } else {
        // Default favorites to showcase the feature
        state.favorites = new Set(['hp-001', 'hp-002']);
      }
    } catch (e) {
      state.favorites = new Set(['hp-001']);
    }
    updateFavoritesBadge();
  }

  function saveFavorites() {
    try {
      localStorage.setItem('havenza_favorites', JSON.stringify(Array.from(state.favorites)));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    updateFavoritesBadge();
  }

  function updateFavoritesBadge() {
    const badge = document.getElementById('favCounter');
    if (badge) {
      badge.textContent = state.favorites.size;
    }
  }

  // Toast Notification System
  function showToast(message, icon = 'fa-check') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto-remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 400);
    }, 3600);
  }

  // Currency Switcher
  function setCurrency(curr) {
    state.currency = curr;
    document.querySelectorAll('.currency-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.currency === curr);
    });
    renderProperties();
    populatePropertySelects();
    if (state.activeModalProperty) {
      renderModalDetails(state.activeModalProperty);
    }
    showToast(`Currency switched to ${curr}`, 'fa-coins');
  }

  // Render Single Property Card
  function createCardHTML(property) {
    const isFav = state.favorites.has(property.id);
    const priceText = state.currency === 'USD' ? property.priceDisplayUSD : property.priceDisplayPKR;
    const purposeText = property.purpose === 'buy' ? 'For Sale' : 'For Rent';

    const bedroomsHTML = property.bedrooms > 0 
      ? `<div class="spec-item" title="${property.bedrooms} Bedrooms"><i class="fa-solid fa-bed"></i> <span>${property.bedrooms} Beds</span></div>` 
      : `<div class="spec-item" title="Commercial / Plot Space"><i class="fa-solid fa-layer-group"></i> <span>Prime</span></div>`;

    const bathroomsHTML = property.bathrooms > 0 
      ? `<div class="spec-item" title="${property.bathrooms} Bathrooms"><i class="fa-solid fa-bath"></i> <span>${property.bathrooms} Baths</span></div>` 
      : `<div class="spec-item" title="Possession Ready"><i class="fa-solid fa-stamp"></i> <span>Clear Title</span></div>`;

    return `
      <article class="property-card" data-id="${property.id}">
        <div class="card-media">
          <img src="${property.images[0]}" alt="${property.title}" class="card-img" loading="lazy">
          <div class="card-gradient-overlay"></div>
          
          <div class="card-badges-top">
            ${property.featured ? '<span class="badge badge-gold"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
            <span class="badge badge-purpose">${purposeText}</span>
          </div>

          <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" 
                  onclick="HavenzaApp.toggleFav('${property.id}', event)" 
                  aria-label="Save to favorites"
                  title="${isFav ? 'Remove from favorites' : 'Save to favorites'}">
            <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
          </button>

          <div class="card-location-tag">
            <i class="fa-solid fa-location-dot"></i> ${property.location}
          </div>
        </div>

        <div class="card-body">
          <div class="card-category">${property.category} • ${property.city}</div>
          <h3 class="card-title">
            <a href="javascript:void(0)" onclick="HavenzaApp.openDetails('${property.id}')">${property.title}</a>
          </h3>

          <div class="card-price-row">
            <div class="card-price">${priceText}</div>
            <div class="card-price-sub">${property.purpose === 'buy' ? 'Direct Title Transfer' : 'Monthly Lease'}</div>
          </div>

          <div class="card-specs-bar">
            ${bedroomsHTML}
            ${bathroomsHTML}
            <div class="spec-item" title="Covered Area"><i class="fa-solid fa-maximize"></i> <span>${property.areaDisplay.split('(')[0].trim()}</span></div>
          </div>

          <div class="card-actions">
            <button class="btn btn-dark btn-sm" onclick="HavenzaApp.openDetails('${property.id}')">
              <i class="fa-regular fa-eye"></i> View Details
            </button>
            <button class="btn btn-primary btn-sm" onclick="HavenzaApp.bookViewing('${property.id}')" title="Schedule private tour">
              <i class="fa-regular fa-calendar-check"></i> Tour
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // Filter Properties Engine
  function getFilteredProperties() {
    return HAVENZA_DATA.properties.filter(item => {
      // Favorites only filter
      if (state.activeFilter.onlyFavorites && !state.favorites.has(item.id)) {
        return false;
      }

      // Purpose (Buy / Rent)
      if (state.activeFilter.purpose !== 'all' && item.purpose !== state.activeFilter.purpose) {
        return false;
      }

      // Category (Villa, Penthouse, Apartment, House, Commercial, Plot)
      if (state.activeFilter.category !== 'all' && item.category !== state.activeFilter.category) {
        return false;
      }

      // City
      if (state.activeFilter.city !== 'all' && item.city.toLowerCase() !== state.activeFilter.city.toLowerCase()) {
        return false;
      }

      // Bedrooms
      if (state.activeFilter.bedrooms !== 'all') {
        const reqBeds = parseInt(state.activeFilter.bedrooms, 10);
        if (reqBeds === 5 && item.bedrooms < 5) return false;
        if (reqBeds < 5 && item.bedrooms !== reqBeds) return false;
      }

      // Price Range Filter
      if (state.activeFilter.priceRange !== 'all') {
        const p = item.pricePKR;
        switch (state.activeFilter.priceRange) {
          case 'under-1cr':
            if (p >= 10000000) return false;
            break;
          case '1cr-10cr':
            if (p < 10000000 || p > 100000000) return false;
            break;
          case '10cr-plus':
            if (p <= 100000000) return false;
            break;
          case 'under-3lakh':
            if (p > 300000) return false;
            break;
          case '3lakh-plus':
            if (p < 300000) return false;
            break;
        }
      }

      // Keyword search (title, location, address, description)
      if (state.activeFilter.keyword.trim()) {
        const kw = state.activeFilter.keyword.toLowerCase().trim();
        const haystack = `${item.title} ${item.location} ${item.address} ${item.category} ${item.city} ${item.description}`.toLowerCase();
        if (!haystack.includes(kw)) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      // Sorting
      if (state.activeFilter.sort === 'price-asc') {
        return a.pricePKR - b.pricePKR;
      }
      if (state.activeFilter.sort === 'price-desc') {
        return b.pricePKR - a.pricePKR;
      }
      if (state.activeFilter.sort === 'beds-desc') {
        return b.bedrooms - a.bedrooms;
      }
      if (state.activeFilter.sort === 'newest') {
        return b.yearBuilt - a.yearBuilt;
      }
      return 0; // Default order
    });
  }

  // Render Properties to DOM
  function renderProperties() {
    const grid = document.getElementById('propertiesGrid');
    const countEl = document.getElementById('propertiesCount');
    if (!grid) return;

    const filtered = getFilteredProperties();

    if (countEl) {
      countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${HAVENZA_DATA.properties.length}</strong> premier properties`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-building-circle-xmark"></i>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 8px;">No Listings Match Your Selection</h3>
          <p style="color: var(--color-text-secondary); max-width: 480px; margin: 0 auto 20px;">
            We couldn't find any properties matching all your criteria. Try adjusting your filters or resetting to view our full luxury portfolio.
          </p>
          <button class="btn btn-primary" onclick="HavenzaApp.resetFilters()">
            <i class="fa-solid fa-rotate-left"></i> Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(createCardHTML).join('');
  }

  // Toggle Favorite Action
  function toggleFav(id, event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const prop = HAVENZA_DATA.properties.find(p => p.id === id);
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast(`Removed "${prop ? prop.title : 'Property'}" from saved listings`, 'fa-heart-crack');
    } else {
      state.favorites.add(id);
      showToast(`Saved "${prop ? prop.title : 'Property'}" to your collection`, 'fa-heart');
    }
    saveFavorites();
    renderProperties();
  }

  // Filter Event Handlers
  function setPillFilter(type, value, element) {
    if (type === 'category') {
      state.activeFilter.category = value;
      state.activeFilter.onlyFavorites = false;
    } else if (type === 'purpose') {
      state.activeFilter.purpose = value;
      state.activeFilter.onlyFavorites = false;
    } else if (type === 'favorites') {
      state.activeFilter.onlyFavorites = true;
      const propSec = document.getElementById('properties');
      if (propSec) propSec.scrollIntoView({ behavior: 'smooth' });
    }

    // Update active pill UI
    document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
    if (element) {
      element.classList.add('active');
    }

    renderProperties();
  }

  function resetFilters() {
    state.activeFilter = {
      purpose: 'all',
      category: 'all',
      city: 'all',
      priceRange: 'all',
      bedrooms: 'all',
      keyword: '',
      sort: 'default',
      onlyFavorites: false
    };

    // Reset inputs
    const kwInput = document.getElementById('filterKeyword');
    if (kwInput) kwInput.value = '';
    const citySel = document.getElementById('filterCity');
    if (citySel) citySel.value = 'all';
    const bedSel = document.getElementById('filterBeds');
    if (bedSel) bedSel.value = 'all';
    const sortSel = document.getElementById('filterSort');
    if (sortSel) sortSel.value = 'default';

    // Reset active pill
    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.dataset.val === 'all');
    });

    renderProperties();
    showToast('Filters reset to all luxury properties', 'fa-rotate-left');
  }

  // Hero Search Console Submit
  function submitHeroSearch() {
    const activeTab = document.querySelector('.search-tab.active');
    const purpose = activeTab ? activeTab.dataset.purpose : 'all';
    const locationInput = document.getElementById('heroLocation');
    const typeSelect = document.getElementById('heroType');
    const budgetSelect = document.getElementById('heroBudget');
    const bedsSelect = document.getElementById('heroBedsQuick');

    state.activeFilter.purpose = purpose || 'all';
    if (locationInput && locationInput.value.trim()) {
      state.activeFilter.keyword = locationInput.value.trim();
      const filterKw = document.getElementById('filterKeyword');
      if (filterKw) filterKw.value = locationInput.value.trim();
    }
    if (typeSelect && typeSelect.value !== 'all') {
      state.activeFilter.category = typeSelect.value;
      // Sync pill active state if category matches
      document.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.val === typeSelect.value);
      });
    }
    if (budgetSelect && budgetSelect.value !== 'all') {
      state.activeFilter.priceRange = budgetSelect.value;
    }
    if (bedsSelect && bedsSelect.value !== 'all') {
      state.activeFilter.bedrooms = bedsSelect.value;
      const filterBeds = document.getElementById('filterBeds');
      if (filterBeds) filterBeds.value = bedsSelect.value;
    }

    renderProperties();

    // Smooth scroll down to properties
    const target = document.getElementById('properties');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    showToast('Filtered results based on your search criteria', 'fa-magnifying-glass');
  }

  // Property Details Modal
  function openDetails(id) {
    const property = HAVENZA_DATA.properties.find(p => p.id === id);
    if (!property) return;

    state.activeModalProperty = property;
    renderModalDetails(property);

    const modal = document.getElementById('propertyModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function renderModalDetails(property) {
    const heroPhoto = document.getElementById('modalHeroPhoto');
    const thumbStrip = document.getElementById('modalThumbStrip');
    const title = document.getElementById('modalTitle');
    const location = document.getElementById('modalLocation');
    const pricePKR = document.getElementById('modalPricePKR');
    const priceUSD = document.getElementById('modalPriceUSD');
    const beds = document.getElementById('modalBeds');
    const baths = document.getElementById('modalBaths');
    const area = document.getElementById('modalArea');
    const year = document.getElementById('modalYear');
    const category = document.getElementById('modalCategory');
    const garages = document.getElementById('modalGarages');
    const desc = document.getElementById('modalDesc');
    const highlights = document.getElementById('modalHighlights');
    const amenities = document.getElementById('modalAmenities');
    const agentPhoto = document.getElementById('modalAgentPhoto');
    const agentName = document.getElementById('modalAgentName');
    const agentTitle = document.getElementById('modalAgentTitle');
    const agentPhone = document.getElementById('modalAgentPhone');
    const agentEmail = document.getElementById('modalAgentEmail');
    const tourBtn = document.getElementById('modalTourBtn');

    if (heroPhoto) heroPhoto.src = property.images[0];
    if (title) title.textContent = property.title;
    if (location) location.innerHTML = `<i class="fa-solid fa-location-dot" style="color: var(--color-gold);"></i> ${property.address}`;
    if (pricePKR) pricePKR.textContent = property.priceDisplayPKR;
    if (priceUSD) priceUSD.textContent = property.priceDisplayUSD;
    if (beds) beds.textContent = property.bedrooms || 'Commercial';
    if (baths) baths.textContent = property.bathrooms || 'Full Baths';
    if (area) area.textContent = property.areaDisplay;
    if (year) year.textContent = property.yearBuilt;
    if (category) category.textContent = property.category;
    if (garages) garages.textContent = property.garages ? `${property.garages} Cars` : 'Street';
    if (desc) desc.textContent = property.description;

    // Highlights
    if (highlights) {
      highlights.innerHTML = property.highlights.map(h => `
        <div style="display:flex;align-items:flex-start;gap:10px;font-size:0.92rem;color:var(--color-text);">
          <i class="fa-solid fa-circle-check" style="color:var(--color-gold);margin-top:4px;"></i>
          <span>${h}</span>
        </div>
      `).join('');
    }

    // Amenities
    if (amenities) {
      amenities.innerHTML = property.amenities.map(a => `
        <div class="amenity-chip">
          <i class="fa-solid fa-check"></i> ${a}
        </div>
      `).join('');
    }

    // Advisory Contact
    if (agentName) agentName.textContent = property.agent?.name || 'Tayba Sharif';
    if (agentTitle) agentTitle.textContent = property.agent?.title || 'Founder & Principal Advisory';
    if (agentEmail) {
      agentEmail.href = `mailto:${property.agent?.email || 'taybasharif96@gmail.com'}?subject=Inquiry%20Regarding%20${encodeURIComponent(property.title)}`;
      agentEmail.innerHTML = `<i class="fa-solid fa-envelope" style="color:var(--color-gold);"></i> ${property.agent?.email || 'taybasharif96@gmail.com'}`;
    }

    // Tour CTA
    if (tourBtn) {
      tourBtn.onclick = () => {
        closeDetails();
        bookViewing(property.id);
      };
    }

    // Thumbnails
    if (thumbStrip) {
      thumbStrip.innerHTML = property.images.map((img, idx) => `
        <img src="${img}" alt="Thumbnail ${idx + 1}" 
             class="modal-thumb ${idx === 0 ? 'active' : ''}" 
             onclick="HavenzaApp.switchModalImage('${img}', this)">
      `).join('');
    }
  }

  function switchModalImage(imgUrl, thumbEl) {
    const hero = document.getElementById('modalHeroPhoto');
    if (hero) hero.src = imgUrl;
    document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
  }

  function closeDetails() {
    const modal = document.getElementById('propertyModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
    state.activeModalProperty = null;
  }

  // Viewing Appointment Flow
  function bookViewing(propertyId) {
    const section = document.getElementById('viewing');
    const select = document.getElementById('viewingPropertySelect');

    if (select && propertyId) {
      select.value = propertyId;
    }

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Focus on the name input
      setTimeout(() => {
        const nameInput = document.getElementById('viewingFullName');
        if (nameInput) nameInput.focus();
      }, 600);
    }

    const prop = HAVENZA_DATA.properties.find(p => p.id === propertyId);
    if (prop) {
      showToast(`Selected "${prop.title}" for your private tour reservation`, 'fa-calendar-check');
    }
  }

  // Populate Viewing Property Select Dropdown
  function populatePropertySelects() {
    const viewingSelect = document.getElementById('viewingPropertySelect');
    if (!viewingSelect) return;

    viewingSelect.innerHTML = `
      <option value="">Select a Property for Private Tour...</option>
      ${HAVENZA_DATA.properties.map(p => `
        <option value="${p.id}">${p.title} (${p.city} • ${state.currency === 'USD' ? p.priceDisplayUSD : p.priceDisplayPKR})</option>
      `).join('')}
    `;
  }

  // Mortgage Calculator Logic
  function initMortgageCalculator() {
    const priceSlider = document.getElementById('calcPrice');
    const downSlider = document.getElementById('calcDown');
    const tenureSlider = document.getElementById('calcTenure');
    const rateSlider = document.getElementById('calcRate');

    function calculate() {
      if (!priceSlider || !downSlider || !tenureSlider || !rateSlider) return;

      const price = parseFloat(priceSlider.value); // in PKR
      const downPercent = parseFloat(downSlider.value);
      const years = parseFloat(tenureSlider.value);
      const annualRate = parseFloat(rateSlider.value);

      // Update Slider Value Badges
      const priceBadge = document.getElementById('calcPriceVal');
      const downBadge = document.getElementById('calcDownVal');
      const tenureBadge = document.getElementById('calcTenureVal');
      const rateBadge = document.getElementById('calcRateVal');

      if (priceBadge) {
        priceBadge.textContent = `PKR ${(price / 10000000).toFixed(2)} Crore (${(price / 100000).toFixed(0)} Lakh)`;
      }
      if (downBadge) downBadge.textContent = `${downPercent}% (PKR ${(price * (downPercent / 100) / 10000000).toFixed(2)} Cr)`;
      if (tenureBadge) tenureBadge.textContent = `${years} Years (${years * 12} Months)`;
      if (rateBadge) rateBadge.textContent = `${annualRate.toFixed(1)}% p.a.`;

      // Financial Calculation
      const principal = price * (1 - downPercent / 100);
      const monthlyRate = annualRate / 100 / 12;
      const totalMonths = years * 12;

      let monthlyPayment = 0;
      if (monthlyRate > 0) {
        monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      } else {
        monthlyPayment = principal / totalMonths;
      }

      const totalPayment = monthlyPayment * totalMonths;
      const totalInterest = totalPayment - principal;

      // Update Results
      const monthlyEl = document.getElementById('calcMonthlyResult');
      const loanAmountEl = document.getElementById('calcLoanAmount');
      const downAmountEl = document.getElementById('calcDownAmount');
      const interestEl = document.getElementById('calcTotalInterest');

      if (monthlyEl) monthlyEl.textContent = `PKR ${formatNumber(Math.round(monthlyPayment))}`;
      if (loanAmountEl) loanAmountEl.textContent = `PKR ${(principal / 10000000).toFixed(2)} Crore`;
      if (downAmountEl) downAmountEl.textContent = `PKR ${((price * downPercent / 100) / 10000000).toFixed(2)} Crore`;
      if (interestEl) interestEl.textContent = `PKR ${(totalInterest / 10000000).toFixed(2)} Crore`;
    }

    [priceSlider, downSlider, tenureSlider, rateSlider].forEach(slider => {
      if (slider) {
        slider.addEventListener('input', calculate);
      }
    });

    calculate();
  }

  // FAQ Accordion
  function renderFaqs() {
    const container = document.getElementById('faqContainer');
    if (!container) return;

    container.innerHTML = HAVENZA_DATA.faqs.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}" id="faq-${faq.id}">
        <button class="faq-trigger" onclick="HavenzaApp.toggleFaq('${faq.id}')" aria-expanded="${idx === 0}">
          <span>${faq.question}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="faq-content" style="${idx === 0 ? 'max-height: 400px;' : ''}">
          <div class="faq-body">
            ${faq.answer}
          </div>
        </div>
      </div>
    `).join('');
  }

  function toggleFaq(id) {
    const item = document.getElementById(`faq-${id}`);
    if (!item) return;

    const isActive = item.classList.contains('active');
    const content = item.querySelector('.faq-content');

    // Close all other faqs
    document.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('active');
      const otherContent = other.querySelector('.faq-content');
      if (otherContent) otherContent.style.maxHeight = null;
    });

    if (!isActive && content) {
      item.classList.add('active');
      content.style.maxHeight = `${content.scrollHeight + 30}px`;
    }
  }

  // Render Testimonials Carousel
  function renderTestimonial() {
    const container = document.getElementById('testimonialWrapper');
    if (!container) return;
    if (!HAVENZA_DATA.testimonials || HAVENZA_DATA.testimonials.length === 0) {
      const section = container.closest('section');
      if (section) section.style.display = 'none';
      return;
    }

    const t = HAVENZA_DATA.testimonials[state.currentTestimonial];
    if (!t) return;
    container.innerHTML = `
      <div class="testimonial-card">
        <div class="test-stars">
          ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
        </div>
        <blockquote class="test-quote">
          "${t.quote}"
        </blockquote>
        <div class="test-author">
          <img src="${t.photo}" alt="${t.name}" class="test-avatar">
          <div class="test-meta">
            <div class="test-name">${t.name}</div>
            <div class="test-role">${t.role} • ${t.location}</div>
          </div>
        </div>
      </div>
      <div class="test-nav-controls">
        <button class="test-nav-btn" onclick="HavenzaApp.prevTestimonial()" aria-label="Previous Testimonial">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button class="test-nav-btn" onclick="HavenzaApp.nextTestimonial()" aria-label="Next Testimonial">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
  }

  function nextTestimonial() {
    state.currentTestimonial = (state.currentTestimonial + 1) % HAVENZA_DATA.testimonials.length;
    renderTestimonial();
  }

  function prevTestimonial() {
    state.currentTestimonial = (state.currentTestimonial - 1 + HAVENZA_DATA.testimonials.length) % HAVENZA_DATA.testimonials.length;
    renderTestimonial();
  }

  // Render Services Section
  function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    container.innerHTML = HAVENZA_DATA.services.map(s => `
      <div class="service-card">
        <div class="service-icon">
          <i class="fa-solid ${s.icon}"></i>
        </div>
        <div class="service-subtitle">${s.subtitle}</div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.description}</p>
      </div>
    `).join('');
  }

  // Filter by Signature Collection Helper
  function filterByCollection(category) {
    state.activeFilter.category = category;
    
    // Update category pill UI if present
    document.querySelectorAll('.filter-pill[data-filter="category"]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.value === category);
    });

    renderProperties();

    // Smooth scroll to properties portfolio
    const target = document.getElementById('properties');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Form Submissions with LocalStorage Persistence
  function setupForms() {
    // 1. Viewing Form
    const viewingForm = document.getElementById('viewingForm');
    if (viewingForm) {
      const dateInput = document.getElementById('viewingDate');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
      }

      viewingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('viewingFullName').value;
        const email = document.getElementById('viewingEmail').value;
        const phone = document.getElementById('viewingPhone')?.value || '';
        const propId = document.getElementById('viewingPropertySelect').value;
        const date = document.getElementById('viewingDate').value;
        const time = document.getElementById('viewingTime').value;

        const prop = HAVENZA_DATA.properties.find(p => p.id === propId);
        const propTitle = prop ? prop.title : 'Selected Property';

        // Persist to localStorage for Admin Panel
        try {
          const viewings = JSON.parse(localStorage.getItem('havenza_viewings') || '[]');
          viewings.unshift({
            id: 'vw-' + Date.now(),
            propertyTitle: propTitle,
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            status: 'Pending',
            createdAt: new Date().toISOString()
          });
          localStorage.setItem('havenza_viewings', JSON.stringify(viewings));
        } catch (err) {
          console.warn('Storage save error:', err);
        }

        // Display Success Toast & Confirmation
        showToast(`Viewing request confirmed for ${name}! Tayba Sharif and our acquisitions team will email you promptly.`, 'fa-circle-check');
        
        // Reset form
        viewingForm.reset();
      });
    }

    // 2. Sell Property Form
    const sellForm = document.getElementById('sellForm');
    if (sellForm) {
      sellForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('sellName')?.value || '';
        const phone = document.getElementById('sellPhone')?.value || '';
        const email = document.getElementById('sellEmail')?.value || '';
        const location = document.getElementById('sellLocation')?.value || '';
        const type = document.getElementById('sellType')?.value || '';
        const size = document.getElementById('sellSize')?.value || '';
        const notes = document.getElementById('sellNotes')?.value || '';

        try {
          const sellers = JSON.parse(localStorage.getItem('havenza_sellers') || '[]');
          sellers.unshift({
            id: 'sel-' + Date.now(),
            name: name,
            phone: phone,
            email: email,
            location: location,
            type: type,
            size: size,
            notes: notes,
            status: 'Pending',
            createdAt: new Date().toISOString()
          });
          localStorage.setItem('havenza_sellers', JSON.stringify(sellers));
        } catch (err) {
          console.warn('Storage save error:', err);
        }

        showToast('Property valuation request submitted to Tayba Sharif and acquisitions team!', 'fa-file-signature');
        sellForm.reset();
      });
    }

    // 3. Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('contactName')?.value || '';
        const email = document.getElementById('contactEmail')?.value || '';
        const subject = document.getElementById('contactSubject')?.value || '';
        const message = document.getElementById('contactMsg')?.value || '';

        try {
          const msgs = JSON.parse(localStorage.getItem('havenza_messages') || '[]');
          msgs.unshift({
            id: 'msg-' + Date.now(),
            name: name,
            email: email,
            subject: subject,
            message: message,
            status: 'Unread',
            createdAt: new Date().toISOString()
          });
          localStorage.setItem('havenza_messages', JSON.stringify(msgs));
        } catch (err) {
          console.warn('Storage save error:', err);
        }

        showToast('Thank you for contacting Havenza Properties. We will reply promptly to your email!', 'fa-paper-plane');
        contactForm.reset();
      });
    }

    // 4. Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
          try {
            const subs = JSON.parse(localStorage.getItem('havenza_newsletter') || '[]');
            subs.unshift({ email: emailInput.value, date: new Date().toISOString().split('T')[0] });
            localStorage.setItem('havenza_newsletter', JSON.stringify(subs));
          } catch (err) {}
        }
        showToast('Subscribed to Havenza Private Market Reports & Updates!', 'fa-envelope-open-text');
        newsletterForm.reset();
      });
    }
  }

  // Secret Brand Logo Triple-Click Listener to Open Admin Panel
  function setupLogoAdminTrigger() {
    let logoClicks = 0;
    let clickTimer = null;

    const brandLogos = document.querySelectorAll('.brand-logo');
    brandLogos.forEach(logo => {
      logo.style.cursor = 'pointer';
      logo.addEventListener('click', function (e) {
        logoClicks++;
        clearTimeout(clickTimer);

        if (logoClicks >= 3) {
          e.preventDefault();
          e.stopPropagation();
          logoClicks = 0;

          showToast('Secret Access: Opening Havenza Admin Panel...', 'fa-shield-halved');
          setTimeout(() => {
            window.location.href = 'admin.html';
          }, 450);
          return false;
        }

        // Reset click counter if not clicked 3 times within 2.5 seconds
        clickTimer = setTimeout(() => {
          logoClicks = 0;
        }, 2500);
      });
    });
  }

  // Mobile Navigation Setup
  function setupMobileNav() {
    const hamburger = document.getElementById('hamburgerBtn');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('drawerOverlay');
    const links = document.querySelectorAll('.mobile-nav-link');

    function toggleMenu() {
      const isOpen = drawer.classList.contains('open');
      drawer.classList.toggle('open', !isOpen);
      overlay.classList.toggle('active', !isOpen);
      hamburger.classList.toggle('active', !isOpen);
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    }

    function closeMenu() {
      drawer.classList.remove('open');
      overlay.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    links.forEach(link => link.addEventListener('click', closeMenu));
  }

  // Header Scroll Effect & Active Section Spy
  function setupHeaderScroll() {
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Modal ESC key listener
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.activeModalProperty) {
        closeDetails();
      }
    });
  }

  // Search Console Tabs (Buy / Rent)
  function setupSearchTabs() {
    const tabs = document.querySelectorAll('.search-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  }

  // Initialize Whole App
  function init() {
    // Sync custom properties created from Admin Panel
    try {
      const customProps = localStorage.getItem('havenza_custom_properties');
      if (customProps) {
        const parsed = JSON.parse(customProps);
        if (Array.isArray(parsed) && parsed.length > 0) {
          window.HAVENZA_DATA.properties = parsed;
        }
      }
    } catch (e) {}

    loadFavorites();
    renderProperties();
    populatePropertySelects();
    renderServices();
    renderTestimonial();
    renderFaqs();
    initMortgageCalculator();
    setupForms();
    setupLogoAdminTrigger();
    setupMobileNav();
    setupHeaderScroll();
    setupSearchTabs();

    // Attach search input listeners
    const kwInput = document.getElementById('filterKeyword');
    if (kwInput) {
      kwInput.addEventListener('input', (e) => {
        state.activeFilter.keyword = e.target.value;
        renderProperties();
      });
    }

    const citySelect = document.getElementById('filterCity');
    if (citySelect) {
      citySelect.addEventListener('change', (e) => {
        state.activeFilter.city = e.target.value;
        renderProperties();
      });
    }

    const bedSelect = document.getElementById('filterBeds');
    if (bedSelect) {
      bedSelect.addEventListener('change', (e) => {
        state.activeFilter.bedrooms = e.target.value;
        renderProperties();
      });
    }

    const sortSelect = document.getElementById('filterSort');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.activeFilter.sort = e.target.value;
        renderProperties();
      });
    }
  }

  // Expose Public API
  window.HavenzaApp = {
    init,
    setCurrency,
    toggleFav,
    setPillFilter,
    resetFilters,
    filterByCollection,
    openAdmin: () => { window.location.href = 'admin.html'; },
    submitHeroSearch,
    openDetails,
    closeDetails,
    switchModalImage,
    bookViewing,
    toggleFaq,
    nextTestimonial,
    prevTestimonial
  };

  // Launch on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
