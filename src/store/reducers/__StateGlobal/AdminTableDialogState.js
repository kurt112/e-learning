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
            error:false,
            message: '',
            done: false,
            errorId:false,
            errorMessageId: ''
        }

        this.successRegister = (state) => {
            state = updateObject(state, {error: false,showMessage: true})
            if(state.id !== undefined) state = updateObject(state, {id: ''})
            state = updateObject(state, {done: true,loading: false})
            return state
        }
        this.initRegister = (state) => {
            return updateObject(state,{
                done: false,
                loading: true
            })
        }

        this.failRegister = (state, action,customError) => {
            if(action.message.response === undefined && customError === undefined) state = updateObject(state, {message: "Check your internet Connection"})
            else if(customError === undefined) state = updateObject(state, {message: action.message.response.data.message})
            else state = updateObject(state, {message: customError})

            return updateObject(state, {
                error: true,
                showMessage: true,
                done: true,
                loading: false
            })
        }

        this.handleClose = (state) => {
            return updateObject(state, {showMessage: false})
        }

        this.emptyIdErrorHandler = (state) => {
            return updateObject(state, {
                loading: false,
                errorId:true,
                errorMessageId: 'Please Input Id'
            })
        }

        this.changeId = (state,data) => {
            return updateObject(state, {
                id:data,
                errorId: false,
                errorMessageId: '',
                showMessage: false,
                error:false
            })
        }

    }

}

export default state