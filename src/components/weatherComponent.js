function createWeatherComponent(outputObject, weatherReport, degreeFormat){
    const location = document.createElement("h3");
    location.classList.add("location");
    location.textContent = weatherReport.location.charAt(0).toUpperCase() + weatherReport.location.slice(1);

    let format = degreeFormat ? "F" : "C";
    const temp = document.createElement("h2");
    temp.classList.add("temp")
    temp.textContent = `${weatherReport.temp}${format}`;

    const report = document.createElement("p");
    report.classList.add("report");
    report.textContent = weatherReport.desc;

    const feelslike = document.createElement("p");
    feelslike.classList.add("feels-like");
    feelslike.textContent = `Feels Like: ${weatherReport.feelslike}${format}`;


    const humidity = document.createElement("p");
    humidity.classList.add("humidity");
    humidity.textContent = `Humidity: ${weatherReport.humidity}`;

    while(outputObject.firstChild){
        outputObject.removeChild(outputObject.lastChild);
    }

    if(outputObject.classList.length == 1){
        outputObject.classList.add("active");
    }
    outputObject.append(location, temp, report, feelslike, humidity);

}

export default createWeatherComponent;