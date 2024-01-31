export const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
    //    console.log(position.coords)
        return position.coords
    })
}