# 005-ass-checout-page

<!-- import Container from "react-bootstrap/Card";
import axios from "axios";

export const ProductsCard = ({ getProducts }) => {
  console.log(getProducts);

  const handleDelete = async (id) => {
    try {
      const URL = `https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData/${id}`;
      await axios.delete(URL);
      console.log("Ürün başarıyla silindi.");
      // Burada silinen ürünün güncellenmiş listesini alabilirsiniz.
    } catch (error) {
      console.error("Ürün silinirken bir hata oluştu:", error);
    }
  };

  return (
    // ... Diğer bileşen içeriği ...
    {getProducts?.length ? (
      getProducts.map(({ name, price, quantity, image, id }) => (
        <div className="productsContainer d-flex gap-3 shadow-lg" key={id}>
          {/* ... Diğer ürün bilgileri ... */}
          <div className="btnRemove d-flex justify-content-center">
            <button
              className="btn btn-danger w-75"
              onClick={() => handleDelete(id)}
            >
              Remove
            </button>
          </div>
          {/* ... Diğer ürün bilgileri ... */}
        </div>
      ))
    ) : (
      <p>There is no product...</p>
    )}
    // ... Diğer bileşen içeriği ...
  );
}; -->
