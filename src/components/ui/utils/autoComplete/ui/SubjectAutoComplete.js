/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import {autoCompleteSubject} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const SubjectAutoComplete = ({translation, output, autoFocus,focusHandler,error,errorMessage}) => {
    return <AutoCompleteImplementation
        filterOption={TwoFilterOption}
        noOptionText={translation.language["label.room.class.dialog.add.input.subject.search"]}
        optionLabel={twoOptionLabel}
        optionSelected={twoOptionSelected}
        output={output}
        label={translation.language["label.global.subject"]}
        autoFocus={autoFocus}
        url={autoCompleteSubject}
        focusHandler={focusHandler}
        error={error}
        errorMessage={errorMessage}
    />
}

export default SubjectAutoComplete