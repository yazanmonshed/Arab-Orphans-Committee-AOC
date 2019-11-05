import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
 
function map() {
    return <GoogleMap  

    defaultZoom={10}    
    defaultCenter={{lat: 45.4545, lng:-19.3434}}
    />
}


const WrappMap =withScriptjs(withGoogleMap(map))



export default  MapSection = () => {
    return (
        <section>
            <WrappMap 
            //   googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${df}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}

            />

        </section>
    )
}