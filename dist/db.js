const products = [
    {
        id: "123abcgjtty",
        name: "Muhib",
        image: "m.jpg",
        price: 29.32,
        quantity: 30,
        onStock: true,
        categoryId: "123",
    },
    {
        id: "123abcfff",
        name: "Babu",
        image: "m.jpg",
        price: 29.32,
        quantity: 30,
        onStock: true,
        categoryId: "1234",
    },
    {
        id: "123abcf",
        name: "Muhib",
        image: "m.jpg",
        price: 29.32,
        quantity: 30,
        onStock: true,
        categoryId: "1235",
    },
    {
        id: "123abcg",
        name: "Muhib",
        image: "m.jpg",
        price: 29.32,
        quantity: 30,
        onStock: true,
        categoryId: "12356",
    },
];
const categories = [
    {
        id: "123",
        name: "Mobile",
    },
    {
        id: "1234",
        name: "Tv",
    },
    {
        id: "1235",
        name: "Pc",
    },
    {
        id: "12356",
        name: "Pc",
    },
];
export const db = {
    products,
    categories,
};
