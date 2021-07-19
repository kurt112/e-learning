/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {updateObject} from "../../utils/UpdateObject";

class state{
    constructor() {
        this.init_state = {
            id: '',
            loading: false,
            showMessage: false,
            error:'',
            message: '',
            done: false
        }

        this.successRegister = (state) => {
            state = updateObject(state, {error: false})
            state = updateObject(state, {showMessage: true})
            if(state.id !== undefined) state = updateObject(state, {id: ''})
            state = updateObject(state, {loading: false})
            state = updateObject(state, {done: true})
            return state
        }
        this.initRegister = (state) => {

            state = updateObject(state, {done: false})
            state = updateObject(state,{showMessage: true})
            state = updateObject(state, updateObject({loading: true}))

            return state
        }

        this.failRegister = (state, action,customError) => {
            if(action.message.response === undefined && customError === undefined) state = updateObject(state, {message: "Check your internet Connection"})
            else if(customError === undefined) state = updateObject(state, {message: action.message.response.data.message})
            else state = updateObject(state, {message: customError})
            state = updateObject(state, {error: true})
            state = updateObject(state, {showMessage: true})
            state = updateObject(state, {done: true})
            return updateObject(state, updateObject({loading: false}))
        }


        this.handleClose = (state) => {
            return updateObject(state, {showMessage: false})
        };
    }

}

export default state