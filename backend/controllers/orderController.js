import CounterModel from "../models/Counter.js";
import OrderModel from "../models/Order.js";
import User from "../models/User.js";

/* Placing new order in the Database */
export const placeOrder = async (req, res) => {
  const { userId, items } = req.body;

  try {
    /* Checking if the items is array and having length grater than 0 */
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No items provided" });
    }

    console.log("Items: ", items);
    console.log("User Id: ", userId);

    /* Generating the Custom Id for Order Document */
    const counter = await CounterModel.findByIdAndUpdate(
      { _id: "orderId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const customId = `ORD-${counter.seq.toString().padStart(5, "0")}`;

    /* Calculating the bill and totalItems */
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalBill = items.reduce((sum, item) => {
      return sum + item.discountPrice * item.quantity;
    }, 0);

    const newOrder = new OrderModel({
      _id: customId,
      userId,
      totalItems,
      items,
      totalBill,
    });

    const order = await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: order,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/* Fetching all the order based on userId for Frontend */
export const getUserOrders = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("UserId: ", id);
    const userOrders = await OrderModel.find({ userId: id });
    // console.log("User Orders: ", userOrders);
    return res.status(200).json({ success: true, data: { userOrders } });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/* Fetching all the Orders from Order collection for the admin panel */
export const getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: { orders } });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/* handling the Status of the order */
export const handleOrderStatus = async (req, res) => {
  const { newstatus } = req.body;
  const { id } = req.params;

  console.log("New Status: ", newstatus);
  console.log("Order Id: ", id);
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      { _id: id },
      {
        status: newstatus,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Order Status Updated Successfully",
      data: { updatedOrder },
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/* Deleting the Order */
export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await OrderModel.findByIdAndDelete(id);

    if (!order) {
      res.status(400).json({ success: false, message: "Order Not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Order Deleted", data: { order } });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/* Summary of forkCroft */
export const summary = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    const users = await User.find();

    if (!orders) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found" });
    }

    const totalOrders = orders.length;
    const pendingOrders = orders.filter(
      (order) => order.status === "Pending"
    ).length;
    const totalRevenue = orders
      .reduce((acc, order) => acc + order.totalBill, 0)
      .toFixed(2);

    const summary = [
      {
        title: "Total Revenue",
        // value: `$${totalRevenue}`,
        value: `$40.15`,
        iconClass: "fa-solid fa-dollar-sign",
        iconBg: "bg-green-500",
      },
      {
        title: "Total Orders",
        value: `${totalOrders}`,
        iconClass: "fa-solid fa-cart-shopping",
        iconBg: "bg-blue-600",
      },
      {
        title: "Pending Orders",
        value: `${pendingOrders}`,
        iconClass: "fa-solid fa-clock",
        iconBg: "bg-yellow-500",
      },
      {
        title: "Total Customers",
        value: `${users?.length}`,
        iconClass: "fa-solid fa-users",
        iconBg: "bg-purple-500",
      },
    ];

    return res.status(200).json({
      success: true,
      data: { summary },
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
