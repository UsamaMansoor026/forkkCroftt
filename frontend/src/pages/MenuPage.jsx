import React, { useEffect, useState } from "react";
import { PageHeader } from "../components";
import { menuItems, productsCategories } from "../assets";
import MenuItem from "../components/cards/MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { backendURL } from "../apiurls";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        `${backendURL}/menu/getallitems?category=${selectedCategory}`
      );
      if (response.data.success) {
        setFilteredItems(response.data.data.menuItems);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader heading="Specialties" targetLink="Menu" />

      <div className="flex flex-wrap justify-center gap-4 my-8">
        {productsCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 w-[130px] rounded-full border 
              ${
                selectedCategory === category
                  ? "bg-primary-text text-primary border-primary"
                  : "bg-transparent text-primary-text border-primary-text "
              }
              transition-all duration-300 cursor-pointer
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredItems?.length > 0 ? (
        <div className="global-padding grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
          <AnimatePresence>
            {filteredItems.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <MenuItem key={item.id} item={item} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <p className="text-xl text-center text-captions my-16">
          No Products in this category
        </p>
      )}
    </>
  );
};

export default MenuPage;
