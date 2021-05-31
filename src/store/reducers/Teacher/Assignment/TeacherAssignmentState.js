import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {Teacher_Assignment, Teacher_Assignment_Create, Teacher_Assignment_Delete} from "../../../utils/Specify";
import {TeacherInsertAssignment as insert} from "../../../../components/ui/utils/tableColumn";
import {updateObject} from "../../../utils/UpdateObject";
import * as teacherDialog from "../../../ActionType/Teacher/GlobalActiontype";

const init = new state()

const newSate = {
    ...init.init_state,

    // opening and closing dialog
    createDialog: false,
    deleteDialog: false

}

const transforms = (items) => items.map((item) => insert(item.code, item.resource.name, item.lowGrade, item.highGrade, item.sem, item.quarter, `${item.roomShiftClass.roomShift.grade} - ${item.roomShiftClass.roomShift.section}`, item.createdAt,item.deadLine,item.description, item.resource.code))

const successData = (state, action) => {
    const newData = action.data
    const tempData = [...state.data]

    tempData.unshift(insert(newData.code, newData.name, newData.description, newData.date, newData.type, newData.status, newData.location))

    return updateObject(state, {data: tempData})
}

const successDelete = (state, action) => {
    const assignmentCode = action.data
    const tempData = state.data.filter(resource => resource.code !== assignmentCode)

    return updateObject(state, {data: tempData})
}

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

        // for inserting data
        // case actions.ADMIN_DIALOG_TABLE_REGISTER(Teacher_Assignment): return newState.AddTable(state, response(action.item))
        case actions.ADMIN_TABLE_SUCCESS(Teacher_Assignment):
            return init.successData(state, action, transforms)

        // for opening and closing of dialog
        case actions.DIALOG_OPEN(Teacher_Assignment_Create):
            return updateObject(state, {createDialog: true})
        case actions.DIALOG_CLOSE(Teacher_Assignment_Create):
            return updateObject(state, {createDialog: false})

        case actions.DIALOG_OPEN(Teacher_Assignment_Delete):
            return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(Teacher_Assignment_Delete):
            return updateObject(state, {deleteDialog: false})

        case teacherDialog.Dialog_Success(Teacher_Assignment_Create):
            return successData(state, action)

        case teacherDialog.Dialog_Success(Teacher_Assignment_Delete):
            return successDelete(state,action)

        default:
            return state;
    }
}

export default reducer