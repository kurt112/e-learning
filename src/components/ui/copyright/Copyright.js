import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/kurtlupin.orioque/">
                Virtual School
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}