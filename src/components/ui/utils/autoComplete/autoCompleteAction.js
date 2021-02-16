import {createFilterOptions} from "@material-ui/lab";
import {baseUrl} from "../../../../store/middleware/axios";

export const TwoFilterOption = createFilterOptions({
    matchFrom: 'any',
    stringify: (option) => (option[0] + " " + option[1] + " " + option[2]),
});


export const twoOptionLabel = (option) => option[0] + " " + option[1]


export const twoOptionSelected = (option, value) => option[2] === value[2]

export const changeText = async (value, setter, setLoading, setOption, url) => {

    setLoading(true)
    const response = await baseUrl.get(url, {
        params: {
            search: value,
        }
    })
    setLoading(false)

    setter(value)

    const data = response.data.items

    setOption(data)
}