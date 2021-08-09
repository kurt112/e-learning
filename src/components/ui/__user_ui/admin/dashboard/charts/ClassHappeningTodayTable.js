/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment, useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {connect} from 'react-redux'

const ClassHappeningTodayTable = ({io}) =>{

    const [classes,setClasses] = useState([])

    const socket = io.socket

    useEffect(() => {
        socket.emit('dashboard', () => {

        })


        socket.on('dashboardData', (classroomData) =>{
            console.log(classroomData)
            const temp = classroomData.map(e => e.classes)
            // console.log(classroomData)
            setClasses(temp)
        })
    }, [])

    console.log(classes)



    return (
        <Fragment>
            <Title>Class Happening Now</Title>
            <Table size="small"  style={{paddingBottom: 10}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Teacher</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Section</TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Time Start</TableCell>
                        <TableCell>Time End</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        classes.map((e, i) => {
                            return <TableRow key={i}>
                                <TableCell>{e.teacher === null? 'TBA':`${e.teacher.user.firstName}${e.teacher.user.lastName}`}</TableCell>
                                <TableCell>{e.roomShift.grade === null? 'TBA':`${e.roomShift.grade}`}</TableCell>
                                <TableCell>{e.roomShift.section === null? 'TBA':`${e.roomShift.section}`}</TableCell>
                                <TableCell>{e.subject === null? 'TBA':`${e.subject.subjectName}`}</TableCell>
                                <TableCell>{e.startTime === null? 'TBA':`${e.startTime}`}</TableCell>
                                <TableCell>{e.endTime === null? 'TBA': `${e.endTime}`}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>

        </Fragment>
    );
}
const mapStateToProps = (state) => {
    return {
        io: state.Socket
    }
}

export default connect(mapStateToProps)(ClassHappeningTodayTable)



