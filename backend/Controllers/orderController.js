import Order from "../Models/orderModel.js";
import productModel from "../Models/productModel.js";

// ✅ Create a new order
export const createOrder = async (req, res) => {
    try {
        const { products, paymentMethod, address } = req.body;
        const userId = req.user.id; // from auth middleware

        if (!products || products.length === 0) {
            return res.status(400).json({ message: "No products in order" });
        }

        let totalAmount = 0;

        // Calculate total amount and fetch product prices
        const orderItems = await Promise.all(
            products.map(async (item) => {
                const product = await Product.findById(item.product);
                if (!product) throw new Error("Product not found");
                const price = product.price * item.quantity;
                totalAmount += price;
                return {
                    product: product._id,
                    quantity: item.quantity,
                    price: price,
                };
            })
        );

        const order = new Order({
            user: userId,
            products: orderItems,
            totalAmount,
            paymentMethod,
            address,
        });

        await order.save();
        res.status(201).json({ success: true, order });
    } catch (err) {
        console.error("Error creating order:", err);
        res.status(500).json({ message: err.message });
    }
};

// ✅ Get all orders (for admin/farmer dashboard)
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("user", "name email")
            .populate("products.product", "title price photos")
            .sort({ createdAt: -1 });

        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Get orders for the logged-in user
export const getUserOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await Order.find({ user: userId })
            .populate("products.product", "title price photos")
            .sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Update order status (admin/farmer only)
export const updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ message: "Order not found" });

        order.orderStatus = status;
        await order.save();
        res.status(200).json({ success: true, message: "Status updated", order });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Delete order (optional - admin)
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.status(200).json({ success: true, message: "Order deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
