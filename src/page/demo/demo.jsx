import { Form, Formik } from "formik";
import { FormControl } from "../../components/common/form-control/form-control.hoc";
import Input from "../../components/common/input/input.component";
import { useTranslation } from "react-i18next";
import { INITIAL_VALUES } from "../../common/constants/global.constant";
import { Link } from "react-router-dom";
import Button from "../../components/common/button/button.component";
import { signUpValidationSchema } from "../../validations/auth.validation";

const Demo = () => {
  const { t } = useTranslation();
  const formFields = {
    register1: [
      {
        name: "firstName",
        placeholder: "ff",
        type: "text",
      },
      {
        name: "lastName",
        placeholder: "",
        type: "text",
      },
    ],
    register2: [
      {
        name: "username",
        placeholder: "",
        type: "text",
      },
      { name: "email", placeholder: "", type: "text" },
      { name: "phone", placeholder: "", type: "text" },
      {
        name: "password",
        placeholder: "",
        type: "password",
      },
      {
        name: "rePassword",
        placeholder: "",
        type: "password",
      },
    ],
  };
  const handleSubmit = () => {};
  return (
    <Formik
      displayName="SignUpForm"
      initialValues={INITIAL_VALUES.REGISTER}
      onSubmit={handleSubmit}
      validationSchema={signUpValidationSchema}
      validateOnChange
      validateOnBlur
    >
      <Form className="max-w-lg mx-auto p-8 border shadow-6 rounded-[10px]">
        <div className="flex">
          {formFields.register1.map((field, index) => (
            <FormControl key={index} name={field.name}>
              <Input
                width="auto"
                className="w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                placeholder={t(field.placeholder)}
                inputClassName="w-full"
                errorClassName="text-red-500 text-xs"
                type={field.type}
              />
            </FormControl>
          ))}
        </div>
        {formFields.register2.map((field, index) => (
          <FormControl key={index} name={field.name}>
            <Input
              width="auto"
              className="!max-w-none w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
              placeholder={t(field.placeholder)}
              inputClassName="w-full"
              errorClassName="text-red-500 text-xs"
              type={field.type}
            />
          </FormControl>
        ))}
        <div>
          <Button
            type="submit"
            label={t("register.signup")}
            width="w-full"
            size="m"
            className="rounded-[10px]"
          />
          <small>{t("register.or")}</small>
          <div className="mt-2 text-sm text-blue-500 text-center">
            <Link
              to={"/bae-shoezy-store-font-end"}
              className="bg-blue-gray-500 text-white px-4 py-2 rounded-full"
            >
              {t("register.account")}
            </Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Demo;
