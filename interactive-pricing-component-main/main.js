let viewsEl = document.getElementById("pageviews");
let priceEl = document.getElementById("price__num");
let rangeEl = document.getElementById("pricing");
let periodToggleEl = document.getElementById("period-toggler-btn");
let periodMarker = false;
let discount = function(num){
    return (num * 12) - ((num * 12) * .25);
}



function getValue(e){
    switch (e){
        case "0":
            viewsEl.textContent = "10k pageviews";
            priceEl.textContent = periodMarker ? discount(8) : 8;
            rangeEl.style.backgroundSize = "0% 100%";
            break;
        case "1":
            viewsEl.textContent = "50k pageviews";
            priceEl.textContent = periodMarker ? discount(12) : 12;
            rangeEl.style.backgroundSize = "25% 100%";
            break;
        case "2":
            viewsEl.textContent = "100k pageviews";
            priceEl.textContent = periodMarker ? discount(16) : 16;
            rangeEl.style.backgroundSize = "50% 100%";
            break;
        case "3":
            viewsEl.textContent = "500k pageviews";
            priceEl.textContent = periodMarker ? discount(24) : 24;
            rangeEl.style.backgroundSize = "75% 100%";
            break;
        case "4":
            viewsEl.textContent = "1m pageviews";
            priceEl.textContent = periodMarker ? discount(36) : 36;
            rangeEl.style.backgroundSize = "100% 100%";
            break;
        default:
            viewsEl.textContent = "100k pageviews";
            priceEl.textContent = 16;
            rangeEl.style.backgroundSize = "50% 100%";
            break;
        }
}

function periodToggle(){
    let num = Number(priceEl.textContent);
    if(periodMarker){
        periodToggleEl.style.justifyContent = "start";
        periodToggleEl.style.backgroundColor = "var(--light-grayish-blue2)";
        periodMarker = false;
        console.log(typeof num);
        priceEl.textContent = (num / (1 - .25)) / 12;

    }else{
        periodToggleEl.style.justifyContent = "end";
        periodToggleEl.style.backgroundColor = "var(--strong-cyan)";
        periodMarker = true;
        priceEl.textContent = (num * 12) - ((num * 12) * .25);
    }
    
}