const productlist = [
    {
        id: '1',
        title: 'Product',
        price: 99,
        image: './images/product3.jfif'
    },
    {
        id: '2',
        title: 'Product',
        price: 99,
        image: './images/product5.jfif'
    },
    {
        id: '3',
        title: 'Product',
        price: 99,
        image: './images/product2.jfif'
    },
    {
        id: '4',
        title: 'Product',
        price: 99,
        image: './images/product4.jfif'
    },
    {
        id: '5',
        title: 'Product',
        price: 99,
        image: './images/product6.jfif'
    },
    {
        id: '6',
        title: 'Product',
        price: 99,
        image: './images/product8.jfif'
    },
    {
        id: '7',
        title: 'Product',
        price: 99,
        image: './images/product7.jfif'
    },
    {
        id: '8',
        title: 'Product',
        price: 99,
        image: './images/product9.jfif'
    }
]

function getProductData(id) {
    let productData = productlist.find((item) => item.id === id)
    return productData
}

export { productlist, getProductData }