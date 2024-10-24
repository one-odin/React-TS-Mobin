import * as Yup from "yup";

// Define the validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "نام کاربر اجباریست").required("نام کاربر اجباریست"),
  mobile: Yup.string()
    .min(2, "شماره همراه اجباریست")
    .matches(/^\d{10}$/, "شماره همراه باید 10 عدد باشد")
    .matches(/^9\d{9}$/, "شماره همراه باید با 9 شروع شده باشد")
    .required("شماره همراه اجباریست"),
  email: Yup.string()
    .min(2, "نام کاربری اجباریست")
    .email("ایمیل نامعتبر است")
    .required("ایمیل اجباریست"),
  country: Yup.string(),
  volume: Yup.string()
    .matches(/^[0-9]$/, "سقف حجم باید زیر 10 گیگ باشد"),
});

// Function to validate a specific field
const ValidateField = (field: any, value: any): boolean | string => {
  try {
    // Use a type assertion to specify the type as Yup.Schema
    const schema = Yup.reach(validationSchema, field) as Yup.Schema<any>;
    schema.validateSync(value); // Validate the value
    return true; // Return true if validation passes
  } catch (error: any) {
    return error.message; // Return the error message if validation fails
  }
};

export default ValidateField;
