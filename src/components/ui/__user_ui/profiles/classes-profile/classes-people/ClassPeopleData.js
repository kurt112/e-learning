import {Avatar} from "@material-ui/core";
import ProfileStyle from '../../ProfileStyle'

const ClassPeopleData = ({border, name}) => {
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

export default ClassPeopleData
