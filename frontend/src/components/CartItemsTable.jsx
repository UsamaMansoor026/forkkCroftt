import React from "react";
import { useCartStore } from "../store/store";
import { toast } from "react-toastify";

const CartItemsTable = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const clearCart = useCartStore((state) => state.clearCart);

  console.log("Cart Items: ", cartItems);

  const handleAddtoCart = (item) => {
    addToCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="overflow-x-auto rounded-lg p-4">
      {cartItems?.length > 0 ? (
        <table className="min-w-full divide-y divide-primary-text/20 shadow-md">
          <thead className="text-captions">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Product Image
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Product Quantity
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Product Price
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-transparent divide-y divide-gray-200 text-primary-text text-center">
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap flex justify-center">
                  <img
                    src={`http://localhost:2632/${item.image}`}
                    alt={item.name}
                    className="w-16 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center justify-between rounded-md overflow-hidden">
                    <i
                      className="fa-solid fa-minus w-full text-center py-2.5 cursor-pointer rounded-l-md border border-transparent hover:border-primary-text"
                      onClick={() => removeFromCart(item.id)}
                    />
                    <p className="w-full text-center py-2.5">{item.quantity}</p>
                    <i
                      className="fa-solid fa-plus w-full text-center py-2.5 cursor-pointer rounded-r-md border border-transparent hover:border-primary-text"
                      onClick={() => handleAddtoCart(item)}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${(item.discountPrice * item.quantity).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-red-600 hover:text-red-900 ml-4 cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-captions text-center text-xl">Cart is empty</p>
      )}

      {cartItems?.length > 0 && (
        <div className="flex items-center justify-end my-3">
          <button
            type="button"
            className="bg-cta px-8 py-1.5 text-primary-text cursor-pointer transition-all duration-200 shadow-md hover:shadow-cta"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItemsTable;
