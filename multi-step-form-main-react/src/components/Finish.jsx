
import {Link} from "react-router-dom"
import Header from "./Header"

export default function Finish(props){
    const {isMonth, planName, planPrice} = props.planInfo;
    const {isOnline, isStorage, isProfCuz} = props.addOns;
    const handlePeriod = props.handlePeriod;

    let plan = planName.slice(0,1).toUpperCase() + planName.slice(1)

    let addOnEls = [];
    
    let total = 0;

    for(let key in props.addOns){
        if(props.addOns[key]){
            if(key === "isOnline"){
                total += isMonth ? 1 : 10
            }else{
                total += isMonth ? 2 : 20
            }
            addOnEls.push(key)
        }
    }


    total += isMonth ? Number(planPrice) : Number(planPrice) * 10



    return(
        <>
        <Header activeStep={4}/>
        <section className="app-section">
            <div className="section-content addon-content">
                <div className="section-header">
                    <h2 className="section-title">
                        Finishing up
                    </h2>
                    <p className="section-description">
                        Double-check evertthing looks OK before confirming.
                    </p>
                </div>
                <div className="summary">
                    <div className="summary-plan-outer">
                        <div className="order-art-info">
                            <span className="order-plan-name">
                                {plan} ({isMonth ? "Monthly" : "Yearly"})
                            </span>
                            <span className="order-change-period"
                            onClick={handlePeriod}
                            >
                                Change
                            </span>
                        </div>
                        <span className="summary-plan-price">
                            ${ isMonth ? planPrice : planPrice * 10}/{isMonth ? "mo" : "yr"}
                        </span>
                    </div>
                    <div className="addons-summary">
                    {addOnEls.map(elem =>{
                        let price = elem === "isOnline" ? 1 : 2
                        return <div className="addons-article">
                        <span className="addons-art-name">
                            {elem === "isOnline" ? "Online Service" : elem === "isStorage" ? "Larger storage" :
                                "Customizable profile"}
                        </span>
                        <span className="addons-art-price">
                            +${isMonth ? price : price * 10}/{isMonth ? "mo" : "yr"}
                        </span>
                    </div>
                    })}
                    </div>
                </div>
                <div className="summary-total-outer">
                    <span className="total-name">
                        Total ({isMonth ? "per month" : "per year"})
                    </span>
                    <span className="summary-total">
                        ${total}/{isMonth ? "mo" : "yr"}
                    </span>
                </div> 
            </div>
            <div className="app-footer">
                <Link to={"/addons"} className="back-link">
                    Go back
                </Link>
                <Link 
                to={"/endtext"}
                className="main-btn confirm-btn" id="confirm-btn">
                    Confirm</Link>
            </div>
        </section>
        </>
    )
}