import React, { Fragment } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@mui/material';
import { Actions } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const useStyles = makeStyles({
    action: {
        fontSize: '2.6rem',
        padding: '0.5rem',
        display: 'flex',
    },
    root: {
        margin: '10px',
        marginTop: '30px',
        marginLeft: '50px',
        marginBottom: '50px',
        maxWidth: 200,
        height: '12rem',
        width: '9rem',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        background: 'linear-gradient(rgba(0, 185, 195, 0.5), rgba(16, 76, 120, 0.1))',
        borderRadius: '0.5rem',
        padding: '10px',
        border: '3px solid rgba(32, 45, 44, 0.7)',
        boxShadow: '2px 2px 2px rgba(29, 40, 44, 0.5)'
    },
});

const isFavorite = (favorites, currentCity) => {
    return favorites.findIndex(city => city.Key === currentCity?.Key) !== -1
}

const RemoveFromFavorites = ({
    onClick,
    title = 'Add to favorites',
}) => (
    <Tooltip title={title}>
        <FavoriteBorderIcon
            cursor='pointer'
            aria-label={title}
            color='error'
            onClick={onClick}
        />
    </Tooltip>
);

const AddToFavorites = ({
    onClick,
    title = 'Remove from favorites',
}) => (
    <Tooltip title={title}>
        <Favorite
            cursor='pointer'
            aria-label={title}
            color='secondary'
            onClick={onClick}

        />
    </Tooltip>
);
export const FavoriteCity = ({ onClick, name, weatherText, weatherIcon, celsius, fahrenheit, selectedUnit }) => {
    const classes = useStyles()

    return (
        <Fragment>
            <Card className={classes.root} onClick={onClick}>
                <CardContent style={{ textAlign: "center" }} >
                    <Typography component={'h3'} variant="h6">
                        {name}
                    </Typography>

                    <Typography>
                        {selectedUnit === 'C' ? `${celsius?.toFixed(1)}° C` : `${fahrenheit?.toFixed(1)}° F`}
                    </Typography>

                    <img
                        alt={weatherText}
                        src={`https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`} />

                    <Typography>
                        {weatherText}
                    </Typography>

                </CardContent>
            </Card>
        </Fragment>
    )
}

export const CurrentCity = () => {
    const currentCity = useSelector(state => state.currentCity.data);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.data);

    return (
        isFavorite(favorites, currentCity) ? (
            <AddToFavorites onClick={() => dispatch(Actions.FavoriteCities.remove({ Key: currentCity.Key }))} />
        )
            :
            <RemoveFromFavorites onClick={() => dispatch(Actions.FavoriteCities.add({ Key: currentCity.Key, Name: currentCity.Name }))} />
    )
};

