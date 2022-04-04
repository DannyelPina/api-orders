import { CUSTOMERS, ORDERS, PAYMENTS_METHODS, PRODUCTS } from "../../database";
import { Order } from "../../model/Order";
import {
    IOrderDTO,
    IOrdersRepository,
    IProductOrderedDTO,
} from "../IOrdersRepository";
import { IPaymentMethodDTO } from "../IPaymentMethodsRepository";

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

    findProductById(id: number): IProductOrderedDTO {
        return PRODUCTS.find((product) => product.id === id);
    }

    findPaymentMethodById(id: number): IPaymentMethodDTO {
        return PAYMENTS_METHODS.find(
            (paymentMethod) => paymentMethod.id === id
        );
    }

    findCustomerById(id: number) {
        return CUSTOMERS.find((customer) => customer.id === id);
    }
}

export { OrdersRepository };
