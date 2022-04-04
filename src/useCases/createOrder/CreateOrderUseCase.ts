import {
    IOrderDTO,
    IOrdersRepository,
} from "../../repositories/IOrdersRepository";

class CreateOrderUseCase {
    constructor(private orderRepository: IOrdersRepository) {}

    execute({ customerId, paymentMethodId, products }: IOrderDTO) {
        const paymentData =
            this.orderRepository.findPaymentMethodById(paymentMethodId);

        // calcule total amount to pay by product price and payment method
        let amount = products.reduce((acc, product) => {
            const productData = this.orderRepository.findProductById(
                product.id
            );

            return acc + productData.price * product.quantity;
        }, 0);

        if (paymentData.flag === "paypal") {
            amount = amount * 0.9; // 10% discount
        }

        if (paymentData.flag === "multibanco") {
            console.log("email sent");
        }

        this.orderRepository.create({
            customerId,
            paymentMethodId,
            products,
            amount,
        });
    }
}

export { CreateOrderUseCase };
