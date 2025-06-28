import MenuItem from "../models/MenuItem.js";
import path from "path";
import fs from "fs";

export const addMenuItem = async (req, res) => {
  const { name, price, discountPercent, discountPrice, category } = req.body;

  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    const imagePath = path.join("uploads", req.file.filename);
    const newItem = new MenuItem({
      name,
      price,
      discountPercent,
      discountPrice,
      image: imagePath,
      category,
    });
    await newItem.save();
    res.status(201).json({ success: true, message: "Menu Item added" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(501).json({ success: false, message: "Server Error" });
  }
};

export const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, price, discountPercent, discountPrice, category } = req.body;

  try {
    const item = await MenuItem.findByIdAndUpdate(id, {
      name,
      price,
      discountPercent,
      discountPrice,
      category,
    });
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Item Not Found" });
    }
    res.status(200).json({ success: true, message: "Item Updated" });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getMenuItems = async (req, res) => {
  const { category } = req.query;
  try {
    let menuItems;
    if (category === "All" || !category) {
      menuItems = await MenuItem.find();
    } else {
      menuItems = await MenuItem.find({ category });
    }

    res.status(201).json({ success: true, data: { menuItems } });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      success: false,
      message: "Server Error, please try again later",
    });
  }
};

export const getSingleItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await MenuItem.findById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: "No Item Found" });
    }
    return res.status(200).json({ success: true, data: { item } });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await MenuItem.findById(id);

    if (!item) {
      console.log("Item not found");
      return res
        .status(404)
        .json({ success: false, message: "Item Not Found" });
    }

    /* Image Deletion */
    if (item.image) {
      const imagePath = path.join(process.cwd(), "", item.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.log("Error while deleting the image: ", err.message);
        } else {
          console.log("Image deleted from: ", imagePath);
        }
      });
    }

    /* Now deleting the Item from database */
    await MenuItem.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ success: true, message: "Item Deleted Successfully" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
