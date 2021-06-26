import {createFilterOptions} from "@material-ui/lab";
import {baseUrl} from "../../../../store/middleware/axios";

export const

    TwoFilterOption = createFilterOptions({
        matchFrom: 'any',
        stringify: (option) => (option[0] + " " + option[1] + " " + option[2]),
    }),


    twoOptionLabel = (option) => option[0] + " " + option[1],

    twoOptionSelected = (option, value) => option[2] === value[2],

    changeText = async (value, setter, setLoading, setOption, url) => {
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
    },

    changeTextWithRole = async (value, setter, setLoading, setOption, url, email) => {
        setLoading(true)
        const response = await baseUrl.get(url, {
            params: {
                search: value,
                email
            }
        })
        console.log(response)
        setLoading(false)
        setter(value)
        const data = response.data.items
        setOption(data)
    },
    optionLabel = (option) => option[0],
    optionSelected = (option, value) => option[1] === value[1]