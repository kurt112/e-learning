/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import state from "../../__StateGlobal/AdminTableState";
import * as dialogAction from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {
    Teacher_Exams,
    Teacher_Exams_Create,
    Teacher_Exams_Delete,
} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";
import {TeacherInsertExam as insert} from "../../../../components/ui/utils/tableColumn";
const init = new state()

const newState = {
    ...init.init_state,
    createDialog: false,
    deleteDialog: false
}
const transforms = (items) => items.map((item) =>  {
    return insert(item.code, item.lowGrade, item.highGrade, item.sem, item.quarter, `${item.roomShiftClass.roomShift.grade} - ${item.roomShiftClass.roomShift.section}`, item.createdAt,item.deadLine,item.description, item.resource.location)
})


const reducer = (state = newState, action) => {
    switch (action.type) {

        case dialogAction.ADMIN_TABLE_SETTINGS_INIT(Teacher_Exams):
            return init.apiSettingsInit(state, action)
        case dialogAction.ADMIN_TABLE_INIT(Teacher_Exams):
            return init.initData(state)

        case dialogAction.ADMIN_TABLE_SUCCESS(Teacher_Exams):
            return init.successData(state, action,transforms)
        case dialogAction.ADMIN_TABLE_FAIL(Teacher_Exams):
            return init.failData(state)
        case dialogAction.ADMIN_TABLE_NEXT_PAGE(Teacher_Exams):
            return init.nextData(state, action)
        case dialogAction.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Exams):
            return init.searchChange(state, action)




        // upload dialog actions
        case dialogAction.DIALOG_OPEN(Teacher_Exams_Create):
            return updateObject(state, {createDialog: true})
        case dialogAction.DIALOG_CLOSE(Teacher_Exams_Create):
            return updateObject(state, {createDialog: false})



        // for opening and closing of delete dialog
        case dialogAction.DIALOG_OPEN(Teacher_Exams_Delete):
            return updateObject(state, {deleteDialog: true})
        case dialogAction.DIALOG_CLOSE(Teacher_Exams_Delete):
            return updateObject(state, {deleteDialog: false})
        default:
            return state
    }

}

export default reducer