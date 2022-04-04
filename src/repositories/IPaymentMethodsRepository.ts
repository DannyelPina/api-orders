interface IPaymentMethodDTO {
    id?: number;
    name: string;
    flag?: string;
    percentOff?: number;
    percentToPay?: number;
}

interface IPaymentMethodsRepository {
    create(paymentMethod: IPaymentMethodDTO): void;
}

export { IPaymentMethodDTO, IPaymentMethodsRepository };
