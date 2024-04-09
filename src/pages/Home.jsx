import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "../components/header/Header"
import InputProduct from '../components/inputPage/InputProduct';
import { ProductsCard } from '../components/productCard/ProductsCard';

export const Home = () => {
    return(
        <>
        <Header />
        <InputProduct />
        <ProductsCard />
        </>

    )
}