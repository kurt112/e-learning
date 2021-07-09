import AutoComplete from "../AutoComplete";
import {changeText, changeTextWithRole} from "../autoCompleteAction";
import {useState} from "react";

const AutoCompleteImplementation = ({
                                        autoFocus,
                                        filterOption,
                                        output,
                                        url,
                                        noOptionText,
                                        label,
                                        optionLabel,
                                        optionSelected,
                                        email
                                    }) => {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)
    const [options, setOption] = useState([])

    return <AutoComplete
        autoFocus={autoFocus}
        open={open}
        setOpen={setOpen}
        filterOptions={filterOption}
        options={options}
        loading={loading}
        InputText={text}
        changeAutoComplete={output}
        changeText={(value) => email !== undefined ? changeTextWithRole(value, setText, setLoading, setOption, url, email) :
            changeText(value, setText, setLoading, setOption, url)}
        noOptionText={noOptionText}
        label={label}
        optionLabel={optionLabel}
        optionSelected={optionSelected}
    />
}

export default AutoCompleteImplementation