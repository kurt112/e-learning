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
            return updateObject(state,{
                profile: action.data,
                loading: false
            })
        }

        this.failData= (state) =>{
            return updateObject(state, {loading: false})
        }
    }
}

export default State