import { OrdersRepository } from "../../repositories/implementations/OrdersRepository";
import { ListOrdersController } from "./ListOrdersController";
import { ListOrdersUseCase } from "./ListOrdersUseCase";

const ordersRepository = OrdersRepository.getInstance();

const listOrdersUseCase = new ListOrdersUseCase(ordersRepository);

const listOrdersController = new ListOrdersController(listOrdersUseCase);

export { listOrdersController };
