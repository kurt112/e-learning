/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from "../../__StateGlobal/AdminTableState"
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType"
import {Teacher_Assignment, Teacher_Assignment_Create, Teacher_Assignment_Delete} from "../../../utils/Specify"
import {TeacherInsertAssignment as insert} from "../../../../components/ui/utils/tableColumn"
import {updateObject} from "../../../utils/UpdateObject"

const init = new state()

const newSate = {
    ...init.init_state,

    // opening and closing dialog
    createDialog: false,
    deleteDialog: false

}

const transforms = (items) => items.map((item) =>  {

    return insert(item.code, item.lowGrade, item.highGrade, item.sem, item.quarter, `${item.roomShiftClass.roomShift.grade} - ${item.roomShiftClass.roomShift.section}`, item.createdAt,item.deadLine,item.description, item.resource.location)
})
const reducer = (state = newSate, action) => {
    switch (action.type) {
        case actions.ADMIN_TABLE_SETTINGS_INIT(Teacher_Assignment):
            return init.apiSettingsInit(state, action)
        case actions.ADMIN_TABLE_INIT(Teacher_Assignment):
            return init.initData(state)
        case actions.ADMIN_TABLE_FAIL(Teacher_Assignment):
            return init.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Teacher_Assignment):
            return init.nextData(state, action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Assignment):
            return init.searchChange(state, action)

         case actions.ADMIN_TABLE_SUCCESS(Teacher_Assignment):
            return init.successData(state, action, transforms)

        // for opening create assignment dialog
        case actions.DIALOG_OPEN(Teacher_Assignment_Create):
            return updateObject(state, {createDialog: true})
        case actions.DIALOG_CLOSE(Teacher_Assignment_Create):
            return updateObject(state, {createDialog: false})

        // for opening delete assignment dialog
        case actions.DIALOG_OPEN(Teacher_Assignment_Delete):
            return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(Teacher_Assignment_Delete):
            return updateObject(state, {deleteDialog: false})


        default:
            return state;
    }
}

export default reducer