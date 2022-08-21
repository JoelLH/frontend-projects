import iconComplete from "../images/icon-complete.svg"

export default function Form(props){
    const{ name, number, year, month, cvc, pop} = props.card
    return(
        <section className="form-section">
            <form action="#">

                {!pop && 
                <div>
                    <fieldset>
                    <label htmlFor="name-input">
                        CardHolder Name
                    </label>
                    <input type="text" id="name-input" placeholder="e.g. Jane Appleseed" className="input-block"
                    pattern="[a-zA-Z\s]+"
                    required
                    onChange={props.handleLength}
                    name="name"
                    value={name}
                    />
                    <span className="invalid">
                        Wrong format, numbers only
                    </span> 
                </fieldset>

                <fieldset>
                    <label htmlFor="number-input">
                        Card Number
                    </label>
                    <input type="number" id="number-input" placeholder="e.g. 1234 5678 9123 0000" 
                    min="1000000000000000"
                    max="9999999999999999"
                    className="input-block"
                    pattern="\d+"
                    required
                    onChange={props.handleLength}
                    name="number"
                    value={number}
                    maxLength={16}
                    />
                    <span className="invalid">
                        Wrong format, numbers only
                    </span>                  
                </fieldset>

                <fieldset className="date-cvc-wrapper">
                    <div className="exp-date-wrapper">
                        <label htmlFor="date" className="date-cvc-label">
                            Exp. Date (MM/YY)
                            <div className="exp-input-wrapper">
                                <input 
                                type="number" id="date" 
                                min={1} 
                                max={12} placeholder="MM"
                                pattern="\d+"
                                required
                                name="month"
                                value={month}
                                onChange={props.handleLength}
                                />
                                <input 
                                type="number" 
                                min={0} 
                                max={99} placeholder="YY"
                                pattern="\d+"
                                required
                                name="year"
                                value={year}
                                onChange={props.handleLength}
                                />
                                <span className="invalid invalid-cvc-date">
                                Can't be blank
                                </span>
                            </div>
                        </label>
                    </div>


                    <div className="cvc-wrapper">
                        <label htmlFor="cvc-input" className="date-cvc-label"> CVC
                            <input id="cvc-input" type="number"
                            min={100} 
                            max={999} 
                            placeholder="e.g. 123" className="cvc-input"
                            pattern="\d+"
                            required
                            name="cvc"
                            value={cvc}
                            onChange={props.handleLength}
                            />
                            <span className="invalid invalid-cvc-date">
                                Can't be blank
                            </span>
                        </label>
                    </div>
                </fieldset>
                </div>
                }

                {pop &&
                <div className="pop-up">
                <img src={iconComplete} alt="" />
                <h1>Thank You!</h1>
                <h3>We've added your card details</h3>
                </div>
                }
                
                <button onClick={props.togglePop}>Confirm</button>
            </form>
            
        </section>
    )
}