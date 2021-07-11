/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import {autoCompleteTeacher} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const TeacherAutoComplete = ({output, translation, autoFocus}) => {
    return <AutoCompleteImplementation
        noOptionText={translation.language["label.room.class.dialog.add.input.teacher.search"]}
        optionLabel={twoOptionLabel}
        optionSelected={twoOptionSelected}
        output={output}
        label={translation.language["label.global.adviser"]}
        url={autoCompleteTeacher}
        filterOption={TwoFilterOption}
        autoFocus={autoFocus}
    />
}

export  default TeacherAutoComplete