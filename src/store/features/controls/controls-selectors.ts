import {RootState} from '../../store'

const selectAllRegions = (state: RootState) => state.control
const selectSearch = (state: RootState) => state.control
const selectRegion = (state: RootState) => state.control


export {selectAllRegions, selectSearch, selectRegion}