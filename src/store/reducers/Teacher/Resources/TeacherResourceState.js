import * as actions from "../../../ActionType/Teacher/TeacherResource/TeacherResourceActionType";
import {TeacherInsertResources as insert} from '../../../../components/ui/utils/tableColumn/TeacherTable'
import {updateObject} from "../../../utils/UpdateObject";
import {convertDateTime} from "../../../../components/ui/utils/dateFormat/DateTimeFormatToDateWord";

const initState = {

    data: [],

    // Upload Dialog Resource
    uploadResourceDialog: false,
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

    return updateObject(state, {data: tempData})
}

const reducer = (state = initState, action) =>{
    switch(action.type){
        case actions.Init_Resources: return initData(state,action)

        // for opening and closing fo upload dialog
        case actions.Upload_Dialog_OPEN: return updateObject(state,{uploadResourceDialog: true})
        case actions.Upload_Dialog_CLOSE: return updateObject(state,{uploadResourceDialog: false})

        // uploading file success
        case actions.Upload_Dialog_Success:{
            // alert("i am called here to")
            return successData(state,action)
        }



        default: return state;
    }
}

export default reducer
