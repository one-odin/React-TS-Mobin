import * as XLSX from "xlsx";
import { showToastWarning } from "../../../../utils/showToast";
import { UserData } from "../../../../types/user.types";

const ProcessExcelFile = (file: File, setData: (data: UserData[]) => void, setStep: (step: number) => void): void => {
  if (!file.name.endsWith(".xlsx")) {
    showToastWarning("مجاز است .xlsx فایل با فرمت");
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const data = new Uint8Array(event.target?.result as ArrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const formattedData: UserData[] = rows.slice(1).map((row) => ({
      name: row[5] || "-", // ستون 6: نام کاربر
      email: row[4] || "-", // ستون 5: ایمیل
      mobile: row[3] || "-", // ستون 4: شماره همراه
      country: row[1] || "-", // ستون 2: کشور
      volume: row[0] || "-", // ستون 1: سقف حجم
    }));

    setData(formattedData);
    setStep(2);
  };

  reader.readAsArrayBuffer(file);
};

export default ProcessExcelFile;
