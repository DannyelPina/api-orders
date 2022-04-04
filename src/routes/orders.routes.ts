import { Router } from "express";
import { createOrderController } from "../useCases/createOrder";

const ordersRoutes = Router();

ordersRoutes.post("/", (request, response) =>
    createOrderController.handle(request, response)
);

ordersRoutes.get("/", (request, response) => {
    response.send("Hello orders");
});

export { ordersRoutes };
