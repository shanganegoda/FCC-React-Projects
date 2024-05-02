import { useEffect, useRef, useState } from 'react'
import './LoadMore.css'

export default function LoadMore() {

    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton , setDisableButton] = useState(false);
    
    const initialRender = useRef(true);
    const totalProducts = useRef(null);

    useEffect(() => {
        //this initialRender flag workaround -> only works in development mode -> because useEffect runs only once -> in production this will not work.
        if(initialRender.current) {
            initialRender.current = false;
            return;
        }
        console.log("inside useEffect")
        getData();    
    }, [count])

    useEffect(() => {
        if(products && products.length && products.length === totalProducts.current) {
            setDisableButton(true);
        }
     } , [products]  
    )

    async function getData() {
        try {
            console.time('fetch time')
            fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data && data.products && data.products.length) {
                        console.log("Products " , products.length)
                        totalProducts.current = data.total
                        console.log(totalProducts.current)
                        setProducts((currentProducts) => {
                            console.log("Products inside set method" ,currentProducts.length)
                            return [...currentProducts, ...data.products]
                        }
                        )
                    }
                })
                .catch(error => console.error('Error:', error));
                console.timeEnd('fetch time')
        } catch (error) {
            console.log(error);
        }
    }

    function handleLoadMore() {
        setCount(currentCount => currentCount + 1);
    }

    return (
        <div className='wrapper'>
            <h1>Pagination</h1>
            <div className='product__cards'>
                {products && products.length !== 0 && products.map((product, index) =>
                    <div key={index} className='card'>
                        <img src={product.thumbnail}></img>
                        <h3>{product.title}</h3>
                    </div>
                )}
            </div>
            <button disabled={disableButton} onClick={handleLoadMore}>Load More</button>
        </div>
    )
}
