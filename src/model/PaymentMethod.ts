import { PAYMENTS_METHODS } from "../database";

class PaymentMethod {
    id?: number;
    name: string;

    constructor() {
        if (!this.id) {
            const maxId = PAYMENTS_METHODS.reduce(
                (max, payment) => (payment.id > max ? payment.id : max),
                0
            );
            this.id = maxId + 1;
        }
    }
}

export { PaymentMethod };
