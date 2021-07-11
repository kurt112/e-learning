/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


export default function ClassHappeningTodayTable() {


    return (
        <Fragment>
            <Title>Class Happening Now</Title>
            <Table size="small"  style={{paddingBottom: 10}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Class Id</TableCell>
                        <TableCell>Teacher</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Section</TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Time Start</TableCell>
                        <TableCell>Time End</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>

        </Fragment>
    );
}