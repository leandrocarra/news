import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1002px',
    margin: '0 auto',
    overflow: 'hidden',
    marginBottom: '40px'
  },
  left: {
    float: 'left',
    paddingTop: '4px',
    marginRight: '5px',
    color: '#CBCBCB',
    [theme.breakpoints.down('sm')]: {
     display: 'none'
    },
  },
  right: {
    margin: '0 auto',
    width: '83%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0 16px'
     },
  },
  date: {
    textAlign: 'left',
    marginBottom: '30px',
    fontSize: '20px'
  }
}))

const LayoutDefault = ({date, children}) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.right}>
        <div className={classes.date}>
          {date}
        </div>
        
        {children}
      </div>
    </section>
  );
}
 
export default LayoutDefault;