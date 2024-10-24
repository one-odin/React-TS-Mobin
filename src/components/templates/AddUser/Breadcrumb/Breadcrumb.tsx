import { FC } from "react";
import "./Breadcrumb.css";
import { FaCircleCheck } from "react-icons/fa6";

type BreadCrumbProps = {
  step: number;
};

const Breadcrumb: FC<BreadCrumbProps> = ({ step }) => {
  const getStepClass = (currentStep: number) => {
    if (step >= currentStep) return true;
    return false;
  };

  return (
    <>
      <div className="breadcrumbs flex mb-5">
        <span className="breadcrumb">
          <div className={`flex ${getStepClass(1) && "active"}`}>
            {step > 1 ? <FaCircleCheck className="text-blue-700 size-[19px] ml-2" /> : <span className="icon">1</span>}
            آپلود فایل
          </div>
        </span>
        <span className="breadcrumb">
          <div className={`flex ${getStepClass(2) && "active"}`}>
            {step > 2 ? <FaCircleCheck className="text-blue-700 size-[19px] ml-2" /> : <span className="icon">2</span>}
            پایش اطلاعات
          </div>
        </span>
        <span className="breadcrumb">
          <div className={`flex ${getStepClass(3) && "active"}`}>
            <span className="icon text-white">3</span>
            دریافت رمز عبور
          </div>
        </span>
      </div>
    </>
  );
};

export default Breadcrumb;
