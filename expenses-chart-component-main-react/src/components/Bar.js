import data from '../data';

export default function Bar(props){
        
        const items = data.map((item, index) =>{
        const height = 288 * (item.amount / 100);
        let style ={"height" : `${height}px`};
        return <li 
                    className="chart-item" 
                    key={item.day}
                    
                    >
                    <div 
                    className={props.card.id == index ?"chart-tower selected" : "chart-tower"} 
                    style={style}
                    id={index}
                    onClick={props.handleClick}
                    >
                    <span className='ammount'>${item.amount}</span>
                    </div>
                    
                    <p className="chart-name">
                        {item.day}
                    </p>
                </li>
        
    })

    return(
        <ul className="chart-wrapper">
        {items}
        </ul>
    )
}