import React from "react";
import { formElement } from "../utils";

export type FormElementProps = {
  element: formElement;
  register: (name: string) => {};
};

export const Checkbox = (props: FormElementProps) => {
  let { element, register } = props;
  return (
    <div className="grid gap-1 grid-cols-3 justify-end">
      {element?.options?.map((option) => {
        return (
          <div key={option} className="flex space-x-1">
            <input
              type={element.type}
              id={option}
              {...register(element.name)}
              value={option}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export const Select = (props: FormElementProps) => {
  let { element, register } = props;
  return (
    <select {...register(element.name)}>
      {element?.options?.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export const Input = (props: FormElementProps) => {
  let { element, register } = props;
  return <input type={element.type} {...register(element.name)} />;
};

const ElementWrapper = (props: { children: JSX.Element; label: string }) => {
  return (
    <div key={props.label} className="flex">
      <label className="min-w-[50%]">{props.label}:</label>
      {props.children}
    </div>
  );
};

const FormElement = (props: FormElementProps) => {
  const { element, register } = props;
  return (
    <ElementWrapper label={element.label}>
      <>
        {(element.type === "text" || element.type === "number") && (
          <Input element={element} register={register} />
        )}
        {element.type === "select" && (
          <Select element={element} register={register} />
        )}
        {element.type === "checkbox" && (
          <Checkbox element={element} register={register} />
        )}
      </>
    </ElementWrapper>
  );
};

export default FormElement;
