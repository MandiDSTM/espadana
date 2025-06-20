export const sampleProducts = [
  {
    id: 1,
    name: "اینورتر سینوسی Suoer مدل FPC-500AL",
    category: "اینورتر خوشیدی",
    price: null,
    originalPrice: null,
    image:
      "/images/product/suoer.jpg",
    rating: 4.3,
    reviews: 45,
    inStock: true,
    isNew: false,
    description:
      "اینورتر سینوسی 500 وات با کیفیت بالا و قابلیت تبدیل برق DC به AC",
    specifications: {
      power: "500W",
      inputVoltage: "12V DC",
      outputVoltage: "220V AC",
      waveform: "Pure Sine Wave",
      efficiency: "90%",
      brand: "Suoer",
    },
    features: [
      "موج سینوسی خالص",
      "محافظت در برابر اتصال کوتاه",
      "محافظت در برابر ولتاژ بالا و پایین",
      "نمایشگر LED",
      "خنک کننده فن دار",
    ],
    manufacturer: {
      company: "Suoer",
    },
  },
  {
    id: 2,
    name: "پنل خورشیدی BiMAX 6R - مدل SP640M-66H",
    category: "پنل خورشیدی",
    price: null,
    originalPrice: null,
    image:
      "/images/product/solar-panel.webp",
    rating: 4.8,
    reviews: 42,
    inStock: true,
    isNew: true,
    description:
      "پنل خورشیدی دو طرفه N-Type TOPCon با شیشه دوبل و حداکثر راندمان 23.68%",
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
      glassThicknessFront: "2.0mm Anti-Reflection Coating",
      glassThicknessBack: "2.0mm Heat Strengthened Glass",
      frame: "Aluminum Alloy",
      cable: "4mm², 300mm length, UV resistant",
      connector: "MC4 Compatible",
      bifaciality: "80±5%",
      junctionBox: "IP68",
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
          moduleEfficiency: 22.77,
        },
        {
          moduleType: "620W",
          maxPower: 620,
          openCircuitVoltage: 49.55,
          shortCircuitCurrent: 15.93,
          voltageAtMaxPower: 41.06,
          currentAtMaxPower: 15.1,
          moduleEfficiency: 22.95,
        },
        {
          moduleType: "625W",
          maxPower: 625,
          openCircuitVoltage: 49.75,
          shortCircuitCurrent: 16.0,
          voltageAtMaxPower: 41.26,
          currentAtMaxPower: 15.15,
          moduleEfficiency: 23.14,
        },
        {
          moduleType: "630W",
          maxPower: 630,
          openCircuitVoltage: 49.95,
          shortCircuitCurrent: 16.05,
          voltageAtMaxPower: 41.46,
          currentAtMaxPower: 15.2,
          moduleEfficiency: 23.32,
        },
        {
          moduleType: "635W",
          maxPower: 635,
          openCircuitVoltage: 50.15,
          shortCircuitCurrent: 16.1,
          voltageAtMaxPower: 41.66,
          currentAtMaxPower: 15.25,
          moduleEfficiency: 23.5,
        },
        {
          moduleType: "640W",
          maxPower: 640,
          openCircuitVoltage: 50.35,
          shortCircuitCurrent: 16.16,
          voltageAtMaxPower: 41.86,
          currentAtMaxPower: 15.3,
          moduleEfficiency: 23.68,
        },
      ],
      nmot: {
        maxPower: "469-488W",
        openCircuitVoltage: "46.81-47.81V",
        shortCircuitCurrent: "12.81-13.07A",
        voltageAtMaxPower: "38.40-39.40V",
        currentAtMaxPower: "12.21-12.39A",
      },
      bifacialOutput10Percent: {
        outputPower: "677-703W",
        openCircuitVoltage: "49.35-50.35V",
        shortCircuitCurrent: "17.47-17.72A",
        voltageAtMaxPower: "40.86-41.86V",
        currentAtMaxPower: "16.57-16.81A",
      },
    },
    temperatureCharacteristics: {
      nmot: "41±3°C",
      tempCoefficientVoc: "-0.25%/°C",
      tempCoefficientIsc: "+0.04%/°C",
      tempCoefficientPmax: "-0.30%/°C",
    },
    maximumRatings: {
      outputTolerance: "0~+5W",
      operatingTemperature: "-40°C~+85°C",
      windLoad: "2400Pa",
      snowLoad: "5400Pa",
      fuseCurrent: "25A",
    },
    features: [
      "سلول N-Type با ابعاد 182×210mm و بالاترین راندمان",
      "ماژول دو طرفه با شیشه دوبل که 5% تا 25% خروجی اضافی فراهم می‌کند",
      "ظرفیت بار مکانیکی تست شده توسط TUV",
      "محافظت PID برای کمینه کردن احتمال تضعیف",
      "سازگاری با محیط سخت - تست اسپری نمک و خوردگی آمونیاک",
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
      "IEC TS 62941-2016",
    ],
    warranty: {
      materials: "25 سال",
      power: "30 سال",
      powerOutput30Years: "87.4%",
    },
    packaging: {
      piecesPerBox: 36,
      piecesPerContainer: "720pcs/40'HQ",
    },
    manufacturer: {
      company: "Sunpal Power Co., Ltd.",
      address: "No. 398 Ganquan Road, Hefei, Anhui, China",
      email: "silvia@sunpalsolar.com",
      tel: "+86 551 6586 5992",
      website: "www.sunpalsolar.com",
    },
  },
  {
    id: 3,
    name: "اینورتر خورشیدی Deye - سری SUN-120K-136K-G",
    category: "اینورتر خوشیدی",
    price: null,
    originalPrice: null,
    image:
      "/images/product/solar-inverter.webp",
    rating: 4.5,
    reviews: null,
    inStock: true,
    isNew: true,
    description:
      "اینورتر خورشیدی صنعتی سه فاز با قدرت 120-136 کیلووات و راندمان بالا",
    specifications: {
      powerRange: "120-136kW",
      maxPVInputPower: "180-204kW",
      maxPVInputVoltage: "1100V",
      startupVoltage: "600V",
      mpptVoltageRange: "250V / 200-1000V",
      ratedPVInputVoltage: "600V",
      maxOperatingPVInputCurrent: "320A",
      maxInputShortCircuitCurrent: "480A",
      numberOfMPPTrackers: "8",
      numberOfStringsMPPTracker: "32",
      maxEfficiency: "98.8%",
      euroEfficiency: "98.2%",
      mpptEfficiency: ">99%",
      gridConnectionForm: "3L/N/PE",
      ratedOutputVoltageRange: "220/380V, 230/400V 0.85Un-1.1Un",
      ratedOutputGridFrequencyRange: "50/45-55, 60/55-65Hz",
      powerFactorAdjustmentRange: "0.8 leading to 0.8 lagging",
      totalCurrentHarmonicDistortion: "<3%",
      dcInjectionCurrent: "<0.5%ln",
      operatingTemperatureRange: "-25 to +60℃, >45℃ Derating",
      permissibleAmbientHumidity: "0-100%",
      permissibleAltitude: "4000m",
      noise: "≤65dB",
      ingressProtectionRating: "IP65",
      inverterTopology: "Non-Isolated",
      overVoltageCategory: "OVC II(DC), OVC III(AC)",
      cabinetSize: "1006×516×325.5mm (Excluding Connectors and Brackets)",
      weight: "103kg",
      typeOfCooling: "Intelligent Air Cooling",
      warranty: "5 Years",
    },
    models: [
      {
        model: "SUN-120K-G01P3-EU-AM8",
        ratedACOutputActivePower: "120kW",
        maxACOutputApparentPower: "132kVA",
        ratedACOutputCurrent: "181.9A",
        maxACOutputCurrent: "200A",
      },
      {
        model: "SUN-125K-G01P3-EU-AM8",
        ratedACOutputActivePower: "125kW",
        maxACOutputApparentPower: "135kVA",
        ratedACOutputCurrent: "189.4A",
        maxACOutputCurrent: "200A",
      },
      {
        model: "SUN-130K-G01P3-EU-AM8",
        ratedACOutputActivePower: "130kW",
        maxACOutputApparentPower: "135kVA",
        ratedACOutputCurrent: "197A",
        maxACOutputCurrent: "200A",
      },
      {
        model: "SUN-135K-G01P3-EU-AM8",
        ratedACOutputActivePower: "135kW",
        maxACOutputApparentPower: "135kVA",
        ratedACOutputCurrent: "204.6A",
        maxACOutputCurrent: "200A",
      },
      {
        model: "SUN-136K-G01P3-EU-AM8",
        ratedACOutputActivePower: "136kW",
        maxACOutputApparentPower: "136kVA",
        ratedACOutputCurrent: "206.1A",
        maxACOutputCurrent: "200A",
      },
    ],
    features: [
      "8 MPPT tracker for maximum energy harvest",
      "High efficiency up to 98.8%",
      "Wide MPPT voltage range 200-1000V",
      "Intelligent air cooling system",
      "Multiple communication interfaces",
      "Advanced protection features",
      "Grid regulation compliance",
    ],
    protectionFeatures: [
      "DC Polarity Reverse Connection Protection",
      "AC Output Overcurrent Protection",
      "AC Output Overvoltage Protection",
      "AC Output Short Circuit Protection",
      "Thermal Protection",
      "DC Terminal Insulation Impedance Monitoring",
      "DC Component Monitoring",
      "Ground Fault Current Monitoring",
      "Arc Fault Circuit Interrupter (Optional)",
      "Surge Protection Level TYPE II(DC), TYPE II(AC)",
      "Power Network Monitoring",
      "Island Protection Monitoring",
      "Earth Fault Detection",
      "Overvoltage Load Drop Protection",
      "Residual Current (RCD) Detection",
    ],
    communication: {
      monitorMode: "GPRS/WIFI/Bluetooth/4G/LAN(optional)",
      communicationInterface: "RS485/RS232",
    },
    certifications: [
      "IEC 61727",
      "IEC 62116",
      "CEI 0-21",
      "EN 50549",
      "NRS 097",
      "RD 140",
      "UNE 217002",
      "OVE-Richtlinie R25",
      "G99",
      "VDE-AR-N 4105",
      "IEC/EN 61000-6-1/2/3/4",
      "IEC/EN 62109-1",
      "IEC/EN 62109-2",
    ],
    manufacturer: {
      company: "Ningbo Deye Inverter Technology Co., Ltd.",
      address:
        "No. 26 South YongJiang Road, Daqi, Beilun, NingBo, Zhejiang, China",
      tel: "+86 (0)574 86228841",
      email: "market@deye.com.cn",
      website: "www.deyeinverter.com",
    },
  },
  {
    id: 4,
    name: "اینورتر هیبرید GSL - سری 60/75/80KHV",
    category: "All in one (برق اضطراری)",
    price: null,
    originalPrice: null,
    image:
      "/images/product/inverter.jpg",
    rating: 4.1,
    reviews: null,
    inStock: true,
    isNew: true,
    description:
      "اینورتر هیبرید ولتاژ بالا سه فاز با قابلیت ذخیره انرژی و پشتیبانی از باتری",
    specifications: {
      powerRange: "60-80kW",
      batteryType: "Li-Ion",
      batteryVoltageRange: "160~1000V",
      maxChargingCurrent: "80+80A",
      maxDischargingCurrent: "80+80A",
      numberOfBatteryInput: "2",
      maxDCInputPower: "96-150kW",
      maxPVInputPower: "120-160kW",
      maxDCInputVoltage: "1000V",
      startupVoltage: "180V",
      mpptRange: "150-850V",
      chargingStrategyForLiIonBattery: "Self-adaption to BMS",
      ratedDCInputVoltage: "650V",
      numberOfMPPTrackers: "6",
      numberOfStringsMPPTracker: "6",
      pvInputCurrent: "216A",
      maxPVISC: "324A",
      ratedACInputOutputActivePower: "60-80kW",
      maxACInputOutputApparentPower: "66-88kW",
      ratedACInputOutputCurrent: "91/87A - 121.3/115.9A",
      maxACInputOutputCurrent: "113.7/108.7A - 133.4/127.6A",
      maxContinuousACPassthrough: "128kW",
      peakPowerOffGrid: "1.5 times of rated power, 10s",
      powerFactorAdjustmentRange: "0.8 leading to 0.8 lagging",
      ratedInputOutputVoltageRange: "220/380V, 230/400V 0.85Un-1.1Un",
      gridConnectionForm: "3L+N+PE",
      ratedInputOutputGridFrequencyRange: "50/45-55, 60/55-65Hz",
      totalCurrentHarmonicDistortion: "<3% (of nominal power)",
      maxEfficiency: "97.60%",
      euroEfficiency: "97.00%",
      mpptEfficiency: ">99%",
      dcInjectionCurrent: "<0.5% In",
      operatingTemperatureRange: "-40~60℃, >45℃ derating",
      permissibleAmbientHumidity: "0-100%",
      permissibleAltitude: "2000m",
      noise: "≤65 dB(A)",
      weight: "97.5kg / 214 lbs",
      inverterTopology: "Non-Isolated",
      overVoltageCategory: "OVC II(DC), OVC III(AC)",
      ingressProtectionRating: "IP65",
      typeOfCooling: "Intelligent Air Cooling",
      warranty: "5 Years/10 Years",
      cabinetSize:
        "606*927*314mm / 23.9*36.5*12.4 in (Excluding Connectors and Brackets)",
    },
    models: [
      {
        model: "GSL-60K-3PH-EU",
        ratedPower: "60kW",
        maxACApparentPower: "66kVA",
        ratedACCurrent: "91/87A",
        maxACCurrent: "113.7/108.7A",
      },
      {
        model: "GSL-75K-3PH-EU",
        ratedPower: "75kW",
        maxACApparentPower: "82.5kVA",
        ratedACCurrent: "113.7/108.7A",
        maxACCurrent: "125/119.6A",
      },
      {
        model: "GSL-80K-3PH-EU",
        ratedPower: "80kW",
        maxACApparentPower: "88kVA",
        ratedACCurrent: "121.3/115.9A",
        maxACCurrent: "133.4/127.6A",
      },
    ],
    features: [
      "Max charging/discharging current of 160A",
      "Support storing energy from diesel generator",
      "Max. 10pcs parallel for on-grid and off-grid operation",
      "Support multiple batteries parallel",
      "6 time periods for battery charging/discharging",
      "Colorful touch LCD, IP65 protection degree",
      "AC couple to retrofit existing solar system",
    ],
    protectionFeatures: [
      "DC Polarity Reverse Connection Protection",
      "AC Output Overcurrent Protection",
      "Thermal Protection",
      "AC Output Overvoltage Protection",
      "AC Output Short Circuit Protection",
      "DC Component Monitoring",
      "Overvoltage Load Drop Protection",
      "Ground Fault Current Monitoring",
      "Arc Fault Circuit Interrupter (optional)",
      "Power Network Monitoring",
      "Island Protection Monitoring",
      "Earth Fault Detection",
      "DC Input Switch",
      "DC Terminal Insulation Impedance Monitoring",
      "Residual Current (RCD) Detection",
      "Surge protection level TYPE II(DC), TYPE II(AC)",
    ],
    communication: {
      monitorMode: "GPRS/WIFI/Bluetooth/4G/LAN(optional)",
      communicationInterface: "RS485/RS232/CAN",
    },
    certifications: [
      "IEC 61727",
      "IEC 62116",
      "CEI 0-21",
      "EN 50549",
      "NRS 097",
      "RD 140",
      "UNE 217002",
      "OVE-Richtlinie R25",
      "G99",
      "VDE-AR-N 4105",
      "IEC/EN 61000-6-1/2/3/4",
      "IEC/EN 62109-1",
      "IEC/EN 62109-2",
    ],
    manufacturer: {
      company: "GSL ENERGY",
    },
  },
  {
    id: 5,
    name: "باتری خانگی GSL-051100A-B-GBP2 - مدل 5.12kWh",
    category: "باتری",
    price: null,
    originalPrice: null,
    image:
      "/images/product/battery.jpg",
    rating: 4.4,
    reviews: null,
    inStock: true,
    isNew: true,
    description:
      "باتری لیتیوم فسفات آهن خانگی با BMS پیشرفته و قابلیت نصب دیواری",
    specifications: {
      modelNumber: "GSL-051100A-B-GBP2",
      batteryChemistry: "LiFePO4",
      ratedVoltage: 51.2,
      capacity: 100,
      usableEnergy: 5.12,
      maxChargeVoltage: 56,
      minDischargeVoltage: 46,
      maxChargeCurrent: 100,
      maxDischargeCurrent: 100,
      cycleLife: "6500~8500",
      dimensions: "width: 650 height: 436 depth: 160 unit: mm inches: 25.6×17.2×6.3 in",
      weight: "value: 45,unit: kg,pounds: 99 lbs"
    },
    features: [
      "Wall-mounted design",
      "Advanced BMS system",
      "High cycle life",
      "Compact size",
    ],
    certifications: ["CB IEC62619", "CE-EMC", "MSDS", "UN38.3"],
    manufacturer: {
      company: "GSL ENERGY",
    },
    applications: ["Home Energy Storage", "Residential Solar Systems"],
  },
];
