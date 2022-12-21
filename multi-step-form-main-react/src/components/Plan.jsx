import arcadeIco from "../assets/images/icon-arcade.svg"
import advancedIco from "../assets/images/icon-advanced.svg"
import proIco from "../assets/images/icon-pro.svg"
import Header from "./Header"
import { Link } from "react-router-dom"


export default function Plan(props){
    const planValues = {
        arcade: 9,
        advanced: 12,
        pro: 15,
    }
    const {isMonth, planName , planPrice}= props.planInfo
    const handlePeriod = props.handlePeriod
    const selectPlan = props.selectPlan

    return(
        <>
        <Header activeStep={2}/>
        <section className="app-section">
            <div className="section-content plan-content">
                <div className="section-header">
                    <h2 className="section-title">
                        Select Your Plan
                    </h2>
                    <p className="section-description">
                        You have the option of monthly or yearly billing.
                    </p>
                </div>
                <form id="planForm">
                    <label htmlFor="arcade" 
                    className={planName === "arcade" ? "input-outer selected" : "input-outer"}>
                        <input 
                        type="radio" 
                        id="arcade" 
                        name="plan-radios" 
                        value={isMonth ? 9 : 90}
                        onChange={selectPlan}/>
                        <img src={arcadeIco} alt="arcade logo" />
                        <div className="input-info">
                            <h3 className="radio-title">
                                Arcade
                            </h3>
                            <p className="radio-price" id="plan-price">${ isMonth ? planValues.arcade + "/mo": planValues.arcade * 10 + "/yr"}</p>
                            {isMonth ? "" : <span className="discount">2 months free</span>}
                            
                        </div>
                    </label>
                    <label htmlFor="advanced"
                    className={planName === "advanced" ? "input-outer selected" : "input-outer"}>
                        <input 
                        type="radio" 
                        id="advanced" 
                        name="plan-radios" 
                        value={isMonth ? 12 : 120}
                        onChange={selectPlan}/>
                        <img src={advancedIco} alt="advanced logo" />
                        <div className="input-info">
                            <h3 className="radio-title">
                                Advanced
                            </h3>
                            <p id="plan-price"className="radio-price">${isMonth ? planValues.advanced + "/mo": planValues.advanced * 10 + "/yr"}</p>
                            {isMonth ? "" : <span className="discount">2 months free</span>}
                        </div>
                    </label>
                    <label htmlFor="pro"
                    className= { planName === "pro" ? "input-outer selected" : "input-outer"}>
                        <input 
                        type="radio" 
                        id="pro" 
                        name="plan-radios" 
                        value={isMonth ? 15 : 150}
                        onChange={selectPlan}/>
                        <img src={proIco} alt="pro logo" />
                        <div className="input-info">
                            <h3 className="radio-title" >
                                Pro
                            </h3>
                            <p id="plan-price" className="radio-price">${isMonth ? planValues.pro + "/mo": planValues.pro * 10 + "/yr"}</p>
                            {isMonth ? "" : <span className="discount">2 months free</span>}
                        </div>
                    </label>
                </form>
                <div className="period-outer">
                    <p className={isMonth ? "period-text  active" : "period-text"}>Monthly</p>
                    <span className="period-toggle" id="period-input" onClick={handlePeriod}
                    style={{justifyContent: isMonth ? "start" : "end"}}>
                        <span className="period-circle"></span>
                    </span>
                    <p className={!isMonth ? "period-text  active" : "period-text"}>Yearly</p>
                    
                </div>
            </div>
            <div className="app-footer">
                <Link to={"/"} className="back-link">
                    Go back
                </Link>
                <Link 
                to={"/addons"}
                className="main-btn next-btn" id="next-btn">
                    Next Step</Link>
            </div>
        </section>
        </>
    )
}