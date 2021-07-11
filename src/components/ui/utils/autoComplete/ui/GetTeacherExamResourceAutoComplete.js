/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import AutoCompleteImplementation from "./AutoCompleteImplementation";
import {autoCompleteGetTeacherExams} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";

const GetTeacherExamResourceAutoComplete =  ({email, translation, output, autoFocus}) => {
    return  <AutoCompleteImplementation
        url={autoCompleteGetTeacherExams}
        label={translation.language["label.teacher.exam.dialog.resource"]}
        output={output}
        optionSelected={twoOptionSelected}
        optionLabel={twoOptionLabel}
        noOptionText={translation.language["label.teacher.exam.dialog.resource.search"]}
        email={email}
        autoFocus={autoFocus}
        filterOption={TwoFilterOption}
    />
}

export default GetTeacherExamResourceAutoComplete