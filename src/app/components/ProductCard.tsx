import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
}

export function ProductCard({ 
  image, 
  name, 
  price, 
  originalPrice,
  discount 
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-2 aspect-[3/4]">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <h3 className="text-sm mb-1 line-clamp-2">{name}</h3>
      <div className="flex items-center gap-2">
        <span className="font-medium">₹{price}</span>
        {originalPrice && (
          <span className="text-xs text-gray-500 line-through">₹{originalPrice}</span>
        )}
      </div>
    </div>
  );
}
