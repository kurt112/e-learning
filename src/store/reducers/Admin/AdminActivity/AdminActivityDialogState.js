import state from '../../__StateGlobal/AdminTableDialogState'
import * as globalActionDialog from '../../../ActionType/__ActionTypeGlobal/AdminDialogActionType'
import {Activity} from '../../../utils/Specify'
import * as actions from '../../../ActionType/Admin/ActivityDialogActionType'
import {updateObject} from "../../../utils/UpdateObject";
const newState = new state();

delete newState.init_state.id

const init_state = {
    file: '',
    roomShiftId: '',
    subjectID:'',
    activityName:'',
    activityType:'',
    activityDescription: '',
    activityDeadlineDate:'',
    activityDeadlineTime:'',
    ...newState.init_state
}
const reducer = (state=init_state, action) => {
    console.log(action.type)
    switch (action.type){
        case actions.CHANGE_FILE:return updateObject(state, {file:action.file})
        case actions.CHANGE_CLASS_ROOMSHIFT: return updateObject(state, {roomShiftId: action.data})
        case actions.CHANGE_SUBJECT:return updateObject(state, {subjectID: action.data})
        case actions.CHANGE_ACTIVITY_NAME: return updateObject(state, {activityName: action.data})
        case actions.CHANGE_ACTIVITY_TYPE: return updateObject(state, {activityType: action.data})
        case actions.CHANGE_ACTIVITY_DEADLINE_DATE: return updateObject(state, {activityDeadlineDate: action.data})
        case actions.CHANGE_ACTIVITY_DEADLINE_TIME: return  updateObject(state, {activityDeadlineTime: action.data})
        case actions.CHANGE_ACTIVITY_DESCRIPTION: return updateObject(state, {activityDescription: action.data})

        case globalActionDialog.ADMIN_DIALOG_REGISTER(Activity): return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(Activity): return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(Activity): return newState.successRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Activity): return newState.handleClose(state,action)
        default: return state;
    }

}

export default  reducer