/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
export const updateObject =(oldObject, updatedValues) => {
    return {
        ...oldObject, 
        ...updatedValues
    }
}