export const backendURL = import.meta.env.VITE_BACKEND_URL;
export const apiUrls = {
  loginAPI: `${backendURL}/api/auth/login`,
  registerAPI: `${backendURL}/api/auth/register`,
  paymentAPI: `${backendURL}/api/payment/create-checkout-session`,
  fetchUserReservationsAPI: `${backendURL}/api/reservation/user`,
  addReservationAPI: `${backendURL}/api/reservation/add`,
  fetchUserOrdersAPI: `${backendURL}/api/order/getorders`,
  placeOrderAPI: `${backendURL}/api/order/placeorder`,
  fetchAllMenuItemsAPI: `${backendURL}/api/menu/getallitems`,
  addFeedbackAPI: `${backendURL}/api/feedback/add`,
};
