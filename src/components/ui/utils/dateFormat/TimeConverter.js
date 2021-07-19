/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 20/07/2021, Tuesday
 **/
import moment from "moment";

export const format24Hour = (time) => {
    return moment(time, ["HH.mm"]).format("hh:mm a");
}
