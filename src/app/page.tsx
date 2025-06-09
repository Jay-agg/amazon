import { Shield, TrendingUp, AlertTriangle } from 'lucide-react';
import { ProductHeader } from '@/components/ProductHeader';
import { DeceptiveReviews } from '@/components/DeceptiveReviews';
import { DetectedAiImages } from '@/components/DetectedAiImages';
import { SellerInformation } from '@/components/SellerInformation';
import { productData } from '@/lib/dummy-data';

export default function ProductAnalysis() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={18} />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-900">FraudGuard</h1>
                <p className="text-xs text-slate-500">AI-Powered Detection</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Live Analysis
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alert Banner */}
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-500 mt-0.5" size={20} />
            <div>
              <h3 className="text-sm font-semibold text-red-900 mb-1">High Risk Product Detected</h3>
              <p className="text-sm text-red-700">
                This product has been flagged for potential fraudulent activity. Review the analysis below for detailed insights.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Product Header */}
          <ProductHeader
            title={productData.title}
            description={productData.description}
            price={productData.price}
            originalPrice={productData.originalPrice}
            rating={productData.rating}
            totalReviews={productData.totalReviews}
            image={productData.image}
            fraudScore={productData.fraudScore}
          />

          {/* Analysis Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <DeceptiveReviews reviews={productData.deceptiveReviews} />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <DetectedAiImages images={productData.detectedAiImages} />
            </div>
          </div>

          {/* Seller Information - Full Width */}
          <SellerInformation seller={productData.seller} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="text-slate-600" size={18} />
              <span className="text-base font-semibold text-slate-900">FraudGuard AI</span>
            </div>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Advanced AI technology protecting consumers from fraudulent products across e-commerce platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <span>Real-time Detection</span>
              <span className="text-slate-300">•</span>
              <span>Machine Learning</span>
              <span className="text-slate-300">•</span>
              <span>Consumer Protection</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
