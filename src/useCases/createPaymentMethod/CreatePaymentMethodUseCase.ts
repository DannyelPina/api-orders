import { response } from "express";
import {
    IPaymentMethodDTO,
    IPaymentMethodsRepository,
} from "../../repositories/IPaymentMethodsRepository";

class CreatePaymentMethodUseCase {
    constructor(private paymentMethodRepository: IPaymentMethodsRepository) {}

    execute({ name, flag, percentOff }: IPaymentMethodDTO) {
        let percentToPay = 0;
        let off = 0;

        if (!Number.isInteger(percentOff)) {
            response.status(400);
            throw new Error("Invalid percent off");
        }

        if (!["discount", "send-mail"].includes(flag)) {
            response.status(400);
            throw new Error("Invalid flag");
        }

        if (flag === "discount") {
            if (percentOff) {
                off = percentOff / 100;
                percentToPay = 1 - off;
            }
        }

        this.paymentMethodRepository.create({
            name,
            flag,
            percentOff: off,
            percentToPay,
        });
    }
}

export { CreatePaymentMethodUseCase };
