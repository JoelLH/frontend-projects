import {Link} from 'react-router-dom'

export default function Header(props){
    const stateId = props.activeStep
    return(
    <header>
        <div className='step-container'>
            <span className={stateId === 1 ?'stepCirlce active' : "stepCirlce"}>1</span>
            <span className='stepNum'>Step 1</span>
            <span className='stepName'>Your Info</span>
        </div>
        <div className='step-container'>
            <span className={stateId === 2 ?'stepCirlce active' : "stepCirlce"} >2</span>
            <span className='stepNum'>Step 2</span>
            <span className='stepName'>Select Plan</span>
        </div>
        <div className='step-container'>
            <span className={stateId === 3 ?'stepCirlce active' : "stepCirlce"}>3</span>
            <span className='stepNum'>Step 3</span>
            <span className='stepName'>Add-Ons</span>
        </div>
        <div className='step-container'>
            <span className={stateId === 4 ?'stepCirlce active' : "stepCirlce"} >4</span>
            <span className='stepNum'>Step 4</span>
            <span className='stepName'>Summary</span>
        </div>
    </header>
    ) 
}