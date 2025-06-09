export const productData = {
  title: "SAMSUNG Galaxy Tab S6 Lite 10.4' 64GB WiFi Android Tablet, S Pen Included, Gaming Ready, Long Battery Life, Slim Metal Design, Expandable Storage, US Version, Oxford Gray, Amazon Exclusive (2024)",
  description: "GALAXY TAB S6 LITE, MORE POWERFUL THAN EVER: With an included S Pen, crystal-clear display and Dolby Atmos surround sound, this reliable tablet is all about fun plus a little work",
  price: "Rs. 17,132",
  originalPrice: "Rs. 24,123",
  rating: 4.2,
  totalReviews: 1547,
  image: "https://m.media-amazon.com/images/I/71-hJGtkLWL._AC_SX466_.jpg",
  fraudScore: 0.73,
  
  deceptiveReviews: [
    {
      id: 1,
      reviewer: "Anand",
      rating: 5,
      date: "2024-05-15",
      content: "I picked this up for note-taking and light sketching for college, and it’s exceeded expectations. The S Pen is super responsive and doesn’t need charging—major plus!",
      flaggedReason: "Rview uses generic praise and broad claims without specific model quirks",
      confidenceScore: 0.87
    },
    {
      id: 2,
      reviewer: "Ravi",
      rating: 5,
      date: "2024-05-14",
      content: "I bought this mostly for mobile gaming and media consumption, and it handles both well. Games like Genshin Impact and Asphalt 9 run smoothly on medium settings. The screen is vibrant, and the speakers are surprisingly decent. ",
      flaggedReason: "It mentions popular games and common tablet features but lacks detailed insights on actual user experience or battery performance nuances.",
      confidenceScore: 0.79
    },
    {
      id: 3,
      reviewer: "Mayank",
      rating: 5,
      date: "2024-05-13",
      content: "GI was looking for a budget-friendly tablet with stylus support for digital sketching and stumbled upon this. Wow. The pen pressure is great, lag is minimal, and the display is crisp enough for design work. I pair it with apps like Infinite Painter and Canva with zero hiccups.",
      flaggedReason: "The language is overly polished and promotional with no mention of any minor flaws or real-world trade-offs, which real users often note.",
      confidenceScore: 0.91
    }
  ],

  detectedAiImages: [
    {
      id: 1,
      url: "https://m.media-amazon.com/images/I/61d46oYQgdL._AC_UF480,480_SR480,480_.jpg",
      confidenceScore: 0.94,
      detectionReason: "Unrealistic lighting and texture patterns"
    },
    {
      id: 2,
      url: "https://m.media-amazon.com/images/I/51LHmhoU-cL._AC_UF480,480_SR480,480_.jpg",
      confidenceScore: 0.88,
      detectionReason: "Artificial reflections and perfect symmetry"
    },
    {
      id: 3,
      url: "https://m.media-amazon.com/images/I/61Hy3YDM-eL._AC_UF480,480_SR480,480_.jpg",
      confidenceScore: 0.76,
      detectionReason: "Inconsistent shadows and digital artifacts"
    }
  ],

  seller: {
    name: "TechnoStore Pro",
    trustScore: 0.34,
    overallRating: 2.8,
    totalProducts: 156,
    accountAge: "3 months",
    verificationStatus: "Unverified",
    flaggedActivities: [
      "Sudden spike in positive reviews",
      "Multiple products with similar review patterns",
      "Unusual pricing strategies"
    ],
    otherProducts: [
      {
        id: 1,
        name: "Smart Watch Ultra",
        price: "Rs. 15,999",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
        fraudScore: 0.68
      },
      {
        id: 2,
        name: "Gaming Mouse RGB",
        price: "Rs. 4,999",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&h=200&fit=crop",
        fraudScore: 0.82
      },
      {
        id: 3,
        name: "USB-C Hub Pro",
        price: "Rs. 2,999",
        image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=200&h=200&fit=crop",
        fraudScore: 0.71
      }
    ]
  }
}; 