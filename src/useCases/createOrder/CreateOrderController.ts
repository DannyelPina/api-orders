import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

class CreateOrderController {
    constructor(private createOrderUseCase: CreateOrderUseCase) {}

    handle(request: Request, response: Response): Response {
        const { customerId, paymentMethodId, products } = request.body;

        if (!customerId || !paymentMethodId || !products) {
            return response.status(400).send({
                message: "Invalid request",
            });
        }

        try {
            this.createOrderUseCase.execute({
                customerId,
                paymentMethodId,
                products,
            });

            return response.status(201).send();
        } catch (error) {
            return response.send(error.message);
        }
    }
}

export { CreateOrderController };
