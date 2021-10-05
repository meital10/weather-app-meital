import React, { useState, Fragment } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Actions } from '../store';
import axios from 'axios';
import { getAutocompleteUrl } from '../api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	option: {
		fontSize: 15,
		'& > span': {
			marginRight: 10,
			fontSize: 18,
		},
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '15px'
	},
});

export const SearchCity = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [options, setOptions] = useState([]);

	return (
		<div className={classes.container}>
			<Fragment>
				<Autocomplete
					filterOptions={x => x}
					onChange={(event, value) => {
						if (!value || !value.Key) return;
						dispatch(Actions.CurrentCity.setCity({ Key: value.Key, Name: value.LocalizedName }));
					}}

					onInputChange={async (event) => {
						const q = event.target.value;
						if (!q) return;
						const res = await axios.get(getAutocompleteUrl(q));
						setOptions(() => res.data);
					}}
					id='combo-box-demo'
					options={options}
					sx={{ width: 350 }}
					renderInput={(params) => {
						return <TextField {...params} variant='outlined' label='Search Location' />;
					}}

					getOptionLabel={option => {
						return `${option.Country.LocalizedName}, ${option.Country.ID}`;
					}}

					renderOption={(props, option) => {
						return (
							<h4 key={option.Key} {...props}>{`${option.LocalizedName}, ${option.Country.ID}`}</h4>
						);
					}}
				/>
			</Fragment>
		</div>
	);
};
