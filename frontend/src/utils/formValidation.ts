import * as Yup from "yup";

// Define the type for the form data
interface CreateDepartmentForm {
  department: string;
  manager: string;
  contact: string;
  team: number;
}

// Create the validation schema
const createDepartmentFormSchema: Yup.ObjectSchema<CreateDepartmentForm> =
  Yup.object().shape({
    department: Yup.string()
      .trim()
      .required("وارد کردن نام دپارتمان الزامی است"),
    manager: Yup.string()
      .trim()
      .required("وارد کردن نام مدیر مسئول الزامی است"),
    contact: Yup.string()
      .trim()
      .required("وارد کردن شماره تماس یا ایمیل دپارتمان الزامی است"),
    team: Yup.number().required("وارد کردن تعداد اعضای تیم الزامی است"),
  });

export default createDepartmentFormSchema;
