import { useState, FC } from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

interface TooltipProps {
  message: string;
}

const Tooltip: FC<TooltipProps> = ({ message }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <span className="relative inline-block">
      <HiOutlineExclamationTriangle
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="absolute -top-3 text-red-700 ms-2 -mb-1"
      />
      {visible && (
        <div className="absolute -top-[4.5rem] transition-transform translate-x-[40%] z-10 w-auto p-4 text-xs font-medium text-gray-900 bg-blue-50 rounded-lg whitespace-nowrap">
          {message}
          <div className="absolute size-3 bg-blue-50 rotate-45 -bottom-1 left-1/2 -translate-x-[50%]"></div>
        </div>
      )}
    </span>
  );
};

export default Tooltip;
