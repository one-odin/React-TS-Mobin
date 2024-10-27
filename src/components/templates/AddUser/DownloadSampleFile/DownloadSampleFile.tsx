import { Link } from "react-router-dom";
import Button from "../../../modules/Button/Button";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const DownloadSampleFile = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center mb-3">
      <p>لطفا قالب نمونه اکسل را دانلود و پس از تکمیل آن را بارگزاری کنید.</p>
      <Link to="/users-excel-file.xlsx" target="_blank">
        <Button variant="primaryOutline" size="medium" icon={true}>
          <HiOutlineDocumentDownload className="ml-2 size-5 -mt-2" />
          <span>دانلود قالب آماده اکسل</span>
        </Button>
      </Link>
    </div>
  );
};

export default DownloadSampleFile;
