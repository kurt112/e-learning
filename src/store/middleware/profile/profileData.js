/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {graphQl} from "../axios";
export function* profileData (body) {

    try{

      return yield graphQl.post('', body)

    }catch (error) {
        return null;
    }

}
