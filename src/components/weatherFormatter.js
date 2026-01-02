function formatWeather(weatherFormat){
    const weatherInfo = {
        location: weatherFormat.resolvedAddress,
        desc: weatherFormat.currentConditions.conditions,
        temp: weatherFormat.currentConditions.temp,
        humidity: weatherFormat.currentConditions.humidity,
        feelslike: weatherFormat.currentConditions.feelslike,
    };

    return weatherInfo;
}

export default formatWeather;