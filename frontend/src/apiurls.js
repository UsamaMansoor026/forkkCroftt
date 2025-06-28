export const backendURL = import.meta.env.VITE_BACKEND_URL;
export const apiUrls = {
  loginAPI: `${backendURL}/auth/login`,
  registerAPI: `${backendURL}/auth/register`,
  paymentAPI: `${backendURL}/payment/create-checkout-session`,
  fetchUserReservationsAPI: `${backendURL}/reservation/user`,
  addReservationAPI: `${backendURL}/reservation/add`,
  fetchUserOrdersAPI: `${backendURL}/order/getorders`,
  placeOrderAPI: `${backendURL}/order/placeorder`,
  fetchAllMenuItemsAPI: `${backendURL}/menu/getallitems`,
  addFeedbackAPI: `${backendURL}/feedback/add`,
};
