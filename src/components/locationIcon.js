import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { getCurrentLocationUrl } from '../api'
import axios from 'axios';
import { Actions } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';



export const LocationIcon = () => {
    const title = 'Search by your location';
    const location = useSelector(state => state.location.data);
    const hasNavigationError = useSelector(state => state.location.hasNavigationError)
    const dispatch = useDispatch();

    const onClick = () => {
        if (hasNavigationError) {
            alert("You need to approve your location in the browser");
            return;
        }
        axios.get(getCurrentLocationUrl(location.latitude, location.longitude)).then(
            res => {
                dispatch(Actions.CurrentCity.setCity({ Name: res.data.LocalizedName, Key: res.data.Key }));
            }
        )
    }

    return (
        <div>
            <Tooltip title={title}>
                <IconButton onClick={onClick}>
                    <MyLocationIcon
                        cursor='pointer'
                        aria-label={title}
                        color="primary"
                    />
                </IconButton>
            </Tooltip>
        </div>

    )
}


