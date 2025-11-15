import React, { useState } from 'react';
import { Star, ChevronRight, Grid, List } from 'lucide-react';

const ProductListing = () => {
  const [viewType, setViewType] = useState('list');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: 1,
      name: 'Xiaomi Mi',
      category: 'Android',
      price: 32,
      originalPrice: null,
      rating: 4,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop',
      badge: 'Sold out',
      description: 'Xiaomi Mi A2 64 GB, Xiaomi Mi A2 Not 64 GB, Xiaomi Mi A2 Lite 32 GB, Xiaomi Mi A2 Lite 64 GB'
    },
    {
      id: 2,
      name: 'HUAWEI Y9 2019 128 GB',
      category: 'Android',
      price: 120,
      originalPrice: null,
      rating: 4,
      reviews: 738,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&h=200&fit=crop',
      badge: null,
      description: '4/5 items available at price $120, this is to be limited time offer'
    },
    {
      id: 3,
      name: 'OPPO Reno 10X Zoom Camera - Black',
      category: 'Android',
      price: 159,
      originalPrice: null,
      rating: 5,
      reviews: 994,
      image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=200&h=200&fit=crop',
      badge: 'Best',
      description: 'Main Camera 48 + 13 + 8, Camera Features Autofocus, Continuos Shooting, Digital Zoom...'
    },
    {
      id: 4,
      name: 'Xiaomi Mi',
      category: 'Android',
      price: 32,
      originalPrice: 35,
      rating: 3,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=200&h=200&fit=crop',
      badge: 'Sold out',
      description: 'Xiaomi Mi A2 64 GB, Xiaomi Mi A2 Not 64 GB, Xiaomi Mi A2 Lite 32 GB, Xiaomi Mi A2 Lite 64 GB'
    },
    {
      id: 5,
      name: 'OPPO Reno 10X Zoom Camera - Black',
      category: 'Android',
      price: 250,
      originalPrice: null,
      rating: 4,
      reviews: 994,
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=200&h=200&fit=crop',
      badge: null,
      description: 'Main Camera 48 + 13 + 8, Camera Features Autofocus, Continuos Shooting, Digital Zoom...'
    },
    {
      id: 6,
      name: 'Xiaomi Mi',
      category: 'Android',
      price: 32,
      originalPrice: null,
      rating: 4,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=200&h=200&fit=crop',
      badge: 'Sold out',
      description: 'Xiaomi Mi A2 64 GB, Xiaomi Mi A2 Not 64 GB, Xiaomi Mi A2 Lite 32 GB, Xiaomi Mi A2 Lite 64 GB'
    }
  ];

  const categories = [
    { name: 'Smartphone', count: 365, subcategories: ['iPhone', 'Samsung', 'Xiaomi', 'Poco', 'OPPO', 'Honor', 'Motorola', 'Nokia', 'Realme'] },
    { name: 'Laptop', count: 365 },
    { name: 'Watches', count: 24 },
    { name: 'Headphone', count: 120 }
  ];

  const brands = ['Apple', 'Samsung', 'Xiaomi', 'Poco', 'OPPO', 'Honor', 'Motorola', 'Nokia', 'Realme'];
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 border-r border-gray-200 overflow-y-auto">
        <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Category</h2>
        
        {/* Categories */}
        <div className="mb-8">
          {categories.map((category, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                </label>
                <span className="text-xs text-gray-400">{category.count}</span>
              </div>
              {category.subcategories && (
                <div className="ml-6 space-y-2">
                  {category.subcategories.map((sub, subIdx) => (
                    <label key={subIdx} className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-3.5 h-3.5 text-blue-600 rounded border-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">{sub}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Brand */}
        <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Brand</h2>
        <div className="mb-8 space-y-2">
          {brands.map((brand, idx) => (
            <label key={idx} className="flex items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <span className="ml-2 text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>

        {/* Price Range */}
        <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Price Range</h2>
        <div className="mb-8">
          <input type="range" min="0" max="1000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">$0</span>
            <span className="text-sm text-gray-600">$1000</span>
          </div>
        </div>

        {/* Ratings */}
        <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Ratings</h2>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label key={rating} className="flex items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
              <div className="ml-2 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">& up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>14 / 365 (7.5) Mobile Accessories</span>
            <ChevronRight size={16} />
            <button className="text-blue-600">All items</button>
            <span>|</span>
            <span>Products</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded px-2 py-1">
              <button
                onClick={() => setViewType('grid')}
                className={`p-1 ${viewType === 'grid' ? 'text-blue-600' : 'text-gray-400'}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-1 ${viewType === 'list' ? 'text-blue-600' : 'text-gray-400'}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Products - List View */}
        {viewType === 'list' && (
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex">
                  {/* Product Image */}
                  <div className="relative w-32 h-32 shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded"
                    />
                    {product.badge && (
                      <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
                        product.badge === 'Best' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="ml-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{product.name}</h3>
                        <p className="text-sm text-blue-600 mb-2">{product.category}</p>
                        <div className="flex items-center mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{product.reviews}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                          {product.description}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="ml-4 text-right">
                    <div className="text-2xl font-bold text-gray-900">${product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">${product.originalPrice}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Products - Grid View */}
        {viewType === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                {/* Product Image */}
                <div className="relative w-full h-48 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                  {product.badge && (
                    <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
                      product.badge === 'Best' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <p className="text-sm text-blue-600 mb-2">{product.category}</p>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{product.reviews}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">${product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">${product.originalPrice}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center mt-8 space-x-2">
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Previous</button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 text-sm rounded ${
                page === 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;