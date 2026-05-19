export type Lang = "en" | "ar";

export type ProductCategoryId = "wood" | "wpc" | "furniture";

export type ProductItem = {
  id: string;
  title: string;
  imageUrl: string;
};

export type ProductCategory = {
  id: ProductCategoryId;
  title: string;
  items: ProductItem[];
};

export type SiteData = {
  brandName: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: {
    src: string;
    alt: string;
  };
  a11y: {
    toggleTheme: string;
  };
  catalogLabel: string;
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  productsTitle: string;
  productTabs: ProductCategory[];
  aboutTitle: string;
  aboutText: string;
  contactTitle: string;
  contactBlurb: string;
  contactForm: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    formAction: string;
  };
  footer: {
    copyright: string;
    emailPhone: string;
    address: string;
    tagline: string;
  };
  whatsapp: {
    href: string;
    title: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
};

const pin = {
  wood1: "https://i.pinimg.com/736x/ea/92/eb/ea92eb664a40d5ef1aa4794b16e304e7.jpg",
  wood2: "https://i.pinimg.com/736x/80/60/0d/80600d2a3deb3d8406f086b523c7a75b.jpg",
  wood3: "https://i.pinimg.com/736x/30/f2/49/30f249d77068aaf96016ffca2e9605e4.jpg",
  wood4: "https://i.pinimg.com/736x/35/a0/7c/35a07c306b435b4066ef4588ae606ee3.jpg",
  wpc1: "https://i.pinimg.com/736x/68/07/9d/68079d868af462437084d639c5b53839.jpg",
  wpc2: "https://i.pinimg.com/736x/9c/4b/b4/9c4bb4a9d7281d14b329ecac43c52524.jpg",
  wpc3: "https://i.pinimg.com/736x/88/bf/e9/88bfe9c5b6dff8b2b218576f4dde6e8c.jpg",
  wpc4: "https://i.pinimg.com/736x/ab/71/24/ab7124dda9ef0a53274d6c9f776bfe04.jpg",
  f1: "https://i.pinimg.com/736x/62/00/b8/6200b8853f26a3d527a178fc0e3d64f9.jpg",
  f2: "https://i.pinimg.com/736x/24/06/ad/2406add76880c98db91de2d4a2839e81.jpg",
  f3: "https://i.pinimg.com/736x/8e/b8/ef/8eb8ef89533030c11f34a877af76a41f.jpg",
  f4: "https://i.pinimg.com/736x/ea/7e/c3/ea7ec3c4898827fb61a4b34c061b1f8a.jpg",
};

