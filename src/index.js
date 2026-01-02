import "./styles.css";
import Celsius from "./imgs/temperature-celsius.svg";
import Fahrenheit from "./imgs/temperature-fahrenheit.svg";
import { default as getWeatherReport} from "./components/weatherReader.js";
import { default as getFormattedReport } from "./components/weatherFormatter.js";
import { default as updateWeatherComponent } from "./components/weatherComponent.js";
const temperatureButton = document.querySelector("#temp-format");
const tempButtonImg = temperatureButton.querySelector("img");
const form = document.querySelector("form");
const city = document.querySelector("#city");
const output = document.querySelector(".output");

let temperatureFormat = 0;  // Celsius => 0 | Fahrenheit => 1


form.addEventListener("submit", getCity);
temperatureButton.addEventListener("click", changeFormat);

function getCity(e){
    let cityVal = city.value;
    city.value = "";
    e.preventDefault();
    weatherController(cityVal);
}

function changeFormat(e){
    console.log("Hello")
    if(temperatureFormat == 0){
        tempButtonImg.src = Fahrenheit;
        temperatureFormat = 1;
    }
    else{
        tempButtonImg.src = Celsius;
        temperatureFormat = 0;
    }
}

function weatherController(cityVal){
    getWeatherReport(cityVal, temperatureFormat).then((res) => {
        return getFormattedReport(res);
    })
    .then((res) => {
        updateWeatherComponent(output, res, temperatureFormat);
    })
    .catch((reg) => {
        alert("Invalid Country");
    });

}