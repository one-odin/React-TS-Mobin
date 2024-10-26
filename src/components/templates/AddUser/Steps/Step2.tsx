import { FC } from "react";
import ValidateField from "../ValidateField/ValidateField";
import Tooltip from "../../../modules/Tooltip/Tooltip";
import Button from "../../../modules/Button/Button";
import DownloadSampleFile from "../DownloadSampleFile/DownloadSampleFile";
import { GoCheckCircle, GoTrash, GoXCircle } from "react-icons/go";
import { showToastError } from "../../../../utils/showToast";
import { UserData } from "../../../../types/user.types";

type Step2Props = {
  data: UserData[];
  setData: (data: UserData[]) => void;
  setStep: (step: number) => void;
};

const Step2: FC<Step2Props> = ({ data, setData, setStep }) => {
  const handleDeleteRow = (index: number) => {
    setData(data.filter((_, idx) => idx !== index));
  };

  const handleDeleteInvalidRows = () => {
    const validRows = data.filter((row) => ["name", "email", "mobile", "country", "volume"].every((field) => ValidateField(field, row[field as keyof UserData]) === true));
    if (validRows.length === 0) {
      setTimeout(() => {
        showToastError("همه اطلاعات نامعتبر است و موردی برای نمایش وجود ندارد. فایل اصلاح شده را بارگزاری نمایید");
        setStep(1);
      }, 1000);
    }
    setData(validRows);
  };

  const handleSubmit = () => {
    setStep(3); // Move to the final step
  };

  // Check if there are any invalid rows
  const hasInvalidRows = data.some((row) => ["name", "email", "mobile", "country", "volume"].some((field) => ValidateField(field, row[field as keyof UserData]) !== true));

  // Checks whether the whole row is valid or not
  const isValidRow = (row: UserData) => {
    return ValidateField("name", row.name) === true && ValidateField("mobile", row.mobile) === true && ValidateField("email", row.email) === true && ValidateField("volume", row.volume) === true;
  };

  // Get error message of properties
  const renderField = (fieldName: keyof UserData, fieldValue: any) => {
    const validationMessage = ValidateField(fieldName, fieldValue);
    const isValid = typeof validationMessage === "string";
    return (
      <>
        {isValid ? <span className="text-red-600">{fieldValue}</span> : fieldValue}
        {isValid && <Tooltip message={validationMessage} />}
      </>
    );
  };

  return (
    <>
      <DownloadSampleFile />
      <div className="datatable mt-4">
        <div className="border-2 border-gray-200 rounded-lg overflow-y-auto max-h-96">
          <table className="table-auto w-full divide-y-2 divide-gray-200 text-center">
            <thead className="text-[13px] text-gray-400">
              <tr>
                <th className="px-6 py-4">نام کاربر</th>
                <th className="px-6 py-4">نام کاربری</th>
                <th className="px-6 py-4">شماره همراه</th>
                <th className="px-6 py-4">کشور</th>
                <th className="px-6 py-4">سقف حجم</th>
                <th className="px-6 py-4">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="text-md text-gray-900 font-bold border-b border-gray-100 mr-2">
                  <td className="py-4">{renderField("name", row.name)}</td>
                  <td className="py-4">{renderField("email", row.email)}</td>
                  <td className="py-4">{renderField("mobile", row.mobile)}</td>
                  <td className="py-4">{row.country === "IR" ? "ایران (IR)" : row.country}</td>
                  <td className="py-4">{renderField("volume", row.volume)}</td>

                  <td className="py-3 flex justify-center gap-3">
                    {isValidRow(row) ? <GoCheckCircle className="size-5 text-green-700" /> : <GoXCircle className="size-5 text-red-700" />}
                    <GoTrash onClick={() => handleDeleteRow(index)} className="size-5 text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex mt-7 gap-3">
          <Button
            variant="primary"
            size="medium"
            className={`flex-1 ${hasInvalidRows || data.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={hasInvalidRows || data.length === 0}
            onClick={handleSubmit}
          >
            {hasInvalidRows || data.length === 0 ? (
              "افزودن کاربران به سازمان"
            ) : (
              <>
                افزودن <span className="mx-1">{data.length}</span> کاربر به سازمان
              </>
            )}
          </Button>
          <Button variant="redOutline" size="medium" className="flex-1" onClick={handleDeleteInvalidRows}>
            حذف کاربران دارای خطا
          </Button>
        </div>
      </div>
    </>
  );
};

export default Step2;
