import state from '../__StateGlobal/AdminTableDialog'
import * as actionClass from '../../../ActionType/Admin/RoomClassDialog'
import * as globalActionDialog from '../../../ActionType/Admin/__ActionTypeGlobal/AdminDialog'
import {Class} from '../../../utils/Specify'
import {updateObject} from "../../../utils/UpdateObject";

const newState = new state();

delete newState.init_state.id

const init_state = {
    shiftID: '',
    subjectID: '',
    teacherID: '',
    day: 'MWF',
    timeStart: '',
    timeEnd: '',
    ...newState.init_state
}
const reducer = (state=init_state, action) => {

    switch (action.type){
        case globalActionDialog.ADMIN_DIALOG_REGISTER(Class): return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(Class): return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(Class): return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Class): return newState.handleClose(state,action)

        case actionClass.CHANGE_ROOMCLASS_DAY: return updateObject(state, {day: action.data})
        case actionClass.CHANGE_ROOMCLASS_ROOMSHIFT_ID: return updateObject(state, {shiftID: action.data})
        case actionClass.CHANGE_ROOMCLASS_SUBJECT_ID: return updateObject(state, {subjectID: action.data})
        case actionClass.CHANGE_ROOMCLASS_TEACHERID: return updateObject(state, {teacherID: action.data})
        case actionClass.CHANGE_ROOMCLASS_TIMEEND: return updateObject(state, {timeEnd: action.data})
        case actionClass.CHANGE_ROOMCLASS_TIMESTART: return updateObject(state, {timeStart: action.data})
        default: return state;
    }

}

export default  reducer