/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from "../../../ActionType/__ActionTypeGlobal/DialogActionType";
import * as roomShiftAction from "../../../ActionType/Admin/RoomShift/RoomShiftDialogActionType";
import * as validationAction from '../../../ActionType/__ActionTypeGlobal/ValidationActionType'
import {RoomShift} from "../../../utils/Specify";
import {updateObject} from "../../../utils/UpdateObject";
import State from "../../__StateGlobal/AdminTableDialogState"

const newState = new State()

delete newState.init_state.id


const init_state ={
    room: '',
    roomShift: 'First',
    grade: '',
    section: '',
    timeStart: '',
    timeEnd: '',
    teacher:'',
    curriculum: '',

    // error
    roomError: false,
    gradeError: false,
    sectionError: false,
    curriculumError: false,

    roomErrorMessage: '',
    gradeErrorMessage: '',
    sectionErrorMessage: '',
    curriculumErrorMessage:'',


    // errorMessage
    ...newState.init_state
}


const setState = (state, action) => {
    return updateObject(state, {
        curriculum: action.curriculum,
        teacher: action.teacher,
        timeEnd: action.timeEnd,
        timeStart: action.timeStart,
        section: action.section,
        grade: action.grade,
        roomShift: action.roomShiftName,
        room: action.room,
        id: action.id,

        roomError: false,
        gradeError: false,
        sectionError: false,
        curriculumError: false,

        roomErrorMessage: '',
        gradeErrorMessage: '',
        sectionErrorMessage: '',
        curriculumErrorMessage:'',

        done: false,
        loading: false,
    })
}

const reInit = (state) => {
    delete state.id
    return updateObject(state, {
        timeEnd: '',
        timeStart: '',
        section: '',
        grade: '',
        roomShift: '',
        done: false,
        loading: false,

        roomError: false,
        gradeError: false,
        sectionError: false,
        curriculumError: false,

        roomErrorMessage: '',
        gradeErrorMessage: '',
        sectionErrorMessage: '',
        curriculumErrorMessage:'',
    })
}

// error handler

const roomErrorHandler = (state) => {
    return updateObject(state, {
        roomError: true,
        roomErrorMessage: 'Please Select A Room',
        loading:false,
        done: true
    })
}

const gradeErrorHandler = (state) => {
    return updateObject(state, {
        gradeError: true,
        gradeErrorMessage: 'Please Input A Value',
        loading:false,
        done: true
    })
}

const   sectionErrorHandler = (state) => {
    return updateObject(state, {
        sectionError: true,
        sectionErrorMessage: 'Please Input A Value',
        loading:false,
        done: true
    })
}

const curriculumErrorHandler = (state) => {
    return updateObject(state, {
        curriculumError: true,
        curriculumErrorMessage: 'Please Select A Curriculum',
        loading:false,
        done: true
    })

}

const changeRoom = (state, data) => {
    return updateObject(state, {
        room: data,
        roomError: false,
        roomErrorMessage: ''
    })
}

const changeGrade = (state,data) => {
    return updateObject(state, {
        grade: data,
        gradeError:false,
        gradeErrorMessage: ''
    })
}

const changeSection = (state, data) => {
    return updateObject(state, {
        section: data,
        sectionError: false,
        sectionErrorMessage: ''
    })
}

const changeCurriculum = (state,data) => {
    return updateObject(state, {
        curriculum: data,
        curriculumError:false,
        curriculumErrorMessage: '',
    })
}

const reducer = (state=init_state, action)=>{
    switch(action.type){
        case actions.ADMIN_DIALOG_REGISTER(RoomShift): return newState.initRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_FAIL(RoomShift): return newState.failRegister(state, action)
        case actions.ADMIN_DIALOG_REGISTER_SUCCESS(RoomShift): return newState.successRegister(state)
        case actions.ADMIN_DIALOG_REGISTER_MESSAGE_CLOSE(RoomShift): return newState.handleClose(state,action)

        case roomShiftAction.ROOMSHIFT_DIALOG_ROOM_SET: return changeRoom(state,action.data)
        case roomShiftAction.ROOMSHIFT_DIALOG_TIMEEND_CHANGE: return updateObject(state, {timeEnd: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_TIMESTART_CHANGE:return updateObject(state, {timeStart: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_ROOMGRADE_CHANGE: return changeGrade(state,action.data)
        case roomShiftAction.ROOMSHIFT_DIALOG_ROOMSHIFT_SET: return updateObject(state, {roomShift: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_ROOMSECTION_CHANGE: return changeSection(state, action.data)
        case roomShiftAction.ROOMSHIFT_DIALOG_ADVISER_CHANGE: return updateObject(state, {teacher: action.data})
        case roomShiftAction.ROOMSHIFT_DIALOG_CURRICULUM_CHANGE: return changeCurriculum(state,action.data)

        case actions.RE_INIT(RoomShift): return reInit(state)
        case actions.SET_DATA(RoomShift): return setState(state, action.data)


        // error handler
        case validationAction.SET_ERROR_ROOM_EMPTY(RoomShift): return roomErrorHandler(state)
        case validationAction.SET_ERROR_CURRICULUM_EMPTY(RoomShift): return curriculumErrorHandler(state)
        case validationAction.SET_ERROR_SECTION_EMPTY(RoomShift): return sectionErrorHandler(state)
        case validationAction.SET_ERROR_GRADE_EMPTY(RoomShift): return gradeErrorHandler(state)

        default: return state;
    }
}

export default reducer