import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {connect} from "react-redux";
 function Copyright({translation}) {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {translation.language["label.copyright.heading"]}
            <Link color="inherit" href="https://www.facebook.com/kurtlupin.orioque/">
                {translation.language["label.copyright.msg"]}
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const mapStateToProps = (state) => {
    return {
        translation: state.languageReducer,
    }
}


export default connect(mapStateToProps, null)(Copyright)