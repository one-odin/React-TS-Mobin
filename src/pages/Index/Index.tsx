import { Link } from "react-router-dom";

const Index = (): JSX.Element => {
  return (
    <div className="p-20">
      <Link to="/dashboard/add-user-bulk" className="py-5 px-7 bg-blue-500 hover:bg-blue-600 shadow-md text-white rounded-lg">
        افزودن گروهی کاربر (فایل اکسل)
      </Link>
    </div>
  );
};

export default Index;
