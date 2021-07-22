/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 23/07/2021, Friday
 **/
import moment from "moment";

const yyyymmddFromat = "YYYY-MM-DD"
export const convertToYYMMDD = (date) => {
    return moment(date).format(yyyymmddFromat)
}