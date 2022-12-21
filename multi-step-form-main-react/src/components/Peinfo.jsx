import {Link} from 'react-router-dom'
import Header from './Header'

export default function Peinfo(props){
    const {name, email, phone} = props.peInfo
    const handlePeInfo = props.handlePeInfo
    const{isNameValid, isEmailValid, isPhoneValid,} = props.peInfoValid
    
    return (
        <>
        <Header activeStep={1}/>
        <section className="app-section">
            <div className='section-content'>
                <div className="section-header">
                    <h2 className="section-title">
                        Personal info
                    </h2>
                    <p className="section-description">
                        Please provide your name, email address, and phone number.
                    </p>
                </div>
                    <form id="pi-form">
                        <label htmlFor="name">
                            Name
                            {!isNameValid && <span className='invalid'>This field is invalid</span>}
                        </label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name"
                        className={!isNameValid ? 'invalid' : ""} 
                        required 
                        placeholder='e.g. Stephen King'
                        value={name}
                        onChange={(e)=>handlePeInfo(e)}/>
                        <label htmlFor="email">
                            Email Address
                            {!isEmailValid && <span className='invalid'>This field is invalid</span>}
                            
                        </label>
                        <input type="email" 
                        id="email" 
                        name="email" 
                        className={!isEmailValid ? 'invalid' : ""}
                        value={email}
                        placeholder='e.g. stephenking@lorem.com'
                        onChange={(e)=>handlePeInfo(e)}/>
                        <label htmlFor="phoneNum">
                            <span>
                            Phone Number
                            </span>
                            {!isPhoneValid && <span className='invalid'>This field is invalid</span>}
                        </label>
                        <input type="tel" id="phoneNum" name="phoneNum" 
                        required
                        value={phone}
                        className={!isPhoneValid ? 'invalid' : ""}
                        placeholder='e.g. +1 234 567 890'
                        onChange={(e)=>handlePeInfo(e)}/>
                    </form>
            </div>
            <div className="app-footer">
                <Link 
                to={"/plan"}
                className="main-btn next-btn" 
                id="next-btn"
                style={{ pointerEvents: !isNameValid || !isEmailValid || !isPhoneValid ? "none" : "auto" }}
                >
                    Next Step</Link>
            </div>
        </section>
        </>
        ) 
}