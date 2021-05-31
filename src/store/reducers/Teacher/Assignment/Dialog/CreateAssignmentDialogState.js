import state from '../../../__StateGlobal/AdminTableDialogState'
import * as globalActionDialog from '../../../../ActionType/__ActionTypeGlobal/DialogActionType'
import * as teacherAssignmentCreateDialogAction from '../../../../ActionType/Teacher/TeacherAssignment'
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
        case teacherAssignmentCreateDialogAction.CHANGE_HIGH_GRADE:
            return updateObject(state, {highGrade: action.data})
        case teacherAssignmentCreateDialogAction.CHANGE_RESOURCE_CODE:
            return updateObject(state, {resourceCode: action.data})
        case teacherAssignmentCreateDialogAction.CHANGE_CLASS_CODE:
            return updateObject(state, {classCode: action.data})
        case teacherAssignmentCreateDialogAction.CHANGE_DEADLINE:
            return updateObject(state, {deadLine: action.data})
        case teacherAssignmentCreateDialogAction.CHANGE_SEMESTER:
            return updateObject(state, {sem: action.data})
        case teacherAssignmentCreateDialogAction.CHANGE_QUARTER:
            return updateObject(state, {quarter: action.data})
        case teacherAssignmentCreateDialogAction.CHANGE_LOW_GRADE:
            return updateObject(state, {lowGrade: action.data})
        case teacherAssignmentCreateDialogAction.CHANGE_DESCRIPTION:
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
        case globalActionDialog.ADMIN_DIALOG_ID_CHANGE(Teacher_Assignment_Create):
            return updateObject(state, {id: action.value})

        default:
            return state;
    }

}

export default reducer