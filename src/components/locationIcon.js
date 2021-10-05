// import React from 'react';
// import { useState, useEffect } from 'react';
// import Tooltip from '@material-ui/core/Tooltip';
// import MyLocationIcon from '@material-ui/icons/MyLocation';
// import { getCurrentLocationUrl } from '../api'
// import axios from 'axios';
// import { Actions } from '../store';
// import { useDispatch, useSelector } from 'react-redux';
// import { IconButton, Alert } from '@mui/material';


// export const LocationIcon = () => {
//     const title = 'Search by your location';
//     const [error, setError] = useState(null)

//     const dispatch = useDispatch();

//     const currentLocation = useSelector(state => state.currentCity.data);
//     console.log('currentLocation', currentLocation);

//        const [location, setLocation] = useState({
//         loaded: false,
//         coordinates: { lat: "", lon: "" }
//     });

//     const onSuccess = location => {
//         setLocation({
//             loaded: true,
//             coordinates: {
//                 lat: location.coords.latitude,
//                 lon: location.coords.longitude
//               }
//         });
//     };

//     const onError = error => {
//         setLocation({
//             loaded: true,
//             error,
//         })
//     }

// //    permission from the user to get his location
//     useEffect(() => {
//         axios.get(getCurrentLocationUrl(currentLocation.Key)).then(res => {
//             console.log('getCurrentLocationUrl', res.data)
//             const location = {
//                 Name: location.LocalizedName,
//                 LocationKey: location.Key,
//             }
//             dispatch(Actions.CurrentCity.setLocation(res.data));
//         }).catch(err => console.log(err.message));
//         if (!("geolocation" in navigator)) {
//             onError({
//                 code: 0,
//                 message: "Geolocation not supported",
//             })

//         }

//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }, [])


//        return (

//         <div>
//             <div>
//                 {error && <Alert variant="filled" severity="error">{error}</Alert>}
//             </div>
//             {currentLocation &&

//                 (<Tooltip title={title}>
//                     <IconButton onClick={() => dispatch(Actions.CurrentCity.setLocation())}>
//                         <MyLocationIcon
//                             cursor='pointer'
//                             aria-label={title}
//                             color="primary"
//                             location={location.loaded ? JSON.stringify(location) : "Location data is not avaliable"} />
//                     </IconButton>
//                 </Tooltip>)}
//         </div>

//     )
// }


