import * as yup from "yup";

export const UserSchema = yup.object().shape({
  fname: yup.string().required("Firstname is required"),
  lname: yup.string().required("Lastname is required"),
  gender: yup
    .string()
    .oneOf(["Male", "Female"], "Invalid gender")
    .required("Gender is required"),
  empStatus: yup
    .string()
    .oneOf(
      [
        "Full-Time Employee",
        "Part-Time Employee",
        "Contractor",
        "Temporary Employee",
        "Intern",
      ],
      "Invalid Status"
    )
    .required("Employment status is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  photo: yup
    .mixed()
    .required("Photo is required")
    .test("fileSize", "File size is too large", (value: any) => {
      if (!value) return true; // No file uploaded, so no size to check
      return value.size <= 1024 * 1024; // 1MB maximum file size
    })
    .test("fileType", "Unsupported file type", (value: any) => {
      if (!value) return true; // No file uploaded, so no type to check
      return ["image/jpeg", "image/jpg", "image/png"].includes(value.type); // Allowed image file types
    }),
});
