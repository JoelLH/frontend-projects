import cardLogo from "../images/card-logo.svg"

export default function Cards(props){
    const{ name, number, year, month, cvc} = props.card
    let cardNums=number.match(/.{0,4}/g);



    return (
        <section className="cards-hero">
            <div className="cards-wrapper">
                <div className="card card-back">
                        <p className="cvc-numbers">
                            {cvc}
                        </p>
                </div>

                <div className="card card-front">
                    <div className="logo-wrapper">
                        <img src={cardLogo} alt="card-logo" 
                        className="card-logo"/>
                    </div>
                    <p className="card-number">
                        {cardNums[0] && cardNums[0]} {cardNums[1] && cardNums[1]} {cardNums[2] && cardNums[2]} {cardNums[3] && cardNums[3]}
                    </p>
                    <p className="card-footer">
                        {name != "" ? name : "Jane Appleseed"}
                        <span className="exp-date">
                            {month}/{year}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}