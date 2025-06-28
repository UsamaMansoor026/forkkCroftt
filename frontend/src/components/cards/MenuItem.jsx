import React, { useContext } from "react";
import { useCartStore } from "../../store/store";
import { toast } from "react-toastify";
import { NavigationContext } from "../../context/NavigationContext";

const MenuItem = ({ item }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const { currentUser } = useContext(NavigationContext);

  const handleAddtoCart = (item) => {
    if (!currentUser) {
      toast.error("User not logged in!");
      return;
    }
    addToCart(item);
    toast.success("Item added to cart");
  };

  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem._id === itemId);
  };

  return (
    <article
      key={item._id}
      className="flex bg-white/10 text-primary-text rounded-2xl shadow-lg h-[250px] overflow-hidden relative"
    >
      <img
        src={`http://localhost:2632/${item.image}`}
        alt="Dish"
        className="w-1/2 object-cover"
      />
      <div className="px-4 py-6 w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-sm bg-tags text-primary-text px-4 py-2 w-[max-content] text-muted absolute left-0 top-0 z-10">
            {item.category}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-base line-through text-captions">
            $ {item.price}
          </span>
          <span className=" font-semibold text-base">
            $ {item.discountPrice.toFixed(2)}
          </span>
        </div>

        {isItemInCart(item._id) ? (
          <div className="flex items-center justify-between rounded-md overflow-hidden">
            <i
              className="fa-solid fa-minus bg-cta w-full text-center py-2.5 cursor-pointer rounded-l-md"
              onClick={() => removeFromCart(item._id)}
            />
            <p className="w-full text-center py-2.5">
              {cartItems.find((cartItem) => cartItem._id === item._id)
                ?.quantity || 1}
            </p>
            <i
              className="fa-solid fa-plus bg-cta w-full text-center py-2.5 cursor-pointer rounded-r-md"
              onClick={() => addToCart(item)}
            />
          </div>
        ) : (
          <button
            type="button"
            className="bg-cta border border-cta text-primary-text py-2.5 rounded-md cursor-pointer transition-all duration-200 hover:bg-transparent hover:shadow-2xs hover:shadow-cta"
            onClick={() => handleAddtoCart(item)}
          >
            Order Now
          </button>
        )}
      </div>
    </article>
  );
};

export default MenuItem;
