import { Box, Button, Grid, Paper, Toolbar } from "@material-ui/core"
import {StudentRoomTable as columns, StudentInsertRoom as insert } from '../../../utils/tableColumn'
import MUIDataTable from 'mui-datatables'
import style, { TableOptions as options } from '../../../_style/TableStyle'

const rowClicked = (id) => {
}


const data = [
    insert(0, 'kurt', 'orioque', 19, 'December 20, 2000'),
    insert(1, 'Ellysa', 'Jarilla', 19, 'December 21, 2000'),
    insert(2, 'Eve', 'Maturan', 30, 'December 22, 2000'),
    insert(3, 'kurt', 'orioque', 19, 'December 20, 2000'),
    insert(4, 'Ellysa', 'Jarilla', 19, 'December 21, 2000'),
    insert(5, 'Eve', 'Maturan', 30, 'December 22, 2000'),
    insert(6, 'kurt', 'orioque', 19, 'December 20, 2000'),
    insert(7, 'Ellysa', 'Jarilla', 19, 'December 21, 2000'),
    insert(8, 'Eve', 'Maturan', 30, 'December 22, 2000'),
    insert(9, 'Eve', 'Maturan', 30, 'December 22, 2000'),
    insert(10, 'Eve', 'Maturan', 30, 'December 22, 2000'),
    insert(11, 'Eve', 'Maturan', 30, 'December 22, 2000')
]


export default function StudentRoom() {

    const classes = style()

    return (
        <Grid component="main" className={classes.root}>
            <Grid item component={Paper} md={12} sm={12} xs={12} className={classes.tableNavbar}>
                <Toolbar>
                    <Box className={classes.tableNavbarBox}>
                        <Button variant="outlined" color="primary">
                            Add Teacher
                    </Button>
                    </Box>
                    <Button variant="outlined" color="primary">
                        Quit
                </Button>
                </Toolbar>
            </Grid>

            <Grid item md={12} component={Paper} className={classes.tableContainerWrapper}>
                <MUIDataTable
                    title={"Activity List"}
                    data={data}
                    columns={columns}
                    options={options(rowClicked)}
                />
            </Grid>
        </Grid>

    )
}