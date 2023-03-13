import styles from './Select.module.sass'
import {Select as UISelect} from '@chakra-ui/react'
import {Region} from 'types'
import {useRegion} from '../../store/features/controls/use-regions'

interface SelectProps {
	regions: Region[]
}

export const Select = ({regions}: SelectProps) => {
	const [region, setRegion] = useRegion()

	return (
		<UISelect value={region} placeholder="Filter by region" w={'200px'} h={'50px'} onChange={setRegion}>
			{
				regions.map((r, idx) => (
					<option key={idx} value={r.value}>{r.label}</option>
				))
			}
		</UISelect>
	)
}
