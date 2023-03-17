import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { filterByCode, searchByCountry } from 'configs/constants'
import { Country } from 'types/country'

export const fetchDetails = createAsyncThunk<
	Country,
	string,
	{ rejectValue: string }
>('details/fetchDetails', async (name, { rejectWithValue }) => {
	try {
		const { data } = await axios.get(searchByCountry(name))

		return data[0]
	} catch (e) {
		return rejectWithValue('Подробное описание не загрузилось')
	}
})

export const fetchNeighbors = createAsyncThunk<
	Country[],
	string[],
	{ rejectValue: string }
>('neighbors/fetchNeighbors', async (borders, { rejectWithValue }) => {
	try {
		const { data } = await axios.get(filterByCode(borders))

		return data
	} catch (e) {
		return rejectWithValue('Border countries not find')
	}
})
