import state from '../../__StateGlobal/AdminTableDialogState'
import * as actionClass from '../../../ActionType/Admin/RoomShiftClass/RoomShiftClassDialogActionType'
import * as globalActionDialog from '../../../ActionType/__ActionTypeGlobal/AdminDialogActionType'
import {RoomShiftClass} from '../../../utils/Specify'
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
        case globalActionDialog.ADMIN_DIALOG_REGISTER(RoomShiftClass): return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(RoomShiftClass): return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(RoomShiftClass): return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(RoomShiftClass): return newState.handleClose(state,action)

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