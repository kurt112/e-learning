/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 15/07/2021, Thursday
 **/
import moment from "moment";

export const convertDateTimeToHourMinute = (dt) => {
    const d = new Date(dt)

    return `${d.getHours()} ${d.getMinutes()}`
}

export const getDefaultDateTime = () => {
    const d = new Date('2021-07-15 23:59:20.485000')

    return  moment(d).format('hh:mm');
}