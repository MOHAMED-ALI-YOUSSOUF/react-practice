// import React from "react";
// import { useFormik } from "formik";
// const FormikYup = () => {
//   const formik = useFormik(
//     {
//         initialValues: {
//             firstName:"",
//             lastName:"",
//             emailId:"",
//             password:"",
//             confirmPassword:"",
//             id:""
//         },
//         validationSchema: {
//             firstName : Yup.string().required("First Name is required"),
//             lastName : Yup.string() .min(2, 'Too Short!'),
//             email : yup.string().email("Enter correct email").required("you must enter email"),
//             password: yup.string().required("enter your password")

//         },
//         onsubmit : (values) => {
//             console.log('onSubmit', values);

        
//         }
//     }
//   );

//   return <Container>
//     <h1>Formik Yup</h1>
    
//   </Container>;
// };

// export default FormikYup;
