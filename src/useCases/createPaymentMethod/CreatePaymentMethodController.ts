import { Request, Response } from "express";
import { CreatePaymentMethodUseCase } from "./CreatePaymentMethodUseCase";

class CreatePaymentMethodController {
    constructor(
        private createPaymentMethodUseCase: CreatePaymentMethodUseCase
    ) {}

    handle(request: Request, response: Response): Response {
        const { name, flag, percentOff } = request.body;

        if (!name) {
            return response.status(400).send({
                message: "Invalid request",
            });
        }

        this.createPaymentMethodUseCase.execute({
            name,
            flag,
            percentOff,
        });

        response.status(201).send();
    }
}

export { CreatePaymentMethodController };
