interface IPaymentMethodDTO {
    id: number;
    name: string;
}

interface IPaymentMethodsRepository {
    getAll(): IPaymentMethodDTO[];
    create(paymentMethod: IPaymentMethodDTO): void;
}

export { IPaymentMethodDTO, IPaymentMethodsRepository };
