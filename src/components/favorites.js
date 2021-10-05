import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        align: 'center',
        paddingTop: '30px'
    },
    subtitle: {
        paddingTop: '80px'
    }
});



export const Favorites = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item className={classes.title}>
                    <Typography component={'h4'} variant={'h4'} color={'blue'} align={'center'}>
                        Your Favorite Cities
                    </Typography>
                </Grid>

                {/* <Grid item xs={12}>
                    {favorites.map((favorite, i) => (
                        <FavoriteCity key={i} {...favorite} />
                    ))}
                </Grid> */}

                <Grid className={classes.subtitle}>
                    <NoFavorites />
                </Grid>

            </Grid>

        </Container>

    )
}


const NoFavorites = () => {
    return (
        <div>
            <Typography component={'h6'} variant={'h6'} >
                There are no favorite cities. Please Choose
            </Typography>
        </div>

    )
}

