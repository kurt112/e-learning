import * as actions from "../../../ActionType/Teacher/TeacherResource/TeacherResourceActionType";
import {TeacherInsertResources as insert} from '../../../../components/ui/utils/tableColumn/TeacherTable'
import {updateObject} from "../../../utils/UpdateObject";
import {convertDateTime} from "../../../../components/ui/utils/dateFormat/DateTimeFormatToDateWord";

const initState = {

    data: [],
    loading: false,

    // Upload Dialog Resource
    uploadResourceDialog: false,
    deleteResourceDialog: false,
    updateResourceDialog: false
}

const initData = (state,action) => {
    const tempData = []
    state = updateObject(state, {loading: true})
    action.data.map(resource => tempData.push(insert(resource.code,resource.name,resource.description,convertDateTime(resource.createdAt),resource.type,resource.status,resource.location)))
    state = updateObject(state, {loading: false})
    return updateObject(state, {data: tempData})
}

const successData = (state,action) => {
    const newData = action.data
    const tempData = [...state.data]

    tempData.unshift(insert(newData.code,newData.name,newData.description,newData.date,newData.type,newData.status,newData.location))

    return updateObject(state, {data: tempData})
}

const successDelete = (state, action) => {
    const resourceCode = action.data
    const tempData = state.data.filter(resource => resource.documentCode !== resourceCode)

    return updateObject(state, {data:tempData})
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case actions.Init_Resources: return initData(state,action)

        // upload dialog actions
        case actions.Upload_Dialog_OPEN: return updateObject(state,{uploadResourceDialog: true})
        case actions.Upload_Dialog_CLOSE: return updateObject(state,{uploadResourceDialog: false})
        case actions.Upload_Dialog_Success: return successData(state,action)


        // for opening and closing of delete dialog
        case actions.Delete_Dialog_OPEN: return updateObject(state, {deleteResourceDialog: true})
        case actions.Delete_Dialog_CLOSE: return updateObject(state, {deleteResourceDialog: false})
        case actions.Delete_Dialog_Success: return successDelete(state,action)




        default: return state;
    }
}

export default reducer
