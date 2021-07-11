/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {TwoFilterOption, twoOptionLabel, twoOptionSelected} from "../autoCompleteAction";
import {
    autoCompleteGetCurriculum
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const CurriculumAutoComplete = ({translation, output, autoFocus}) => {
    return <AutoCompleteImplementation
        noOptionText={translation.language["label.curriculum.dialog.find.search"]}
        optionLabel={twoOptionLabel}
        optionSelected={twoOptionSelected}
        output={output}
        label={translation.language["label.sidebar.curriculum"]}
        url={autoCompleteGetCurriculum}
        filterOption={TwoFilterOption}
        autoFocus={autoFocus}
    />
}

export default CurriculumAutoComplete