import state from "../../__StateGlobal/AdminTableState";
import * as dialogAction from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {
    Teacher_Lecture,
    Teacher_Lecture_Create,
    Teacher_Lecture_Delete
} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";
import {TeacherInsertLecture as insert} from "../../../../components/ui/utils/tableColumn";
import {convertDateTime} from "../../../../components/ui/utils/dateFormat/DateTimeFormatToDateWord";

const init = new state()

const newState = {
    ...init.init_state,
    createDialog: false,
    deleteDialog: false
}
const transforms = (items) => items.map((item) =>
    insert(item.code, item.name, `${item.class_.roomShift.grade} ${item.class_.roomShift.section}`,item.sem, item.quarter,convertDateTime(item.createdAt),item.description,item.resources.code))



const reducer = (state = newState, action) => {
    switch (action.type) {

        case dialogAction.ADMIN_TABLE_SETTINGS_INIT(Teacher_Lecture):
            return init.apiSettingsInit(state, action)
        case dialogAction.ADMIN_TABLE_INIT(Teacher_Lecture):
            return init.initData(state)

        case dialogAction.ADMIN_TABLE_SUCCESS(Teacher_Lecture):
            return init.successData(state, action,transforms)
        case dialogAction.ADMIN_TABLE_FAIL(Teacher_Lecture):
            return init.failData(state)
        case dialogAction.ADMIN_TABLE_NEXT_PAGE(Teacher_Lecture):
            return init.nextData(state, action)
        case dialogAction.ADMIN_TABLE_SEARCH_DATA_CHANGE(Teacher_Lecture):
            return init.searchChange(state, action)




        // upload dialog actions
        case dialogAction.DIALOG_OPEN(Teacher_Lecture_Create):
            return updateObject(state, {createDialog: true})
        case dialogAction.DIALOG_CLOSE(Teacher_Lecture_Create):
            return updateObject(state, {createDialog: false})
        // case teacherDialog.Dialog_Success(Teacher_Resource_Upload):
        // return successData(state, action)


        // for opening and closing of delete dialog
        case dialogAction.DIALOG_OPEN(Teacher_Lecture_Delete):
            return updateObject(state, {deleteDialog: true})
        case dialogAction.DIALOG_CLOSE(Teacher_Lecture_Delete):
            return updateObject(state, {deleteDialog: false})
        // case teacherDialog.Dialog_Success(Teacher_Resource_Delete):
        //     return successDelete(state, action)
        default:
            return state
    }

}

export default reducer