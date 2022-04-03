import { PAYMENTS_METHODS } from "../../database";
import { PaymentMethod } from "../../model/PaymentMethod";
import {
    IPaymentMethodDTO,
    IPaymentMethodsRepository,
} from "../IPaymentMethodsRepository";

class PaymentMethodsRepository implements IPaymentMethodsRepository {
    private static INSTANCE: PaymentMethodsRepository;

    public static getInstance(): PaymentMethodsRepository {
        if (!PaymentMethodsRepository.INSTANCE) {
            PaymentMethodsRepository.INSTANCE = new PaymentMethodsRepository();
        }
        return PaymentMethodsRepository.INSTANCE;
    }

    getAll(): IPaymentMethodDTO[] {
        return PAYMENTS_METHODS;
    }
    create({ name }: IPaymentMethodDTO): void {
        const paymentMethod = new PaymentMethod();

        Object.assign(paymentMethod, { name });

        PAYMENTS_METHODS.push(paymentMethod);
    }
}

export { PaymentMethodsRepository };
