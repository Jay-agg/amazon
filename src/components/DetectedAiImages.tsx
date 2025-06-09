import Image from 'next/image';
import { Zap, Eye, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface AiImage {
  id: number;
  url: string;
  confidenceScore: number;
  detectionReason: string;
}

interface DetectedAiImagesProps {
  images: AiImage[];
}

export function DetectedAiImages({ images }: DetectedAiImagesProps) {
  return (
    <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
      <CardHeader className="border-b border-purple-200 bg-white/50">
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <Zap className="text-purple-600" size={28} />
          Detected AI Images
          <Badge variant="secondary" className="ml-auto bg-purple-100 text-purple-800">
            {images.length} Found
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={image.id} className="bg-white rounded-xl overflow-hidden border border-purple-200 shadow-sm">
              {/* Image */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={image.url}
                  alt={`AI Generated Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <Eye size={12} />
                    AI
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Confidence</span>
                      <span>{(image.confidenceScore * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-purple-600" size={16} />
                    <span className="text-sm font-semibold text-purple-800">Detection Analysis</span>
                  </div>
                  
                  <p className="text-sm text-gray-700">{image.detectionReason}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-medium">AI Confidence</span>
                      <span className="text-purple-800 font-bold">
                        {(image.confidenceScore * 100).toFixed(0)}%
                      </span>
                    </div>
                    <Progress 
                      value={image.confidenceScore * 100} 
                      className="h-2 bg-purple-100" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Detection Summary */}
        <div className="mt-6 p-4 bg-purple-100 border border-purple-300 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="text-purple-600" size={20} />
            <span className="font-semibold text-purple-800">AI Detection Summary</span>
          </div>
          <p className="text-sm text-purple-700">
            Our advanced AI detection algorithms have identified {images.length} images that show 
            strong indicators of being artificially generated. These images may be used to mislead 
            customers about the actual product appearance or quality.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              Deep Learning Analysis
            </Badge>
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              Pattern Recognition
            </Badge>
            <Badge variant="outline" className="text-purple-700 border-purple-300">
              Artifact Detection
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 