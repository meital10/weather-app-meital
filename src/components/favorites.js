import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteCity } from './favoriteIcon';


export const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.data);

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography component={'h4'} variant={'h4'} color={'blue'} align={'center'}>
                        Your Favorite Cities
                    </Typography>
                </Grid>

                {/* <Grid item xs={12}>
                    {favorites.map((favorite, i) => (
                        <FavoriteCity key={i} {...favorite} />
                    ))}
                </Grid> */}

                <Grid>
                    <NoFavorites />
                </Grid>

            </Grid>

        </Container>

    )
}


const NoFavorites = () => {
    return (
        <Container>
            <Typography component={'h6'} variant={'h6'} align={'center'} >
                There are no favorite cities. Please Choose
            </Typography>

        </Container>
    )
}

