import React, { useState } from "react";
import {
  Package,
  ShoppingCart,
  User,
  LogOut,
  Plus,
  Eye,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const FarmerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Organic Tomatoes",
      price: 45,
      maxGuests: 50,
      photos: "tomatoes.jpg",
      description: "Fresh organic tomatoes",
      status: "available",
    },
    {
      _id: "2",
      title: "Fresh Wheat",
      price: 25,
      maxGuests: 100,
      photos: "wheat.jpg",
      description: "Premium quality wheat",
      status: "available",
    },
  ]);

  const [orders, setOrders] = useState([
    {
      _id: "ORD001",
      productTitle: "Organic Tomatoes",
      buyerName: "Ramesh Kumar",
      quantity: 10,
      totalPrice: 450,
      status: "pending",
      date: "2025-10-08",
    },
    {
      _id: "ORD002",
      productTitle: "Fresh Wheat",
      buyerName: "Suresh Patel",
      quantity: 50,
      totalPrice: 1250,
      status: "confirmed",
      date: "2025-10-07",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    title: "",
    address: "",
    photos: "",
    description: "",
    perks: "",
    extrsInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: "",
    price: "",
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.name]: e.value });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logout Successfully");
    navigate("/");
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      _id: Date.now().toString(),
      ...newProduct,
      status: "available",
    };
    setProducts([...products, product]);
    setNewProduct({
      title: "",
      address: "",
      photos: "",
      description: "",
      perks: "",
      extrsInfo: "",
      checkIn: "",
      checkOut: "",
      maxGuests: "",
      price: "",
    });
    setShowAddForm(false);
    setActiveTab("products");
  };

  const handleOrderStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const menuItems = [
    { id: "overview", label: "Dashboard", icon: Package },
    { id: "add-product", label: "Add Product", icon: Plus },
    { id: "products", label: "All Products", icon: Eye },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "profile", label: "Profile", icon: User },
  ];

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className={`${color} rounded-lg p-6 shadow-md`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
        </div>
        <div className="bg-white bg-opacity-50 p-3 rounded-full">
          <Icon className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold">Farmer DashBoard</h1>
            </div>
            <div className="flex items-center space-x-4">
            
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-green-700 rounded-lg transition"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block w-full md:w-64 bg-white rounded-lg shadow-md p-4 h-[500px]`}
          >
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setShowAddForm(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                      activeTab === item.id
                        ? "bg-gradient-to-r from-green-500 to-yellow-500 text-white"
                        : "text-gray-700 hover:bg-green-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow-md p-6">
            {/* Overview */}
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <StatCard
                    title="Total Products"
                    value={products.length}
                    icon={Package}
                    color="bg-gradient-to-br from-green-200 to-green-300"
                  />
                  <StatCard
                    title="Pending Orders"
                    value={orders.filter((o) => o.status === "pending").length}
                    icon={ShoppingCart}
                    color="bg-gradient-to-br from-yellow-200 to-yellow-300"
                  />
                  <StatCard
                    title="Total Revenue"
                    value={`₹${orders.reduce(
                      (sum, o) => sum + o.totalPrice,
                      0
                    )}`}
                    icon={Package}
                    color="bg-gradient-to-br from-green-300 to-yellow-200"
                  />
                </div>

                <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Welcome Back!
                  </h3>
                  <p className="text-gray-700">
                    Manage your products, track orders, and grow your farming
                    business efficiently.
                  </p>
                </div>
              </div>
            )}

            {/* Add Product */}
            {activeTab === "add-product" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Add New Product
                </h2>
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={newProduct.title}
                        onChange={(e) => handleInputChange(e.target)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Farm Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={newProduct.address}
                        onChange={(e) => handleInputChange(e.target)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price (₹/kg)
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={newProduct.price}
                        onChange={(e) => handleInputChange(e.target)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Available Quantity (kg)
                      </label>
                      <input
                        type="number"
                        name="maxGuests"
                        value={newProduct.maxGuests}
                        onChange={(e) => handleInputChange(e.target)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Harvest Date
                      </label>
                      <input
                        type="number"
                        name="checkIn"
                        placeholder="Days ago"
                        value={newProduct.checkIn}
                        onChange={(e) => handleInputChange(e.target)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry (Days)
                      </label>
                      <input
                        type="number"
                        name="checkOut"
                        value={newProduct.checkOut}
                        onChange={(e) => handleInputChange(e.target)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={newProduct.description}
                      onChange={(e) => handleInputChange(e.target)}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Perks/Features
                    </label>
                    <input
                      type="text"
                      name="perks"
                      placeholder="Organic, Fresh, Pesticide-free"
                      value={newProduct.perks}
                      onChange={(e) => handleInputChange(e.target)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Photo URL
                    </label>
                    <input
                      type="text"
                      name="photos"
                      value={newProduct.photos}
                      onChange={(e) => handleInputChange(e.target)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition"
                  >
                    Add Product
                  </button>
                </form>
              </div>
            )}

            {/* All Products */}
            {activeTab === "products" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  All Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {product.title}
                        </h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          {product.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-600">
                          ₹{product.price}/kg
                        </span>
                        <span className="text-sm text-gray-500">
                          {product.maxGuests} kg available
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Orders */}
            {activeTab === "orders" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Order Management
                </h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order._id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {order.productTitle}
                            </h3>
                            <span
                              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                order.status === "pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : order.status === "confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            Buyer: {order.buyerName}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            Quantity: {order.quantity} kg
                          </p>
                          <p className="text-sm text-gray-600">
                            Date: {order.date}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p className="text-xl font-bold text-green-600">
                            ₹{order.totalPrice}
                          </p>
                          {order.status === "pending" && (
                            <div className="flex gap-2">
                              <button
                                onClick={() =>
                                  handleOrderStatusChange(
                                    order._id,
                                    "confirmed"
                                  )
                                }
                                className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition"
                              >
                                Confirm
                              </button>
                              <button
                                onClick={() =>
                                  handleOrderStatusChange(order._id, "rejected")
                                }
                                className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile */}
            {activeTab === "profile" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Farmer Profile
                </h2>
                <div className="max-w-2xl">
                  <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg p-6 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        RS
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          Raj Sharma
                        </h3>
                        <p className="text-gray-600">Farmer ID: FRM2025001</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800 font-medium">
                        raj.sharma@gmail.com
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800 font-medium">
                        +91 98765 43210
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-500">Farm Location</p>
                      <p className="text-gray-800 font-medium">
                        Village Khora, District Raipur, Chhattisgarh
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-500">Farm Size</p>
                      <p className="text-gray-800 font-medium">5 Acres</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="text-gray-800 font-medium">January 2025</p>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-yellow-600 transition">
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
