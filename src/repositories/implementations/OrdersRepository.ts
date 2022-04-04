import { ORDERS } from "../../database";
import { Order } from "../../model/Order";
import { IOrderDTO, IOrdersRepository } from "../IOrdersRepository";

class OrdersRepository implements IOrdersRepository {
    private static INSTANCE: OrdersRepository;

    public static getInstance(): OrdersRepository {
        if (!OrdersRepository.INSTANCE) {
            OrdersRepository.INSTANCE = new OrdersRepository();
        }
        return OrdersRepository.INSTANCE;
    }

    getAll(): IOrderDTO[] {
        return ORDERS;
    }

    create({ customerId, paymentMethodId, products, amount }: IOrderDTO): void {
        const order = new Order();
        Object.assign(order, { customerId, paymentMethodId, products, amount });

        ORDERS.push(order);
    }
}

export { OrdersRepository };
