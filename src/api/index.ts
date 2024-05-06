import express from "express";
import { expressMiddleware } from "@apollo/server/express4";

import apolloserver from "./graphql";
import { createPaymentIntent } from "./stripe/controllers";

const apiRouter = express.Router();

// * Apply Apollo middleware to Express
apolloserver.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();
apiRouter.use("/graphql", expressMiddleware(apolloserver));

// * Define Stripe endpoint
apiRouter.post("/create-payment-intent", createPaymentIntent);

export default apiRouter;
