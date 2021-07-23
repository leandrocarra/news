import React from 'react';

import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input, TextareaAutosize } from "@material-ui/core";
import { Input as AntdInput } from "antd";
//import { Checkbox as AntdCheck } from "antd";

import LayoutDefault from '../__layoutDefaut';
import Header from '../../Components/Header';

import "../../assets/styles/styles.css";
 
const Painel = () => {
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

          <label>Considerações</label>
          <Controller
            render={({ field }) => <Checkbox {...field} />}
            name="lastName"
            control={control}
            defaultValue=""
          />

          <input type="submit" />
        </form>
      </LayoutDefault>
    </div>
  );
}
 
export default Painel;