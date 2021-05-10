import * as actions from "../../../ActionType/Teacher/TeacherResource/TeacherResource";
import {TeacherInsertResources as insert} from '../../../../components/ui/utils/tableColumn/TeacherTable'
import {updateObject} from "../../../utils/UpdateObject";
import {convertDateTime} from "../../../../components/ui/utils/dateFormat/DateTimeFormatToDateWord";

const initState = {

    data: [],

    // Upload Dialog Resource
    uploadResourceDialog: false,
    uploadResourceDialogError: '',
}

const initData = (state,action) => {
    const tempData = []

    action.data.map(resource => tempData.push(insert(resource.code,resource.name,convertDateTime(resource.createdAt),resource.type,resource.status,resource.location)))

    return updateObject(state, {data: tempData})
}

const successData = (state,action) => {
    const newData = action.data
    const tempData = [...state.data]

    tempData.unshift(insert(newData.code,newData.name,newData.date,newData.type,newData.status,newData.location))

    console.log(tempData)
    return updateObject(state, {data: tempData})
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case actions.Init_Resources: return initData(state,action)

        // upload dialog
        case actions.Upload_Dialog_CLOSE: return updateObject(state, {uploadResourceDialog:false})
        case actions.Upload_Dialog_OPEN: return updateObject(state, {uploadResourceDialog: true})
        case actions.Upload_Dialog_ERROR: return updateObject(state, {uploadResourceDialogError: 'error'})
        case actions.Upload_Dialog_Success:return successData(state,action)
        case actions.Upload_Dialog_SUBMIT: return state
        default: return state;
    }
}

export default reducer
