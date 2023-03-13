import React, {ChangeEvent, FormEvent, useEffect} from 'react'
import styles from './Controls.module.sass'
import {Search, Select} from 'components'
import {FormControl} from '@chakra-ui/react'
import {options} from 'mock/options'
import {useAppDispatch, useAppSelector} from 'store/redux-hooks'
import {setRegions, setSearch} from './controls-slice'
import {selectAllRegions} from './controls-selectors'

export const Controls = () => {
	const dispatch = useAppDispatch()
	const {regions} = useAppSelector(selectAllRegions)

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
		e.preventDefault()
	}

	useEffect(() => {
		dispatch(setRegions(options))
	}, [])

	return (
		<form onSubmit={handleSubmit}>
			<FormControl className={styles.controls}>
				<Search/>
				<Select regions={regions}/>
			</FormControl>
		</form>
	)
}

