import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cartItems: [],
  totalItems: 0,
  addToCart: (item) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;

        return { cartItems: updatedCartItems };
      } else {
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    }),

  removeFromCart: (itemId) =>
    set((state) => {
      const updatedCartItems = state.cartItems
        .map((item) => {
          if (item._id === itemId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return null;
          }
          return item;
        })
        .filter((item) => item !== null);

      return { cartItems: updatedCartItems };
    }),
  clearCart: () => set({ cartItems: [] }),
  getTotalItems: () =>
    set((state) => {
      return {
        totalItems: state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    }),

  getSubTotal: () => {
    const items = get().cartItems;
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));
