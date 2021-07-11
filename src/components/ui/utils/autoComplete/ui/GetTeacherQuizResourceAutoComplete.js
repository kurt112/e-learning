/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import {autoCompleteGetTeacherQuiz} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const GetTeacherQuizResourceAutoComplete = ({translation, output, email, autoFocus}) => {
    return <AutoCompleteImplementation
        label={translation.language["label.teacher.quiz.dialog.create.resource.search"]}
        optionSelected={twoOptionSelected}
        output={output}
        optionLabel={twoOptionLabel}
        noOptionText={translation.language["label.teacher.quiz.dialog.create.resource"]}
        email={email}
        filterOption={TwoFilterOption}
        url={autoCompleteGetTeacherQuiz}
        autoFocus={autoFocus}
    />
}

export default GetTeacherQuizResourceAutoComplete