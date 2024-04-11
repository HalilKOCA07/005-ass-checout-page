import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import axios from "axios"

const InputProduct = ({hideShow, mockapiProduct}) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQantity] = useState(0)
    const [image, setImage] = useState("")


    const handleSubmit = async (e) => {
      e.preventDefault()

      const newProduct = { name, price, quantity, image };

      try{
        const URL = "https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData";
        const res = await axios.post(URL, newProduct)
        console.log(res.data)
      }catch (eror) {
        console.log(eror)
      }

      setName("")
      setPrice(0)
      setQantity(0)
      setImage("")

      mockapiProduct()
    }

  return (
    <div className={hideShow ? "d-none" : "d-block"}>
    <Form className="mt-5 bg-warning-subtle p-5 rounded-4 shadow-lg" onSubmit={handleSubmit}>
      <Form.Label htmlFor="basic-name">Product Name</Form.Label>
      <InputGroup className="mb-3 shadow-lg">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Product Name"
          aria-label="Product Name"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="basic-name"
        />
      </InputGroup>

      <Form.Label htmlFor="product-price">Product Price</Form.Label>
      <InputGroup className="mb-3 shadow-lg">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          aria-label="Amount (to the nearest dollar)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="product-price"
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="product-qantity">Product Qantity</Form.Label>
      <InputGroup className="mb-3 shadow-lg">
        <Form.Control type="number" value={quantity}   onChange={(e) => setQantity(e.target.value)} aria-label="Amount" id="product-qantity" />
      </InputGroup>

      <Form.Label htmlFor="basic-url">Product Image</Form.Label>
      <InputGroup className="mb-3 shadow-lg">
        <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" value={image} onChange={(e) => setImage(e.target.value)}/>
      </InputGroup>
      <div className="btnAdd d-flex justify-content-center">
        <Button type="submit" className="d-flex align-items-center gap-3 shadow-lg">
          <FaShoppingCart /> Add The Product
        </Button>
      </div>
    </Form>
    </div>

  );
};

export default InputProduct;
