import OrderModel from "../models/Order.js";
import dayjs from "dayjs";

const groupBy = (array, keyFn) => {
  return array.reduce((acc, order) => {
    const key = keyFn(order);
    acc[key] = acc[key] || 0;
    acc[key] += order.totalBill;
    return acc;
  }, {});
};

export const getRevenueData = async (req, res) => {
  const { type } = req.query;

  try {
    const orders = await OrderModel.find({ status: "Delivered" });
    // console.log("Orders: ", orders);

    let groupedRevenue = {};

    if (type === "weekly") {
      groupedRevenue = groupBy(orders, (order) =>
        dayjs(order.createdAt).format("ddd")
      );
    } else if (type === "monthly") {
      groupedRevenue = groupBy(
        orders,
        (order) => `Week ${Math.ceil(dayjs(order.createdAt).date() / 7)}`
      );
    } else if (type === "yearly") {
      groupedRevenue = groupBy(orders, (order) =>
        dayjs(order.createdAt).format("MMM")
      );
    } else {
      return res.status(400).json({ success: false, message: "Invalid type" });
    }

    let labels = [];

    if (type === "weekly") {
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    } else if (type === "monthly") {
      labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
    } else if (type === "yearly") {
      labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    }

    const revenue = labels.map((label) => ({
      name: label,
      revenue: Number((groupedRevenue[label] || 0).toFixed(2)),
    }));

    return res.status(200).json({ success: true, revenue });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTopSellingProducts = async (req, res) => {
  try {
    const orders = await OrderModel.find({ status: "Delivered" });

    const productSalesMap = {};

    orders.forEach((order) => {
      order.items.forEach((item) => {
        const key = item.name;

        if (!productSalesMap[key]) {
          productSalesMap[key] = 0;
        }
        productSalesMap[key] += item.quantity;
      });
    });

    const topProducts = Object.entries(productSalesMap)
      .map(([name, quantity]) => ({ name, quantity }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 3);

    return res.status(200).json({ success: true, topProducts });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
