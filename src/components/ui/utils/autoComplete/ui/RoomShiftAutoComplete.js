import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import {autoCompleteRoomShift} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const RoomShiftAutoComplete = ({translation, output, autoFocus}) => {
    return <AutoCompleteImplementation
        noOptionText={translation.language["label.room.shift.dialog.find.input.search"]}
        optionLabel={twoOptionLabel}
        optionSelected={twoOptionSelected}
        output={output}
        label={translation.language["label.global.room.shift"]}
        url={autoCompleteRoomShift}
        filterOption={TwoFilterOption}
        autoFocus={autoFocus}
    />
}

export default RoomShiftAutoComplete