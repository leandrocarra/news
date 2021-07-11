import React from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
    '& :hover': {
      backgroundColor: '#4E84FF',
      '& a': {
        color: '#FFF',
        textDecoration: 'none'
      }
    },
    '& li': {
      transition: 'all .500s ease',
      fontSize: '16px',
      border: '1px solid #fff',
      float: 'left',
      borderRadius: '20px',
      backgroundColor: '#fff',
      color: '#404040',
      marginRight: '10px',
      cursor: 'pointer',
      marginBottom: '10px',
      '& a': {
        borderRadius: '20px',
        float: 'left',
        padding: '8px 20px',
        color: '#000',
        textDecoration: 'none'
      }
    }
  },
}))

const Menu = () => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li>
        <Link to="/09072021">09/07/2021</Link>
      </li>
    </ul>
  );
}
 
export default Menu;