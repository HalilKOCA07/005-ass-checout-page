import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "../components/header/Header"
import InputProduct from '../components/inputPage/InputProduct';
import { ProductsCard } from '../components/productCard/ProductsCard';
import {useState, crypto, useEffect} from "react"
import axios  from "axios"

export const Home = () => {

    const [hideShow, setHideShow] = useState(false); //* input kısmını gizlemek ve göstermek
    const handleHideShow = () => {
        setHideShow(!hideShow)
    }

    const [getProducts, setGetProducts] = useState({   //** mockApi den çektiğim veriyi tutmak için useState obje halinde belirttim */
        name:"",
        price:0,
        quantity:0,
        image:"" ,
        id:""
       })
    const mockapiProduct = async () => {     //** mockApi de hazırladığım Api yi localime çektim */
        const URL = "https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData"
        const res = await axios(URL)
        console.log(res.data)
        setGetProducts(res.data)
    }

    useEffect(()=> {               //** sonsuz döngüyü kırmak için useEffect (DidMount) kullandım */
        mockapiProduct()
    }, [])
  
    return(
        <>
        <Header />
        <div className="d-flex justify-content-center mt-3"><button className={hideShow ? "btn btn-primary" : "btn btn-danger"} onClick={handleHideShow}>{!hideShow ? "Hide Input Area" : "Show Input Area"}</button></div>
        <div className="container d-flex">
        <InputProduct hideShow={hideShow} mockapiProduct={mockapiProduct} />
        <ProductsCard getProducts={getProducts} mockapiProduct={mockapiProduct}/>
        </div>

        </>

    )
}