import { Router } from "express";
import { createPaymentMethodController } from "../useCases/createPaymentMethod";

const paymentsRoutes = Router();

paymentsRoutes.post("/methods", (request, response) =>
    createPaymentMethodController.handle(request, response)
);

export { paymentsRoutes };
