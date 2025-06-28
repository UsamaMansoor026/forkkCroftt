import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    _id: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalItems: { type: Number, required: true },
    items: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "MenuItem",
          required: true,
        },
        name: String,
        quantity: Number,
        image: String,
        price: Number,
        discountPrice: Number,
        discountPercent: Number,
      },
    ],
    status: { type: String, default: "Pending" },
    totalBill: { type: Number, required: true },
  },
  { timeStamps: true }
);

const OrderModel =
  mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default OrderModel;
