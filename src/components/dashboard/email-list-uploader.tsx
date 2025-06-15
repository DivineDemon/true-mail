import { type Dispatch, type SetStateAction, useCallback } from "react";

import { Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";

import { cn, extractEmailsFromFile } from "@/lib/utils";

interface EmailListUploaderProps {
  setEmails: Dispatch<SetStateAction<string[]>>;
}

const EmailListUploader = ({ setEmails }: EmailListUploaderProps) => {
  const handleExtraction = async (file: File) => {
    const extractedEmails = await extractEmailsFromFile(file);

    if (extractedEmails) {
      setEmails(extractedEmails);
    }

    return extractedEmails;
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]): void => {
      void handleExtraction(acceptedFiles[0]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "text/plain": [".txt"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex min-h-[316px] w-full cursor-pointer flex-col items-center justify-center gap-5 rounded-lg border-2 border-dashed p-10 transition-colors",
        {
          "bg-primary/30 border-primary": isDragActive,
          "bg-primary/20 border-primary/50": !isDragActive,
        }
      )}
    >
      <input {...getInputProps()} />
      <div className="bg-primary flex size-14 items-center justify-center rounded-full p-4">
        <Upload className="size-full text-white" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2.5">
        <span className="w-full text-center text-lg font-semibold">
          {isDragActive ? "Drop your file here" : "Drag and Drop"}
        </span>
        <fieldset className="border-primary/50 w-1/2 border-t">
          <legend className="text-primary px-5 text-center text-sm font-semibold">
            or
          </legend>
        </fieldset>
        <span className="w-full text-center text-lg font-semibold">
          Click to Upload
        </span>
      </div>
      <span className="w-full text-center text-sm font-medium text-gray-400">
        your email list for validation.
        <br />
        Supports: CSV, TXT, XLS, or XLSX.
      </span>
    </div>
  );
};

export default EmailListUploader;
