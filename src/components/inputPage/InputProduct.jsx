import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const InputProduct = () => {
  return (
    <Container className="mt-5 bg-warning-subtle p-5 rounded-4 shadow-lg">
      <Form.Label For="basic-name">Product Name</Form.Label>
      <InputGroup className="mb-3 shadow-lg">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="basic-name"
        />
      </InputGroup>

      <Form.Label For="product-price">Product Qantity</Form.Label>
      <InputGroup className="mb-3 shadow-lg">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          aria-label="Amount (to the nearest dollar)"
          id="product-price"
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <Form.Label For="product-qantity">Product Qantity</Form.Label>
      <InputGroup className="mb-3 shadow-lg">
        <Form.Control type="number" aria-label="Amount" id="product-qantity" />
      </InputGroup>

      <Form.Label htmlFor="basic-url">Product Image</Form.Label>
      <InputGroup className="mb-3 shadow-lg">
        <InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <div className="btnAdd d-flex justify-content-center">
        <Button className="d-flex align-items-center gap-3 shadow-lg">
          <FaShoppingCart /> Add The Product
        </Button>
      </div>
    </Container>
  );
};

export default InputProduct;
