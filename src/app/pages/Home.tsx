import { useState } from 'react';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { Link } from 'react-router';
import { CategoryButton } from '../components/CategoryButton';
import { ProductCard } from '../components/ProductCard';

const categories = ['All', 'Shirts', 'Trousers', 'Jackets', 'Jeans', 'Blazers'];

const products = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1634136918547-8c1dd23c4602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXN1YWwlMjBzaGlydCUyMHdoaXRlfGVufDF8fHx8MTc3MzI0OTEyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'White Oxford Cotton Slim Fit Casual Shirt',
    price: 1299,
    originalPrice: 1999,
    discount: 35
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1642804425115-9ba5d4b00059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBibGFjayUyMGZvcm1hbCUyMHNoaXJ0fGVufDF8fHx8MTc3MzI0OTEyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Black Formal Stretch Shirt',
    price: 1499,
    originalPrice: 2299,
    discount: 35
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1657349038547-b18a07fb4329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBkZW5pbSUyMGphY2tldCUyMGZhc2hpb258ZW58MXx8fHwxNzczMjQ5MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Denim Jacket With Distressed Details',
    price: 2499,
    originalPrice: 3999,
    discount: 38
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1763328696733-8444f67e8af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBibHVlJTIwamVhbnMlMjBjYXN1YWx8ZW58MXx8fHwxNzczMjQ5MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Blue Slim Fit Mid Rise Jeans',
    price: 1799,
    originalPrice: 2799,
    discount: 36
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1768696081547-f577a38c4eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBiZWlnZSUyMGNoaW5vcyUyMHRyb3VzZXJzfGVufDF8fHx8MTc3MzI0OTEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Beige Cotton Blend Chinos',
    price: 1399,
    originalPrice: 2199,
    discount: 36
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1745270008562-318fb7dbfe1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBuYXZ5JTIwYmxhemVyJTIwZm9ybWFsfGVufDF8fHx8MTc3MzI0OTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    name: 'Navy Blue Slim Fit Blazer',
    price: 3499,
    originalPrice: 5999,
    discount: 42
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="sticky top-0 bg-white z-10 px-5 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 -ml-2">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-medium">SNITCH</h1>
            <div className="flex items-center gap-1">
              <Link to="/login" className="p-2">
                <User className="w-6 h-6" />
              </Link>
              <Link to="/cart" className="p-2 -mr-2 relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></span>
              </Link>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </header>

        {/* Categories */}
        <div className="px-5 py-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            {categories.map((category) => (
              <CategoryButton
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="px-5 mb-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl p-6 text-white">
            <p className="text-sm mb-1">FLASH SALE</p>
            <h2 className="text-2xl mb-2">Up to 50% OFF</h2>
            <p className="text-sm text-gray-300 mb-4">On selected items</p>
            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="px-5 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">New Arrivals</h2>
            <button className="text-sm text-gray-600">View All</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}