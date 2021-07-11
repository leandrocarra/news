import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '700px',
    margin: '0 auto',
    overflow: 'hidden',
    marginBottom: '40px'
  },
  left: {
    float: 'left',
    width: '17%',
    paddingTop: '4px',
    color: '#CBCBCB',
    [theme.breakpoints.down('sm')]: {
     display: 'none'
    },
  },
  right: {
    float: 'left',
    width: '83%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0 16px'
     },
  }
}))

const LayoutDefault = ({date, children}) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.left}>
        {date}
      </div>
      <div className={classes.right}>
        {children}
      </div>
    </section>
  );
}
 
export default LayoutDefault;