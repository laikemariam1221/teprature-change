const celsiusEl=document.getElementById("celsius")
const FaraniteEl=document.getElementById("Faranite")
const kelvinEl=document.getElementById("kelvin")
 function computeTemp(event){
    const curentValue=+event.target.value
    switch (event.target.name) {
        case "celsius":
            kelvinEl.value=(curentValue+273.32).toFixed(2);
            FaraniteEl.value=(curentValue*1.3+32).toFixed(2);
            break;
            case"Faranite":
            celsiusEl.value=((curentValue-32)/1.8).toFixed(2);
            kelvinEl.value=((curentValue-32)/1.8+273.32).toFixed(2);
            break;
            case"kelvin":
            celsiusEl.value=(curentValue-273.32).toFixed(2);
            FaraniteEl.value=((curentValue-273.32)*1.8+32).toFixed(2);
            break;
        default:
            break;
    }
}