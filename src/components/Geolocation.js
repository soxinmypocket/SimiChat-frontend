import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { MapContext } from 'react-mapbox-gl'


const Geolocation = (props) =>  {
    console.log(props)
    const Map = ReactMapboxGl({
        accessToken:
          `${REACT_APP_MAPBOX}`
      });
        return (
            <>
            <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: '75vh',
              width: '75vw'
            }}
          >
            <Layer type="symbol" layout={{ 'icon-image': 'marker-15' }}>
                {/* { props.center.map (location =>  */}
              <Feature coordinates={[40.741895, -73.989308]} />
                {/* } */}
            </Layer>
          </Map>;
          </>
    )
}
    
    
export default Geolocation;
