import * as yup from "yup";



export const registerSchema = yup.object({
    fullName: yup.string().required().min(3).max(12),
    lastName: yup.string().required().min(3).max(12),
    email: yup.string().email().required(),
    phone: yup.string().min(9).max(9),
    password: yup.string().required("Password Is Reqired").min(8).uppercase(1).lowercase(1),
    cPassword: yup
              .string()
              .oneOf([yup.ref("password"),null], "Password Must Match")
});