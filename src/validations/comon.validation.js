// validationHelpers.js
import * as Yup from "yup";
import { VALIDATION } from "../common/constants/message.contant";
import i18n from "../services/i18m.services";

const createValidation = (config) => {
  return Yup.object().shape(config);
};

const requireMessage = i18n.t(VALIDATION.REQUIRE);

export { createValidation, requireMessage };
