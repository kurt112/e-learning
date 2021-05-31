import * as actions from "../../../ActionType/Teacher/GlobalActiontype";

export const DialogSuccess = (data,to) => {
    return {
        type: actions.Dialog_Success(to),
        data
    }
}