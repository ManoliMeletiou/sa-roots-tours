export type Locale = "en" | "nl";

export type DayCopy = {
  day: number;
  theme: string;
  programme: string;
  night: string;
  image: string;
  imageAlt: string;
};

type Copy = {
  meta: {
    title: string;
    description: string;
    pages: {
      home: string;
      journey: string;
      approach: string;
      practical: string;
      enquire: string;
      missing: string;
    };
  };
  brand: { name: string; mark: string; tagline: string };
  nav: {
    journey: string;
    approach: string;
    practical: string;
    enquire: string;
    closeMenu: string;
    openMenu: string;
  };
  prelaunch: string;
  footer: {
    blurb: string;
    explore: string;
    contact: string;
    notice: string;
    rights: string;
  };
  missing: { title: string; body: string; home: string };
  home: {
    kicker: string;
    headline: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: { label: string; value: string }[];
    manifestoKicker: string;
    manifestoTitle: string;
    manifestoBody: string;
    pillars: { title: string; body: string }[];
    flagshipKicker: string;
    flagshipTitle: string;
    flagshipBody: string;
    flagshipCta: string;
    capeTitle: string;
    capeBody: string;
    krugerTitle: string;
    krugerBody: string;
    priceKicker: string;
    priceTitle: string;
    priceBody: string;
    priceFrom: string;
    priceNote: string;
    honestyTitle: string;
    honestyBody: string;
    closeTitle: string;
    closeBody: string;
  };
  journey: {
    kicker: string;
    title: string;
    lede: string;
    dayLabel: string;
    jumpLabel: string;
    days: DayCopy[];
    nightsLabel: string;
    inclusionsTitle: string;
    inclusions: string[];
    exclusionsTitle: string;
    exclusions: string[];
    extensionsTitle: string;
    extensions: { title: string; body: string }[];
    promisesTitle: string;
    promises: string[];
  };
  approach: {
    kicker: string;
    title: string;
    lede: string;
    sections: { title: string; body: string }[];
    whoTitle: string;
    whoBody: string;
  };
  practical: {
    kicker: string;
    title: string;
    lede: string;
    priceTitle: string;
    priceLede: string;
    priceFrom: string;
    priceUnit: string;
    pricePoints: string[];
    guestsLabel: string;
    indicativeTotal: string;
    perPerson: string;
    sketchNote: string;
    groupTitle: string;
    groupBody: string;
    travelTitle: string;
    travelPoints: string[];
    faqTitle: string;
    faq: { q: string; a: string }[];
  };
  enquire: {
    kicker: string;
    title: string;
    lede: string;
    stepsTitle: string;
    steps: { title: string; body: string }[];
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    phoneHint: string;
    dates: string;
    datesHint: string;
    groupSize: string;
    rooming: string;
    budget: string;
    travelStyle: string;
    message: string;
    messageHint: string;
    choose: string;
    submit: string;
    submitting: string;
    privacy: string;
    notice: string;
    successTitle: string;
    successBody: string;
    successSend: string;
    successCopy: string;
    successCopied: string;
    successAnother: string;
    errors: {
      name: string;
      email: string;
      dates: string;
      required: string;
    };
    groupOptions: { value: string; label: string }[];
    roomingOptions: { value: string; label: string }[];
    budgetOptions: { value: string; label: string }[];
    styleOptions: { value: string; label: string }[];
  };
};

