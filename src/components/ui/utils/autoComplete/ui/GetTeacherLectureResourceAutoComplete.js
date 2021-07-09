import AutoCompleteImplementation from "./AutoCompleteImplementation";
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import {autoCompleteGetTeacherLecture} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const GetTeacherLectureResourceAutoComplete = ({output,translation,email, autoFocus}) => {
    return <AutoCompleteImplementation
        autoFocus={autoFocus}
        label={translation.language["label.teacher.lecture.dialog.create.resource"]}
        output={output}
        optionSelected={twoOptionSelected}
        optionLabel={twoOptionLabel}
        noOptionText={translation.language["label.teacher.lecture.dialog.create.resource.search"]}
        email={email}
        filterOption={TwoFilterOption}
        url={autoCompleteGetTeacherLecture}
    />
}

export default GetTeacherLectureResourceAutoComplete