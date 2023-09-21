export interface Credentials {
  email: string;
  password: string;
}

export interface Props {
  children?: React.ReactNode;
}

export type InputProps = {
  label: string;
  type: "string" | "number" | "email";
  placeholder: string;
  name: string;
};

interface UploadProps {
  label: string;
}

interface SelectProps {
  selectLists: ListProps[];
  label: string;
}

interface ListProps {
  name: string;
}
