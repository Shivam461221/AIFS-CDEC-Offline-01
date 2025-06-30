import { useEffect, useState } from "react";


export default function Dashboard() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            let response = await fetch('https://dummyjson.com/products');
            let data = await response.json();
            console.log(data);
            setProducts(data.products);
            // console.log(products);
        }
        catch (error) {
            console.log(error.mesaage);
        }
    }

    // getProducts();

    useEffect(() => {
        getProducts();
        console.log('Component rendered');
    }, []);

    useEffect(() => {
        console.log('Component rendered');
        console.log(products);
    }, [products]);

    return (
        <>
            <ul>
                {products.map((product, index) => <li key={index}>{product.title}</li>)}
            </ul>
        </>
    )
}

//export default Dashboard;