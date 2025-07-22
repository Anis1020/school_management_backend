export type TMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TSemester = {
  name: string;
  year: string;
  code: "01" | "02" | "03";
  startMonth: TMonths;
  endMonth: TMonths;
};
