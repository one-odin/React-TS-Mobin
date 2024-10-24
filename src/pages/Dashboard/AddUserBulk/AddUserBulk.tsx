import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Breadcrumb from "../../../components/templates/AddUser/Breadcrumb/Breadcrumb";
import Step1 from "../../../components/templates/AddUser/Steps/Step1";
import Step2 from "../../../components/templates/AddUser/Steps/Step2";
import Step3 from "../../../components/templates/AddUser/Steps/Step3";
import headIcon from "../../../assets/img/head-icon.svg";
import { UserData } from "../../../types/user.types";

const AddUserBulk = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<UserData[]>([]);

  return (
    <>
      <ToastContainer limit={3} />
      <div className="flex">
        <img src={headIcon} alt="head-icon" className="-mt-3" />
        <h1 className="text-blue-700 text-2xl font-bold ms-2">افزودن کاربر جدید به سازمان "اسنپ فود"</h1>
      </div>
      <p className="text-blue-300 mt-5 mb-2 text-md">افزودن گروهی کاربران</p>

      <div className="mt-3">
        <Breadcrumb step={step} />

        {step === 1 && <Step1 setStep={setStep} setData={setData} />}
        {step === 2 && <Step2 data={data} setData={setData} setStep={setStep} />}
        {step === 3 && <Step3 data={data} />}
      </div>
    </>
  );
};

export default AddUserBulk;
