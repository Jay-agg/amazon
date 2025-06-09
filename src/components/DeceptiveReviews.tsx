import { Star, AlertTriangle, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Review {
  id: number;
  reviewer: string;
  rating: number;
  date: string;
  content: string;
  flaggedReason: string;
  confidenceScore: number;
}

interface DeceptiveReviewsProps {
  reviews: Review[];
}

export function DeceptiveReviews({ reviews }: DeceptiveReviewsProps) {
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
            <MessageSquare className="text-amber-600" size={16} />
          </div>
          <div>
            <CardTitle className="text-lg">Suspicious Reviews</CardTitle>
            <p className="text-sm text-slate-500 mt-1">AI-detected potentially deceptive feedback</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-600">
                    {review.reviewer.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">{review.reviewer}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={`${
                            i < review.rating
                              ? 'text-amber-400 fill-current'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <Badge 
                variant="warning" 
                className="text-xs px-2 py-1"
              >
                {(review.confidenceScore * 100).toFixed(0)}% suspicious
              </Badge>
            </div>

            {/* Review Content */}
            <div className="space-y-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                "{review.content}"
              </p>
              
              {/* Detection Reason */}
              <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-md border border-amber-100">
                <AlertTriangle className="text-amber-600 mt-0.5" size={14} />
                <div>
                  <p className="text-xs font-medium text-amber-800 mb-1">Detection Reason</p>
                  <p className="text-xs text-amber-700">{review.flaggedReason}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Summary */}
        <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-100">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-500 mt-0.5" size={16} />
            <div>
              <p className="font-medium text-red-900 text-sm mb-1">
                Analysis Summary
              </p>
              <p className="text-sm text-red-700">
                {reviews.length} out of recent reviews show patterns consistent with fake or manipulated feedback. 
                Consider this when evaluating product authenticity.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 