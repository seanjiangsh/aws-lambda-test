import { Request, Response } from "express";
import Stripe from "stripe";

export const createPaymentIntent = async (req: Request, res: Response) => {
  const { STRIPE_SECRET_KEY } = process.env;
  if (!STRIPE_SECRET_KEY) {
    console.error("cannot find STRIPE_SECRET_KEY");
    return res.status(500).send("Internal server error");
  }
  try {
    const { amount } = req.body;
    if (!amount) return res.status(400).send("Invalid request");
    const stripe = new Stripe(STRIPE_SECRET_KEY);
    const createParams: Stripe.PaymentIntentCreateParams = {
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    };
    const paymentIntents = await stripe.paymentIntents.create(createParams);
    return res.send(paymentIntents);
  } catch (err) {
    console.log({ err });
    return res.status(500).send("Internal server error");
  }
};
