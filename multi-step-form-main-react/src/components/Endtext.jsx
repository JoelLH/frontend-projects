import checkIco from "../assets/images/icon-thank-you.svg"
import Header from "./Header"

export default function EndText(){
    return(
        <>
        <Header activeStep={4}/>
        <section className="app-section end-section">
            <div className="section-content">
                <img src={checkIco} alt="check icon" />
                <h1 className="End-title">
                    Thank you!
                </h1>
                <p className="end-text">
                    Thanks for confirming your subscription!
                    We hope you have fun using our platform.
                    If you ever need support, please feel free to email us at support@loremgaming.com
                </p>
            </div>
        </section>
        </>
    )
}