import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';

const DailyForecastsSlice = createSlice({
	name: 'dailyForecasts',
	initialState: {
		data: [],
		defaultTempUnit: 'C'
	},

	reducers: {
		set: (state, action) => {
			state.data = action.payload;
			// state.data = { ...state.data, ...action.payload };
		},
		setTempUnit: (state, action) => {
			state.defaultTempUnit = action.payload;
		}
	},
});

const FavoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		data: [{
			Key: '',
			Name: '',
		}],
		value: 0
	},

	reducers: {
		add: (state, action) => {
			return {
				data: [...state.data, action.payload]
			}
		},
		remove: (state, action) => {
			return {
				data: state.data.filter((rf) => rf.Key !== action.payload.Key)
			}
		}
	},
});

const CurrentCitySlice = createSlice({
	name: 'currentCity',
	initialState: {
		data: {
			Key: '215854',
			Name: 'Tel Aviv',
		},
	},

	reducers: {
		setKey: (state, action) => {
			state.data.Key = action.payload;
		},
		setCity: (state, action) => {
			state.data = { ...state.data, ...action.payload };
		},
		setLocation: (state, action) => {

			state.data = action.payload;
		},

	},
});


const rootReducer = combineReducers({
	dailyForecasts: DailyForecastsSlice.reducer,
	currentCity: CurrentCitySlice.reducer,
	favorites: FavoritesSlice.reducer,
});

export const Actions = {
	DailyForecasts: DailyForecastsSlice.actions,
	CurrentCity: CurrentCitySlice.actions,
	FavoriteCities: FavoritesSlice.actions,
};

export const store = configureStore({ reducer: rootReducer });

