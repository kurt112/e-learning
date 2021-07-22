/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 22/07/2021, Thursday
 **/
import './style.css'
import {Fragment} from "react";
import pic from './404.svg'
const InvalidPath = () => {
    alert("i am here")
    return <Fragment>
        <img src={pic} alt="bg"/>
            <div className="wrapper">
                <h1>Page Not Found</h1>
                <p className="message">
                    oppppssssssss
                </p>
                <a href="#" className="btn">Learn More About Us</a>
                <p className="copyRights">&copy; 2020 DeltatyCode</p>
            </div>
    </Fragment>
}

export default InvalidPath