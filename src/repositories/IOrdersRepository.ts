interface IProductOrderedDTO {
    id: number;
    name?: string;
    quantity: number;
}

interface IOrderDTO {
    id?: number;
    customerId: number;
    paymentMethodId: number;
    products: IProductOrderedDTO[];
    amount: number;
}

interface IOrdersRepository {
    getAll(): IOrderDTO[];
    create(order: IOrderDTO): void;
}

export { IOrderDTO, IProductOrderedDTO, IOrdersRepository };
