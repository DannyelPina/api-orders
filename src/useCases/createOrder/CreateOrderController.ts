import { Request, Response } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

class CreateOrderController {
    constructor(private createOrderUseCase: CreateOrderUseCase) {}

    handle(request: Request, response: Response) {
        const { customerId, paymentMethodId, products } = request.body;

        if (!customerId || !paymentMethodId || !products) {
            return response.status(400).send({
                message: "Invalid request",
            });
        }

        this.createOrderUseCase.execute({
            customerId,
            paymentMethodId,
            products,
        });

        response.status(200).send();
    }
}

export { CreateOrderController };
