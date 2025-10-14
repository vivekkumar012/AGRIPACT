import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  MapPin,
  IndianRupee,
} from "lucide-react";

const BuyerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3001/api/v1/product/allproducts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product._id === product._id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1, price: product.price }]);
    }
  };

  const updateQuantity = (productId, change) => {
    setCart(
      cart
        .map((item) =>
          item.product._id === productId
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.product._id !== productId));
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/buyer/checkout", {
      state: { cart, totalAmount: getTotalAmount() },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-green-600">
              Farm Fresh Market
            </h1>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Products Grid */}
          <div className={`flex-1 ${showCart ? "lg:w-2/3" : "w-full"}`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Available Products
            </h2>

            {products.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-500 text-lg">
                  No products available at the moment.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                  >
                    {product.photos && (
                      <img
                        src={product.photos}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {product.description}
                      </p>

                      {product.address && (
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <MapPin size={14} className="mr-1" />
                          <span>{product.address}</span>
                        </div>
                      )}

                      {product.parks && (
                        <p className="text-gray-500 text-sm mb-3">
                          <span className="font-medium">Category:</span>{" "}
                          {product.parks}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-green-600 font-bold text-xl">
                          <IndianRupee size={20} />
                          <span>{product.price}</span>
                        </div>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                        >
                          <ShoppingCart size={18} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Sidebar */}
          {showCart && (
            <div className="lg:w-1/3 w-full">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Shopping Cart
                </h2>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
                      {cart.map((item) => (
                        <div key={item.product._id} className="border-b pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-800 flex-1">
                              {item.product.title}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.product._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.product._id, -1)
                                }
                                className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.product._id, 1)
                                }
                                className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <div className="flex items-center font-semibold text-green-600">
                              <IndianRupee size={16} />
                              <span>{item.price * item.quantity}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-gray-800">
                          Total:
                        </span>
                        <div className="flex items-center text-2xl font-bold text-green-600">
                          <IndianRupee size={24} />
                          <span>{getTotalAmount()}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleCheckout}
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
