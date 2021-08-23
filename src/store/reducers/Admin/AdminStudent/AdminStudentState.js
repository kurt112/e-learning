/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import  state from '../../__StateGlobal/AdminTableState'
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {Student, Student_Delete} from "../../../utils/Specify";
import {AdminInsertStudentTable as insert} from "../../../../components/ui/utils/tableColumn";
import {updateObject} from "../../../utils/UpdateObject";
import {convertDateTime} from "../../../../components/ui/utils/dateFormat/DateTimeFormatToDateWord";

const transforms = (items) => items.map((item) =>{

    const roomShift = item.roomShifts
    const grade = roomShift.length === 0? 'TBA' : roomShift[0].grade
    const section = roomShift.length ===0? 'TBA' : roomShift[0].section
    const adviser = roomShift.length ===0? 'TBA': `${roomShift[0].teacher.user.firstName} ${roomShift[0].teacher.user.lastName}`
    const birthdate = item.user.birthdate === null? 'No Info':convertDateTime(item.user.birthdate)

    return insert(item.student_id, item.user.firstName,item.user.lastName,item.user.email,birthdate,
        grade, section, adviser,item.status)
})

const newState = new state()

const currentState = {
    ...newState.init_state,
    deleteDialog: false
}


const reducer = (state = currentState, action)=>{

    switch(action.type){
        // for table state
        case actions.ADMIN_TABLE_SETTINGS_INIT(Student): return  newState.apiSettingsInit(state,action)
        case actions.ADMIN_TABLE_INIT(Student): return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Student): return newState.successData(state, action,transforms)
        case actions.ADMIN_TABLE_FAIL(Student): return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Student): return newState.nextData(state,action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Student): return newState.searchChange(state,action)
        case actions.ADMIN_CHANGE_STATUS(Student):return newState.changeStatus(state,action)

        // For opening and closing dialog
        case actions.DIALOG_OPEN(Student_Delete): return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(Student_Delete): return updateObject(state, {deleteDialog: false})
        case actions.DIALOG_OPEN(Student): return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Student): return newState.closeDialog(state)
        default: return state;
    }
}

export default reducer