/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {AdminInsertCurriculum as insert} from "../../../../components/ui/utils/tableColumn";
import state from "../../__StateGlobal/AdminTableState";
import * as actions from "../../../ActionType/__ActionTypeGlobal/TableActionType";
import {
    Curriculum,
    Curriculum_Create,
    Curriculum_Delete,
    Curriculum_Find
} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";

const newState = new state()

const transforms = (items) => items.map((item) =>
    insert(item.code, item.name, item.description, item.code))

const currentState = {
    ...newState.init_state,
    deleteDialog: false,
    findDialog: false
}

const reducer = (state = currentState, action) => {
    switch (action.type) {
        case actions.ADMIN_TABLE_SETTINGS_INIT(Curriculum):
            return newState.apiSettingsInit(state, action)
        case actions.ADMIN_TABLE_INIT(Curriculum):
            return newState.initData(state)
        case actions.ADMIN_TABLE_SUCCESS(Curriculum):
            return newState.successData(state, action, transforms)
        case actions.ADMIN_TABLE_FAIL(Curriculum):
            return newState.failData(state)
        case actions.ADMIN_TABLE_NEXT_PAGE(Curriculum):
            return newState.nextData(state, action)
        case actions.ADMIN_TABLE_SEARCH_DATA_CHANGE(Curriculum):
            return newState.searchChange(state, action)

        // for opening and closing dialog
        case actions.DIALOG_OPEN(Curriculum_Create):
            return newState.openDialog(state)
        case actions.DIALOG_CLOSE(Curriculum_Create):
            return newState.closeDialog(state)

        case actions.DIALOG_OPEN(Curriculum_Delete):
            return updateObject(state, {deleteDialog: true})
        case actions.DIALOG_CLOSE(Curriculum_Delete):
            return updateObject(state, {deleteDialog: false})


        case actions.DIALOG_OPEN(Curriculum_Find):
            return updateObject(state, {findDialog: true})
        case actions.DIALOG_CLOSE(Curriculum_Find):
            return updateObject(state, {findDialog: false})

        default:
            return state;
    }
}

export default reducer
