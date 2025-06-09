export const productData = {
  title: "Wireless Bluetooth Headphones Pro Max",
  description: "Premium noise-cancelling wireless headphones with advanced audio technology, 30-hour battery life, and crystal-clear sound quality. Perfect for music lovers and professionals.",
  price: "$299.99",
  originalPrice: "$399.99",
  rating: 4.2,
  totalReviews: 1547,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  fraudScore: 0.73,
  
  deceptiveReviews: [
    {
      id: 1,
      reviewer: "John D.",
      rating: 5,
      date: "2024-05-15",
      content: "Amazing headphones! Best purchase ever. The sound quality is incredible and battery lasts forever. Highly recommend to everyone!",
      flaggedReason: "Repetitive positive language, lacks specific details",
      confidenceScore: 0.87
    },
    {
      id: 2,
      reviewer: "Sarah M.",
      rating: 5,
      date: "2024-05-14",
      content: "Absolutely perfect! These headphones changed my life. The noise cancellation is the best I've ever experienced. Worth every penny!",
      flaggedReason: "Overly emotional language, generic praise",
      confidenceScore: 0.79
    },
    {
      id: 3,
      reviewer: "Mike R.",
      rating: 5,
      date: "2024-05-13",
      content: "Great product! Fast shipping! Amazing seller! Would buy again! Five stars!",
      flaggedReason: "Excessive exclamation marks, minimal detail",
      confidenceScore: 0.91
    }
  ],

  detectedAiImages: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop",
      confidenceScore: 0.94,
      detectionReason: "Unrealistic lighting and texture patterns"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=300&h=300&fit=crop",
      confidenceScore: 0.88,
      detectionReason: "Artificial reflections and perfect symmetry"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
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
        price: "$199.99",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
        fraudScore: 0.68
      },
      {
        id: 2,
        name: "Gaming Mouse RGB",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&h=200&fit=crop",
        fraudScore: 0.82
      },
      {
        id: 3,
        name: "USB-C Hub Pro",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=200&h=200&fit=crop",
        fraudScore: 0.71
      }
    ]
  }
}; 