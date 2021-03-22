import {updateObject} from "../../utils/UpdateObject";

class State {
    constructor() {
        this.init_state = {
            data: [],
            page: 0,
            highPage: -1,
            totalPages: 0,
            totalItems: 0,
            search: '',
            dialog: false,
            error: '',
            loading: true,
        }
        this.initData = (state) => {
            state = updateObject(state, {loading: true})
            return state
        }
        this.failData = (state) => {
            state = updateObject(state, {loading: false})
            return state
        }

        this.successData = (state, action, transform) => {
            const fetchData = transform(action.data)

            let new_Data;
            if (action.init === false) new_Data = state.data.concat(fetchData)
            else new_Data = fetchData

            const set = new Set(new_Data)
            const unique = [...set]
            state = updateObject(state, {loading: false})
            state = updateObject(state, {data: unique})

            console.log(state)

            return state
        }

        this.apiSettingsInit = (state,action) => {
            const object = action.data
            const key = Object.keys(object)
            const settings = object[key]

            state = updateObject(state, {totalPages: settings.totalPages})
            state = updateObject(state, {totalItems: settings.totalElements})

            return state
        }
        this.nextData = (state, action) => {
            if (state.page > state.highPage) {
                state = updateObject(state, {loading: true})
                state = updateObject(state, {highPage: state.page})
            }
            state = updateObject(state, {page: action.page})
            return state
        }

        this.openDialog = (state) => {
            return updateObject(state, {dialog: true})
        }

        this.closeDialog = (state) => {
            return updateObject(state, {dialog: false})
        }

        this.searchChange = (state, action) => {
            state = updateObject(state, {loading: true})
            state = updateObject(state, {highPage: -1})
            state = updateObject(state, {page: 0})
            return updateObject(state, {search: action.text === null? '': action.text})
        }
        this.AddTable = (state, responseData) => {

            const newStudent = [responseData, ...state.data]
            console.log("The state")
            console.log(state)
            const newPage = state.totalItems + 1;
            state = updateObject(state, {totalItems: newPage})

            return updateObject(state, {data: newStudent})
        }

    }
}

export default State