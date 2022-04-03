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
        throw new Error("Method not implemented.");
    }
    create(order: IOrderDTO): void {
        throw new Error("Method not implemented.");
    }
}

export { OrdersRepository };
