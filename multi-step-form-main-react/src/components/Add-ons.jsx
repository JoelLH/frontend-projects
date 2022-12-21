
import { Link } from "react-router-dom"
import Header from "./Header"


export default function AddOns(props){
    const selectAddOns = props.selectAddOns;
    const {isOnline, isStorage, isProfCuz} = props.addOns
    const {isMonth, planName, planPrice} = props.planInfo;
    return(
        <>
        <Header activeStep={3}/>
        <section className="app-section">
            <div className="section-content addon-content">
                <div className="section-header">
                    <h2 className="section-title">
                        Pick add-ons
                    </h2>
                    <p className="section-description">
                        Add-ons help enhance your gaming experience
                    </p>
                </div>
                <form id="addons-form">
                    <label htmlFor="online"
                    className={isOnline ?  "input-outer selected" : "input-outer"}>
                        <input 
                        type="checkbox" 
                        id="online" 
                        name="online-service"
                        checked= {isOnline ? true : false} 
                        value={1} 
                        onChange={selectAddOns}
                        />
                        <div className="input-info">
                            <h3 className="check-title" >
                                Online Service
                            </h3>
                            <span className="checkbox-desc">
                                Access to multiplayer games
                            </span>
                        </div>
                        <span className="check-price">
                            +{isMonth ? 1 : 1 * 10}/{isMonth ? "mo" : "yr"}
                        </span>
                    </label>
                    <label htmlFor="storage"
                    className={isStorage ?  "input-outer selected" : "input-outer"}>
                        <input 
                        type="checkbox" 
                        id="storage" 
                        name="larger-storage" 
                        checked= {isStorage ? true : false}
                        value={2} 
                        onChange={selectAddOns}
                        />
                        <div className="input-info">
                            <h3 className="check-title" >
                                Larger storage
                            </h3>
                            <span className="checkbox-desc">
                                Extra 1TB cloud save
                            </span>
                        </div>
                        <span className="check-price">
                            +{isMonth ? 1 : 2 * 10}/{isMonth ? "mo" : "yr"}
                        </span>
                    </label>
                    <label htmlFor="profile"
                    className={isProfCuz ?  "input-outer selected" : "input-outer"}>
                        <input 
                        type="checkbox" 
                        checked= {isProfCuz ? true : false}
                        id="profile" 
                        name="cuz-profile" 
                        value={2} 
                        onChange={selectAddOns}
                        />
                        <div className="input-info">
                            <h3 className="check-title" >
                                Customizable profile
                            </h3>
                            <span className="checkbox-desc">
                                Custom theme on your profile
                            </span>
                        </div>
                        <span className="check-price">
                            +{isMonth ? 1 : 2 * 10}/{isMonth ? "mo" : "yr"}
                        </span>
                    </label>
                </form>
            </div>
            <div className="app-footer">
                <Link to={"/plan"} className="back-link">
                    Go back
                </Link>
                <Link 
                to={"/finish"}
                className="main-btn next-btn" id="next-btn">
                    Next Step</Link>
            </div>
        </section>
        </>
    )
}