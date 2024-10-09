import { FC } from "react";
import { useFormik, FormikHelpers } from "formik";
import formValidation from "../utils/formValidation";

interface FormProps {
  length: number;
}

interface FormValues {
  department: string;
  manager: string;
  contact: string;
  team: number;
}

const Form: FC<FormProps> = ({ length }) => {
  const createNewDepartment = useFormik<FormValues>({
    initialValues: {
      department: "",
      manager: "",
      contact: "",
      team: 1,
    },
    validationSchema: formValidation,
    onSubmit: async (
      values: FormValues,
      { resetForm }: FormikHelpers<FormValues>
    ) => {
      await fetch("http://localhost:3000/departments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, order: length + 1 }),
      });
      location.reload();
      resetForm();
    },
  });

  return (
    <div className="py-8 px-4">
      <form
        action=""
        onSubmit={createNewDepartment.handleSubmit}
        className="flex flex-col"
      >
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="department">نام دپارتمان</label>
            <input
              type="text"
              id="department"
              placeholder="لطفا نام دپارتمان را وارد نمایید"
              className="border border-catalan-600 outline-none bg-transparent px-3 py-1 rounded-md text-link md:text-regular text-catalan-600 dark:text-brown-100"
              value={createNewDepartment.values.department}
              onChange={createNewDepartment.handleChange}
              onBlur={createNewDepartment.handleBlur}
            />
            {createNewDepartment.errors.department &&
              createNewDepartment.touched.department && (
                <span className="text-xs font-VazirRegular text-gold">
                  {createNewDepartment.errors.department}
                </span>
              )}
          </div>
          <div className="form-col">
            <label htmlFor="manager">مدیر مسئول</label>
            <input
              type="text"
              id="manager"
              placeholder="لطفا نام مدیر مسئول دپارتمان را وارد کنید"
              className="border border-catalan-600 outline-none bg-transparent px-3 py-1 rounded-md text-link md:text-regular text-catalan-600 dark:text-brown-100"
              value={createNewDepartment.values.manager}
              onChange={createNewDepartment.handleChange}
              onBlur={createNewDepartment.handleBlur}
            />
            {createNewDepartment.errors.manager &&
              createNewDepartment.touched.manager && (
                <span className="text-xs font-VazirRegular text-gold">
                  {createNewDepartment.errors.manager}
                </span>
              )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="contact">راه ارتباطی</label>
            <input
              type="text"
              id="contact"
              placeholder="لطفا شماره تماس یا ایمیل دپارتمان را وارد کنید."
              className="border border-catalan-600 outline-none bg-transparent px-3 py-1 rounded-md text-link md:text-regular text-catalan-600 dark:text-brown-100"
              value={createNewDepartment.values.contact}
              onChange={createNewDepartment.handleChange}
              onBlur={createNewDepartment.handleBlur}
            />
            {createNewDepartment.errors.contact &&
              createNewDepartment.touched.contact && (
                <span className="text-xs font-VazirRegular text-gold">
                  {createNewDepartment.errors.contact}
                </span>
              )}
          </div>
          <div className="form-col">
            <label htmlFor="team">تعداد اعضا</label>
            <input
              type="text"
              id="team"
              placeholder="لطفا تعداد اعضای دپارتمان را به عدد وارد نمایید."
              className="border border-catalan-600 outline-none bg-transparent px-3 py-1 rounded-md text-link md:text-regular text-catalan-600 dark:text-brown-100"
              value={createNewDepartment.values.team}
              onChange={createNewDepartment.handleChange}
              onBlur={createNewDepartment.handleBlur}
            />
            {createNewDepartment.errors.team &&
              createNewDepartment.touched.team && (
                <span className="text-xs font-VazirRegular text-gold">
                  {createNewDepartment.errors.team}
                </span>
              )}
          </div>
        </div>
        <button
          type="submit"
          disabled={createNewDepartment.isSubmitting}
          className="w-fit flex items-start text-base font-Lalezar transition-colors hover:bg-gradient-to-r from-green to-blue border border-blue bg-blue text-gray-100 rounded-md px-2 py-1"
        >
          <span>
            {createNewDepartment.isSubmitting
              ? "درحال پردازش"
              : "افزودن دپارتمان"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
