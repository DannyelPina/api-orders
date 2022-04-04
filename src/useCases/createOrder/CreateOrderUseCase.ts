import {
    IOrderDTO,
    IOrdersRepository,
} from "../../repositories/IOrdersRepository";

class CreateOrderUseCase {
    constructor(private orderRepository: IOrdersRepository) {}

    execute({ customerId, paymentMethodId, products }: IOrderDTO) {
        const paymentData =
            this.orderRepository.findPaymentMethodById(paymentMethodId);

        const customer = this.orderRepository.findCustomerById(customerId);

        if (!paymentData) {
            throw new Error("Payment method not found");
        }

        if (!customer) {
            throw new Error("Customer not found");
        }

        if (!products.length) {
            throw new Error("No products specified");
        }

        // calcule total amount to pay by product price and payment method
        let amount = products.reduce((acc, product) => {
            const productData = this.orderRepository.findProductById(
                product.id
            );

            if (!productData) {
                throw new Error("Product not found");
            }

            return acc + productData.price * product.quantity;
        }, 0);

        if (paymentData.flag === "discount") {
            amount = amount * paymentData.percentToPay; // % discount
        }

        if (paymentData.flag === "send-mail") {
            // send email to customer

            console.log(
                `Send email to ${customer.name} by email ${customer.email}`
            );
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
