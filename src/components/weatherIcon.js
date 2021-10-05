import React from 'react';
import Container from '@mui/material/Container';

const useStyles = {
	container: {
		width: '100px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		justifySelf: 'center',
	},
	iconImg: {
		paddingTop: '5px',
		width: '100 %',
	},
};

export const iconNum = num => {
	const stringNum = num + '';
	const stringLen = stringNum.length;

	if (stringLen === 1) {
		return '0' + stringNum;
	} else {
		return stringNum;
	}
};

export const WeatherIcon = ({ icon, description }) => (
	<Container >
		<div className={useStyles.container}>
			<img
				className={useStyles.iconImg}
				src={`https://developer.accuweather.com/sites/default/files/${iconNum(icon)}-s.png`}
				alt={description}
			/>
		</div>
	</Container>
);
