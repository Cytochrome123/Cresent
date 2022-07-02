import {GoogleMap , useLoadScript} from '@react-google-maps/api'

const style = {
    width: '20%',
    height: '20%'
}


const Map = ()=>{

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyDkSsXy95fjJv3vVBApVdycTIJLCVEdJtE'
    })

    if(!isLoaded) return <div>Loading...</div>
    
    return <GoogleMap zoom={10} center={{lat:44, lng: -80}} mapContainerClassName={style}></GoogleMap>
}

export default Map

