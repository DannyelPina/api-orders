import { PaymentMethodsRepository } from "../../repositories/implementations/PaymentMethodsRepository";
import { CreatePaymentMethodController } from "./CreatePaymentMethodController";
import { CreatePaymentMethodUseCase } from "./CreatePaymentMethodUseCase";

const paymentMethodRepository = PaymentMethodsRepository.getInstance();

const createPaymentMethodUseCase = new CreatePaymentMethodUseCase(
    paymentMethodRepository
);

const createPaymentMethodController = new CreatePaymentMethodController(
    createPaymentMethodUseCase
);

export { createPaymentMethodController };
