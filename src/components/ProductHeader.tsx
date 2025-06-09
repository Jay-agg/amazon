import Image from 'next/image';
import { Star, AlertTriangle, ShieldAlert } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatNumber } from '@/lib/utils';

interface ProductHeaderProps {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  rating: number;
  totalReviews: number;
  image: string;
  fraudScore: number;
}

export function ProductHeader({
  title,
  description,
  price,
  originalPrice,
  rating,
  totalReviews,
  image,
  fraudScore
}: ProductHeaderProps) {
  const fraudLevel = fraudScore > 0.7 ? 'High' : fraudScore > 0.4 ? 'Medium' : 'Low';
  const fraudColor = fraudScore > 0.7 ? 'destructive' : fraudScore > 0.4 ? 'warning' : 'success';

  return (
    <Card className="overflow-hidden border-0 shadow-sm bg-white">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="relative lg:w-80 h-80 bg-slate-50">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
              priority
            />
            <div className="absolute top-4 left-4">
              <Badge variant={fraudColor} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1">
                <ShieldAlert size={12} />
                {fraudLevel} Risk
              </Badge>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 p-8">
            <div className="space-y-6">
              {/* Title and Description */}
              <div className="space-y-3">
                <h1 className="text-2xl font-bold text-slate-900 leading-tight">{title}</h1>
                <p className="text-slate-600 leading-relaxed">{description}</p>
              </div>

              {/* Price and Rating Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Price */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-slate-900">{price}</span>
                    <span className="text-lg text-slate-400 line-through">{originalPrice}</span>
                  </div>
                  <div className="inline-flex items-center px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md">
                    25% off
                  </div>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer Rating</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(rating)
                              ? 'text-amber-400 fill-current'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xl font-bold text-slate-900">{rating}</span>
                  </div>
                  <div className="text-sm text-slate-500">
                    {formatNumber(totalReviews)} reviews
                  </div>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-red-500" size={18} />
                    <h3 className="font-semibold text-slate-900">Risk Assessment</h3>
                  </div>
                  <Badge variant={fraudColor} className="text-xs px-2 py-1">
                    {(fraudScore * 100).toFixed(0)}% Risk
                  </Badge>
                </div>
                
                {/* Risk Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Fraud Probability</span>
                    <span className="text-slate-700 font-medium">{(fraudScore * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-red-400 to-red-500"
                      style={{ width: `${fraudScore * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 