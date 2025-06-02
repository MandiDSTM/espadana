export const sampleProducts = [
  {
    id: 1,
    name: 'لپ تاپ ایسوس VivoBook',
    category: 'ال این وان (برق اضطراری)',
    price: 25000000,
    originalPrice: 28000000,
    image: 'https://via.placeholder.com/300x200/3B82F6/white?text=لپ+تاپ+ایسوس',
    rating: 4.5,
    reviews: 127,
    inStock: true,
    isNew: true,
    description: 'لپ تاپ قدرتمند با پردازنده Intel Core i7'
  },
  {
    id: 2,
    name: 'موبایل سامسونگ Galaxy A54',
    category: 'پنل خورشیدی',
    price: 15000000,
    originalPrice: 16500000,
    image: 'https://via.placeholder.com/300x200/EF4444/white?text=سامسونگ+A54',
    rating: 4.2,
    reviews: 89,
    inStock: true,
    isNew: false,
    description: 'گوشی هوشمند با دوربین 50 مگاپیکسل'
  },
  {
    id: 3,
    name: 'هدفون بی‌سیم سونی',
    category: 'یو پی اس (UPS)',
    price: 3500000,
    originalPrice: 4000000,
    image: 'https://via.placeholder.com/300x200/10B981/white?text=هدفون+سونی',
    rating: 4.8,
    reviews: 234,
    inStock: false,
    isNew: false,
    description: 'هدفون با کیفیت صدای بی‌نظیر و noise cancelling'
  },
  {
    id: 4,
    name: 'ساعت هوشمند اپل واچ',
    category: 'باتری',
    price: 12000000,
    originalPrice: 13000000,
    image: 'https://via.placeholder.com/300x200/8B5CF6/white?text=اپل+واچ',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    isNew: true,
    description: 'ساعت هوشمند با امکانات سلامتی پیشرفته'
  },
  {
    id: 5,
    name: 'تبلت آیپد ایر',
    category: 'اینورتر خوشیدی',
    price: 20000000,
    originalPrice: 22000000,
    image: 'https://via.placeholder.com/300x200/F59E0B/white?text=آیپد+ایر',
    rating: 4.7,
    reviews: 98,
    inStock: true,
    isNew: false,
    description: 'تبلت قدرتمند برای کار و سرگرمی'
  },
  {
    id: 6,
    name: 'دوربین کانن EOS R6',
    category: 'اینورتر خوشیدی',
    price: 45000000,
    originalPrice: 48000000,
    image: 'https://via.placeholder.com/300x200/EC4899/white?text=کانن+R6',
    rating: 4.9,
    reviews: 67,
    inStock: true,
    isNew: true,
    description: 'دوربین حرفه‌ای برای عکاسی و فیلمبرداری'
  },
  {
    id: 7,
    name: 'دوربین کانن EOS R6',
    category: 'اینورتر خوشیدی',
    price: 45000000,
    originalPrice: 48000000,
    image: 'https://via.placeholder.com/300x200/EC4899/white?text=کانن+R6',
    rating: 4.9,
    reviews: 67,
    inStock: true,
    isNew: true,
    description: 'دوربین حرفه‌ای برای عکاسی و فیلمبرداری'
  },
  {
    id: 8,
    name: "اینورتر سینوسی Suoer مدل FPC-500AL",
    category: 'اینورتر خوشیدی',
    price: 2850000,
    originalPrice: 3200000,
    image: "https://solargostaran.com/wp-content/uploads/2023/suoer-sine-inverter-fpc-500al.jpg",
    rating: 4.3,
    reviews: 45,
    inStock: true,
    isNew: false,
    description: "اینورتر سینوسی 500 وات با کیفیت بالا و قابلیت تبدیل برق DC به AC",
    specifications: {
      power: "500W",
      inputVoltage: "12V DC",
      outputVoltage: "220V AC",
      waveform: "Pure Sine Wave",
      efficiency: "90%",
      brand: "Suoer"
    },
    features: [
      "موج سینوسی خالص",
      "محافظت در برابر اتصال کوتاه",
      "محافظت در برابر ولتاژ بالا و پایین",
      "نمایشگر LED",
      "خنک کننده فن دار"
    ]
  },
  {
    id: 9,
    name: "پنل خورشیدی BiMAX 6R - مدل SP640M-66H",
    category: "پنل خورشیدی",
    price: 85000000,
    originalPrice: 95000000,
    image: "https://venturama-solar.de/wp-content/smush-webp/2024/07/4042-JA-Solar-440W-JAM54D41-LB-Full-Black-PV-Modul.png.webp",
    rating: 4.8,
    reviews: 42,
    inStock: true,
    isNew: true,
    description: "پنل خورشیدی دو طرفه N-Type TOPCon با شیشه دوبل و حداکثر راندمان 23.68%",
    specifications: {
      model: "SP640M-66H",
      maxPower: "615-640W",
      maxEfficiency: "23.68%",
      cellType: "N-Type TOPCon",
      cellDimensions: "182×210mm",
      cellAmount: "66×2 pcs",
      weight: "33.5kg",
      dimensions: "2384×1134×30mm",
      maxSystemVoltage: "1500V",
      glassThickness: {
        front: "2.0mm Anti-Reflection Coating",
        back: "2.0mm Heat Strengthened Glass"
      },
      frame: "Aluminum Alloy",
      cable: "4mm², 300mm length, UV resistant",
      connector: "MC4 Compatible",
      bifaciality: "80±5%",
      junctionBox: "IP68"
    },
    electricalParameters: {
      stc: [
        {
          moduleType: "615W",
          maxPower: 615,
          openCircuitVoltage: 49.35,
          shortCircuitCurrent: 15.88,
          voltageAtMaxPower: 40.86,
          currentAtMaxPower: 15.05,
          moduleEfficiency: 22.77
        },
        {
          moduleType: "620W",
          maxPower: 620,
          openCircuitVoltage: 49.55,
          shortCircuitCurrent: 15.93,
          voltageAtMaxPower: 41.06,
          currentAtMaxPower: 15.10,
          moduleEfficiency: 22.95
        },
        {
          moduleType: "625W",
          maxPower: 625,
          openCircuitVoltage: 49.75,
          shortCircuitCurrent: 16.00,
          voltageAtMaxPower: 41.26,
          currentAtMaxPower: 15.15,
          moduleEfficiency: 23.14
        },
        {
          moduleType: "630W",
          maxPower: 630,
          openCircuitVoltage: 49.95,
          shortCircuitCurrent: 16.05,
          voltageAtMaxPower: 41.46,
          currentAtMaxPower: 15.20,
          moduleEfficiency: 23.32
        },
        {
          moduleType: "635W",
          maxPower: 635,
          openCircuitVoltage: 50.15,
          shortCircuitCurrent: 16.10,
          voltageAtMaxPower: 41.66,
          currentAtMaxPower: 15.25,
          moduleEfficiency: 23.50
        },
        {
          moduleType: "640W",
          maxPower: 640,
          openCircuitVoltage: 50.35,
          shortCircuitCurrent: 16.16,
          voltageAtMaxPower: 41.86,
          currentAtMaxPower: 15.30,
          moduleEfficiency: 23.68
        }
      ],
      nmot: {
        maxPower: "469-488W",
        openCircuitVoltage: "46.81-47.81V",
        shortCircuitCurrent: "12.81-13.07A",
        voltageAtMaxPower: "38.40-39.40V",
        currentAtMaxPower: "12.21-12.39A"
      },
      bifacialOutput10Percent: {
        outputPower: "677-703W",
        openCircuitVoltage: "49.35-50.35V",
        shortCircuitCurrent: "17.47-17.72A",
        voltageAtMaxPower: "40.86-41.86V",
        currentAtMaxPower: "16.57-16.81A"
      }
    },
    temperatureCharacteristics: {
      nmot: "41±3°C",
      tempCoefficientVoc: "-0.25%/°C",
      tempCoefficientIsc: "+0.04%/°C",
      tempCoefficientPmax: "-0.30%/°C"
    },
    maximumRatings: {
      outputTolerance: "0~+5W",
      operatingTemperature: "-40°C~+85°C",
      windLoad: "2400Pa",
      snowLoad: "5400Pa",
      fuseCurrent: "25A"
    },
    features: [
      "سلول N-Type با ابعاد 182×210mm و بالاترین راندمان",
      "ماژول دو طرفه با شیشه دوبل که 5% تا 25% خروجی اضافی فراهم می‌کند",
      "ظرفیت بار مکانیکی تست شده توسط TUV",
      "محافظت PID برای کمینه کردن احتمال تضعیف",
      "سازگاری با محیط سخت - تست اسپری نمک و خوردگی آمونیاک"
    ],
    certifications: [
      "IEC61215/61730",
      "IEC62804 (PID)",
      "IEC61701 (Salt)",
      "IEC62716 (Ammonia)",
      "IEC60068-2-68 (Sand)",
      "ISO 9001:2015",
      "ISO 14001:2015",
      "ISO 45001:2018",
      "ISO 50001:2011",
      "IEC TS 62941-2016"
    ],
    warranty: {
      "materials": "25 سال",
      "power": "30 سال",
      "powerOutput30Years": "87.4%"
    },
    packaging: {
      "piecesPerBox": 36,
      "piecesPerContainer": 720,
      "containerType": "40'HQ"
    },
    manufacturer: {
      "company": "Sunpal Power Co., Ltd.",
      "address": "No. 398 Gangan Road, Hefei, Anhui, China",
      "email": "silvia@sunpalsolar.com",
      "phone": "+86 551 6586 5992",
      "website": "www.sunpalsolar.com"
    },
    testConditions: {
      "stc": "تابش 1000W/m²، دمای سلول 25°C، AM=1.5",
      "nmot": "تابش 800W/m²، طیف AM 1.5، دمای محیط 20°C، سرعت باد 1m/s",
      "tolerance": "تحمل Pmax در محدوده ±3%"
    }
  },

];