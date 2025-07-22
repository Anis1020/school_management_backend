export type TCourse = {
  id: string;
  title: string;
  prefix: string;
  code: "01" | "02" | "03" | "04";
  credits: number;
  isDeleted: boolean;
  preRequisite: boolean;
};
