/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {autoCompleteRoom} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {filterOption, optionLabel, optionSelected} from "../autoCompleteAction";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const RoomAutoComplete = ({translation, output, autoFocus}) => {
    return <AutoCompleteImplementation
        noOptionText={translation.language["label.room.shift.dialog.create.input.room.name"]}
        label={translation.language["label.global.room"]}
        url={autoCompleteRoom}
        output={output}
        filterOption={filterOption}
        optionSelected={optionSelected}
        optionLabel={optionLabel}
        autoFocus={autoFocus}
    />
}

export default RoomAutoComplete