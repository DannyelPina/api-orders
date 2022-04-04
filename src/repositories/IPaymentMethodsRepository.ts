interface IPaymentMethodDTO {
    id?: number;
    name: string;
    flag?: string;
}

interface IPaymentMethodsRepository {
    getAll(): IPaymentMethodDTO[];
    create(paymentMethod: IPaymentMethodDTO): IPaymentMethodDTO;
}

export { IPaymentMethodDTO, IPaymentMethodsRepository };
