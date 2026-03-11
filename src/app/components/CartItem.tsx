import { Minus, Plus, Trash2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartItemProps {
  id: string;
  image: string;
  name: string;
  size: string;
  quantity: number;
  price: number;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ 
  id, 
  image, 
  name, 
  size, 
  quantity, 
  price,
  onQuantityChange,
  onRemove 
}: CartItemProps) {
  return (
    <div className="flex gap-3 pb-4 border-b border-gray-200">
      <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm mb-1">{name}</h3>
          <p className="text-xs text-gray-500">Size: {size}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md">
            <button
              onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
              className="p-1.5 hover:bg-gray-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-sm w-8 text-center">{quantity}</span>
            <button
              onClick={() => onQuantityChange(id, quantity + 1)}
              className="p-1.5 hover:bg-gray-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <p className="font-medium">₹{price}</p>
            <button
              onClick={() => onRemove(id)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
