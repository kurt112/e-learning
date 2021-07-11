/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {updateObject} from "../../utils/UpdateObject";
class State {
    constructor() {
        this.init_state = {
            error:null,
            loading: true,
            profile: null,
        }

        this.initData=(state) => {
            return state
        }

        this.successData =(state, action) => {
            state = updateObject(state, {loading: false})

            return updateObject(state,{profile: action.data})
        }

        this.failData= (state, action) =>{

            state = updateObject(state, {loading: false})

            return state
        }
    }
}

export default State