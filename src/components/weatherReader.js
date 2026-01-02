async function getWeather(city, format){

    //metric specifies the format in which data should be sent back (us) for Fahrenheit and (metric) for Celsius
    let metric;
    if(format == 0){
        metric = "metric";
    }
    else{
        metric = "us";
    }

    const key = "D7UUJH52YTW5WKJWCB2BG9YBN"; //Free API key 
    const requestString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}&unitGroup=${metric}`;
    const weatherReq = await fetch(requestString);
    const weatherData = await weatherReq.json();
    console.log(weatherData);
    return weatherData;

}

export default getWeather;