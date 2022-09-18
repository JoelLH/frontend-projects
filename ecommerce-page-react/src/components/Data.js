import cart from "../images/icon-cart.svg"
import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"

export default function Data(props){
    let inputVal = props.values.inputVal;
    let handleInputVal = props.handleInputVal;
    let handleCart = props.handleCart;
    

    return(
        <section className="data-section">
            <div className="card description-card">
                <div className="card-header">
                    <h4 className="card-subtitle highlight-color bold product-subtitle">Sneaker Company</h4>
                    <h2 className="card-title dark-color bold main-title">Fall Limited Edition Sneakers</h2>
                </div>
                <div className="card-body">
                    <p className="card-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <div className="price-data bold">
                    <div className="price-percentage">
                        <span className="price dark-color">$125.00</span>
                        <span className="percentage highlight-color">50%</span>
                    </div>
                    <span className="prev-price">$250.00</span>
                </div>
                </div>
                
                <div className="card-footer">
                    <div className="input-div">
                        <input 
                        type="number" 
                        name="product-quantity" 
                        id="product-quantity" className="quantity-input bold"
                        value={inputVal}
                        />
                        <img src={plus} alt="" className="input-btns plus"
                        id="plus" onClick={handleInputVal}/>
                        <img src={minus} alt="" className="input-btns minus"
                        id="minus" onClick={handleInputVal}/>
                    </div>
                    <button className="card-btn btn bold" onClick={handleCart} id="add-btn"><img src={cart} alt="cart icon" className="btn-cartIco " /> Add to cart</button>
                </div>
            </div>
        </section>
    )
}