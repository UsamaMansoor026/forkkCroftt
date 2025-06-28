import mongoose from "mongoose";

const MenuItemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercent: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const MenuItem =
  mongoose.models.MenuItem || mongoose.model("MenuItem", MenuItemSchema);

export default MenuItem;
