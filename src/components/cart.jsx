import React from 'react'
import  { useState } from 'react';
import { ShoppingCart, Heart, Star, ChevronRight, Plus, Minus } from 'lucide-react';
const cart = () => {
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');

  const colors = [
    { name: 'blue', class: 'bg-blue-500' },
    { name: 'red', class: 'bg-red-500' },
    { name: 'black', class: 'bg-black' },
    { name: 'orange', class: 'bg-orange-500' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const productImages = [
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop'
  ];

  const relatedProducts = [
    { id: 1, name: 'Blue denim jacket', price: 32, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop' },
    { id: 2, name: 'Men Smart Watch', price: 80, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
    { id: 3, name: 'Headphone', price: 30, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
    { id: 4, name: 'Denim shorts', price: 80, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=200&h=200&fit=crop' },
    { id: 5, name: 'Black jug', price: 15, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=200&h=200&fit=crop' },
    { id: 6, name: 'Orange jacket', price: 52, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop' }
  ];

  const cartItems = [
    { id: 1, name: 'Green apple', price: 8, qty: 2, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=80&h=80&fit=crop' },
    { id: 2, name: 'Fresh Indian orange', price: 12, qty: 4, image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=80&h=80&fit=crop' },
    { id: 3, name: 'Fresh cauliflower', price: 80, qty: 2, image: 'https://images.unsplash.com/photo-1568584711271-946d03f63e40?w=80&h=80&fit=crop' }
  ];

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => q > 1 ? q - 1 : 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <span>Home</span>
            <ChevronRight size={16} className="mx-2" />
            <span>Men Cloth</span>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-900">White Long Sleeve T-shirt Cotton Base...</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Left Side - Product Images and Details */}
          <div className="flex-1">
            {/* Product Images */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div>
                {/* Main Image */}
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4" style={{ height: '400px' }}>
                  <img src={productImages[0]} alt="Product" className="w-full h-full object-cover" />
                </div>

                {/* Thumbnail List */}
                <div className="flex gap-3">
                  {productImages.map((img, idx) => (
                    <div key={idx} className={`w-16 h-16 border-2 rounded-lg overflow-hidden cursor-pointer ${idx === 0 ? 'border-blue-500' : 'border-gray-200'}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info Tabs */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex border-b mb-4">
                <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">Description</button>
                <button className="px-4 py-2 text-gray-500">Reviews</button>
                <button className="px-4 py-2 text-gray-500">Shipping</button>
                <button className="px-4 py-2 text-gray-500">About Company</button>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Specs Table */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex py-2 border-b">
                  <span className="text-gray-500 w-32">Model</span>
                  <span className="text-gray-900">Xiaomi</span>
                </div>
                <div className="flex py-2 border-b">
                  <span className="text-gray-500 w-32">Memory</span>
                  <span className="text-gray-900">128GB</span>
                </div>
                <div className="flex py-2 border-b">
                  <span className="text-gray-500 w-32">Color</span>
                  <span className="text-gray-900">White, Blue</span>
                </div>
                <div className="flex py-2 border-b">
                  <span className="text-gray-500 w-32">Screen</span>
                  <span className="text-gray-900">6.5 inch</span>
                </div>
                <div className="flex py-2 border-b">
                  <span className="text-gray-500 w-32">Battery</span>
                  <span className="text-gray-900">4000mah</span>
                </div>
                <div className="flex py-2 border-b">
                  <span className="text-gray-500 w-32">Camera</span>
                  <span className="text-gray-900">20MP+8MP</span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Some great feature name here</li>
                <li>• Lorem ipsum dolor sit amet, consectetur</li>
                <li>• Duis aute irure dolor in reprehenderit</li>
                <li>• Some great feature name here</li>
              </ul>
            </div>

            {/* Related Products */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Related products</h3>
              <div className="grid grid-cols-6 gap-4">
                {relatedProducts.map(product => (
                  <div key={product.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
                    <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded mb-2" />
                    <p className="text-xs text-gray-900 mb-1">{product.name}</p>
                    <p className="text-sm font-semibold text-gray-900">${product.price}.95</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-blue-600 rounded-lg p-6 mt-6 flex items-center justify-between">
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Super discount on more than 100 USD</h3>
                <p className="text-blue-100 text-sm">Have you ever finally just wrote dummy info</p>
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600">
                Shop now
              </button>
            </div>
          </div>

          {/* Right Side - Product Details and Cart */}
          <div className="w-96">
            {/* Product Info Card */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h1 className="text-xl font-semibold text-gray-900 mb-1">White Long Sleeve T-shirt Cotton Base...</h1>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">9.3</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart size={24} />
                </button>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">$34.95</span>
                <span className="text-lg text-gray-400 line-through">$56.00</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <span className="text-gray-500">Type:</span>
                  <span className="text-gray-900 ml-2">Classic shoes</span>
                </div>
                <div>
                  <span className="text-gray-500">SKU:</span>
                  <span className="text-gray-900 ml-2">KVM9988</span>
                </div>
                <div>
                  <span className="text-gray-500">Material:</span>
                  <span className="text-gray-900 ml-2">Plastic material</span>
                </div>
                <div>
                  <span className="text-gray-500">Brand:</span>
                  <span className="text-gray-900 ml-2">Easy</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Select color:</p>
                <div className="flex gap-2">
                  {colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full ${color.class} ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Select size:</p>
                <div className="flex gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium ${selectedSize === size ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-300 text-gray-700'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Select quantity:</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button onClick={decreaseQuantity} className="px-3 py-2 hover:bg-gray-100">
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[50px] text-center">{quantity}</span>
                    <button onClick={increaseQuantity} className="px-3 py-2 hover:bg-gray-100">
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">50 pieces available</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 mb-3">
                Buy now
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50">
                Add to cart
              </button>
            </div>

            {/* Cart Summary */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Cart</h3>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
              </div>

              <div className="space-y-3 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 mb-1">{item.name}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-900">${item.price}</span>
                        <span className="text-xs text-gray-500">x{item.qty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full text-blue-600 text-sm font-medium mb-4">Apply code</button>

              <div className="border-t pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Subtotal:</span>
                  <span className="text-gray-900 font-medium">$160.00</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-gray-500">Discount:</span>
                  <span className="text-red-500 font-medium">- $60.00</span>
                </div>
                <div className="flex justify-between text-base font-semibold">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-gray-900">$100.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart