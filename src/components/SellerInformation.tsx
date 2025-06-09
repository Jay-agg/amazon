import Image from 'next/image';
import { User, Shield, Star, AlertTriangle, Calendar, Package, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface OtherProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  fraudScore: number;
}

interface Seller {
  name: string;
  trustScore: number;
  overallRating: number;
  totalProducts: number;
  accountAge: string;
  verificationStatus: string;
  flaggedActivities: string[];
  otherProducts: OtherProduct[];
}

interface SellerInformationProps {
  seller: Seller;
}

export function SellerInformation({ seller }: SellerInformationProps) {
  const trustLevel = seller.trustScore > 0.7 ? 'High' : seller.trustScore > 0.4 ? 'Medium' : 'Low';
  const trustColor = seller.trustScore > 0.7 ? 'success' : seller.trustScore > 0.4 ? 'warning' : 'destructive';

  return (
    <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
      <CardHeader className="border-b border-blue-200 bg-white/50">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <User className="text-blue-600" size={28} />
          Seller Information
          <Badge variant={trustColor} className="ml-auto">
            {trustLevel} Trust
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-8">
          {/* Seller Details */}
          <div className="bg-white rounded-xl p-6 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{seller.name}</h3>
                  <div className="flex items-center gap-2">
                    <Shield className="text-blue-600" size={16} />
                    <span className="text-sm text-gray-600">{seller.verificationStatus}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-gray-400" size={16} />
                    <span className="text-sm text-gray-600">Account age: {seller.accountAge}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="text-gray-400" size={16} />
                    <span className="text-sm text-gray-600">{seller.totalProducts} products listed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">
                      {seller.overallRating}/5.0 overall rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Score */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Trust Score</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {(seller.trustScore * 100).toFixed(0)}%
                    </span>
                  </div>
                  <Progress 
                    value={seller.trustScore * 100} 
                    className="h-3 bg-gray-100" 
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Based on account history, review patterns, and product analysis
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="text-red-600" size={16} />
                    <span className="text-sm font-semibold text-red-800">Risk Factors</span>
                  </div>
                  <ul className="space-y-1">
                    {seller.flaggedActivities.map((activity, index) => (
                      <li key={index} className="text-xs text-red-700 flex items-start gap-1">
                        <span className="text-red-400 mt-1">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other Seller Products */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="text-blue-600" size={20} />
              Other Seller Products
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {seller.otherProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  {/* Product Image */}
                  <div className="relative h-32 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge 
                        variant={product.fraudScore > 0.7 ? 'destructive' : product.fraudScore > 0.4 ? 'warning' : 'success'}
                        className="text-xs"
                      >
                        {(product.fraudScore * 100).toFixed(0)}%
                      </Badge>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                      {product.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">{product.price}</span>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-600">Fraud Risk</span>
                        <span className="font-semibold">
                          {(product.fraudScore * 100).toFixed(0)}%
                        </span>
                      </div>
                      <Progress 
                        value={product.fraudScore * 100} 
                        className="h-1.5 bg-gray-100" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Analysis Summary */}
          <div className="bg-blue-100 border border-blue-300 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="text-blue-600" size={20} />
              <span className="font-semibold text-blue-800">Seller Risk Assessment</span>
            </div>
            <p className="text-sm text-blue-700">
              This seller shows multiple red flags including a recent account creation, 
              suspicious review patterns across products, and unusual pricing strategies. 
              We recommend exercising caution when purchasing from this seller.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 