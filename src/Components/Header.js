import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/images/worc.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backGround: {
    borderBottom: '1px solid #FFF',
    marginBottom: '85px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '35px',
    },
  },
  main: {
    maxWidth: '570px',
    margin: '0 auto',
    padding:  '10px',
    overflow: 'hidden',
    color: '#fff',
  },
  left: {
    float: 'left',
    marginLeft: '7%',
    '& img': {
      width: '53px',
      height: '71px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '6px',
    },
  },
  right: {
    float: 'left',
    marginTop: '13px',
    marginLeft: '15px',
    '& strong': {
      fontWeight: '700'
    }
  },
  lineDown: {
    marginTop: '5px'
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    <section className={classes.backGround}>
      <Link to="/">
        <div className={classes.main}>
          <div className={classes.left}>
            <img src={logo} alt='logo' />
          </div>
          <div className={classes.right}>
            <strong>Man at WORC </strong><span>news.log</span>
            <p className={classes.lineDown}>app.worc.com</p>
          </div>
        </div>
      </Link>
    </section>
  );
}
 
export default Header;