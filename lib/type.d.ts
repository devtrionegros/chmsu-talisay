export interface Credentials {
  email: string;
  password: string;
}

export interface Props {
  children?: React.ReactNode;
}

export type InputProps = {
  label: string;
  type: "string" | "number" | "email" | "password";
  placeholder: string;
  name: string;
};

interface UploadProps {
  label: string;
  name: string;
}

interface SelectProps {
  selectLists: ListProps[];
  label: string;
  name: string;
}

interface ListProps {
  name: string;
}

interface FadeProps {
  children: React.ReactNode;
  show: boolean;
}

interface DropdownProps {
  children: React.ReactNode;
  name?: string;
}
