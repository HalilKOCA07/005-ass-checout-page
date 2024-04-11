import Container from "react-bootstrap/Card";
import axios from "axios"

export const ProductsCard = ({ mockapiProduct, getProducts }) => {
  console.log(mockapiProduct);

  const handleDelete = async (id) => {
    try {
      const URL = `https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData/${id}`;
      await axios.delete(URL);
      console.log("Ürün başarıyla silindi.");
      // Burada silinen ürünün güncellenmiş listesini alabilirsiniz.
    } catch (error) {
      console.error("Ürün silinirken bir hata oluştu:", error);
    }

    mockapiProduct()
  };



  return (
    <Container className="w-75 m-auto mb-5 border-0 mt-5">

      <div className="d-flex flex-column justify-content-evenly gap-4 shadow-lg border-0">
        {getProducts?.length ? (
          getProducts.map(({ name, price, quantity, image, id }) => (
            <div className="productsContainer d-flex gap-3 shadow-lg" key={id}>
              <div className="productImage bg-danger-subtle w-25 text-center">
                <img className="w-100 h-100 shadow-lg" src={image} alt="" />
              </div>

              <div className="productInfo w-25 d-flex flex-column gap-3">
                <h5>{name}</h5>
                <h5>
                  ${" "}
                  <span className="cutprice fs-4 text-danger">
                    {price * 0.8}
                  </span>{" "}
                  <span className="price text-secondary text-decoration-line-through">
                    {price}
                  </span>
                </h5>
                <div className="newQauntity d-flex gap-3 align-items-center w-75 justify-content-center ms-4">
                  <button className="btn btn-warning fw-bolder"> - </button>
                  <span className="fs-2">[ {quantity} ]</span>
                  <button className="btn btn-success fw-bolder"> + </button>
                </div>
                <div className="btnRemove d-flex justify-content-center">
                  <button className="btn btn-danger w-75" onClick={() => handleDelete(id)}>Remove</button>
                </div>
                <p>
                  Product Total: $<span>{price * 0.8 * quantity}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>There is no product...</p>
        )}
      </div>
      <div className="allTotalPrice mt-5">
        <div className="subTotal d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black">
          <h6>Subtotal</h6>
          <p>0,00</p>
        </div>
        <div className="tax d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black">
          <h6>Tax(20%)</h6>
          <p>0,00</p>
        </div>
        <div className="shipping d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black">
          <h6>Shipping</h6>
          <p>0,00</p>
        </div>
        <div className="totalpay d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black">
          <h6>Total</h6>
          <p>0,00</p>
        </div>
      </div>
    </Container>
  );
};
