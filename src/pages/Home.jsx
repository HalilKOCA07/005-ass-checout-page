import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "../components/header/Header"
import InputProduct from '../components/inputPage/InputProduct';
import { ProductsCard } from '../components/productCard/ProductsCard';
import {useState} from "react"
import axios  from "axios"

export const Home = () => {



    const [hideShow, setHideShow] = useState(false); //* input kısmını gizlemek ve göstermek
    const handleHideShow = () => {
        setHideShow(!hideShow)
    }

    const mockapiProduct = async () => {
        const URL = "https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData"
        const res = await axios(URL)
        console.log(res.data)
    }

    mockapiProduct()

    const[productName, setProductName] = useState ("") //? ınput product name 
    console.log(productName)
    return(
        <>

        <Header />
        <div className="d-flex justify-content-center mt-3"><button className={!hideShow ? "btn btn-primary" : "btn btn-danger"} onClick={handleHideShow}>{!hideShow ? "Hide Input Area" : "Show Input Area"}</button></div>
        <InputProduct hideShow={hideShow} setProductName={setProductName}/>
        <ProductsCard productName={productName}/>
        </>

    )
}