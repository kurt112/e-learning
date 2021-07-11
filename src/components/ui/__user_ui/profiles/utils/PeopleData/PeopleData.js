/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Avatar} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'

const PeopleData = ({border, name}) => {
    // console.log(border)
    const style = ProfileStyle()
    return (
        <div style={border} className={style.classDataContainer}>
            <div className={style.classDataContainerLeft}>
                <Avatar>{name.substring(0,1).toUpperCase()}</Avatar>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default PeopleData
