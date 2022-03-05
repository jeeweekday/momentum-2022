function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`your position is ${lat} ${lng}`);
}
function onGeoFail() {
    alert("We cannot find your location.");
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoFail);