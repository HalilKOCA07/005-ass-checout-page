import Container from "react-bootstrap/Card";
import axios from "axios"

export const ProductsCard = ({ mockapiProduct, getProducts}) => {
  console.log(getProducts);

    //* bütün ürünlerin toplam mailiyeti start
     let subtotal = 0;
     let tax = 0;
     let shipping = 100;

      getProducts.map(({quantity, price}) => {
        subtotal += quantity * price * 0.8;
        tax += quantity * price * 0.8 * 0.2;
        subtotal > 1000 ? shipping = 0 : shipping = 100;
      });
        //* bütün ürünlerin toplam mailiyeti END

//todo ******************************************************************************************** */

  // * ***** REMOVE BUTTON FONCTION START*******
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
   // * ***** REMOVE BUTTON FONCTION END*******
//todo ******************************************************************************************** */
   //*  ***** INCREASE VE DECREASE İŞLEMLERİ START*/
      const handleIncrease = async (id, quantity) => {
        try{
          const URL = `https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData/${id}`;
          await axios.put(URL, {quantity: Number(quantity) + 1});
          mockapiProduct();
        }catch(error) {
          console.log("miktar artırmada bir hata var", error);
        }
      };
      const handleDecrease = async (id, quantity) => {
        if(quantity > 1){
                  try{
          const URL = `https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData/${id}`;
          await axios.put(URL, {quantity: quantity - 1});
          mockapiProduct();
        }catch(error) {
          console.log("miktar azatmada bir hata var");
        }
        }else{
          alert("ürün sayısı 1 den az olamaz")
        }

      };

   //*  ***** INCREASE VE DECREASE İŞLEMLERİ END*/
//todo ******************************************************************************************** */
  return (
    <Container className="w-50 m-auto mb-5 border-0 mt-5">

      <div className="d-flex flex-column justify-content-evenly gap-4 shadow-lg border-0 ">
        {getProducts?.length ? (
          getProducts.map(({ name, price, quantity, image, id }) => (
            
            <div className="col-sm-12 productsContainer d-flex gap-3 shadow-lg" key={id}>
              <div className="productImage bg-danger-subtle text-center">
                <img className="w-100 h-100 shadow-lg" src={image} alt="" />
              </div>

              <div className="productInfo w-50 d-flex flex-column gap-3">
                <h5>{name}</h5>
                <h5>
                  ${" "}
                  <span className="cutprice fs-4 text-danger">
                    {(price * 0.8).toFixed(2)}
                  </span>{" "}
                  <span className="price text-secondary text-decoration-line-through">
                    {(price * 1).toFixed(2)}
                  </span>
                </h5>
                <div className="newQauntity d-flex gap-3 align-items-center w-75 justify-content-center ms-4">
                  <button className="btn btn-warning fw-bolder" onClick={() => handleDecrease(id, quantity)}> - </button>
                  <span className="fs-2">[ {quantity} ]</span>
                  <button className="btnIncrease btn btn-success fw-bolder" onClick={() => handleIncrease(id, quantity)}> + </button>
                </div>
                <div className="btnRemove d-flex justify-content-center">
                  <button className="btn btn-danger w-75" onClick={() => handleDelete(id)}>Remove</button>
                </div>
                <div>
                  Product Total: $<span>{(price * 0.8 * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-sm-12 productsContainer d-flex flex-column align-content-center shadow-lg">
            <img src="https://www.onlinesiparisver.com/public/assets/modules/WhatsAppSiparis/images/basket_null.jpg" alt="" />
            <h4 className="text-center text-danger fw-bold">Toplamda $1000,00 üstü bütün alımlarda kargo ücretsizdir</h4>
          </div>
        )}

      </div>

          <div className="allTotalPrice mt-5">
        <div className="subTotal d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black">
          <h6>Subtotal</h6>
          <p>$ {subtotal.toFixed(2)}</p>
        </div>
        <div className="tax d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black">
          <h6>Tax(20%)</h6>
          <p>$ {tax.toFixed(2)}</p>
        </div>
        <div className="shipping d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black">
          <h6>Shipping</h6>
          <p>$ {shipping.toFixed(2)}</p>
        </div>
        <div className="totalpay d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black">
          <h6>Total</h6>
          <p>$ {(subtotal + tax + shipping).toFixed(2)}</p>
        </div>
      </div> 

    </Container>
  );
};
