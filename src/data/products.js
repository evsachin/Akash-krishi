import revolutionImage from "../assets/revolution2.jpg";
import shine from "../assets/shine2.jpg";
import shaktishali from "../assets/Shaktishali1.jpg";
import mastercarb from "../assets/Mastercarb1.jpg";
// import humigrow from "../assets/humigrow1.png";
// import kelp11 from "../assets/kelp11.png";
const products = [
  {
    id: "revolution",
    name: "Revolution",
    tagline: "Stronger Roots. Higher Yield. Every Season.",
    category: "Advanced Growth Enhancer",
    image: revolutionImage,

    shortDescription:
      "A scientifically developed crop enhancer designed to improve root strength, nutrient absorption, and overall yield performance.",

    story:
      "Developed after extensive field trials, Revolution supports crops during critical growth stages. It helps plants absorb nutrients efficiently and build strong root systems even in challenging soil conditions.",

    dosage: "2 ml per liter of water",

    applicationStage: "Vegetative to Pre-Flowering Stage",

    packSizes: ["250 ml", "500 ml", "1 Litre", "5 Litre"],

    crops: [
      "Sugarcane",
      "Wheat",
      "Cotton",
      "Soybean",
      "Vegetables",
      "Pomegranate"
    ],

    benefits: [
      "Enhances root development",
      "Improves nutrient uptake efficiency",
      "Boosts crop immunity",
      "Increases yield potential",
      "Supports uniform crop growth"
    ],

    specifications: {
      appearance: "Dark Brown Liquid",
      formulation: "Liquid",
      shelfLife: "2 Years",
      compatibility: "Compatible with most fertilizers and pesticides"
    },

    testimonial: {
      name: "Shankar Patil",
      location: "Kolhapur, Maharashtra",
      feedback:
        "After using Revolution, my sugarcane crop showed stronger growth and better yield. I have seen visible improvement in root strength."
    }
  },
{
  id: "shine-si14",
  name: "Shine Si14",
  tagline: "Stronger Plants. Superior Protection.",
  category: "Silicon Nutrient",

  image: shine,

  shortDescription:
    "High-quality silicon based water soluble powder that strengthens plant structure, improves stress resistance, and enhances crop yield quality.",

  story:
    "Shine Si14 is an advanced silicon formulation containing 14% soluble silicon. It improves plant rigidity, enhances resistance against biotic and abiotic stress, and supports better nutrient utilization for improved crop performance.",

  dosage: "500 gm per acre",

  applicationStage: "Foliar Spray",

  packSizes: ["250 gm", "500 gm", "1 Kg"],

  crops: [
    "Sugarcane",
    "Pomegranate",
    "Grapes",
    "Cotton",
    "Vegetables",
    "Fruits"
  ],

  benefits: [
    "Strengthens plant cell walls",
    "Improves resistance against pests and fungal diseases",
    "Enhances drought and heat tolerance",
    "Reduces crop lodging",
    "Improves leaf thickness and shine",
    "Enhances yield quality"
  ],

  specifications: {
    appearance: "White / Off-White Powder",
    formulation: "Water Soluble Powder",
    siliconContent: "14% Soluble Silicon (Si)",
    shelfLife: "3 Years",
    compatibility: "Compatible with most water soluble fertilizers and pesticides"
  },

  testimonial: {
    name: "Vijay Jadhav",
    location: "Satara, Maharashtra",
    feedback:
      "After using Shine Si14 at 500 gm per acre, my crop became stronger and more tolerant to stress. Yield quality improved noticeably."
  }
},
 

  {
  id: "shaktishali",
  name: "Shaktishali",
  tagline: "Complete Crop Strength & Yield Booster",
  category: "Plant Growth Promoter",
  image:shaktishali,

  shortDescription:
    "An advanced formulation designed to enhance plant strength, improve flowering, and increase overall crop productivity.",

  story:
    "Shaktishali is developed to provide balanced nutrition and strengthen crops during critical growth and flowering stages for maximum yield performance.",

  dosage: "2-3 ml per liter of water",
  applicationStage: "Vegetative to Flowering Stage",

  packSizes: ["250 ml", "500 ml", "1 Litre"],

  crops: ["Cotton", "Soybean", "Vegetables", "Pomegranate", "Sugarcane"],

  benefits: [
    "Improves plant strength and vigor",
    "Enhances flowering and fruit setting",
    "Supports uniform crop growth",
    "Increases overall yield potential"
  ],

  specifications: {
    appearance: "Dark Brown Liquid",
    formulation: "Liquid",
    shelfLife: "2 Years",
    compatibility: "Compatible with most fertilizers and micronutrients"
  },

  testimonial: {
    name: "Mahadev Patil",
    location: "Kolhapur, Maharashtra",
    feedback:
      "After using Shaktishali, my soybean crop showed better flowering and higher yield."
  }
},
{
  id: "mastercarb",
  name: "Master Carb",
  tagline: "Advanced Carbon Energy Formula",
  category: "Energy Booster & Yield Enhancer",
  image: mastercarb,

  shortDescription:
    "A specialized carbon-based formulation that improves photosynthesis and enhances crop energy levels for better growth and production.",

  story:
    "Master Carb provides essential carbon compounds that boost plant metabolism, helping crops perform better under stress conditions and improving overall productivity.",

  dosage: "3 ml per liter of water",
  applicationStage: "Flowering and Fruiting Stage",

  packSizes: ["250 ml", "500 ml", "1 Litre"],

  crops: ["Vegetables", "Fruits", "Cotton", "Chili", "Grapes"],

  benefits: [
    "Enhances photosynthesis efficiency",
    "Improves fruit size and shine",
    "Increases crop energy and vigor",
    "Supports stress tolerance"
  ],

  specifications: {
    appearance: "Brown Liquid",
    formulation: "Liquid",
    shelfLife: "2 Years",
    compatibility: "Compatible with growth regulators and micronutrients"
  },

  testimonial: {
    name: "Sanjay Shinde",
    location: "Baramati, Maharashtra",
    feedback:
      "Master Carb improved fruit size and overall crop quality significantly."
  }
},

  {
    id: "humigrow",
    name: "Humigrow",
    tagline: "Revive Your Soil. Restore Natural Power.",
    category: "Humic Soil Conditioner",
    image: "/images/humigrow.png",

    shortDescription:
      "Improves soil fertility, enhances nutrient absorption, and promotes better root development.",

    story:
      "Humigrow is enriched with humic substances that improve soil structure and microbial activity.",

    dosage: "2 ml per liter of water",
    applicationStage: "Soil Application / Drip Irrigation",

    packSizes: ["500 ml", "1 Litre", "5 Litre"],

    crops: ["Sugarcane", "Pomegranate", "Grapes", "Vegetables"],

    benefits: [
      "Improves soil structure",
      "Enhances microbial activity",
      "Promotes better root growth",
      "Improves fertilizer efficiency"
    ],

    specifications: {
      appearance: "Black Liquid",
      formulation: "Liquid",
      shelfLife: "3 Years",
      compatibility: "Suitable for drip systems"
    },

    testimonial: {
      name: "Mahadev Deshmukh",
      location: "Baramati, Maharashtra",
      feedback:
        "Humigrow improved my soil health and reduced fertilizer requirement."
    }
  },
 {
    id: "hulk",
    name: "Hulk",
    tagline: "Powerful Vegetative Growth Booster",
    category: "Growth Enhancer",
    image: "/images/hulk.png",

    shortDescription:
      "A powerful formulation designed to promote thick stems, lush green leaves, and strong plant structure.",

    story:
      "Hulk is specially designed to accelerate vegetative growth and build plant strength during early stages.",

    dosage: "2 ml per liter of water",
    applicationStage: "Early Vegetative Stage",

    packSizes: ["250 ml", "500 ml", "1 Litre"],

    crops: ["Cotton", "Vegetables", "Wheat", "Maize"],

    benefits: [
      "Promotes thicker stems",
      "Enhances leaf greenness",
      "Supports root development",
      "Improves plant vigor"
    ],

    specifications: {
      appearance: "Green Liquid",
      formulation: "Liquid",
      shelfLife: "2 Years",
      compatibility: "Compatible with micronutrients"
    },

    testimonial: {
      name: "Ramesh Jadhav",
      location: "Satara, Maharashtra",
      feedback:
        "Hulk helped my vegetable crop grow faster and healthier during early stages."
    }
  },
  {
    id: "kelp11",
    name: "Kelp11",
    tagline: "Natural Stress Shield for Crops",
    category: "Seaweed Extract",
    image: "/images/kelp11.png",

    shortDescription:
      "Premium seaweed-based extract that enhances flowering, stress tolerance, and overall plant health.",

    story:
      "Kelp11 supports crops during environmental stress conditions like drought and heat.",

    dosage: "1 ml per liter of water",
    applicationStage: "Pre-Flowering & Stress Period",

    packSizes: ["250 ml", "500 ml", "1 Litre"],

    crops: ["Cotton", "Chili", "Tomato", "Onion", "Grapes"],

    benefits: [
      "Enhances stress tolerance",
      "Promotes better flowering",
      "Improves fruit setting",
      "Increases crop resilience"
    ],

    specifications: {
      appearance: "Dark Brown Liquid",
      formulation: "Liquid",
      shelfLife: "2 Years",
      compatibility: "Compatible with most foliar sprays"
    },

    testimonial: {
      name: "Vijay Pawar",
      location: "Sangli, Maharashtra",
      feedback:
        "Kelp11 improved flowering and fruit quality in my grape farm."
    }
  }
];

export default products;