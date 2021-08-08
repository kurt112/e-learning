/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Fragment, useEffect, useState} from "react";
import style from "./DashBoardStyle";
import Card from "./Card";
import {Grid} from "@material-ui/core";
import Charts from "./charts/Charts";
import {graphQLRequest, graphQlRequestAsync} from "../../../../../store/middleware/utils/HttpRequest";
import {dashboardQuery} from "../../../../../store/middleware/utils/GraphQlQuery/AdminQuery/DashboardQuery";
import {connect} from 'react-redux'

const Index = ({io}) => {
    const classes = style()
    const [data, setData] = useState(null)
    const socket = io.socket


    useEffect(() => {
        graphQlRequestAsync(dashboardQuery("1"))
            .then(result => setData(result.data.data.getDashBoard))

        socket.emit('dashboard', () => {

        })


        socket.on('dashboardData', (classroomData) =>{
            console.log(classroomData)
        })
    }, [])


    return data === null ? null :
        (
            <Fragment>
                <Grid container justify={"space-between"} className={classes.header}>
                    <Card
                        data={data}
                    />
                </Grid>

                <Grid container>
                    <Grid item container md={12}>
                        <Charts/>
                    </Grid>
                </Grid>
            </Fragment>
        )
}

const mapStateToProps = (state) => {
    return {
        io: state.Socket
    }
}

export default connect(mapStateToProps)(Index)