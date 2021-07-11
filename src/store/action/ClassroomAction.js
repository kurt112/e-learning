/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import * as actions from '../ActionType/ClassroomActionType'

export const
    set_showMessage = (data) => {
        return {
            type: actions.SHOW_MESSAGE,
            data
        }
    },

    setVideo = (data) => {
        return {
            type: actions.SET_VIDEO,
            data
        }
    },

    setMic = (data) => {
        return {
            type: actions.SET_MIC,
            data
        }
    },

    setShareScreen = (data) => {
        return {
            type: actions.SET_SHARE_SCREEN,
            data
        }
    }
