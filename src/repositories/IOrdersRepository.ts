import { IPaymentMethodDTO } from "./IPaymentMethodsRepository";

interface IProductOrderedDTO {
    id: number;
    name?: string;
    price?: number;
    quantity?: number;
}

interface IOrderDTO {
    id?: number;
    customerId: number;
    paymentMethodId: number;
    products: IProductOrderedDTO[];
    amount?: number;
}

interface IOrdersRepository {
    getAll(): IOrderDTO[];
    create(order: IOrderDTO): void;
    findProductById(id: number): IProductOrderedDTO;
    findPaymentMethodById(id: number): IPaymentMethodDTO;
    findCustomerById(id: number): any;
}

export { IOrderDTO, IProductOrderedDTO, IOrdersRepository };
