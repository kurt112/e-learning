/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import {autoCompleteRoomShift} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const RoomShiftAutoComplete = ({translation, output, autoFocus,focusHandler,error,errorMessage}) => {
    return <AutoCompleteImplementation
        noOptionText={translation.language["label.room.shift.dialog.find.input.search"]}
        optionLabel={twoOptionLabel}
        optionSelected={twoOptionSelected}
        output={output}
        label={translation.language["label.global.room.shift"]}
        url={autoCompleteRoomShift}
        filterOption={TwoFilterOption}
        autoFocus={autoFocus}
        focusHandler={focusHandler}
        error={error}
        errorMessage={errorMessage}
    />
}

export default RoomShiftAutoComplete