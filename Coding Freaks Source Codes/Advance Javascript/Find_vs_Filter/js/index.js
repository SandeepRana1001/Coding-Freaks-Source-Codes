const products = [
    {
        name: 'PlayStation 4',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p1',
        creatorId: 'u1',
        price: '30000'
    },
    {
        name: 'Camera',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p2',
        creatorId: 'u3',
        price: '50000'
    },
    {
        name: 'Book',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p3',
        creatorId: 'u1',
        price: '250'
    },
    {
        name: 'Macbook',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p4',
        creatorId: 'u2',
        price: '250000'
    },
    {
        name: 'Pen',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p5',
        creatorId: 'u2',
        price: '100'
    },
    {
        name: 'Pencil Box',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p6',
        creatorId: 'u3',
        price: '50'
    },
    {
        name: 'Laptop',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p7',
        creatorId: 'u3',
        price: '30000'
    },
    {
        name: 'Batman Arkham Knight',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p8',
        creatorId: 'u3',
        price: '500'
    },
    {
        name: 'God Of War 4',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro",
        id: 'p9',
        creatorId: 'u3',
        price: '1000'
    },
]

// Find return single object
// const newArr = products.find(item => {
//     return parseInt(item.price) > 1000
// })

// Returns Complete Array after filtering data
const newArr = products.filter(item => {
    return parseInt(item.price) > 100
}).filter((item, index) => {
    return index < 5
})

const newArr = products.filter(item => {
    return parseInt(item.price) > 100
}).slice(0, 5);

console.log(newArr)
