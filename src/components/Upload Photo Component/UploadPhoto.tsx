import { useState, useEffect } from "react";
import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  FieldErrors,
  UseFormTrigger,
} from "react-hook-form/dist/types";

// import styled components
import {
  CameraImage,
  CameraTitle,
  ErrorImage,
  ImageName,
  ImageSize,
  ReUploadButton,
  ReuploadImageContainer,
  SuccessImage,
  UploadImage,
  UploadImageDescriptionContainer,
  UploadImageInfo,
  UploadPhotoContainer,
  UploadPhotoInput,
  UploadPhotoLabel,
  UploadedImageContainer,
  UploadedImageWrapper,
} from "./UploadPhotoStyles";

// import assets
import camera from "../../assets/camera.png";
import success from "../../assets/success.png";
import error from "../../assets/error.png";
import localforage from "localforage";

interface UploadPhotoProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: FieldErrors<FieldValues>;
  // localstorage states
  info: Record<string, any>;
  setInfo: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  trigger: UseFormTrigger<FieldValues>;
}

function UploadPhoto({
  register,
  setValue,
  errors,
  // localstorage states
  info,
  setInfo,
  trigger,
}: UploadPhotoProps) {
  // upload image state
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  // is Uploaded File Image or not function

  function isImage(data: string) {
    const prefix = "data:image";
    const parts = data.split(";");
    const contentType = parts[0].substring(0, 10);
    return contentType.startsWith(prefix);
  }

  // If the uploaded file is not an image it will be deleted from localstorage
  useEffect(() => {
    if (info.fileUpload) {
      if (!isImage(info.fileUpload)) {
        let filledInfo = JSON.parse(
          localStorage.getItem("filledInfo") as string
        );
        delete filledInfo.fileUpload;
        delete filledInfo.fileName;
        delete filledInfo.fileSize;
        localStorage.setItem("filledInfo", JSON.stringify(filledInfo));
        setInfo(filledInfo);
      }
    }
  }, [info.fileUpload]);

  // handle drop function
  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file) {
      await setImage(file);
    }
    const reader = new FileReader();

    reader.onload = () => {
      setInfo({
        ...info,
        fileUpload: reader.result,
        fileName: file?.name,
        fileSize: file?.size,
      });
    };
    reader.readAsDataURL(file);
    await trigger("fileUpload");
  };

  // reupload button function
  const handleOpenFileDialog = () => {
    setUploadImage(null);
    setValue("fileUpload", null);
    let filledInfo = JSON.parse(localStorage.getItem("filledInfo") as string);
    delete filledInfo.fileUpload;
    delete filledInfo.fileName;
    delete filledInfo.fileSize;
    localStorage.setItem("filledInfo", JSON.stringify(filledInfo));
    setInfo(filledInfo);
    // clear localforage
    localforage.clear();
    setImage(null);
  };

  // onchange function
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;

    const file = e.target.files?.[0];
    if (file) {
      await setImage(file);
    }
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setInfo({
        ...info,
        [name]: reader.result,
        fileName: file?.name,
        fileSize: file?.size,
      });
    };
    reader.readAsDataURL(file);
    await trigger("fileUpload");
  };

  // useEffect to update values from localstorage

  useEffect(() => {
    if (info.fileUpload) {
      if (isImage(info.fileUpload)) {
        setUploadImage(info.fileUpload);
      }
    }
    setValue("fileUpload", image);
  }, [info.fileUpload, image]);

  // local forage configuration

  useEffect(() => {
    localforage
      .getItem("image")
      .then((value) => {
        setImage(value as File | null);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    localforage.setItem("image", image);
  }, [image]);

  // image size to mb converter
  const imageSize = info.fileSize;
  const sizeInMb = imageSize && imageSize / (1024 * 1024);

  // validate Image

  const validateImage = (value: File) => {
    if (!value) {
      return "მოცემული ველი სავალდებულოა!";
    }

    const fileType = value.type.split("/")[0];
    if (fileType !== "image") {
      return "ატვირთე მხოლოდ სურათი";
    }

    return true;
  };

  return (
    <>
      {uploadImage ? (
        <UploadedImageWrapper>
          <UploadedImageContainer>
            <UploadImage src={uploadImage} alt="uploadedPhoto" />
          </UploadedImageContainer>
          {/* Re Upload */}
          <ReuploadImageContainer>
            {/*  */}
            <UploadImageInfo>
              <SuccessImage src={success} alt="success" />
              <UploadImageDescriptionContainer>
                <ImageName>{info.fileName}</ImageName>
                <ImageSize>{sizeInMb?.toFixed(1) + " " + "mb"}</ImageSize>
              </UploadImageDescriptionContainer>
            </UploadImageInfo>
            {/*  */}
            <ReUploadButton htmlFor="fileUpload" onClick={handleOpenFileDialog}>
              თავიდან ატვირთე
            </ReUploadButton>
          </ReuploadImageContainer>
        </UploadedImageWrapper>
      ) : (
        <UploadPhotoContainer
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          errors={errors}
        >
          <UploadPhotoInput
            type="file"
            id="fileUpload"
            accept="image/jpeg, image/png"
            {...register("fileUpload", {
              validate: validateImage,
            })}
            onChange={handleChange}
          />
          <CameraTitle errors={errors}>
            {errors.fileUpload?.message || "ჩააგდე ან ატვირთე ლეპტოპის ფოტო"}
          </CameraTitle>
          <CameraImage src={camera} alt="camera" />
          <UploadPhotoLabel htmlFor="fileUpload" errors={errors} />
          <ErrorImage src={error} alt="error" errors={errors} />
        </UploadPhotoContainer>
      )}
    </>
  );
}

export default UploadPhoto;
