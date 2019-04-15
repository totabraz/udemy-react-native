import { combineReducers } from "redux";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from './SelectionReducer';


// libraries:  () => []
// always will return a array
export default combineReducers ({
    libraries: LibraryReducer,
    selectedLibraryId : SelectionReducer
});