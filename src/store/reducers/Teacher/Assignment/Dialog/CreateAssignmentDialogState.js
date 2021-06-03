import state from '../../../__StateGlobal/AdminTableDialogState'
import * as globalActionDialog from '../../../../ActionType/__ActionTypeGlobal/DialogActionType'
import * as dialogAction from '../../../../ActionType/Teacher/GlobalActiontype'
import {Teacher_Assignment_Create} from '../../../../utils/Specify'
import {updateObject} from "../../../../utils/UpdateObject"

const newState = new state();


const init_state = {
    resourceCode: '',
    classCode: '',
    deadLine: '',
    sem: 1,
    quarter: 1,
    lowGrade: 0,
    highGrade: 100,
    description: '',
    ...newState.init_state
}


const reducer = (state = init_state, action) => {

    switch (action.type) {

        // for changing data
        case dialogAction.CHANGE_HIGH_GRADE(Teacher_Assignment_Create):
            return updateObject(state, {highGrade: action.data})
        case dialogAction.CHANGE_RESOURCE_CODE(Teacher_Assignment_Create):
            return updateObject(state, {resourceCode: action.data})
        case dialogAction.CHANGE_CLASS_CODE(Teacher_Assignment_Create):
            return updateObject(state, {classCode: action.data})
        case dialogAction.CHANGE_DEADLINE(Teacher_Assignment_Create):
            return updateObject(state, {deadLine: action.data})
        case dialogAction.CHANGE_SEMESTER(Teacher_Assignment_Create):
            return updateObject(state, {sem: action.data})
        case dialogAction.CHANGE_QUARTER(Teacher_Assignment_Create):
            return updateObject(state, {quarter: action.data})
        case dialogAction.CHANGE_LOW_GRADE(Teacher_Assignment_Create):
            return updateObject(state, {lowGrade: action.data})
        case dialogAction.CHANGE_DESCRIPTION(Teacher_Assignment_Create):
            return updateObject(state, {description: action.data})

        // for the state of dialog
        case globalActionDialog.ADMIN_DIALOG_REGISTER(Teacher_Assignment_Create):
            return newState.initRegister(state)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_FAIL(Teacher_Assignment_Create):
            return newState.failRegister(state, action)
        case globalActionDialog.ADMIN_DIALOG_REGISTER_SUCCESS(Teacher_Assignment_Create): {
            state = updateObject(state, {
                resourceCode: '',
                classCode: '',
                deadLine: '',
                sem: 1,
                quarter: 1,
                lowGrade: 0,
                highGrade: 100,
                description: '',
            })

            return newState.successRegister(state)
        }
        case globalActionDialog.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(Teacher_Assignment_Create):
            return newState.handleClose(state, action)

        default:
            return state;
    }

}

export default reducer