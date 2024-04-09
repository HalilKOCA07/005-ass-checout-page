import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "../components/header/Header"
import InputProduct from '../components/inputPage/InputProduct';
import { ProductsCard } from '../components/productCard/ProductsCard';
import {useState} from "react"

export const Home = () => {

    const[productName, setProductName] = useState ("") //? ınput product name 
    console.log(productName)
    return(
        <>
        <Header />
        <InputProduct setProductName={setProductName}/>
        <ProductsCard productName={productName}/>
        </>

    )
}