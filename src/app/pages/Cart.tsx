import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { CartItem } from '../components/CartItem';
import { OrderSummary } from '../components/OrderSummary';

interface CartItemType {
  id: string;
  image: string;
  name: string;
  size: string;
  quantity: number;
  price: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1631541410648-10b5f70dcf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNsaW0lMjBmaXQlMjB0cm91c2VycyUyMG1lbnxlbnwxfHx8fDE3NzMyNDg5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Black Slim Fit Stretch Trousers',
      size: '30',
      quantity: 1,
      price: 1499
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1741915313755-208c59c21165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraGFraSUyMHRyb3VzZXJzJTIwbWVuJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzMyNDg5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Yarn Khaki Plain Slim Fit Trousers',
      size: '32',
      quantity: 1,
      price: 1129
    }
  ]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 0; // Free delivery
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl">Shopping Cart</h1>
          </div>
          <p className="text-sm text-gray-500 ml-9">{cartItems.length} items</p>
        </div>

        {/* Cart Items */}
        <div className="flex-1 px-5 py-4 space-y-4">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              {...item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
            />
          ))}

          {/* Order Summary */}
          <div className="pt-2">
            <OrderSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              total={total}
            />
          </div>
        </div>

        {/* Checkout Button */}
        <div className="px-5 py-4 border-t border-gray-200">
          <Link to="/login" className="block">
            <button className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}