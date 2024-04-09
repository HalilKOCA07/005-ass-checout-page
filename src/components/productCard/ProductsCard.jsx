import Container from 'react-bootstrap/Card';


export const ProductsCard = () => {

    const handleAddProduct = () => {
        
    }
    return(
        <Container className='w-75 m-auto mb-5 border-0 mt-5'>
        <div className='d-flex justify-content-evenly gap-2 shadow-lg border-0'>
            <div className="productImage bg-danger-subtle w-50 text-center">
                <img className='w-100 h-100' src="https://avatars.mds.yandex.net/i?id=2bdebdcc505c66dff2e95e0a24bc65194ef0ea84-12627978-images-thumbs&n=13" alt="" />
            </div>
            <div className="productInfo w-50 d-flex flex-column gap-3">
                <h5>HAlil KOCA</h5>
                <h5>$ <span className='cutprice fs-4 text-danger'>0,00</span> <span className='price text-secondary text-decoration-line-through'>0,00</span></h5>
                <div className="newQauntity d-flex gap-3 align-items-center w-75 justify-content-center ms-4">
                    <button className='btn btn-warning fw-bolder'> - </button>
                    <span className='fs-2'>[ 0 ]</span>
                    <button className='btn btn-success fw-bolder'> + </button>
                </div>
                <div className="btnRemove d-flex justify-content-center">
                    <button className='btn btn-danger w-75'>Remove</button>
                </div>
                <p>Product Total: $<span>0,00</span></p>
            </div>
      </div>
      <div className="allTotalPrice mt-5">
        <div className='subTotal d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black'><h6>Subtotal</h6><p>0,00</p></div>
        <div className='tax d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black'><h6>Tax(20%)</h6><p>0,00</p></div>
        <div className='shipping d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black'><h6>Shipping</h6><p>0,00</p></div>
        <div className='totalpay d-flex justify-content-between me-5 ms-5 border-bottom border-1 border-black'><h6>Total</h6><p>0,00</p></div>
      </div>
        </Container>

    )
}