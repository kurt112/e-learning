/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Autocomplete} from "@material-ui/lab";
import {CircularProgress, FormControl, TextField} from "@material-ui/core";
import {Fragment} from "react";


export default function AutoComplete({
                                         open,
                                         setOpen,
                                         filterOptions,
                                         options,
                                         loading,
                                         InputText,
                                         changeAutoComplete,
                                         changeText,
                                         noOptionText,
                                         label,
                                         optionLabel,
                                         optionSelected,
                                         autoFocus,
                                         focusHandler
                                     }) {


    return <FormControl variant="outlined" margin='dense' fullWidth>
        <Autocomplete
            size='small'
            autoSelect={true}
            open={open}
            filterOptions={filterOptions}
            noOptionsText={noOptionText}
            placeholder={InputText}
            onOpen={() => {
                setOpen(true);
            }}
            onBlur={focusHandler !== undefined? focusHandler: null}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(event, value) => changeAutoComplete(event, value)}
            getOptionSelected={(option, value) => optionSelected(option, value)}
            getOptionLabel={(option) => optionLabel(option)}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    autoFocus={autoFocus !== undefined}
                    value={InputText}
                    onChange={(event) => changeText(event.target.value)}
                    {...params}
                    label={label}
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <Fragment>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </Fragment>
                        ),
                    }}
                />
            )}
        />
    </FormControl>
}