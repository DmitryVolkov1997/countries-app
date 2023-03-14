import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {ALL_COUNTRIES} from 'configs/constants'
import {Country} from 'types/country'


export const fetchCountries = createAsyncThunk<Country[],  undefined, { rejectValue: string }>(
	'countries/fetchCountries',
	async (_, {rejectWithValue}) => {
		try {
			const {data} = await axios.get(ALL_COUNTRIES)

			return data
		} catch (e) {
			return rejectWithValue('Список стран не загрузился')
		}
	}
)