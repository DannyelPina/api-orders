import {
    IOrderDTO,
    IOrdersRepository,
} from "../../repositories/IOrdersRepository";

class ListOrdersUseCase {
    constructor(private orderRepository: IOrdersRepository) {}

    execute(): IOrderDTO[] {
        return this.orderRepository.getAll();
    }
}

export { ListOrdersUseCase };
