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

interface UserObject {
  user: {
    id: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    email: string;
    role: {
      id: string;
      roleType: string;
    }; // Add other possible role values as needed
  };
  expires: string;
}

interface RoutesProps {
  routes: {
    title: string;
    Icon: ReactNode;
    redirect: string;
  }[];
}
