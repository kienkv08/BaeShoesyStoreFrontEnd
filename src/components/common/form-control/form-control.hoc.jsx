import React from "react";
import { useField, useFormikContext, FieldHookConfig } from "formik";
import { ControlStaticType } from "./form-control.type";

export const FormControl = (props) => {
  const formik = useFormikContext();

  const child = React.Children.toArray(props.children)[0];

  const fieldType = child.type.staticType ?? child.type.render?.staticType;

  const fieldOptions = {
    name: props.name,
    type: fieldType,
  };

  const meta = useField(fieldOptions)[1];

  const hasError = meta.error ? "inValid" : "valid";

  const status = formik.getFieldMeta(props.name).error
    ? props.fromDataTable
      ? formik.dirty
        ? hasError
        : undefined
      : meta.touched
      ? hasError
      : undefined
    : undefined;

  const handleOnChange = (e) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const fieldProps = formik.getFieldProps(props.name);

  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      let checked = false;
      let fmOnChange = formik.handleChange;

      if (fieldType === ControlStaticType.CHECKBOX) {
        checked =
          fieldProps.value &&
          fieldProps.value.push &&
          fieldProps.value.indexOf(child.props.value) !== -1;

        fmOnChange = (e) => {
          const fieldProps = formik.getFieldProps(props.name);

          if (typeof fieldProps.value === "boolean") {
            formik.setFieldValue(props.name, !fieldProps.value);
          } else {
            const newValues = [...fieldProps.value];

            if (e.target.checked) {
              newValues.push(e.target.value);
            } else {
              const deleteIndex = newValues.indexOf(e.target.value);
              newValues.splice(deleteIndex, 1);
            }

            formik.setFieldValue(props.name, newValues);
          }
        };
      } else if (fieldType === ControlStaticType.RADIO) {
        checked = `${child.props.value}` === `${fieldProps.value}`;
      }

      const childProps = {
        id: props.id,
        name: props.name,
        status,
        checked,
        formik,
        value: meta.value,
        shouldValidate: !!meta.error,
        fmOnChange,
        fmOnBlur: formik.handleBlur,
        onChange: handleOnChange,
        onBlur: props.onBlur,
        ...child.props,
      };

      return React.cloneElement(child, childProps);
    }

    return child;
  });

  return <>{childrenWithProps}</>;
};
