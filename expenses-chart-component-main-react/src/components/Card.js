
import Logo from "../images/logo.svg"
import Bar from "./Bar"
import React from "react"
export default function Card(props){
    const[card, setCard] = React.useState({
        id: ""
    })

    function handleClick(e){
        const id = e.target.id
        setCard({ id: id})
    }
    return(
        <main className="card">
            <header className="card-header">
                <div className="balance-container">
                    <p className="balance-title">
                        My balance
                    </p>
                    <p className="balance">
                        $921.48
                    </p>
                </div>
                <img src={Logo} alt="Co. Logo"  className="header-logo"/>
            </header>

            <section className="chart-section">
                <h2 className="chard-title brown">Spending - Last 7 days</h2>
                <Bar 
                handleClick={handleClick}
                card={card}
                />
                <hr />
                <footer className="card-footer"> 
                    <div className="total-container">
                        <p className="total-title margin">Total this month</p>
                        <p className="total-num brown margin">$478.33</p>
                    </div>
                    <div className="last-month-container">
                        <p className="percentage margin brown">
                            +2.4%
                        </p>
                        <p className="lm-description  margin">
                            from last month
                        </p>
                    </div>
                </footer>
            </section>
        </main>
    )

}