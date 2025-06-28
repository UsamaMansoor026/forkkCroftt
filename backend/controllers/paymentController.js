import Stripe from "stripe";

export const createCheckoutSession = async (req, res) => {
  const { cartItems } = req.body;
  //   console.log("CartItems: ", cartItems);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const line_items = cartItems?.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.discountPrice * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: line_items,
      success_url: "http://localhost:5173/payment-success",
      cancel_url: "http://localhost:5173/cart",
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ error: error.message });
  }
};
