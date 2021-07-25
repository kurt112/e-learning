/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import es from '../../../global-translations/locale-es.json'
import cebuano from '../../../global-translations/locale-ceb.json'
import illocano from '../../../global-translations/locale-iloc.json'
import {CHANGE_LANGUAGE} from '../../ActionType/__ActionTypeGlobal/UserProfileActionType'
import {updateObject} from "../../utils/UpdateObject";


if(localStorage.getItem("language") === null){
    localStorage.setItem("language","0");
}

const index = parseInt(localStorage.getItem("language"));

const language = [
    es,
    cebuano,
    illocano
]

const initState = {
    index: index,
    language: language[index]
}

const changeLanguage = (state, action) => {
    localStorage.setItem("language",action.data);
    return updateObject(state, {index: action.data,language: language[action.data]});
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case CHANGE_LANGUAGE: return changeLanguage(state,action)
        default:  return state;
    }
}

export default reducer