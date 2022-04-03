// interface IProducts {
//     id: number;
//     name: string;
//     price: number;
// }

export const PRODUCTS = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
    { id: 7, name: "Product 7", price: 700 },
    { id: 8, name: "Product 8", price: 800 },
    { id: 9, name: "Product 9", price: 900 },
    { id: 10, name: "Product 10", price: 1000 },
];

export const PAYMENTS_METHODS = [
    { id: 1, name: "PayPal" },
    { id: 2, name: "Credit Card" },
    { id: 3, name: "Multibanco" },
];

export const CUSTOMERS = [
    {
        id: 1,
        name: "Customer 1",
        address: "Address 1",
        city: "City 1",
        country: "Country 1",
        email: "exemple@exemple.com",
        phone: "123456789",
    },
    {
        id: 2,
        name: "Customer 2",
        address: "Address 2",
        city: "City 2",
        country: "Country 2",
        email: "exemple@exemple.com",
        phone: "123456789",
    },
    {
        id: 3,
        name: "Customer 3",
        address: "Address 3",
        city: "City 3",
        country: "Country 3",
        email: "exemple@exemple.com",
        phone: "123456789",
    },
];

export const ORDERS = [
    {
        id: 1,
        customerId: 1,
        paymentMethodId: 1,
        products: [
            { id: 1, quantity: 1 },
            { id: 2, quantity: 2 },
        ],
        amount: 300,
    },
];
