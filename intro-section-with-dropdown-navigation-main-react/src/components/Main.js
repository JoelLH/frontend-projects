import Heromob from "../images/image-hero-mobile.png"
import HeroDskp from "../images/image-hero-desktop.png"
import ClientData from "../images/client-databiz.svg"
import ClientAudio from "../images/client-audiophile.svg"
import ClientMeet from "../images/client-meet.svg"
import ClienMaker from "../images/client-maker.svg"

export default function Main(props){

    return(
        <section className="hero">
            <img src={Heromob}alt="" className="hero-img mob" />
            <img src={HeroDskp}alt="" className="hero-img desk" />
            <div className="hero-data">
                <h1 className="hero-title">Make remote work</h1>
                <p className="hero-description">
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <a href="#" className="hero-btn">
                    Learn more
                </a>
                <div className="hero-co-logos">
                <img src={ClientData} alt="" className="hero-logo-img" id="logo1" /><img src={ClientAudio} alt="" className="hero-logo-img" /><img src={ClientMeet} alt="" className="hero-logo-img" /><img src={ClienMaker} alt="" className="hero-logo-img" />
            </div>
            </div>
            
        </section>
    )
}