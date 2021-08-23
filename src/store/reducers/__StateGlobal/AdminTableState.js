/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
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
            status: 1,

            // status
            // 0 = In-active
            // 1 = Active
            // 2 = All
            statusData: ['In-Active', 'Active', 'All']
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
            return updateObject(state, {
                loading: false,
                data: unique
            })
        }

        this.apiSettingsInit = (state, action) => {
            const object = action.data
            const key = Object.keys(object)
            const settings = object[key]

            return updateObject(state, {
                totalPages: settings.totalPages,
                totalItems: settings.totalElements
            })
        }
        this.nextData = (state, action) => {
            if (state.page > state.highPage) {
                state = updateObject(state, {
                    loading: true,
                    highPage: state.page
                })
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
            return updateObject(state, {
                search: action.text === null ? '' : action.text,
                page: 0,
                highPage: -1,
                loading: true
            })
        }

        this.changeStatus = (state, action) => {
            return updateObject(state, {
                status: action.data,
                page: 0,
                highPage: -1,
                loading: true
            })
        }
    }
}

export default State