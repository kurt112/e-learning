/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import {autoCompleteGetTeacherAssignment} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const GetTeacherAssignmentResourceAutoComplete = ({translation, output, email, autoFocus}) => {
    return <AutoCompleteImplementation
        filterOption={TwoFilterOption}
        url={autoCompleteGetTeacherAssignment}
        autoFocus={autoFocus}
        label={translation.language["label.teacher.assignment.dialog.create.assignment.resource"]}
        output={output}
        optionSelected={twoOptionSelected}
        optionLabel={twoOptionLabel}
        noOptionText={translation.language["label.teacher.assignment.dialog.create.assignment.resource.search"]}
        email={email}
    />
}


export default GetTeacherAssignmentResourceAutoComplete