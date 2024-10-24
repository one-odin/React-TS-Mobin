import { useState, FC } from "react";
import * as XLSX from "xlsx";
import Button from "../../../modules/Button/Button";
import generatePassword from "../../../../utils/generatePassword";
import { handleCopy } from "../../../../utils/handleCopy";
import successIcon from "../../../../assets/img/success-check.svg";
import { PiCopy, PiEye, PiEyeSlash, PiShareNetwork } from "react-icons/pi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { UserData } from "../../../../types/user.types";

type Step3Props = {
  data: UserData[];
};

const Step3: FC<Step3Props> = ({ data }) => {
  const [passwords] = useState(data.map(() => generatePassword()));
  const [showPassword, setShowPassword] = useState<boolean[]>(Array(data.length).fill(false));

  const handleTogglePasswordVisibility = (index: number) => {
    setShowPassword((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleShare = (user: UserData, index: number) => {
    if (navigator.share) {
      navigator.share({
        title: "اطلاعات کاربر",
        text: `نام و نام خانوادگی: ${user.name}, ایمیل: ${user.email}, رمز عبور: ${passwords[index]}`,
      });
    }
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      data.map((user, index) => ({
        نام: user.name,
        کاربری: user.email,
        رمز: passwords[index],
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "validated_users.xlsx");
  };

  return (
    <>
      <div className="text-center mb-8">
        <img src={successIcon} className="m-auto size-44" />
        <p>کاربران جدید با موفقیت به سازمان اضافه شدند.</p>
        <p className="text-gray-500 mt-4 text-sm">رمز عبور برای کاربران پیامک شد اما شما هم می‌توانید رمز را برای آنها ارسال کنید همچنین امکان دانلود جدول زیر برای شما وجود دارد.</p>
      </div>
      <div className="datatable mt-4">
        <Button variant="primaryOutline" size="medium" icon={true} onClick={handleDownload} className="w-full mb-5">
          <HiOutlineDocumentDownload className="ml-2 size-5 -mt-2" />
          <span>دانلود فایل اکسل</span>
        </Button>
        <div className="border-2 border-gray-200 rounded-lg overflow-y-auto max-h-80">
          <table className="table-auto w-full divide-y-2 divide-gray-200 text-center">
            <thead className="text-[13px] text-gray-400">
              <tr>
                <th className="px-6 py-4">نام کاربر</th>
                <th className="px-6 py-4">نام کاربری</th>
                <th className="px-6 py-4">رمز عبور اولیه</th>
                <th className="px-6 py-4">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="text-md text-gray-900 font-bold border-b border-gray-100 mr-2 mx-5">
                  <td className="py-4">{user.name}</td>
                  <td className="py-4">{user.email}</td>
                  <td className="py-4">{showPassword[index] ? passwords[index] : "******"}</td>
                  <td className="py-4 flex justify-center gap-3">
                    <button onClick={() => handleTogglePasswordVisibility(index)}>
                      {showPassword[index] ? <PiEyeSlash className="size-5 text-gray-400 cursor-pointer" /> : <PiEye className="size-5 text-gray-400 cursor-pointer" />}
                    </button>
                    <PiCopy className="size-5 text-gray-400 cursor-pointer" onClick={() => handleCopy(passwords[index])} />
                    <PiShareNetwork className="size-5 text-gray-400 cursor-pointer" onClick={() => handleShare(user, index)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Step3;
