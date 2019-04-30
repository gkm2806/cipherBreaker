import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    link: {
      margin: theme.spacing.unit,
    },
  });

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <footer >
                <Typography variant="h6" align="center" gutterBottom>
                    Cipher Breaker
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Desenvolvido por
                    <Link target="_blank" href="https://github.com/gkm2806/" className={classes.link}>
                        Gkm
                    </Link>
                    e
                    <Link target="_blank" href="https://github.com/gu7z/" className={classes.link}>
                        Gu7z
                    </Link>.
                </Typography>
            </footer>
        )
    }
}

export default withStyles(styles)(Footer);