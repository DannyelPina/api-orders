import { OrdersRepository } from "../../repositories/implementations/OrdersRepository";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

describe("Create new order", () => {
    it("should throw an error if the Customer does not exists", () => {
        const useCase = new CreateOrderUseCase(OrdersRepository.getInstance());
        const orderDTO = {
            customerId: 122222222222222,
            paymentMethodId: 1,
            products: [
                {
                    id: 1,
                    quantity: 1,
                },
            ],
        };

        expect(() => useCase.execute(orderDTO)).toThrowError(
            new Error("Customer not found")
        );
    });

    it("should throw an error if the Payment methods does not exists", () => {
        const useCase = new CreateOrderUseCase(OrdersRepository.getInstance());
        const orderDTO = {
            customerId: 1,
            paymentMethodId: 122222222222222,
            products: [
                {
                    id: 1,
                    quantity: 1,
                },
            ],
        };

        expect(() => useCase.execute(orderDTO)).toThrowError(
            new Error("Payment method not found")
        );
    });

    it("should throw an error if the specified products object is empty ", () => {
        const useCase = new CreateOrderUseCase(OrdersRepository.getInstance());
        const orderDTO = {
            customerId: 1,
            paymentMethodId: 1,
            products: [],
        };

        expect(() => useCase.execute(orderDTO)).toThrowError(
            new Error("No products specified")
        );
    });

    it("should throw an error if the specified products does not exists", () => {
        const useCase = new CreateOrderUseCase(OrdersRepository.getInstance());
        const orderDTO = {
            customerId: 1,
            paymentMethodId: 1,
            products: [
                {
                    id: 122222222222222,
                    quantity: 1,
                },
            ],
        };

        expect(() => useCase.execute(orderDTO)).toThrowError(
            new Error("Product not found")
        );
    });
});
