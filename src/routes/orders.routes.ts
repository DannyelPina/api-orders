import { Router } from "express";
import { createOrderController } from "../useCases/createOrder";
import { listOrdersController } from "../useCases/listOrder";

const ordersRoutes = Router();

ordersRoutes.post("/", (request, response) =>
    createOrderController.handle(request, response)
);

ordersRoutes.get("/", (request, response) =>
    listOrdersController.handle(request, response)
);

export { ordersRoutes };
