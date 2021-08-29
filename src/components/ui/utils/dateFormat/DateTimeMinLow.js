/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 29/08/2021, Sunday
 **/


export const geDateTodayDateTime = () => {
    const maxDate = new Date().toISOString().replace(/.\d+Z$/g, "Z");


    return maxDate.substring(0, maxDate.length-4);
}

export const getLessThanTenYears =() => {
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() - 10);

    return oneYearFromNow.toISOString().split("T")[0]
}

// export const getMinDateTodayh = () => {
// }