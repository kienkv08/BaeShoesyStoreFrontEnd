import React, { useEffect, useState, useCallback } from "react";
import clsx from "clsx";
// import { Images } from "@assets/images"; // Make sure to adjust the import path based on your project structure

function Input({
  id,
  formik,
  type = "text",
  value = "",
  defaultValue = "",
  className = "",
  inputClassName = "",
  name,
  disabled = false,
  placeholder = "",
  width,
  disableAutoComplete = true,
  status,
  defaultStatus = undefined,
  readOnly = false,
  errorClassName = "",
  inputIcon,
  inputIconClassName = "",
  inputElement,
  inputElementClassName = "",
  onChange = () => {},
  onBlur,
  fmOnChange,
  fmOnBlur,
  onFocus,
  onInput,
}) {
  const [txValue, setTxValue] = useState(value || defaultValue);
  const [_status, changeStatus] = useState(status || defaultStatus);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChange = useCallback(
    (e) => {
      onChange && onChange(e);

      fmOnChange && fmOnChange(e);

      setTxValue(e.currentTarget.value);

      setTimeout(() => {
        if (formik) formik.setFieldTouched(name, true);
      });
    },
    [fmOnChange, formik, name, onChange]
  );

  const handleBlur = useCallback(
    (e) => {
      onBlur && onBlur(e);

      fmOnBlur && fmOnBlur(e);
    },
    [fmOnBlur, onBlur]
  );

  useEffect(() => {
    setTxValue(value || defaultValue);
  }, [defaultValue, value]);

  useEffect(() => {
    changeStatus(status || defaultStatus);
  }, [defaultStatus, status]);

  const isError = _status === "inValid" || _status === "warn";

  return (
    <>
      <div
        className={`box-border max-w-xs w-full ${className}`}
        style={{ width }}
      >
        <div className="w-full flex relative">
          <input
            id={id}
            className={clsx(
              `w-full outline-none px-4 py-1 h-[36px] leading-[36px] align-baseline border border-solid border-[#3A466480] border-opacity-[0.5] rounded-lg ${inputClassName}`,
              {
                "bg-[#A1A2A880]": disabled,
                "border border-solid border-[#D6000080]": isError,
                "pr-8": type === "password",
                "pl-[37px]": !!inputIcon || !!inputElement,
              }
            )}
            type={isShowPassword ? "text" : type}
            value={txValue || ""}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete={disableAutoComplete ? "off" : "on"}
            onFocus={onFocus}
            readOnly={readOnly}
            onInput={onInput}
          />
          {inputIcon && (
            <img
              className={`absolute w-4 h-4 left-[11px] top-[15px] ${inputIconClassName}`}
              src={inputIcon}
              alt=""
            />
          )}
          {inputElement && (
            <div
              className={`absolute w-4 h-4 left-3 top-2 ${inputElementClassName}`}
            >
              {inputElement}
            </div>
          )}
          {type === "password" && (
            <div
              className="absolute right-0 pr-[10px] h-full flex items-center cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <img src="" alt="" /> : <img src="" alt="" />}
            </div>
          )}
        </div>
        {isError && (
          <div className={`flex text-[#D60000B2] ${errorClassName}`}>
            {formik &&
              formik.getFieldMeta(name).error &&
              formik.getFieldMeta(name).error}
          </div>
        )}
      </div>
    </>
  );
}

export default Input;
