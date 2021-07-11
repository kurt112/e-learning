/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box, CircularProgress, Grid, Paper, Toolbar, Tooltip} from "@material-ui/core"
import MUIDataTable from 'mui-datatables'
import {Fragment, lazy, useEffect, useState} from "react"
import {AdminCurriculumTable as columns} from '../../../utils/tableColumn'

import style, {TableOptions as options} from '../../../_style/TableStyle'
import {connect} from "react-redux"
import * as actions from "../../../../../store/action/__ActionGlobal/TableAction"
import {
    Curriculum,
    Curriculum_Create,
    Curriculum_Delete,
    Curriculum_Find, Room
} from "../../../../../store/utils/Specify"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {reInitState} from "../../../../../store/action/__ActionGlobal/DialogAction";

const CreateCurriculumDialog = lazy(() => import(`./CreateCurriculumDialog`))
const DeleteCurriculumDialog = lazy(() => import(`./DeleteCurriculumDialog`))
const FindCurriculum = lazy(() => import(`./FindCurriculum`))

const Index = ({
                   state,
                   pageChange,
                   searchChange,
                   initData,
                   openDialog,
                   closeDialog,
                   openDeleteDialog,
                   closeDeleteDialog,
                   openFindCurriculum,
                   closeFindCurriculum,
                   translation,
                   setData,
                   reInitState
               }) => {

    const classes = style()

    const [update, setUpdate] = useState(false)
    const [insertSubject, setInsertSubject] = useState(false)

    // alert(state.findDialog)

    const updateClick = () => {
        setUpdate(true)
        openFindCurriculum()
    }

    const insertSubjectClick = () => {
        setInsertSubject(true)
        openFindCurriculum()
    }

    const closeClick = () => {
        setUpdate(false)
        setInsertSubject(false)
        closeFindCurriculum()
    }

    useEffect(() => {

        if (state.data.length === 0) initData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <CreateCurriculumDialog translation={translation} dialog={state.dialog} closeDialog={closeDialog}/>
            <DeleteCurriculumDialog translation={translation} dialog={state.deleteDialog}
                                    closeDialog={closeDeleteDialog}/>
            <FindCurriculum
                update={update}
                insertSubject={insertSubject}
                translation={translation}
                dialog={state.findDialog}
                closeDialog={closeClick}
                closeUpdate={() => setUpdate(false)}
                closeInsertSubject={() => setInsertSubject(false)}
                setData={setData}
                reInitState={reInitState}
            />

            <Grid component="main" className={classes.root}>
                <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                    <Toolbar>
                        <Box className={classes.tableNavbarBox}>
                            <Tooltip title={translation.language["tooltip.curriculum.add"]}>
                                <IconButton aria-label="add-curriculum" onClick={openDialog}>
                                    <LibraryAddIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.curriculum.delete"]}>
                                <IconButton aria-label="delete-curriculum" onClick={openDeleteDialog}>
                                    <DeleteIcon fontSize={'large'} color={'secondary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.curriculum.update"]}>
                                <IconButton aria-label="update-curriculum" onClick={updateClick}>
                                    <UpdateIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={translation.language["tooltip.curriculum.add.subject"]}>
                                <IconButton aria-label="update-curriculum" onClick={insertSubjectClick}>
                                    <ImportContactsIcon fontSize={'large'} color={'primary'}/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Grid>
                <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                    <div>
                        <MUIDataTable
                            title={
                                <Typography variant="h6">
                                    {translation.language["label.curriculum.table.title"]}
                                    {state.loading && <CircularProgress size={24} style={{
                                        marginLeft: 15,
                                        position: 'relative',
                                        top: 4
                                    }}/>}
                                </Typography>
                            }
                            data={state.data}
                            columns={columns(translation)}
                            options={options(
                                pageChange,
                                searchChange,
                                state.search,
                                state.totalPages,
                                state.totalItems,
                                state.page,
                                state.loading)}
                        />
                    </div>
                </Grid>
            </Grid>
        </Fragment>

    )
}

const mapStateToProps = (state) => {
    return {
        state: state.AdminCurriculum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // action for tables
        initData: () => dispatch(actions.InitDataTable(Curriculum)),
        searchChange: (data) => dispatch(actions.SearchChange(data, Curriculum)),
        pageChange: (page) => dispatch(actions.DataNextPage(page, Curriculum)),

        // action for opening and closing dialogs
        openDialog: () => dispatch(actions.openDialog(Curriculum_Create)),
        closeDialog: () => dispatch(actions.closeDialog(Curriculum_Create)),

        openDeleteDialog: () => dispatch(actions.openDialog(Curriculum_Delete)),
        closeDeleteDialog: () => dispatch(actions.closeDialog(Curriculum_Delete)),

        openFindCurriculum: () => dispatch(actions.openDialog(Curriculum_Find)),
        closeFindCurriculum: () => dispatch(actions.closeDialog(Curriculum_Find)),

        setData: (data) => dispatch(actions.setData(data,Curriculum_Create)),
        reInitState: () => dispatch(reInitState(Curriculum_Create))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)