const axios = require("axios");

const getLugarLatLng = async (dir) => {

    const encodedUrl = encodeURI(dir); //ES PARA TRANSFORMAR LOS STRINGS EN FORMATO URL

    const instance = axios.create({
        baseURL: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location="+encodedUrl,
        headers: {
            "content-type":"application/octet-stream",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "e5f7437f2bmsh6707ac5804d0c91p1d3426jsnd9dc91a823b8"
        }
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error("No hay resultados para "+dir)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}
