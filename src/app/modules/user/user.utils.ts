import { TSemester } from "../semester/interface";
import { UserModel } from "./schemaModel";

const findLastStudentId = async () => {
  const lastStudent = await UserModel.findOne(
    {
      role: "student",
    },
    { id: 1, _id: 0 }
  ).sort({
    createdAt: -1,
  });
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generatedID = async (payload: TSemester) => {
  let currentId = (0).toString();
  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId
    ? lastStudentId.substring(4, 6)
    : "";
  const lastStudentSemesterYear = lastStudentId
    ? lastStudentId.substring(0, 4)
    : "";
  const currentSemesterCode = payload.code;
  const currentSemesterYear = payload.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentSemesterYear === currentSemesterYear
  ) {
    currentId = lastStudentId.substring(6);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
