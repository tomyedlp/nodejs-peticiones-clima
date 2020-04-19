const axios = require("axios");

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a9255e22148d0c863d1329204182a752&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}