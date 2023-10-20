import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../@hookform/error-message'

function HookForm() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Name:
            <input 
              {...register("singleErrorInput", { required: "This is required." })}name="name" ref={register({ required: true })}/>
            <ErrorMessage errors={errors} name="singleErrorInput"/>
            
            <ErrorMessage 
              errors={errors}
              name="singleErrorInput"
              render={({ message }) => <p>{message}</p>}
            />
          </label>
          <input type="submit" />
        </form>
    );
}

export default HookForm;