export const copy: Record<Locale, Copy> = {
  en: {
    meta: {
      title: "SA Roots Tours",
      description:
        "Small-group Cape Town and Greater Kruger journeys from the Netherlands. Unhurried, hosted, land-only. First departures aimed at March–April 2027.",
      pages: {
        home: "SA Roots Tours — Cape Town and Greater Kruger",
        journey: "The journey — SA Roots Tours",
        approach: "How we travel — SA Roots Tours",
        practical: "Price and practicalities — SA Roots Tours",
        enquire: "Enquire — SA Roots Tours",
        missing: "Page not found — SA Roots Tours",
      },
    },
    brand: {
      name: "SA Roots Tours",
      mark: "SA Roots",
      tagline: "Personalised South Africa journeys from the Netherlands",
    },
    nav: {
      journey: "The journey",
      approach: "How we travel",
      practical: "Practical",
      enquire: "Enquire",
      closeMenu: "Close menu",
      openMenu: "Open menu",
    },
    prelaunch:
      "First departures aimed at March–April 2027. Enquiries are open; bookings are not yet open.",
    footer: {
      blurb:
        "A specialist host for intimate Cape Town and Greater Kruger journeys, designed from the Netherlands and delivered with licensed South African partners.",
      explore: "Explore",
      contact: "Write to us",
      notice:
        "SA Roots Tours is in pre-launch. This site does not take payments or confirmed bookings. Travel-entry rules can change — recheck official sources before you fly.",
      rights: "SA Roots Tours. Pre-launch planning site.",
    },
    missing: {
      title: "This page is not on the map.",
      body: "That address does not match a page on this site.",
      home: "Back to the start",
    },
    home: {
      kicker: "Cape Town · Greater Kruger · from the Netherlands",
      headline: "South Africa, without the rush.",
      lede: "Ten days. Small groups. Excellent local partners, and stories that make the places matter.",
      ctaPrimary: "Plan a conversation",
      ctaSecondary: "Read the itinerary",
      facts: [
        { label: "Duration", value: "10 days / 9 nights" },
        { label: "Group", value: "6–12 guests" },
        { label: "Format", value: "Land-only package" },
        { label: "Pilot", value: "March–April 2027" },
      ],
      manifestoKicker: "The idea",
      manifestoTitle: "Not another Big Five circuit.",
      manifestoBody:
        "The flagship is a carefully hosted journey: four nights in Cape Town, a domestic flight to the Lowveld, then four nights on safari in Greater Kruger. Fewer transfers. Longer stays. Room to actually arrive. International flights are booked by you; the South African land package is what we design and host.",
      pillars: [
        {
          title: "Unhurried",
          body: "Cape Town and Kruger, not a cross-country dash. The Garden Route is an optional extension, not a day stuffed into the middle.",
        },
        {
          title: "Small by design",
          body: "Six to twelve guests. We plan around eight to ten, so vehicles, tables and game drives stay human-sized.",
        },
        {
          title: "Honest stories",
          body: "History, landscape and lived local knowledge — not invented family myths. If a story cannot be stood behind, it does not go in the briefing.",
        },
      ],
      flagshipKicker: "Flagship",
      flagshipTitle: "Roots & Wildlife Stories",
      flagshipBody:
        "Cape Town for the mountain, the peninsula and the city’s layered past. Greater Kruger for early drives, long afternoons and a lodge that faces the bush. The same route can run as a private family departure.",
      flagshipCta: "Open the day-by-day",
      capeTitle: "Cape Town, given time",
      capeBody:
        "Table Mountain when the weather allows, the peninsula and Boulders, and a day that can tilt toward Bo-Kaap, food or the Winelands. A hosted welcome dinner on arrival — then sleep in the same city for four nights.",
      krugerTitle: "Greater Kruger, not a fly-by",
      krugerBody:
        "Four nights. Morning and afternoon drives with the lodge’s authorised rangers. No promised sightings, no racing between reserves. Habitat, guiding and pace — that is the product.",
      priceKicker: "Provisional",
      priceTitle: "From €3,850 per person",
      priceBody:
        "Land-only, in a working band of €3,850–€4,450. The published price will be set only after supplier quotations, insurance and insolvency-protection costs are confirmed. International flights are not included.",
      priceFrom: "€3,850–€4,450 pp",
      priceNote: "Planning range, not a bookable fare.",
      honestyTitle: "Where we are",
      honestyBody:
        "This is a pre-launch specialist, not a volume operator. We will not take your money until the travel agreement, insolvency protection and insurance are in place. What we will do now is talk — about dates, rooming, pace and whether this trip is actually for you.",
      closeTitle: "If the pace sounds like yours",
      closeBody:
        "Send an enquiry. We reply within two working days and, if it is a fit, we schedule a short conversation. No deposit. No obligation.",
    },
    journey: {
      kicker: "10 days / 9 nights",
      title: "Cape Town, then Greater Kruger.",
      lede: "A sample programme — lodges, vehicles and exact domestic timings are confirmed in writing only after contracting. Weather and wildlife will have their say.",
      dayLabel: "Day",
      jumpLabel: "Jump to a day",
      days: [
        {
          day: 1,
          theme: "Cape Town arrival",
          programme:
            "Airport meet-and-transfer, check-in, an easy waterfront orientation and a hosted welcome dinner. Nothing heroic on day one.",
          night: "Cape Town",
          image: "/images/waterfront.jpg",
          imageAlt: "Cape Town harbour at blue hour with Table Mountain beyond",
        },
        {
          day: 2,
          theme: "Mountain and city stories",
          programme:
            "Table Mountain if the weather holds, then city orientation. Bo-Kaap and District Six context with a qualified local guide — history, not costume.",
          night: "Cape Town",
          image: "/images/city-dusk.jpg",
          imageAlt: "Cape Town city bowl at dusk from the mountain",
        },
        {
          day: 3,
          theme: "Cape Peninsula",
          programme:
            "Cape Point and the scenic peninsula, Boulders penguin colony and coastal stops. A full-day private vehicle, with time to stand still at the edge of the continent.",
          night: "Cape Town",
          image: "/images/cape-peninsula.jpg",
          imageAlt: "Rugged Cape Peninsula cliffs meeting the Atlantic",
        },
        {
          day: 4,
          theme: "Culture, food or Winelands",
          programme:
            "The group stays together, with a choice of module: a community-led cultural programme, a Cape food and history day, or the Winelands. No shopping-as-itinerary.",
          night: "Cape Town",
          image: "/images/winelands.jpg",
          imageAlt: "Stellenbosch vineyards in late afternoon light",
        },
        {
          day: 5,
          theme: "Cape Town to the Lowveld",
          programme:
            "A scheduled domestic flight to a Lowveld airport, then a road transfer to the contracted safari lodge. Routing follows live airline schedules — we do not invent direct hops.",
          night: "Greater Kruger",
          image: "/images/gamedrive.jpg",
          imageAlt: "Safari vehicle on a red earth track at first light",
        },
        {
          day: 6,
          theme: "Safari immersion",
          programme:
            "Morning and afternoon or evening game drives with the lodge or reserve’s authorised ranger. Hosted reflection between drives, not a lecture on the vehicle.",
          night: "Greater Kruger",
          image: "/images/kruger-dawn.jpg",
          imageAlt: "Dawn light through acacia trees in Greater Kruger",
        },
        {
          day: 7,
          theme: "Safari immersion",
          programme:
            "Two safari activities, or one longer outing, depending on the lodge programme. Optional light wildlife-science storytelling for guests who want it.",
          night: "Greater Kruger",
          image: "/images/lodge-dusk.jpg",
          imageAlt: "Safari lodge deck at dusk overlooking the bush",
        },
        {
          day: 8,
          theme: "Safari immersion",
          programme:
            "A flexible safari day. Optional bush walk only where an appropriately qualified and authorised supplier operates it. Rest is a feature, not a gap.",
          night: "Greater Kruger",
          image: "/images/kruger-dawn.jpg",
          imageAlt: "Greater Kruger bushveld at sunrise",
        },
        {
          day: 9,
          theme: "Final full safari day",
          programme:
            "Morning and afternoon safari, then a farewell dinner. No unnecessary inter-reserve transfers unless they materially improve the stay.",
          night: "Greater Kruger",
          image: "/images/gamedrive.jpg",
          imageAlt: "Guests and rangers on an early game drive",
        },
        {
          day: 10,
          theme: "Departure",
          programme:
            "A final activity if flight time allows, then transfer to the Lowveld airport and a domestic connection for independently booked onward travel.",
          night: "—",
          image: "/images/hero-table-mountain.jpg",
          imageAlt: "Table Mountain across Table Bay",
        },
      ],
      nightsLabel: "Night",
      inclusionsTitle: "Included in the land package",
      inclusions: [
        "Nine nights of contracted accommodation",
        "Domestic South African air sector(s) stated in the itinerary",
        "Private or contracted ground transport",
        "Listed guided activities and contracted safari activities",
        "Stated meals and specified entrance or conservation fees",
        "SA Roots host support and an emergency contact",
      ],
      exclusionsTitle: "Not included",
      exclusions: [
        "International flights to and from South Africa",
        "Travel, medical and cancellation insurance",
        "Passport, ETA or visa fees, and border charges",
        "The SARS online traveller declaration (your own obligation)",
        "Tips, personal purchases and optional activities not listed",
      ],
      extensionsTitle: "Extensions, if you have more time",
      extensions: [
        {
          title: "Garden Route, 3–5 nights",
          body: "Hermanus, Knysna or Wilderness, and Tsitsikamma. Offered as a pre- or post-trip, never squeezed into the ten-day flagship.",
        },
        {
          title: "Winelands, 2–3 nights",
          body: "Stellenbosch or Franschhoek, with food and heritage rather than a cellar crawl.",
        },
        {
          title: "Private family version",
          body: "The same spine, with a dedicated vehicle, adjusted rooming and age-appropriate pacing. For older children and multigenerational groups.",
        },
      ],
      promisesTitle: "What we will not promise",
      promises: [
        "A named lodge, private concession or exclusive vehicle until a written contract says so.",
        "A friend or host driving inside a private reserve unless the reserve formally permits that role.",
        "Exact domestic flight times, or wildlife sightings, or “the Big Five”.",
        "Community visits as entertainment. Those, if offered, are community-led with a transparent commercial benefit.",
      ],
    },
    approach: {
      kicker: "How we travel",
      title: "Fewer places. Better days.",
      lede: "The commercial message is simple: see South Africa with fewer rushed transfers, excellent local partners, and stories that make the places matter.",
      sections: [
        {
          title: "Hosted, not herded",
          body: "SA Roots designs the journey and stays responsible to the traveller for the package it sells. On the ground, licensed South African professionals deliver the driving, guiding and lodge programmes. The founder coordinates product, communication and quality — and hosts the thread that holds the days together.",
        },
        {
          title: "Stories with a source",
          body: "Cape Town has enough real history without invention. District Six, the mountain, the peninsula, the Winelands and the bush all carry documented lives. We use local guides for the parts that are theirs, and we do not dress a trip as a family saga that cannot be verified.",
        },
        {
          title: "Small groups, on purpose",
          body: "Six to twelve guests, with eight to ten as the working range. Below six, a departure is a private trip at a private price. Above twelve, the vehicle and the table stop feeling like a journey.",
        },
        {
          title: "Responsible local delivery",
          body: "Accommodation, transport, guides and safari services are contracted from independent, insured, reputable suppliers. Community experiences, if included, are community-led. We collect two quotations for every major cost category before we lock a departure.",
        },
        {
          title: "An optional learning layer",
          body: "Light wildlife, science or mathematics content can be added for families and educator groups. It is a feature to request, not a mass-market headline. The core trip stands without it.",
        },
      ],
      whoTitle: "Who it is for",
          whoBody:
        "Dutch-speaking couples and friends, roughly 35–64, who want a first or second South Africa trip without self-driving. Families with older children. Households in the Netherlands with a South Africa link who want to share the country well. Educator groups who want purpose without turning the bush into a classroom.",
    },
    practical: {
      kicker: "Practical",
      title: "Price, papers, and the fine print that matters.",
      lede: "Transparent now, bookable later. Figures below are planning assumptions until suppliers, the guarantee scheme and insurance have quoted.",
      priceTitle: "Indicative land price",
      priceLede:
        "Working retail band €3,850–€4,450 per person, land-only. The sketch below uses a mid-band €4,100 to show how a group of your size would add up — it is not a quotation.",
      priceFrom: "€4,100",
      priceUnit: "per person, mid-band sketch",
      pricePoints: [
        "International flights are booked and paid by you",
        "Single supplements, child rates and private-vehicle upgrades are quoted separately",
        "We reprice if supplier costs or the rand move beyond the quote tolerance",
        "A commercial minimum of six guests, even when the maths break even lower",
      ],
      guestsLabel: "Guests on the departure",
      indicativeTotal: "Indicative group total",
      perPerson: "Per person",
      sketchNote:
        "Planning sketch only. Final price follows written supplier rates, guarantee-scheme fees and insurance.",
      groupTitle: "How a group is built",
      groupBody:
        "Scheduled small-group dates, or a private departure on your own dates. Rooming is twin, double, or single with supplement. We will not publish a date until a complete cost sheet supports the margin we need to run the trip properly.",
      travelTitle: "Before you fly",
      travelPoints: [
        "South Africa launched Electronic Travel Authorisation (ETA) on 12 August 2026. Eligibility and process can change — we send a dated checklist before each departure, and you should still check the Department of Home Affairs.",
        "From 1 July 2026, travellers entering or leaving South Africa must submit the SARS online traveller declaration. That is a personal customs obligation, not something we file for you.",
        "You arrange your own travel, medical and cancellation insurance. We will remind you; we will not pretend it is included.",
        "The land product is a package trip under current Dutch rules: accommodation plus transport and activities in one offer. International flights bought separately do not change that.",
      ],
      faqTitle: "Questions we expect",
      faq: [
        {
          q: "Can I book now?",
          a: "Not yet. Enquiries are open. Bookings open only after insolvency protection, tour-operator insurance and a reviewed travel agreement are in place. We will not take customer money before that gate.",
        },
        {
          q: "Why are international flights excluded?",
          a: "So you can use your own airline, miles or dates, and so the land package stays a clean, hosted product. We advise on routing and connection buffers; we do not sell the long-haul ticket.",
        },
        {
          q: "Will you guarantee the Big Five?",
          a: "No. We market habitat, guiding and time in the bush. Sightings are the bush’s business, not a clause in a brochure.",
        },
        {
          q: "Is this ANVR or SGR?",
          a: "We will not display those marks until a scheme has accepted us and supplied the correct wording. Package-travel insolvency protection is mandatory before we accept funds; the provider is still an onboarding decision.",
        },
        {
          q: "What about VAT?",
          a: "Dutch travel businesses may use the reisbureauregeling (travel-agency margin scheme). The exact invoicing method will be confirmed with an accountant. This is not the same as “VAT exempt”.",
        },
        {
          q: "Can you take a private family or a school group?",
          a: "Yes, as a dedicated departure on the same spine. Educator content is optional. We do not use employer, student or parent networks for promotion unless that is clearly permitted.",
        },
      ],
    },
    enquire: {
      kicker: "Enquire",
      title: "Tell us how you want to travel.",
      lede: "This is a conversation request, not a booking. We use it to see whether the trip, the dates and the pace fit — then we reply within two working days.",
      stepsTitle: "What happens next",
      steps: [
        {
          title: "This form",
          body: "Dates, group size, rooming, budget and how you like to travel. No passport copies. No payment.",
        },
        {
          title: "A reply",
          body: "Within two working days of your email arriving, with an honest read on fit and timing. If we are not the right host, we will say so.",
        },
        {
          title: "A short call",
          body: "Fifteen to thirty minutes. We do not collect information we do not need.",
        },
        {
          title: "A written proposal",
          body: "Only if it is a match: itinerary, total price, inclusions, exclusions and an expiry date. Bookings follow later, once the legal gate is open.",
        },
      ],
      formTitle: "Enquiry",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      phoneHint: "A Dutch or international number is fine.",
      dates: "Preferred timing",
      datesHint: "For example: March 2027, autumn 2027, or a private date.",
      groupSize: "Group size",
      rooming: "Rooming",
      budget: "Budget band",
      travelStyle: "Travel style",
      message: "Anything we should know",
      messageHint: "Pace, mobility, celebrations, dietary needs, or why South Africa, in your words.",
      choose: "Choose",
      submit: "Send enquiry",
      submitting: "Sending…",
      privacy:
        "Sending opens your email app with this enquiry, addressed to us. We use it only to reply. We do not take payment on this site, and we never ask for card details here.",
      notice:
        "Submitting this form does not reserve space, take a deposit, or create a travel contract.",
      successTitle: "Your email is ready to send.",
      successBody:
        "This form does not deliver on its own. Your mail app should open with the enquiry. Send that email — we reply within two working days of receiving it. If nothing opened, use the button below.",
      successSend: "Open email to send",
      successCopy: "Copy the enquiry",
      successCopied: "Copied",
      successAnother: "Send another enquiry",
      errors: {
        name: "Please add your name.",
        email: "Please add a valid email.",
        dates: "Please tell us roughly when you want to travel.",
        required: "Please choose an option.",
      },
      groupOptions: [
        { value: "2", label: "2 guests" },
        { value: "4", label: "4 guests" },
        { value: "6", label: "6 guests" },
        { value: "8", label: "8 guests" },
        { value: "10", label: "10 guests" },
        { value: "12", label: "12 guests" },
        { value: "private", label: "Private departure — tell us the number" },
      ],
      roomingOptions: [
        { value: "double", label: "Double (one bed)" },
        { value: "twin", label: "Twin (two beds)" },
        { value: "single", label: "Single (expect a supplement)" },
        { value: "family", label: "Family / mixed rooming" },
      ],
      budgetOptions: [
        { value: "3850", label: "Around the €3,850 band" },
        { value: "4250", label: "Around the €4,250 band" },
        { value: "flex", label: "Flexible, depending on lodge standard" },
        { value: "private", label: "Private trip — quote us" },
      ],
      styleOptions: [
        { value: "group", label: "Scheduled small group" },
        { value: "private", label: "Private departure" },
        { value: "family", label: "Family / multigenerational" },
        { value: "educator", label: "Educator or interest group" },
      ],
    },
  },
  nl: {
    meta: {
      title: "SA Roots Tours",
      description:
        "Kleine groepsreizen naar Kaapstad en de Greater Kruger, vanuit Nederland. Rustig, begeleid, alleen het landarrangement. Eerste vertrekken beoogd maart–april 2027.",
      pages: {
        home: "SA Roots Tours — Kaapstad en de Greater Kruger",
        journey: "De reis — SA Roots Tours",
        approach: "Onze manier — SA Roots Tours",
        practical: "Prijs en praktisch — SA Roots Tours",
        enquire: "Aanvraag — SA Roots Tours",
        missing: "Pagina niet gevonden — SA Roots Tours",
      },
    },
    brand: {
      name: "SA Roots Tours",
      mark: "SA Roots",
      tagline: "Persoonlijke reizen naar Zuid-Afrika vanuit Nederland",
    },
    nav: {
      journey: "De reis",
      approach: "Onze manier",
      practical: "Praktisch",
      enquire: "Aanvraag",
      closeMenu: "Menu sluiten",
      openMenu: "Menu openen",
    },
    prelaunch:
      "Eerste vertrekken beoogd in maart–april 2027. Aanvragen zijn open; boekingen nog niet.",
    footer: {
      blurb:
        "Een specialist voor intieme reizen naar Kaapstad en de Greater Kruger, ontworpen vanuit Nederland en uitgevoerd met erkende Zuid-Afrikaanse partners.",
      explore: "Ontdek",
      contact: "Schrijf ons",
      notice:
        "SA Roots Tours is in pre-launch. Deze site neemt geen betalingen of bevestigde boekingen aan. Inreisregels kunnen wijzigen — controleer officiële bronnen voor vertrek.",
      rights: "SA Roots Tours. Pre-launch planningsite.",
    },
    missing: {
      title: "Deze pagina staat niet op de kaart.",
      body: "Dit adres hoort niet bij een pagina op deze site.",
      home: "Terug naar het begin",
    },
    home: {
      kicker: "Kaapstad · Greater Kruger · vanuit Nederland",
      headline: "Zuid-Afrika, zonder haast.",
      lede: "Tien dagen. Kleine groepen. Sterke lokale partners, en verhalen die de plekken betekenis geven.",
      ctaPrimary: "Plan een gesprek",
      ctaSecondary: "Lees het programma",
      facts: [
        { label: "Duur", value: "10 dagen / 9 nachten" },
        { label: "Groep", value: "6–12 gasten" },
        { label: "Vorm", value: "Landarrangement" },
        { label: "Pilot", value: "Maart–april 2027" },
      ],
      manifestoKicker: "Het idee",
      manifestoTitle: "Geen standaard Big Five-rondreis.",
      manifestoBody:
        "De vlaggenschipreis is bewust begeleid: vier nachten in Kaapstad, een binnenlandse vlucht naar het Lowveld, daarna vier nachten safari in de Greater Kruger. Minder transfers. Langer blijven. Ruimte om echt aan te komen. Internationale vluchten boekt u zelf; het Zuid-Afrikaanse landarrangement ontwerpen en begeleiden wij.",
      pillars: [
        {
          title: "Zonder haast",
          body: "Kaapstad en Kruger, geen race dwars door het land. De Garden Route is een optionele verlenging, geen dag die er tussengepropt wordt.",
        },
        {
          title: "Klein, met opzet",
          body: "Zes tot twaalf gasten. We rekenen op acht tot tien, zodat voertuigen, tafels en gamedrives menselijk blijven.",
        },
        {
          title: "Eerlijke verhalen",
          body: "Geschiedenis, landschap en echte lokale kennis — geen verzonnen familielegendes. Wat we niet kunnen verantwoorden, vertellen we niet.",
        },
      ],
      flagshipKicker: "Vlaggenschip",
      flagshipTitle: "Roots & Wildlife Stories",
      flagshipBody:
        "Kaapstad voor de berg, het schiereiland en de gelaagde stad. Greater Kruger voor vroege ritten, lange middagen en een lodge die naar de bush kijkt. Dezelfde route kan als privé familievertrek.",
      flagshipCta: "Open het dagprogramma",
      capeTitle: "Kaapstad, met tijd",
      capeBody:
        "Tafelberg als het weer meewerkt, het schiereiland en Boulders, en een dag die kantelt naar Bo-Kaap, eten of de wijnlanden. Een welkomstdiner bij aankomst — daarna vier nachten in dezelfde stad.",
      krugerTitle: "Greater Kruger, geen voorbijvlucht",
      krugerBody:
        "Vier nachten. Ochtend- en middagritten met de bevoegde rangers van de lodge. Geen beloofde sightings, geen jacht tussen reservaten. Habitat, begeleiding en tempo — dat is het product.",
      priceKicker: "Voorlopig",
      priceTitle: "Vanaf € 3.850 per persoon",
      priceBody:
        "Alleen het landarrangement, in een werkband van € 3.850–€ 4.450. De gepubliceerde prijs volgt pas na offertes van leveranciers, verzekering en insolventiebescherming. Internationale vluchten zitten er niet bij.",
      priceFrom: "€ 3.850–€ 4.450 p.p.",
      priceNote: "Planningsband, geen boekbare tarief.",
      honestyTitle: "Waar we staan",
      honestyBody:
        "Dit is een specialist in pre-launch, geen volume-operator. We nemen uw geld niet aan tot de reisovereenkomst, insolventiebescherming en verzekering rond zijn. Wat we wél doen: praten — over data, kamers, tempo en of deze reis werkelijk bij u past.",
      closeTitle: "Als dit tempo het uwe is",
      closeBody:
        "Stuur een aanvraag. We antwoorden binnen twee werkdagen en plannen, als het past, een kort gesprek. Geen aanbetaling. Geen verplichting.",
    },
    journey: {
      kicker: "10 dagen / 9 nachten",
      title: "Eerst Kaapstad, dan de Greater Kruger.",
      lede: "Een voorbeeldprogramma — lodges, voertuigen en exacte binnenlandse tijden worden pas schriftelijk bevestigd na contracting. Weer en wildlife hebben het laatste woord.",
      dayLabel: "Dag",
      jumpLabel: "Spring naar een dag",
      days: [
        {
          day: 1,
          theme: "Aankomst Kaapstad",
          programme:
            "Ophalen op het vliegveld, inchecken, een rustige oriëntatie aan de waterkant en een welkomstdiner. Niets heldhaftigs op dag één.",
          night: "Kaapstad",
          image: "/images/waterfront.jpg",
          imageAlt: "Haven van Kaapstad in het blauwe uur, Tafelberg op de achtergrond",
        },
        {
          day: 2,
          theme: "Berg en stadsverhalen",
          programme:
            "Tafelberg als het weer het toelaat, daarna stadsoriëntatie. Bo-Kaap en District Six met een gekwalificeerde lokale gids — geschiedenis, geen kostuum.",
          night: "Kaapstad",
          image: "/images/city-dusk.jpg",
          imageAlt: "Kaapstad bij schemering vanaf de berg",
        },
        {
          day: 3,
          theme: "Kaapse schiereiland",
          programme:
            "Cape Point en de kustroute, de pinguïnkolonie bij Boulders en stops onderweg. Een hele dag privévervoer, met tijd om stil te staan aan de rand van het continent.",
          night: "Kaapstad",
          image: "/images/cape-peninsula.jpg",
          imageAlt: "Rotsachtige kliffen van het Kaapse schiereiland",
        },
        {
          day: 4,
          theme: "Cultuur, eten of wijnlanden",
          programme:
            "De groep blijft bijeen, met keuze uit een module: een community-geleid cultuurprogramma, een dag Kaaps eten en geschiedenis, of de wijnlanden. Geen winkelen-als-programma.",
          night: "Kaapstad",
          image: "/images/winelands.jpg",
          imageAlt: "Wijngaarden bij Stellenbosch in namiddaglicht",
        },
        {
          day: 5,
          theme: "Kaapstad naar het Lowveld",
          programme:
            "Een geplande binnenlandse vlucht naar een Lowveld-luchthaven, daarna transfer naar de gecontracteerde safarilodge. De route volgt actuele vluchten — we verzinnen geen directe hops.",
          night: "Greater Kruger",
          image: "/images/gamedrive.jpg",
          imageAlt: "Safarivoertuig op een rode aardeweg bij het eerste licht",
        },
        {
          day: 6,
          theme: "Safari",
          programme:
            "Ochtend- en middag- of avondrit met de bevoegde ranger van lodge of reservaat. Begeleide reflectie tussen de ritten, geen les in de auto.",
          night: "Greater Kruger",
          image: "/images/kruger-dawn.jpg",
          imageAlt: "Dageraad door acacia's in de Greater Kruger",
        },
        {
          day: 7,
          theme: "Safari",
          programme:
            "Twee safari-activiteiten, of één langere, afhankelijk van het lodgeprogramma. Optioneel licht wildlife- en wetenschapsverhaal voor wie dat wil.",
          night: "Greater Kruger",
          image: "/images/lodge-dusk.jpg",
          imageAlt: "Lodge-terras bij schemering, uitkijkend over de bush",
        },
        {
          day: 8,
          theme: "Safari",
          programme:
            "Een flexibele safaridag. Optionele bushwalk alleen waar een bevoegde aanbieder die uitvoert. Rust is onderdeel van de reis, geen gat in het programma.",
          night: "Greater Kruger",
          image: "/images/kruger-dawn.jpg",
          imageAlt: "Bushveld van de Greater Kruger bij zonsopkomst",
        },
        {
          day: 9,
          theme: "Laatste volle safaridag",
          programme:
            "Ochtend- en middagsafari, daarna een afscheidsdiner. Geen onnodige transfers tussen reservaten tenzij ze het verblijf echt beter maken.",
          night: "Greater Kruger",
          image: "/images/gamedrive.jpg",
          imageAlt: "Gasten en rangers op een vroege gamedrive",
        },
        {
          day: 10,
          theme: "Vertrek",
          programme:
            "Een laatste activiteit als de vluchttijd het toelaat, daarna transfer naar de Lowveld-luchthaven en een binnenlandse aansluiting op uw zelf geboekte vervolgreis.",
          night: "—",
          image: "/images/hero-table-mountain.jpg",
          imageAlt: "Tafelberg over Tafelbaai",
        },
      ],
      nightsLabel: "Nacht",
      inclusionsTitle: "Inbegrepen in het landarrangement",
      inclusions: [
        "Negen nachten gecontracteerde accommodatie",
        "Binnenlandse Zuid-Afrikaanse vlucht(en) volgens programma",
        "Privé of gecontracteerd vervoer over land",
        "Genoemde begeleide activiteiten en gecontracteerde safari-activiteiten",
        "Genoemde maaltijden en gespecificeerde entrees of conservatieheffingen",
        "Begeleiding door SA Roots en een noodcontact",
      ],
      exclusionsTitle: "Niet inbegrepen",
      exclusions: [
        "Internationale vluchten van en naar Zuid-Afrika",
        "Reis-, medische en annuleringsverzekering",
        "Paspoort, ETA of visum, en grenskosten",
        "De SARS online reizigersverklaring (uw eigen verplichting)",
        "Fooien, persoonlijke uitgaven en optionele activiteiten die niet genoemd zijn",
      ],
      extensionsTitle: "Verlengingen, als u meer tijd heeft",
      extensions: [
        {
          title: "Garden Route, 3–5 nachten",
          body: "Hermanus, Knysna of Wilderness, en Tsitsikamma. Als voor- of nareis, nooit gepropt in de tien dagen van het vlaggenschip.",
        },
        {
          title: "Wijnlanden, 2–3 nachten",
          body: "Stellenbosch of Franschhoek, met eten en erfgoed in plaats van een kelder-race.",
        },
        {
          title: "Privé familieversie",
          body: "Hetzelfde ruggengraat, met eigen voertuig, aangepaste kamers en tempo dat bij oudere kinderen en meerdere generaties past.",
        },
      ],
      promisesTitle: "Wat we niet beloven",
      promises: [
        "Een genoemde lodge, privéconcessie of exclusief voertuig tot een schriftelijk contract dat zegt.",
        "Een vriend of host die in een privéreservaat rijdt, tenzij het reservaat die rol formeel toestaat.",
        "Exacte binnenlandse vluchttijden, wildlife-sightings, of “de Big Five”.",
        "Community-bezoeken als vermaak. Als we ze aanbieden, zijn ze community-geleid, met een helder commercieel voordeel.",
      ],
    },
    approach: {
      kicker: "Onze manier",
      title: "Minder plekken. Betere dagen.",
      lede: "De boodschap is eenvoudig: Zuid-Afrika zien met minder gehaaste transfers, uitstekende lokale partners, en verhalen die de plekken betekenis geven.",
      sections: [
        {
          title: "Begeleid, niet opgejaagd",
          body: "SA Roots ontwerpt de reis en blijft verantwoordelijk jegens de reiziger voor het pakket dat het verkoopt. Op de grond voeren erkende Zuid-Afrikaanse professionals het rijden, gidsen en lodgeprogramma uit. De founder coördineert product, communicatie en kwaliteit — en houdt de draad tussen de dagen vast.",
        },
        {
          title: "Verhalen met een bron",
          body: "Kaapstad heeft genoeg echte geschiedenis. District Six, de berg, het schiereiland, de wijnlanden en de bush dragen gedocumenteerde levens. Lokale gidsen vertellen wat van hen is. We verkleden een reis niet als een familie-epos dat niet te verifiëren is.",
        },
        {
          title: "Kleine groepen, expres",
          body: "Zes tot twaalf gasten, met acht tot tien als werkbereik. Onder de zes is een vertrek een privéreis tegen een privéprijs. Boven de twaalf voelen voertuig en tafel niet meer als een reis.",
        },
        {
          title: "Verantwoord lokaal",
          body: "Accommodatie, vervoer, gidsen en safaridiensten komen van zelfstandige, verzekerde, gerenommeerde leveranciers. Community-ervaringen, als ze erin zitten, zijn community-geleid. Voor elke grote kostenpost vragen we minstens twee offertes.",
        },
        {
          title: "Optionele leerlaag",
          body: "Licht wildlife-, wetenschaps- of wiskunde-inhoud kan voor families en educatieve groepen. Het is een optie om te vragen, geen massamarkt-kop. De kernreis staat ook zonder.",
        },
      ],
      whoTitle: "Voor wie",
      whoBody:
        "Nederlandstalige stellen en vrienden, grofweg 35–64, die een eerste of tweede Zuid-Afrika-reis willen zonder zelf te rijden. Gezinnen met oudere kinderen. Huishoudens in Nederland met een band met Zuid-Afrika die het land goed willen delen. Educatieve groepen die betekenis willen zonder van de bush een klaslokaal te maken.",
    },
    practical: {
      kicker: "Praktisch",
      title: "Prijs, papieren, en de kleine lettertjes die ertoe doen.",
      lede: "Nu transparant, later boekbaar. De bedragen hieronder zijn planningsaannames tot leveranciers, het garantiefonds en de verzekering hebben geoffreerd.",
      priceTitle: "Indicatieve landprijs",
      priceLede:
        "Werkband € 3.850–€ 4.450 per persoon, alleen landarrangement. De schets hieronder gebruikt € 4.100 in het midden van de band om een groep van uw omvang te laten optellen — het is geen offerte.",
      priceFrom: "€ 4.100",
      priceUnit: "per persoon, midden van de band",
      pricePoints: [
        "Internationale vluchten boekt en betaalt u zelf",
        "Singletoeslag, kindertarieven en privévoertuig worden apart geoffreerd",
        "We herprijzen als leverancierskosten of de rand buiten de offertetolerantie bewegen",
        "Commercieel minimum van zes gasten, ook als de som lager break-even is",
      ],
      guestsLabel: "Gasten op het vertrek",
      indicativeTotal: "Indicatief groepstotaal",
      perPerson: "Per persoon",
      sketchNote:
        "Alleen een planningsschets. De uiteindelijke prijs volgt schriftelijke leveranciersprijzen, fondskosten en verzekering.",
      groupTitle: "Hoe een groep tot stand komt",
      groupBody:
        "Geplande kleine-groepsdata, of een privévertrek op uw eigen data. Kamers: twin, double, of single met toeslag. We publiceren geen datum tot een compleet kostenblad de marge steunt die we nodig hebben om de reis goed te rijden.",
      travelTitle: "Voor u vliegt",
      travelPoints: [
        "Zuid-Afrika lanceerde Electronic Travel Authorisation (ETA) op 12 augustus 2026. Wie in aanmerking komt kan wijzigen — we sturen voor elk vertrek een gedateerde checklist, en u controleert zelf nog het Department of Home Affairs.",
        "Vanaf 1 juli 2026 moeten reizigers die Zuid-Afrika in- of uitgaan de SARS online reizigersverklaring indienen. Dat is een persoonlijke douaneplicht, geen formulier dat wij voor u invullen.",
        "Reis-, medische en annuleringsverzekering regelt u zelf. We herinneren u eraan; we doen niet alsof die is inbegrepen.",
        "Het landproduct is onder de huidige Nederlandse regels een pakketreis: accommodatie plus vervoer en activiteiten in één aanbod. Apart gekochte internationale vluchten veranderen dat niet.",
      ],
      faqTitle: "Vragen die we verwachten",
      faq: [
        {
          q: "Kan ik nu boeken?",
          a: "Nog niet. Aanvragen zijn open. Boekingen openen pas als insolventiebescherming, reisorganisatieverzekering en een getoetste reisovereenkomst rond zijn. Voor die poort nemen we geen klantgeld aan.",
        },
        {
          q: "Waarom zitten internationale vluchten er niet bij?",
          a: "Zodat u uw eigen maatschappij, miles of data kunt gebruiken, en zodat het landarrangement een helder, begeleid product blijft. We adviseren over routing en overstaptijd; we verkopen het langeafstandsticket niet.",
        },
        {
          q: "Garanderen jullie de Big Five?",
          a: "Nee. We verkopen habitat, gidsen en tijd in de bush. Sightings zijn de zaak van de bush, geen clausule in een brochure.",
        },
        {
          q: "Is dit ANVR of SGR?",
          a: "Die merken tonen we pas als een fonds ons heeft geaccepteerd en de juiste tekst heeft aangeleverd. Insolventiebescherming voor pakketreizen is verplicht voordat we geld aannemen; de aanbieder is nog een onboardingbeslissing.",
        },
        {
          q: "Hoe zit het met btw?",
          a: "Nederlandse reisbedrijven kunnen de reisbureauregeling gebruiken. De exacte factuurmethode bevestigen we met een accountant. Dat is niet hetzelfde als “btw-vrij”.",
        },
        {
          q: "Kunnen jullie een privé gezin of een schoolgroep aan?",
          a: "Ja, als eigen vertrek op dezelfde ruggengraat. Educatieve inhoud is optioneel. We gebruiken geen werkgevers-, leerlingen- of ouder-netwerken voor werving tenzij dat duidelijk mag.",
        },
      ],
    },
    enquire: {
      kicker: "Aanvraag",
      title: "Vertel hoe u wilt reizen.",
      lede: "Dit is een gespreksverzoek, geen boeking. We gebruiken het om te zien of de reis, de data en het tempo passen — daarna antwoorden we binnen twee werkdagen.",
      stepsTitle: "Wat er daarna gebeurt",
      steps: [
        {
          title: "Dit formulier",
          body: "Data, groepsgrootte, kamers, budget en hoe u wilt reizen. Geen paspoortkopieën. Geen betaling.",
        },
        {
          title: "Een antwoord",
          body: "Binnen twee werkdagen nadat uw e-mail binnen is, met een eerlijke inschatting van fit en timing. Als wij niet de juiste host zijn, zeggen we dat.",
        },
        {
          title: "Een kort gesprek",
          body: "Vijftien tot dertig minuten. We vragen niet wat we niet nodig hebben.",
        },
        {
          title: "Een schriftelijk voorstel",
          body: "Alleen als het past: programma, totaalprijs, in- en exclusief, en een geldigheidsdatum. Boeken volgt later, als de juridische poort open is.",
        },
      ],
      formTitle: "Aanvraag",
      name: "Volledige naam",
      email: "E-mail",
      phone: "Telefoon (optioneel)",
      phoneHint: "Nederlands of internationaal nummer is prima.",
      dates: "Gewenste periode",
      datesHint: "Bijvoorbeeld: maart 2027, najaar 2027, of een privédatum.",
      groupSize: "Groepsgrootte",
      rooming: "Kamers",
      budget: "Budgetband",
      travelStyle: "Reisstijl",
      message: "Wat we nog moeten weten",
      messageHint: "Tempo, mobiliteit, vieringen, dieet, of waarom Zuid-Afrika, in uw woorden.",
      choose: "Kies",
      submit: "Verstuur aanvraag",
      submitting: "Versturen…",
      privacy:
        "Versturen opent uw e-mailapp met deze aanvraag, aan ons gericht. We gebruiken hem alleen om te antwoorden. We nemen geen betaling aan op deze site en vragen hier nooit om kaartgegevens.",
      notice:
        "Dit formulier reserveert geen plaats, neemt geen aanbetaling, en sluit geen reisovereenkomst.",
      successTitle: "Uw e-mail staat klaar.",
      successBody:
        "Dit formulier bezorgt de aanvraag niet vanzelf. Uw e-mailapp zou moeten openen. Verstuur die e-mail — we antwoorden binnen twee werkdagen nadat we hem ontvangen. Opent er niets, gebruik dan de knop hieronder.",
      successSend: "Open e-mail om te versturen",
      successCopy: "Kopieer de aanvraag",
      successCopied: "Gekopieerd",
      successAnother: "Nog een aanvraag sturen",
      errors: {
        name: "Vul uw naam in.",
        email: "Vul een geldig e-mailadres in.",
        dates: "Zeg globaal wanneer u wilt reizen.",
        required: "Kies een optie.",
      },
      groupOptions: [
        { value: "2", label: "2 gasten" },
        { value: "4", label: "4 gasten" },
        { value: "6", label: "6 gasten" },
        { value: "8", label: "8 gasten" },
        { value: "10", label: "10 gasten" },
        { value: "12", label: "12 gasten" },
        { value: "private", label: "Privévertrek — noem het aantal" },
      ],
      roomingOptions: [
        { value: "double", label: "Double (één bed)" },
        { value: "twin", label: "Twin (twee bedden)" },
        { value: "single", label: "Single (reken op toeslag)" },
        { value: "family", label: "Familie / gemengde kamers" },
      ],
      budgetOptions: [
        { value: "3850", label: "Rond de band van € 3.850" },
        { value: "4250", label: "Rond de band van € 4.250" },
        { value: "flex", label: "Flexibel, afhankelijk van de lodge" },
        { value: "private", label: "Privéreis — offerte op maat" },
      ],
      styleOptions: [
        { value: "group", label: "Geplande kleine groep" },
        { value: "private", label: "Privévertrek" },
        { value: "family", label: "Familie / meerdere generaties" },
        { value: "educator", label: "Educatieve of interesse-groep" },
      ],
    },
  },
};

export type { Copy };
