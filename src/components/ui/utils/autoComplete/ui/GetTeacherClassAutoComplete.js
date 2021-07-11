/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {autoCompleteGetTeacherClass} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const GetTeacherClassAutoComplete = ({translation, email, output,autoFocus}) => {
    return <AutoCompleteImplementation
        label={translation.language["label.global.your.class"]}
        url={autoCompleteGetTeacherClass}
        email={email}
        autoFocus={autoFocus}
        filterOption={TwoFilterOption}
        noOptionText={translation.language["label.global.search.class"]}
        optionLabel={twoOptionLabel}
        optionSelected={twoOptionSelected}
        output={output}
    />
}

export default GetTeacherClassAutoComplete