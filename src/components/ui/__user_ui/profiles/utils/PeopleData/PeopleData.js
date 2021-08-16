/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Avatar} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'
import {S3BucketEndPoint} from "../../../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint";

const PeopleData = ({border, name,picture}) => {
    // console.log(border)
    console.log(picture)
    const style = ProfileStyle()
    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar src={picture !== '' || picture !==null? S3BucketEndPoint + picture : null}>{name.substring(0,1).toUpperCase()}</Avatar>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default PeopleData
