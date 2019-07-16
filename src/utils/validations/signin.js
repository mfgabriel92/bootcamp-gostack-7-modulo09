import * as Yup from 'yup'

export default Yup.object().shape({
  email: Yup.string()
    .email()
    .required('E-mail is required'),
  password: Yup.string().required('Password is required'),
})
