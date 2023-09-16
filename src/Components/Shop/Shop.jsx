import { useEffect, useState, useContext } from 'react'
import { getProducts } from './ApiRequests.Js'
import { ProductCard } from './ProductCard'
// import CartContext from '../../Hooks/CartContext'
import './Shop.css'
export const Shop = () => {
    const [products, setProducts] = useState([{}])

    let productList = products
    async function getAllProducts() {
        setProducts(await getProducts())
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    const [count, setCount] = useState(0)
     const handleClick = () => {
        setCount(count+1)
     }

    return (
        <main className='fullContainer'>
            <main className='secondContainer'>
                <section className="sectionToProducts"   >
                     <span className='productCount'>{count}</span>
                    {productList.map(el => <ProductCard handleClick={handleClick} description={el.description} key={el.id} id={el.id} category={el.category} title={el.title} price={el.price} image={el.image} />)}

                </section>
            </main>
        </main>
    )
}
