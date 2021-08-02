/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {
    filterOption,
    optionLabel,
    optionSelected
} from "../autoCompleteAction";
import {
    autoCompleteGetCurriculum
} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import AutoCompleteImplementation from "./AutoCompleteImplementation";

const CurriculumAutoComplete = ({translation, output, autoFocus,focusHandler,error,errorMessage}) => {
    return <AutoCompleteImplementation
        error={error}
        errorMessage={errorMessage}
        noOptionText={translation.language["label.curriculum.dialog.find.search"]}
        optionSelected={optionSelected}
        optionLabel={optionLabel}
        output={output}
        label={translation.language["label.sidebar.curriculum"]}
        url={autoCompleteGetCurriculum}
        filterOption={filterOption}
        autoFocus={autoFocus}
        focusHandler={focusHandler}
    />
}

export default CurriculumAutoComplete