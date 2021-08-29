/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 29/08/2021, Sunday
 **/


export const geDateTodayDateTime = () => {
    const maxDate = new Date().toISOString().replace(/.\d+Z$/g, "Z");


    return maxDate.substring(0, maxDate.length-4);
}

// export const getMinDateTodayh = () => {
// }