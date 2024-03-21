export const ROLE_ID = {
  ADMIN: 1,
  USER: 2,
};

export const Locales = {
  VI: "vi",
  EN: "en",
  JA: "ja",
  KR: "kr",
};

export const LocalesFullText = {
  VI: "Vietnamese",
  EN: "English",
  JA: "Japanese",
  KR: "Korean",
};

export const header = (access) => {
  return { token: `Bearer ${access}` };
};

export const APP_LOCALES = [Locales.EN];

export const REF = {
  PASSSWORD: "password",
  NEWPASSWORD: "newPassword",
};

export const REGEX = {
  FIRSTNAME: /^[\d\w]+$/,
  LASTNAME: /^[\d\w]+$/,
  USERNAMEL: /^[\d\w]+$/,
  PHONE_NUMBER: /^[0-9]{10}$/,
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PRICE: /^[1-9]\d{0,2}(,\d{3})*(\.\d{1,2})?$/,
};

export const INITIAL_VALUES = {
  REGISTER: {
    username: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  },
  FORGOT_PASSWORD: { email: "" },
  LOGIN: { email: "", password: "" },
  CHANGE_PASSWORD: { newPassword: "", confirmPassword: "" },
  EDIT_PROFILE: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: 2,
    avatar: "",
    bio: "",
  },
  CHANGE_PASSWORD_PROFILE: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
};

export const PRICE_PER_PRODUCT = [
  { postPrice: 500000, price: 0.1 },
  { postPrice: 1000000, price: 0.05 },
  { postPrice: 2000000, price: 0.04 },
  { postPrice: 5000000, price: 0.02 },
  { postPrice: 10000000, price: 0.01 },
];

export const PRICE_PER_POST = [
  { postPrice: 500000, price: 10000 },
  { postPrice: 1000000, price: 15000 },
  { postPrice: 2000000, price: 25000 },
  { postPrice: 5000000, price: 35000 },
  { postPrice: 10000000, price: 50000 },
];
