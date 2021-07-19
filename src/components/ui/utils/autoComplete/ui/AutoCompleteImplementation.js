/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import AutoComplete from "../AutoComplete";
import {changeText, changeTextWithRole} from "../autoCompleteAction";
import {useEffect, useState} from "react";

const AutoCompleteImplementation = ({
                                        autoFocus,
                                        filterOption,
                                        output,
                                        url,
                                        noOptionText,
                                        label,
                                        optionLabel,
                                        optionSelected,
                                        email,
                                        focusHandler
                                    }) => {

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [options, setOption] = useState([])
    const [text, setText] = useState('')


    const onChangeText = (value) => {
        if (email !== undefined) {
            changeTextWithRole(value, setText, setLoading, setOption, url, email).then(ignored => {
            })
        } else {
            changeText(value, setText, setLoading, setOption, url).then(ignored => {
            })
        }
    }


    return <AutoComplete
        autoFocus={autoFocus}
        open={open}
        setOpen={setOpen}
        filterOptions={filterOption}
        options={options}
        loading={loading}
        InputText={text}
        changeAutoComplete={output}
        changeText={(value) => onChangeText(value)}
        noOptionText={noOptionText}
        label={label}
        optionLabel={optionLabel}
        optionSelected={optionSelected}
        focusHandler={focusHandler}
    />
}

export default AutoCompleteImplementation