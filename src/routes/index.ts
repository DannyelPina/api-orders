import { Router } from "express";
import { ordersRoutes } from "./orders.routes";
import { paymentsRoutes } from "./payment.routes";

const router = Router();

router.use("/orders", ordersRoutes);
router.use("/payments", paymentsRoutes);

export { router };
