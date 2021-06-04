import state from "../../__StateGlobal/AdminTableState";
import * as dialogAction from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {
   Teacher_Quiz, Teacher_Quiz_Create, Teacher_Quiz_Delete,
} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";
import {TeacherInsertQuiz as insert} from "../../../../components/ui/utils/tableColumn";
const init = new state()

const newState = {
    ...init.init_state,
    createDialog: false,
    deleteDialog: false
}
const transforms = (items) => items.map((item) => insert(item.code, item.lowGrade, item.highGrade, item.sem, item.quarter, `${item.roomShiftClass.roomShift.grade} - ${item.roomShiftClass.roomShift.section}`, item.createdAt,item.deadLine,item.description, item.resource.code))

const reducer = (state = newState, action) => {
    switch (action.type) {

        case dialogAction.ADMIN_TABLE_SETTINGS_INIT(Teacher_Quiz):
            return init.apiSettingsInit(state, action)
        case dialogAction.ADMIN_TABLE_INIT(Teacher_Quiz):
            return init.initData(state)

        case dialogAction.ADMIN_TABLE_SUCCESS(Teacher_Quiz):
            return init.successData(state, action,transforms)
        case dialogAction.ADMIN_TABLE_FAIL(Teacher_Quiz):
            return init.failData(state)
        case dialogAction.ADMIN_TABLE_NEXT_PAGE(Teacher_Quiz):
            return init.nextData(state, action)
        case dialogAction.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Quiz):
            return init.searchChange(state, action)




        // upload dialog actions
        case dialogAction.DIALOG_OPEN(Teacher_Quiz_Create):
            return updateObject(state, {createDialog: true})
        case dialogAction.DIALOG_CLOSE(Teacher_Quiz_Create):
            return updateObject(state, {createDialog: false})


        // for opening and closing of delete dialog
        case dialogAction.DIALOG_OPEN(Teacher_Quiz_Delete):
            return updateObject(state, {deleteDialog: true})
        case dialogAction.DIALOG_CLOSE(Teacher_Quiz_Delete):
            return updateObject(state, {deleteDialog: false})

        default:
            return state
    }

}

export default reducer