import dotMenu from "./images/icon-ellipsis.svg"
import workIco from "./images/icon-work.svg"
import playIco from "./images/icon-play.svg"
import studyIco from "./images/icon-study.svg"
import excerciseIco from "./images/icon-exercise.svg"
import socialIco from "./images/icon-social.svg"
import selfIco from "./images/icon-self-care.svg"
import Data from "./data.json"
let iconsArr = [workIco, playIco, studyIco, excerciseIco, socialIco, selfIco]

// console.log(Data)

export default function DashBoard(props){
    let period = props.period;

    let trackCards = Data.map(function(card, index){
        let{daily, weekly, monthly} = card.timeframes;
        

        return <article className="track-card" id={`card${index}`} key={index}>
                <img src={iconsArr[index]} alt="Work icon" className="card__img"/>
                <div className="track__data">
                    <div className="track__header">
                        <span className="track__title">
                            {card.title}
                        </span>
                        <img src={dotMenu} alt="card menu icon" className="track__menu-ico"/>
                    </div>
                    <div className="track__body">
                        <span className="hours">
                            {period.daily ? 
                            daily.current : 
                            period.weekly ? 
                            weekly.current : 
                            monthly.current}hrs
                        </span>
                        <span className="previous">
                            Last week - {period.daily ? 
                            daily.previous : 
                            period.weekly ? 
                            weekly.previous : 
                            monthly.previous} hrs
                        </span>
                    </div>
                </div>
            </article>
    })
    
    return(
        <section className="dashboard-section">
            {/* <article className="track-card" id="work">
                <img src={workIco} alt="Work icon" className="card__img"/>
                <div className="track__data">
                    <div className="track__header">
                        <span className="track__title">
                            Work
                        </span>
                        <img src={dotMenu} alt="card menu icon" className="track__menu-ico"/>
                    </div>
                    <div className="track__body">
                        <span className="hours">
                            32 hrs
                        </span>
                        <span className="previous">
                            Last week - 36hrs
                        </span>
                    </div>
                </div>
            </article> */}
            {trackCards}
        </section>
    )
}