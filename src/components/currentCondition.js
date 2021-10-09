import React from 'react';
import { WeatherIcon } from './weatherIcon';
import { CurrentCity } from './favoriteIcon';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import { LocationIcon } from './locationIcon';

const useStyles = makeStyles({
	container: {
		marginTop: '20px',
		display: 'flex',
		alignItems: 'center',
		border: '2px solid #eee',
		borderRadius: '0.5rem',
		padding: '1rem',
		marginBottom: '15px',
	},
	actions: {
		marginLeft: 'auto'
	},
	information: {
		display: 'flex',
		alignItems: 'center'
	},
	location: {
		textAlign: 'start',
		margin: 0
	},
	description: {
		textAlign: 'center',
		fontSize: '50px',
		alignItems: 'center',
		justify: 'center'
	}
});

export const CurrentCondition = ({ selectedUnit }) => {
	const classes = useStyles();
	const currentCity = useSelector(state => state.currentCity.data);

	if (!currentCity) {
		return 'no city';
	}

	return (
		currentCity && (
			<>
				<Container>
					<Grid container className={classes.container}>
						<Grid item className={classes.information} >
							<WeatherIcon icon={currentCity?.WeatherIcon} />
						</Grid>
						<Grid item className={classes.location}>
							<Typography component={'h3'} variant="h6">
								{currentCity.Name}
							</Typography>
							<Typography>
								{selectedUnit === 'C' ? `${currentCity?.Temperature?.Metric?.Value}° C` : `${currentCity?.Temperature?.Imperial?.Value}° F`}
							</Typography>
						</Grid>
						<Grid className={classes.actions}>
							<IconButton >
								<LocationIcon />
								<CurrentCity />
							</IconButton>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<Typography component={'h5'}
							variant={'h5'}
							align={'center'}
						>
							{currentCity.WeatherText}
						</Typography>
					</Grid>

				</Container>
			</>
		)
	);
};
