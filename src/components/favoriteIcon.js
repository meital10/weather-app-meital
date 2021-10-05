import Tooltip from '@material-ui/core/Tooltip';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@mui/material';
import { Actions } from '../store';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    action: {
        fontSize: '2.6rem',
        padding: '0.5rem',
        display: 'flex',
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
export const FavoriteCity = ({ favoriteCity }) => {
    const classes = useStyles()
    const defaultTempUnit = useSelector(state => state.dailyForecasts.defaultTempUnit)

    return (
        <Container>
            <Grid item className={classes.location}>
                {/* <Typography component={'h3'} variant="h6">
                    {favoriteCity.Name}
                </Typography> */}
                <Typography>
                    {defaultTempUnit === 'C' ? `${favoriteCity?.Temperature?.Metric?.Value}° C` : `${favoriteCity?.Temperature?.Imperial?.Value}° F`}
                </Typography>

            </Grid>
        </Container>
    )
}

export const CurrentCity = () => {
    const currentCity = useSelector(state => state.currentCity.data);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.data);

    return (
        isFavorite(favorites, currentCity) ? (
            <IconButton onClick={() => dispatch(Actions.FavoriteCities.remove({ Key: currentCity.Key }))}  >
                <AddToFavorites />
            </IconButton>
        )
            :
            (<IconButton onClick={() => dispatch(Actions.FavoriteCities.add({ Key: currentCity.Key, Name: currentCity.Name }))}>
                <RemoveFromFavorites />
            </IconButton>)
    )
};

