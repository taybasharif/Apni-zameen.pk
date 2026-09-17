/**
 * HAVENZA PROPERTIES — Data Store
 * Comprehensive dataset for luxury properties, elite advisors, services, and testimonials.
 */

const HAVENZA_DATA = {
  currencyRates: {
    USD_TO_PKR: 280,
  },
  
  // 12 Curated Luxury Properties across Pakistan
  properties: [
    {
      id: 'hp-001',
      title: 'The Grand Royale Villa',
      slug: 'the-grand-royale-villa-dha-lahore',
      tagline: 'Signature 1-Kanal Architect-Designed Modern Residence',
      purpose: 'buy',
      category: 'Villa',
      featured: true,
      city: 'Lahore',
      location: 'Phase 6, DHA, Lahore',
      address: 'Sector J, Phase 6, Defence Housing Authority, Lahore',
      pricePKR: 285000000,
      priceDisplayPKR: 'PKR 28.5 Crore',
      priceUSD: 1018000,
      priceDisplayUSD: '$1,018,000',
      bedrooms: 5,
      bathrooms: 6,
      areaSqFt: 5400,
      areaDisplay: '1 Kanal (5,400 Sq Ft)',
      yearBuilt: 2025,
      garages: 3,
      status: 'Available',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'An architectural masterpiece in the prestigious Phase 6 of DHA Lahore. The Grand Royale Villa combines clean minimalist European elevations with rich warm interior textures, expansive floor-to-ceiling double-glazed windows, private heated swimming pool, Spanish marble floors, and an automated smart-home infrastructure.',
      highlights: [
        'Private heated swimming pool with jacuzzi and wooden sun-deck',
        'Imported Italian Scavolini dirty and show kitchens with Miele appliances',
        'Custom walk-in dressing suites with bespoke LED cabinetry',
        'Full rooftop entertainment terrace with barbecue deck and skyline views',
        'Central climate control (VRF) and 20KW Solar Hybrid Backup'
      ],
      amenities: [
        'Private Pool', 'Smart Home Automation', 'Solar Powered (20KW)', 'Designer Kitchen',
        'Italian Marble', 'Home Cinema Room', 'Private Elevator', 'Servant Quarters (2)',
        'CCTV & Smart Security', 'Lush Landscaped Lawn', 'Walk-in Closets', '3-Car Garage'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-002',
      title: 'Margalla Crown Sky Penthouse',
      slug: 'margalla-crown-sky-penthouse-islamabad',
      tagline: 'Panoramic Margalla Hills View Duplex Penthouse',
      purpose: 'buy',
      category: 'Penthouse',
      featured: true,
      city: 'Islamabad',
      location: 'Sector F-7 / Blue Area, Islamabad',
      address: 'Tower One, The Centaurus & Elysium Enclave, F-7, Islamabad',
      pricePKR: 195000000,
      priceDisplayPKR: 'PKR 19.5 Crore',
      priceUSD: 696000,
      priceDisplayUSD: '$696,000',
      bedrooms: 4,
      bathrooms: 5,
      areaSqFt: 4200,
      areaDisplay: '4,200 Sq Ft Duplex',
      yearBuilt: 2024,
      garages: 2,
      status: 'Exclusive',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'Suspended high above the diplomatic capital, this duplex penthouse offers uninterrupted 270-degree vistas of the lush Margalla Hills. Featuring double-height living ceilings, a glass wrap-around terrace, private elevator access, and finishes curated by award-winning interior designers.',
      highlights: [
        'Direct Margalla Ridge views from all primary bedroom suites',
        'Double-height 22ft ceiling living lounge with architectural chandelier',
        'Private keycard high-speed express elevator',
        'Wrap-around glass balcony with outdoor fire pit',
        'Fully serviced building with concierge, spa, and valet'
      ],
      amenities: [
        'Panoramic Views', 'Private Elevator', 'Concierge 24/7', 'Wrap-around Balcony',
        'Heated Infinity Pool Access', 'Fitness & Spa Center', 'High-Speed Internet',
        'Underground Valet Parking', 'Smart Climate Control', 'Wine/Beverage Cooler'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-003',
      title: 'Oceanfront Horizon Villa',
      slug: 'oceanfront-horizon-villa-clifton-karachi',
      tagline: 'Sea-Facing Contemporary Mansion with Infinity Deck',
      purpose: 'buy',
      category: 'Villa',
      featured: true,
      city: 'Karachi',
      location: 'Clifton Block 4, Karachi',
      address: 'Sea View Promenade, Clifton Block 4, Karachi',
      pricePKR: 340000000,
      priceDisplayPKR: 'PKR 34.0 Crore',
      priceUSD: 1214000,
      priceDisplayUSD: '$1,214,000',
      bedrooms: 6,
      bathrooms: 7,
      areaSqFt: 7200,
      areaDisplay: '1,000 Sq Yards (7,200 Sq Ft)',
      yearBuilt: 2025,
      garages: 4,
      status: 'Available',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'One of the Arabian Sea coast’s most coveted private addresses. Oceanfront Horizon Villa is crafted with resilient nautical-grade titanium zinc accents, Portuguese limestone cladding, an expansive infinity deck overlooking the ocean, and bespoke security infrastructure.',
      highlights: [
        'Direct unobstructed views of the Arabian Sea and coastal sunsets',
        'Saltwater infinity pool cascading into a sunken outdoor lounge',
        'Independent guest wing with private kitchenette and entrance',
        'Industrial-grade air filtration and anti-corrosive structural elements',
        'Subterranean 4-vehicle garage with car-lift'
      ],
      amenities: [
        'Sea View', 'Infinity Pool', 'Guest Pavilion', 'Subterranean Garage',
        'Smart Access Security', 'Backup Generators (60KVA)', 'Imported Timber Finishes',
        'Professional Gym', 'Steam & Sauna Suite', 'High Perimeter Security'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-004',
      title: 'The Elysian Golf Sanctuary',
      slug: 'the-elysian-golf-sanctuary-dha-raya-lahore',
      tagline: 'Direct Fairway Frontage Luxury Estate at Defence Raya',
      purpose: 'buy',
      category: 'Villa',
      featured: false,
      city: 'Lahore',
      location: 'DHA Phase 6 (Defence Raya), Lahore',
      address: 'Fairway Crescent, Defence Raya Golf Resort, DHA Phase 6, Lahore',
      pricePKR: 220000000,
      priceDisplayPKR: 'PKR 22.0 Crore',
      priceUSD: 785000,
      priceDisplayUSD: '$785,000',
      bedrooms: 5,
      bathrooms: 6,
      areaSqFt: 4800,
      areaDisplay: '1 Kanal Fairway Estate',
      yearBuilt: 2024,
      garages: 3,
      status: 'Available',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'Nestled on the edge of the 18-hole championship golf course at Defence Raya, this estate blends lush tranquil fairway landscapes with refined contemporary architecture. Features an open-concept great room, golf cart bay, and private putting green.',
      highlights: [
        'Immediate boundary with 18-Hole International Golf Course',
        'Golf cart buggy garage and private backyard putting green',
        'Double-height foyer with bespoke floating marble staircase',
        'Exclusive country club membership transfer privilege'
      ],
      amenities: [
        'Golf Course Frontage', 'Country Club Access', 'Putting Green', 'Marble Floors',
        'Solar Generation System', 'Lounge with Fireplace', 'Gated Community 24/7', 'Smart Security'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-005',
      title: 'Serene Heights Luxury Residence',
      slug: 'serene-heights-luxury-residence-f7-islamabad',
      tagline: 'Modern 3-Bedroom Executive Rental in Diplomatic F-7',
      purpose: 'rent',
      category: 'Apartment',
      featured: true,
      city: 'Islamabad',
      location: 'Sector F-7/2, Islamabad',
      address: 'Pine Avenue, Sector F-7/2, Islamabad',
      pricePKR: 450000,
      priceDisplayPKR: 'PKR 4.5 Lakh / mo',
      priceUSD: 1600,
      priceDisplayUSD: '$1,600 / mo',
      bedrooms: 3,
      bathrooms: 4,
      areaSqFt: 2600,
      areaDisplay: '2,600 Sq Ft Fully Furnished',
      yearBuilt: 2024,
      garages: 2,
      status: 'For Rent',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1502005229762-ae1b460020e2?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'A turnkey, designer-furnished executive apartment favored by expatriates, embassy dignitaries, and executives. Located in the leafy, peaceful heart of F-7, walking distance to Kohsar Market.',
      highlights: [
        'Fully furnished with designer Scandinavian & bespoke walnut furniture',
        'Round-the-clock armed concierge and diplomatic zone security clearance',
        'Full utility backup with instant diesel generator switchover',
        'High-speed fiber connectivity included'
      ],
      amenities: [
        'Turnkey Furnished', '24/7 Security Concierge', '100% Power Backup', 'Gymnasium',
        'Covered Parking', 'Kohsar Market Proximity', 'Central Heating & AC', 'Elevator'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-006',
      title: 'Gulberg Corporate Plaza Floors',
      slug: 'gulberg-corporate-plaza-floors-lahore',
      tagline: 'Grade-A Commercial Space in Financial Boulevard',
      purpose: 'buy',
      category: 'Commercial',
      featured: false,
      city: 'Lahore',
      location: 'Main Boulevard, Gulberg III, Lahore',
      address: 'Tower 42, Main Boulevard Gulberg III, Lahore',
      pricePKR: 165000000,
      priceDisplayPKR: 'PKR 16.5 Crore',
      priceUSD: 589000,
      priceDisplayUSD: '$589,000',
      bedrooms: 0,
      bathrooms: 4,
      areaSqFt: 6500,
      areaDisplay: '6,500 Sq Ft Floorplate',
      yearBuilt: 2025,
      garages: 6,
      status: 'Available',
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'Ideal for multinational regional headquarters, private equity firms, or tech consultancies. Featuring column-free open-plan floorplates, triple-glazed acoustic curtain glass, 6 high-speed Otis elevators, and dedicated underground executive parking.',
      highlights: [
        'Prime location on Gulberg Main Boulevard near MM Alam Road',
        'LEED-certified energy-efficient building with low operating costs',
        'Robust multi-tier fiber connectivity and dual grid electrical redundancy',
        'High rental yield with institutional tenant demand'
      ],
      amenities: [
        'Grade-A Corporate Spec', 'Underground Parking (6)', '24/7 Security & Access Control',
        'High-Speed Elevators', 'Full Power Redundancy', 'Fire & Life Safety Systems', 'Acoustic Glass'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-007',
      title: 'The Palm Enclave Residence',
      slug: 'the-palm-enclave-residence-rawalpindi',
      tagline: 'Modern 5-Bedroom Executive Home in Bahria Enclave',
      purpose: 'buy',
      category: 'House',
      featured: false,
      city: 'Rawalpindi',
      location: 'Bahria Town Phase 7, Rawalpindi',
      address: 'Boulevard East, Phase 7, Bahria Town, Rawalpindi',
      pricePKR: 85000000,
      priceDisplayPKR: 'PKR 8.5 Crore',
      priceUSD: 303000,
      priceDisplayUSD: '$303,000',
      bedrooms: 5,
      bathrooms: 5,
      areaSqFt: 3800,
      areaDisplay: '10 Marla (3,800 Sq Ft)',
      yearBuilt: 2024,
      garages: 2,
      status: 'Available',
      images: [
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'A contemporary family home built with meticulous attention to thermal efficiency and elegant interior comfort. Features imported Turkish granite, spacious open kitchen with Corian counter islands, and landscaped rear terrace.',
      highlights: [
        'Spacious 5-bedroom layout with ground-floor master suite',
        'Solid ash wood doors, premium Turkish tile and sanitary ware',
        'Solar net metering installed (10KW system)'
      ],
      amenities: [
        'Solar System', 'Designer Kitchen', 'Lush Terrace Garden', 'Gated Community',
        'Underground Electrification', 'Water Filtration Plant', 'CCTV Equipped'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-008',
      title: 'Executive Canal Villa',
      slug: 'executive-canal-villa-faisalabad',
      tagline: 'Refined 1-Kanal Home on Canal Road Faisalabad',
      purpose: 'buy',
      category: 'Villa',
      featured: false,
      city: 'Faisalabad',
      location: 'Canal Road, Faisalabad',
      address: 'Canal View Executive Block, Canal Road, Faisalabad',
      pricePKR: 92000000,
      priceDisplayPKR: 'PKR 9.2 Crore',
      priceUSD: 328000,
      priceDisplayUSD: '$328,000',
      bedrooms: 4,
      bathrooms: 5,
      areaSqFt: 4500,
      areaDisplay: '1 Kanal (4,500 Sq Ft)',
      yearBuilt: 2025,
      garages: 3,
      status: 'Available',
      images: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'Faisalabad’s premier residential corridor. Designed for industrial leaders and modern families, this home offers sweeping high ceilings, double-height drawing rooms, dedicated servant quarters, and custom teak wood finishes.',
      highlights: [
        'Prime Canal Road address with rapid city and motorway access',
        'Imported porcelain tile finishes throughout',
        'Landscaped front and back gardens with water features'
      ],
      amenities: [
        'Canal Frontage', 'Imported Fixtures', 'High Security Zone', 'Lush Gardens',
        '3-Car Driveway', 'Servant Quarters', 'Modern Kitchen'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-009',
      title: 'Marina Heights Ocean View Flat',
      slug: 'marina-heights-ocean-view-flat-dha-karachi',
      tagline: 'Luxury 3-Bed Serviced Rental in DHA Phase 8',
      purpose: 'rent',
      category: 'Apartment',
      featured: true,
      city: 'Karachi',
      location: 'DHA Phase 8, Karachi',
      address: 'Creek Vista Extension, DHA Phase 8, Karachi',
      pricePKR: 350000,
      priceDisplayPKR: 'PKR 3.5 Lakh / mo',
      priceUSD: 1250,
      priceDisplayUSD: '$1,250 / mo',
      bedrooms: 3,
      bathrooms: 3,
      areaSqFt: 2200,
      areaDisplay: '2,200 Sq Ft Oceanfront',
      yearBuilt: 2024,
      garages: 1,
      status: 'For Rent',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'Experience breezy coastal living with sweeping ocean and creek views. Features an open gourmet kitchen, private balcony facing the water, swimming pool access, and 24-hour guarded security.',
      highlights: [
        'Breathtaking sea and creek panorama',
        'Communal gym, tennis court, and infinity pool',
        'Secure gated perimeter with biometric elevators'
      ],
      amenities: [
        'Sea Views', 'Swimming Pool', 'Gym & Health Club', 'Tennis Courts',
        '24/7 Security', 'Covered Parking', 'Standby Generator'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-010',
      title: 'Smart Contemporary Townhouse',
      slug: 'smart-contemporary-townhouse-rawalpindi',
      tagline: 'Turnkey 4-Bedroom Home Near Chaklala Scheme III',
      purpose: 'buy',
      category: 'House',
      featured: false,
      city: 'Rawalpindi',
      location: 'Chaklala Scheme III, Rawalpindi',
      address: 'Airport Road Adjacent, Chaklala Scheme III, Rawalpindi',
      pricePKR: 52000000,
      priceDisplayPKR: 'PKR 5.2 Crore',
      priceUSD: 185000,
      priceDisplayUSD: '$185,000',
      bedrooms: 4,
      bathrooms: 4,
      areaSqFt: 3100,
      areaDisplay: '7 Marla (3,100 Sq Ft)',
      yearBuilt: 2024,
      garages: 2,
      status: 'Available',
      images: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'A smartly designed multi-level residence offering efficient flow, high-spec insulation, solid woodwork, and dedicated family living areas close to top schools and commercial hubs.',
      highlights: [
        'Ideal family location close to Islamabad Expressway & Airport link',
        'Modern open-plan kitchen and family lounge',
        'Low-maintenance architectural design with stone tile accents'
      ],
      amenities: [
        'Modern Kitchen', 'Balcony Terrace', 'Covered Car Porch', 'CCTV System',
        'Gas & Electricity Connected', 'Water Storage Tank'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-011',
      title: 'Prime 1-Kanal Corner Plot',
      slug: 'prime-1-kanal-corner-plot-dha-lahore',
      tagline: 'Rare Corner Facing Park Land Opportunity in Phase 7',
      purpose: 'buy',
      category: 'Plot',
      featured: false,
      city: 'Lahore',
      location: 'Phase 7, DHA, Lahore',
      address: 'Sector T, Phase 7, DHA, Lahore',
      pricePKR: 48000000,
      priceDisplayPKR: 'PKR 4.8 Crore',
      priceUSD: 171000,
      priceDisplayUSD: '$171,000',
      bedrooms: 0,
      bathrooms: 0,
      areaSqFt: 4500,
      areaDisplay: '1 Kanal (4,500 Sq Ft)',
      yearBuilt: 2026,
      garages: 0,
      status: 'Verified Title',
      images: [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'A prized possession in the high-growth Phase 7 sector of DHA Lahore. Featuring dual-road frontages, directly facing a landscaped community park and 100-foot green boulevard. Fully possession-ready with cleared title deeds.',
      highlights: [
        'Direct corner plot with extra land buffer',
        'Clear title deed with DHA direct transfer',
        'Rapidly developing block with strong capital growth projection'
      ],
      amenities: [
        'Corner Location', 'Park Facing', 'Possession Ready', 'Underground Utilities',
        'Broad 50ft & 100ft Roads', 'DHA Transfer Direct', 'High Capital Upside'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    },
    {
      id: 'hp-012',
      title: 'Boutique Loft & Garden Studio',
      slug: 'boutique-loft-garden-studio-gulberg-lahore',
      tagline: 'Modern 2-Bedroom Designer Flat for Urban Professionals',
      purpose: 'rent',
      category: 'Apartment',
      featured: false,
      city: 'Lahore',
      location: 'Gulberg II, Lahore',
      address: 'Zafar Ali Road, Gulberg II, Lahore',
      pricePKR: 220000,
      priceDisplayPKR: 'PKR 2.2 Lakh / mo',
      priceUSD: 785,
      priceDisplayUSD: '$785 / mo',
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1400,
      areaDisplay: '1,400 Sq Ft Boutique',
      yearBuilt: 2024,
      garages: 1,
      status: 'For Rent',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85'
      ],
      description: 'Sophisticated loft living situated on peaceful Zafar Ali Road in Gulberg. Boasts industrial-chic exposed brick accents, custom acoustic glazing, designer lighting, and a serene garden courtyard.',
      highlights: [
        'Walking distance to Lahore Gymkhana and Mall of Lahore',
        'Designer kitchen with quartz counters and Italian appliances',
        'Full building generator power and rooftop social terrace'
      ],
      amenities: [
        'Garden Courtyard', 'Full Power Backup', 'Acoustic Windows', 'Rooftop Terrace',
        'Reserved Parking', '24/7 Security Guard', 'Intercom & CCTV'
      ],
      agent: {
        name: 'Tayba Sharif',
        title: 'Founder & Principal Advisory',
        email: 'taybasharif96@gmail.com'
      }
    }
  ],

  // Real Estate Services
  services: [
    {
      id: 'srv-1',
      icon: 'fa-building-columns',
      title: 'Residential Sales & Acquisitions',
      subtitle: 'Prime Villas, Mansions & Plots',
      description: 'Bespoke representation for buyers and sellers of ultra-prime residences across DHA, Gulberg, F-7, and Clifton. From private off-market viewings to legal title closing, we manage every facet with absolute confidentiality.'
    },
    {
      id: 'srv-2',
      icon: 'fa-key',
      title: 'Luxury Rentals & Relocations',
      subtitle: 'Turnkey Residences & Penthouses',
      description: 'Curated premium rental portfolios catering to multinational executives, embassy officials, and high-profile expatriates seeking immaculate, serviced properties in secure enclaves.'
    },
    {
      id: 'srv-3',
      icon: 'fa-gem',
      title: 'Private Estates & Penthouses',
      subtitle: 'The Havenza Signature Collection',
      description: 'Exclusive marketing and acquisition of trophy assets that rarely appear on open portals. We provide discrete introductions between discerning investors and property owners.'
    },
    {
      id: 'srv-4',
      icon: 'fa-shield-halved',
      title: 'Asset & Property Management',
      subtitle: 'Complete Peace of Mind for Landlords',
      description: 'End-to-end stewardship of high-value portfolios: comprehensive tenant vetting, automated rent collection, preventive maintenance, and detailed yield accounting for overseas clients.'
    },
    {
      id: 'srv-5',
      icon: 'fa-chart-line',
      title: 'Investment & Diaspora Advisory',
      subtitle: 'High Yields & Capital Appreciation',
      description: 'Tailored guidance for overseas Pakistanis and institutional funds navigating title deeds, FBR tax compliance, repatriation frameworks, and high-capital-growth development cycles.'
    },
    {
      id: 'srv-6',
      icon: 'fa-city',
      title: 'Commercial Real Estate',
      subtitle: 'Corporate Towers & Retail Flagships',
      description: 'Strategic advisory for prime commercial plots, corporate floorplates, and mixed-use retail plazas delivering robust rental yields and long-term institutional value.'
    }
  ],

  // Signature Property Collections & Architectural Concepts
  collections: [
    {
      id: 'col-penthouses',
      title: 'The Sky Penthouse Collection',
      tagline: 'Panoramic Terraces & Sky Duplexes',
      category: 'Penthouse',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      badge: 'Islamabad & Karachi',
      description: 'Exclusive sky duplexes with double-height ceiling voids, private infinity splash pools, and dramatic uninterrupted city vistas.',
      specs: ['Floor-to-Ceiling Glass', 'Private Elevator Access', 'Acoustic Sound Damping'],
      filterTarget: 'Penthouse'
    },
    {
      id: 'col-villas',
      title: 'Grand Villa Sanctuaries',
      tagline: '1 to 4 Kanal Masterpiece Manors',
      category: 'Villa',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      badge: 'DHA Lahore & Margalla Hills',
      description: 'Gated architectural estates featuring European minimalist elevations, subterranean entertainment lounges, and heated pool pavilions.',
      specs: ['20KW Hybrid Solar Grid', 'Heated Lap Pools & Spas', 'Italian Scavolini Kitchens'],
      filterTarget: 'Villa'
    },
    {
      id: 'col-residences',
      title: 'Turnkey Designer Residences',
      tagline: 'Curated Urban Residences & Houses',
      category: 'House',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      badge: 'Gulberg & Clifton',
      description: 'Impeccably finished homes featuring Spanish Porcelanosa ceramics, bespoke walnut millwork, and integrated smart-home automation.',
      specs: ['Move-in Turnkey Quality', 'Biometric Smart Access', 'Multi-Zone VRF Climate'],
      filterTarget: 'House'
    },
    {
      id: 'col-commercial',
      title: 'Trophy Commercial Assets',
      tagline: 'Grade-A Towers & Corporate Plazas',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      badge: 'Blue Area & Main Boulevards',
      description: 'High-yielding commercial floorplates and retail flagships occupied by multinational covenants delivering superior long-term yields.',
      specs: ['9.8%+ Net Rental Yields', 'Corporate Lease Covenants', 'Triple-Verified Title Deeds'],
      filterTarget: 'Commercial'
    }
  ],

  // Client Testimonials
  testimonials: [],

  // Frequently Asked Questions
  faqs: [
    {
      id: 'faq-1',
      question: 'How does Havenza Properties verify property titles and documentation?',
      answer: 'Every property listed on Havenza undergoes rigorous three-tier legal verification. Our legal council examines official land records, DHA / CDA / KDA transfer allocations, approved building bylaws, encumbrance certificates, and tax clearance slips. You receive a verified title dossier before making any token payment.'
    },
    {
      id: 'faq-2',
      question: 'Can overseas Pakistanis purchase property remotely through Havenza?',
      answer: 'Yes, over 40% of our luxury transactions are completed by overseas clients based in the UK, USA, UAE, and Canada. We facilitate power of attorney (POA) attestations via Pakistani embassies, secure direct bank wire transfers, and provide 4K live video inspections with drone property surveys.'
    },
    {
      id: 'faq-3',
      question: 'What is the procedure for scheduling an exclusive private viewing?',
      answer: 'You can request a viewing directly through any property card or our Schedule a Viewing form. Our senior advisor assigned to that listing will contact you within 2 business hours to arrange either a private chauffeur-accompanied on-site tour or a secure virtual walk-through.'
    },
    {
      id: 'faq-4',
      question: 'What fees or commissions are associated with Havenza services?',
      answer: 'We believe in complete transparency. Our residential sales brokerage is standard 1% to 2% depending on property class and marketing scope, agreed upfront with zero hidden charges. For rental properties, the standard fee is equivalent to one month’s rent.'
    },
    {
      id: 'faq-5',
      question: 'How do I list my luxury property with Havenza Properties?',
      answer: 'Submit your property details via our Sell Your Property section or contact Tayba Sharif directly. Our valuation team will visit within 24 hours to conduct a comparative market analysis (CMA), assess staging needs, and propose an exclusive marketing strategy.'
    },
    {
      id: 'faq-6',
      question: 'Do you assist with mortgage financing and bank approvals?',
      answer: 'Yes. We partner with premier private banks in Pakistan (including Meezan Bank, Standard Chartered, and Habib Bank) to expedite Islamic home financing and conventional mortgages at competitive rates for eligible buyers.'
    }
  ]
};

// Expose globally for browser usage
window.HAVENZA_DATA = HAVENZA_DATA;
