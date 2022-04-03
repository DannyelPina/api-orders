import { ORDERS } from "../database";

interface IProductOrdered {
    id: number;
    quantity: number;
}

class Order {
    id?: number;
    customerId: number;
    paymentMethodId: number;
    products: IProductOrdered[];
    amount: number;

    constructor() {
        if (!this.id) {
            const maxId = ORDERS.reduce(
                (max, order) => (order.id > max ? order.id : max),
                0
            );
            this.id = maxId + 1;
        }
    }
}

export { Order };