export const siteData: Record<Lang, SiteData> = {
  en: {
    brandName: "BURDEEN",
    heroTitle: "Welcome to BURDEEN",

    heroDescription:
      "BURDEEN specializes in premium WPC doors that combine durability, moisture resistance, and modern wood-inspired designs. We provide elegant solutions for homes, offices, and hotels with up to 10 years warranty.",
    heroImage: {
      src: "/images/hero_image4.jpg",
      alt: "Burdeen — premium WPC door in a refined interior setting",
    },
    a11y: {
      toggleTheme: "Toggle dark mode",
    },
    catalogLabel: "Catalog",
    nav: {
      home: "Home",
      products: "Our products",
      about: "About us",
      contact: "Contact us",
    },
    productsTitle: "Our products",
    productTabs: [
      {
        id: "wood",
        title: "Wooden Doors",
        items: [
          { id: "wood-1", title: "Classic Wooden Door", imageUrl: pin.wood1 },
          {
            id: "wood-2",
            title: "Modern Door with Contemporary Design",
            imageUrl: pin.wood2,
          },
          {
            id: "wood-3",
            title: "Classic Wooden Door with French Style",
            imageUrl: pin.wood3,
          },
          {
            id: "wood-4",
            title: "Wooden Door with Modern Metal Handle",
            imageUrl: pin.wood4,
          },
        ],
      },
      {
        id: "wpc",
        title: "WPC Doors",
        items: [
          { id: "wpc-1", title: "Classic WPC Door", imageUrl: pin.wpc1 },
          {
            id: "wpc-2",
            title: "WPC Door with Unique Design",
            imageUrl: pin.wpc2,
          },
          { id: "wpc-3", title: "WPC Door with a Modern Touch", imageUrl: pin.wpc3 },
          { id: "wpc-4", title: "WPC Door with Luxurious Finish", imageUrl: pin.wpc4 },
        ],
      },
      {
        id: "furniture",
        title: "Furniture",
        items: [
          {
            id: "f-1",
            title: "Chair with Elegant Wooden Frame",
            imageUrl: pin.f1,
          },
          { id: "f-2", title: "Wooden Side Cabinet", imageUrl: pin.f2 },
          {
            id: "f-3",
            title: "Double Door Wardrobe with Classic Design",
            imageUrl: pin.f3,
          },
          {
            id: "f-4",
            title: "Storage Bed with Soft Lines",
            imageUrl: pin.f4,
          },
        ],
      },
    ],
    aboutTitle: "About us",
    aboutText:
      "Burdeen Industrial Company was established in the Kingdom of Saudi Arabia in May 2023 with the vision of creating a specialized manufacturing facility for doors and furniture, built on a foundation of quality and integrity. Leveraging the Kingdom’s advanced infrastructure, Burdeen aims to actively contribute to the development of the local industry and support the nation’s dynamic economic growth.\n\nThis venture is the natural progression of a long-standing expertise dating back to 2008 in the trading of building materials. Over the years, the company has built a strong reputation for supplying high-quality materials that meet the demands of major projects. Today, Burdeen continues this legacy with a firm commitment to delivering precision-crafted products that add real value to its clients.\n\nDriven by a belief in long-term partnerships based on trust and professionalism, the company’s primary goal is to reach a wide base of distinguished clients in the real estate development and construction sectors. By offering advanced manufacturing solutions and maintaining the highest standards of excellence, Burdeen positions itself as a trusted partner in every project it undertakes.",
    contactTitle: "Contact us",
    contactBlurb: "Send a message and we will get back to you shortly.",
    contactForm: {
      nameLabel: "Name:",
      emailLabel: "E-mail:",
      messageLabel: "Your message",
      submitLabel: "Send",
      formAction: "https://formsubmit.co/info@burdeenbic.com",
    },
    footer: {
      copyright: "Copyright © 2025 BURDEEN",
      emailPhone: "📧info@burdeenbic.com | 📞+966537987180",
      address: "📍 Riyadh - Al Sulay Dist. - Al Hassan Al Khater St. - Bldg. 3188 ",
      tagline: "Precision-crafted wooden & WPC doors and furniture — Riyadh, Saudi Arabia.",
    },
    whatsapp: {
      href: "https://wa.me/966537987180",
      title: "Contact us via WhatsApp",
    },
    contact: {
      email: "info@burdeenbic.com",
      phone: "+966537987180",
      address: "Riyadh - Al Sulay Dist. - Al Hassan Al Khater St. - Bldg. 3188",
    },
  },
  ar: {
    brandName: "بـــرديــــــــــــــــن",
    heroTitle: "أهلاً بكم في BURDEEN",
    heroDescription:
      "بردين مصنع متخصص في أبواب WPC عالية الجودة، تجمع بين المتانة، مقاومة الرطوبة، والتصاميم العصرية المستوحاة من الخشب الطبيعي. نقدم حلولًا أنيقة للمنازل والمكاتب والفنادق مع ضمان يصل إلى 10 سنوات.",
    heroImage: {
      src: "/images/hero_image3.jpg",
      alt: "بردين — باب WPC فاخر في بيئة داخلية راقية",
    },
    a11y: {
      toggleTheme: "تبديل الوضع الداكن",
    },
    catalogLabel: "الكاتلوج",
    nav: {
      home: "الرئيسية",
      products: "منتجاتنا",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    productsTitle: "منتجاتنا",
    productTabs: [
      {
        id: "wood",
        title: "الأبواب الخشبية",
        items: [
          { id: "wood-1", title: "باب خشبي كلاسيكي", imageUrl: pin.wood1 },
          { id: "wood-2", title: "باب حديث بتصميم عصري", imageUrl: pin.wood2 },
          { id: "wood-3", title: "باب خشبي كلاسيكي بنمط فرنسي", imageUrl: pin.wood3 },
          { id: "wood-4", title: "باب خشبي ذو مقبض معدني عصري", imageUrl: pin.wood4 },
        ],
      },
      {
        id: "wpc",
        title: "أبواب WPC",
        items: [
          { id: "wpc-1", title: "باب WPC كلاسيكي", imageUrl: pin.wpc1 },
          { id: "wpc-2", title: "باب WPC بتصميم مميز", imageUrl: pin.wpc2 },
          { id: "wpc-3", title: "باب WPC بلمسة عصرية", imageUrl: pin.wpc3 },
          { id: "wpc-4", title: "باب WPC بتشطيب فاخر", imageUrl: pin.wpc4 },
        ],
      },
      {
        id: "furniture",
        title: "الأثاث",
        items: [
          { id: "f-1", title: "كرسي بإطار خشبي أنيق", imageUrl: pin.f1 },
          { id: "f-2", title: "خزانة جانبية خشب", imageUrl: pin.f2 },
          { id: "f-3", title: "دولاب أبواب مزدوجة بتصميم كلاسيكي", imageUrl: pin.f3 },
          { id: "f-4", title: "سرير تخزين بخطوط ناعمة", imageUrl: pin.f4 },
        ],
      },
    ],
    aboutTitle: "من نحن؟",
    aboutText:
      "تأسست شركة بردين للصناعة في المملكة العربية السعودية في مايو من عام 2023، بهدف إنشاء مصنع متخصص في صناعة الأبواب والأثاث، مستندة إلى رؤية ترتكز على الجودة والمصداقية. وانطلاقًا من البنية التحتية المتقدمة التي تشهدها المملكة، تسعى بردين إلى المساهمة الفاعلة في دعم الصناعة المحلية وتعزيز دورها في تحقيق النمو الاقتصادي المتسارع الذي تشهده المملكة.\n\nتأتي هذه الخطوة امتدادًا لخبرة طويلة تعود إلى عام 2008 في مجال تجارة مواد البناء، حيث استطاعت الشركة خلال تلك السنوات أن تبني سمعة قوية في تلبية احتياجات المشاريع بخامات عالية الجودة ومعايير تواكب تطلعات السوق. واليوم، تواصل بردين هذا النهج بخطى ثابتة نحو تقديم منتجات متقنة تضيف قيمة حقيقية لعملائها.\n\nوإيمانًا بأهمية بناء علاقات طويلة الأمد قائمة على الثقة والاحترافية، تضع الشركة ضمن أولوياتها الوصول إلى أكبر عدد من العملاء المميزين من شركات التطوير العقاري والمقاولات، من خلال تقديم حلول تصنيع متقدمة تعكس التزامها بالتفوق والإتقان، وتجعل منها شريكًا موثوقًا في كل مشروع.",
    contactTitle: "اتصل بنا",
    contactBlurb: "أرسل لنا رسالة وسنعاود الاتصال بك في أقرب وقت.",
    contactForm: {
      nameLabel: "الاسم:",
      emailLabel: "البريد الإلكتروني:",
      messageLabel: "رسالتك:",
      submitLabel: "إرسال",
      formAction: "https://formspree.io/f/mkgbboja",
    },
    footer: {
      copyright: "جميع الحقوق محفوظة © 2025 BURDEEN",
      emailPhone: "info@burdeenbic.com | 📞+966537987180📧",
      address: "📍 الرياض - حي السلي - شارع الحسن الخطير - مبنى ٣١٨٨",
      tagline: "أبواب خشبية وWPC وأثاث بتصنيع دقيق — الرياض، المملكة العربية السعودية.",
    },
    whatsapp: {
      href: "https://wa.me/966537987180",
      title: "تواصل معنا عبر الواتساب",
    },
    contact: {
      email: "info@burdeenbic.com",
      phone: "966537987180+",
      address: "الرياض - حي السلي - شارع الحسن الخطير - مبنى ٣١٨٨",
    },
  },
};

