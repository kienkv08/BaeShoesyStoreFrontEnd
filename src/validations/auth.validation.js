import { createValidation, requireMessage } from "./comon.validation";
import * as Yup from "yup";
import { VALIDATION } from "../common/constants/message.contant";
import { REF, REGEX } from "../common/constants/global.constant";
import i18n from "../services/i18m.services";

export const loginValidationSchema = createValidation({
  email: Yup.string()
    .required(requireMessage)
    .matches(REGEX.EMAIL, i18n.t(VALIDATION.EMAIL_INVALID)),
  password: Yup.string().required(requireMessage),
});

export const signUpValidationSchema = createValidation({
  firstName: Yup.string().required(requireMessage),
  lastName: Yup.string().required(requireMessage),
  username: Yup.string()
    .required(requireMessage)
    .min(6, i18n.t(VALIDATION.MIN_CHARACTERS, { min: 6 }))
    .max(40, i18n.t(VALIDATION.MAX_CHARACTERS, { max: 40 }))
    .matches(REGEX.LASTNAME, i18n.t(VALIDATION.ALPHANUMERIC_NUMBER_ONLY)),
  email: Yup.string()
    .required(requireMessage)
    .matches(REGEX.EMAIL, i18n.t(VALIDATION.EMAIL_INVALID)),
  password: Yup.string()
    .required(requireMessage)
    .min(8, i18n.t(VALIDATION.MIN_CHARACTERS, { min: 8 }))
    .max(16, i18n.t(VALIDATION.MAX_CHARACTERS, { max: 16 })),
  rePassword: Yup.string()
    .required(requireMessage)
    .min(8, i18n.t(VALIDATION.MIN_CHARACTERS, { min: 8 }))
    .max(16, i18n.t(VALIDATION.MAX_CHARACTERS, { max: 16 }))
    .oneOf([Yup.ref(REF.PASSSWORD)], i18n.t(VALIDATION.PASSWORD_MATCH)),
  phone: Yup.string()
    .required(requireMessage)
    .matches(REGEX.PHONE_NUMBER, i18n.t(VALIDATION.PHONE_LENGTH)),
});

export const forgotPasswordValidationSchema = createValidation({
  email: Yup.string()
    .required(requireMessage)
    .matches(REGEX.EMAIL, i18n.t(VALIDATION.EMAIL_INVALID)),
});

export const changePasswordValidationSchema = createValidation({
  newPassword: Yup.string()
    .required(requireMessage)
    .min(8, i18n.t(VALIDATION.MIN_CHARACTERS, { min: 8 }))
    .max(16, i18n.t(VALIDATION.MAX_CHARACTERS, { max: 16 })),
  confirmPassword: Yup.string()
    .required(requireMessage)
    .oneOf([Yup.ref(REF.NEWPASSWORD)], i18n.t(VALIDATION.PASSWORD_MATCH)),
});
