import React from 'react';

import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input, TextareaAutosize, makeStyles } from "@material-ui/core";
import { Input as AntdInput } from "antd";

import LayoutDefault from '../__layoutDefaut';
import Header from '../../Components/Header';

import "../../assets/styles/styles.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
    color: (props) => props.color,
  },
});

 
const Painel = () => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <div>
      <Header />
      <LayoutDefault>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Titulo</label>
          <Controller
            render={({ field }) => <Input {...field} />}
            name="firstName"
            control={control}
            defaultValue=""
            className="materialUIInput"
          />

          <label>Descrição</label>
          <Controller
            render={({ field }) => <AntdInput {...field} />}
            name="lastName"
            control={control}
            defaultValue=""
          />

          <label>Items</label>
          <Controller
            render={({ field }) => <TextareaAutosize {...field} />}
            name="qweqweqwewewe"
            control={control}
            defaultValue=""
          />

          <label>Considerações</label>
          <Controller
            render={({ field }) => <AntdInput {...field} />}
            name="lastName"
            control={control}
            defaultValue=""
          />

          <Controller
            render={({ field }) => <Checkbox {...field} className={classes.ckeck} />}
            name="bug"
            control={control}
            defaultValue=""
          />
          <label className={classes.checkLabel}>bug</label>
          
          <Controller
            render={({ field }) => <Checkbox {...field} className={classes.ckeck} />}
            name="novo"
            control={control}
            defaultValue=""
          />
          <label className={classes.checkLabel}>novo</label>
          
          <Controller
            render={({ field }) => <Checkbox {...field} className={classes.ckeck} />}
            name="melhoria"
            control={control}
            defaultValue=""
          />
          <label className={classes.checkLabel}>melhoria</label>
          
          <Controller
            render={({ field }) => <Checkbox {...field} className={classes.ckeck} />}
            name="bloqueado"
            control={control}
            defaultValue=""
          />
          <label className={classes.checkLabel}>bloqueado</label>

          <input type="submit" className={classes.button} />
        </form>
      </LayoutDefault>
    </div>
  );
}
 
export default Painel;