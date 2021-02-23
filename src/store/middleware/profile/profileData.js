import {graphQl} from "../axios";
export function* profileData (body) {

    try{

      return yield graphQl.post('', body)

    }catch (error) {
        return null;
    }

}
