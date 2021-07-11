/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export const convertDateTime = (date) => {
    const dateParts = date.split("-");
    const monthsWord = months[dateParts[1]-1]
    return monthsWord + " " + dateParts[2].substr(0,2) + " " + dateParts[0]
}

