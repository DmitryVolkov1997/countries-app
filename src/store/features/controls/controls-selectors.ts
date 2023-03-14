import {RootState} from '../../store'

const selectAllRegions = (state: RootState) => state.controls
const selectSearch = (state: RootState) => state.controls
const selectRegion = (state: RootState) => state.controls
const selectControls = (state: RootState) => state.controls


export {selectAllRegions, selectSearch, selectRegion, selectControls}