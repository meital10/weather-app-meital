import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';

const DailyForecastsSlice = createSlice({
	name: 'dailyForecasts',
	initialState: {
		data: [],
		defaultTempUnit: 'C'
	},
	reducers: {
		setForcast: (state, action) => {
			state.data = action.payload;
		},
		setTempUnit: (state, action) => {
			state.defaultTempUnit = action.payload;
		}
	}
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
		setCity: (state, action) => {
			state.data = { ...state.data, ...action.payload };
		}
	},
});

const localFavorites = JSON.parse(localStorage.getItem('favorites'));
const FavoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		data: localFavorites ? localFavorites : []
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

const CurrentLocationSlice = createSlice({
	name: 'currentLocation',
	initialState: {
		data: null,
		hasNavigationError: false
	},
	reducers: {
		setLocation: (state, action) => {
			state.data = action.payload;
		},
		setNavigationError: (state, action) => {
			state.hasNavigationError = action.payload;
		}
	}
});

const rootReducer = combineReducers({
	dailyForecasts: DailyForecastsSlice.reducer,
	currentCity: CurrentCitySlice.reducer,
	favorites: FavoritesSlice.reducer,
	location: CurrentLocationSlice.reducer
});

export const Actions = {
	DailyForecasts: DailyForecastsSlice.actions,
	CurrentCity: CurrentCitySlice.actions,
	FavoriteCities: FavoritesSlice.actions,
	CurrentLocation: CurrentLocationSlice.actions
};

export const store = configureStore({ reducer: rootReducer });

