import {Fragment, useEffect, useState} from "react";
import {baseUrl} from "../../../../../store/middleware/axios";
import {autoCompleteRoom} from "../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";
import {createFilterOptions} from "@material-ui/lab";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    Select, TextField
} from "@material-ui/core";
import Response from "../../../utils/Response";
import AutoComplete from "../../../utils/autoComplete/AutoComplete";

const RoomShiftDialogAddStudent = () => {


    return <Dialog
        // open={dialog}
        // onClose={closeDialog}
        aria-labelledby="add-student"
    >
        <form noValidate className={form.root}>
            <DialogTitle id="add-student">Enter Grade Section</DialogTitle>
            <DialogContent>

                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        {/*<AutoComplete*/}
                        {/*    open={openRoomName}*/}
                        {/*    setOpen={setOpenRoomName}*/}
                        {/*    filterOptions={filterOptionsTeacher}*/}
                        {/*    options={roomOptions}*/}
                        {/*    loading={loading}*/}
                        {/*    InputText={roomText}*/}
                        {/*    changeAutoComplete={OutputRoom}*/}
                        {/*    changeText={changeRoom}*/}
                        {/*    noOptionText={"Search by Room Name"}*/}
                        {/*    label={"Room"}*/}
                        {/*    optionLabel={optionLabel}*/}
                        {/*    optionSelected={optionSelected}*/}
                        {/*/>*/}
                    </Grid>


                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => alert("im clicked")} color='primary'>
                    Continue
                </Button>
                {/*<Button onClick={closeDialog} color='secondary'>*/}
                {/*    Cancel*/}
                {/*</Button>*/}
            </DialogActions>
        </form>
    </Dialog>
}

export default RoomShiftDialogAddStudent