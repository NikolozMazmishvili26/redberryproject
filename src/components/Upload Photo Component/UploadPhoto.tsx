import { useState } from "react";
import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  FieldErrors,
  UseFormClearErrors,
  UseFormWatch,
} from "react-hook-form/dist/types";
import styled from "styled-components";

// import assets
import camera from "../../assets/camera.png";
import success from "../../assets/success.png";
import error from "../../assets/error.png";

interface UploadPhotoProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

function UploadPhoto({
  register,
  setValue,
  errors,
  trigger,
  clearErrors,
  watch,
}: UploadPhotoProps) {
  const [uploadImage, setUploadImage] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setUploadImage(e.dataTransfer.files[0] || null);
    setValue("fileUpload", e.dataTransfer.files[0]);
  };

  const handleDragOver = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadImage(e.target.files?.[0] || null);
  };

  // image size to mb converter
  const imageSize = uploadImage?.size;
  const sizeInMb = imageSize && imageSize / (1024 * 1024);

  return (
    <>
      <UploadPhotoInput
        type="file"
        id="fileUpload"
        {...register("fileUpload", {
          required: true,
        })}
        onChange={handleChange}
      />
      {uploadImage ? (
        <UploadedImageWrapper>
          <UploadedImageContainer>
            <UploadImage
              src={URL.createObjectURL(uploadImage)}
              alt="uploadedPhoto"
            />
          </UploadedImageContainer>
          {/* Re Upload */}
          <ReuploadImageContainer>
            {/*  */}
            <UploadImageInfo>
              <SuccessImage src={success} alt="success" />
              <UploadImageDescriptionContainer>
                <ImageName>{uploadImage?.name}</ImageName>
                <ImageSize>{sizeInMb?.toFixed(1) + " " + "mb"}</ImageSize>
              </UploadImageDescriptionContainer>
            </UploadImageInfo>
            {/*  */}
            <ReUploadButton htmlFor="fileUpload">
              თავიდან ატვირთე
            </ReUploadButton>
          </ReuploadImageContainer>
        </UploadedImageWrapper>
      ) : (
        <UploadPhotoContainer
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          errors={errors}
        >
          <CameraTitle errors={errors}>
            ჩააგდე ან ატვირთე ლეპტოპის ფოტო
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

const UploadPhotoContainer = styled.div<{ errors: FieldErrors<FieldValues> }>`
  position: relative;
  max-width: 878px;
  width: 100%;
  border: ${(props) =>
    props.errors.fileUpload
      ? "2px dashed var(--error-color)"
      : "2px dashed var(--blue-color)"};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 59px;
  padding-bottom: 58px;
  gap: 21px;
  background-color: ${(props) =>
    props.errors.fileUpload ? "var( --error-bg-color)" : "#f7f7f7"};
  border-radius: var(--border-radius);

  @media screen and (min-width: 890px) {
    gap: 65px;
    padding-top: 103px;
    padding-bottom: 115px;
    border-radius: var(--large-border-radius);
  }
`;

const CameraImage = styled.img`
  width: 54px;

  @media screen and (min-width: 890px) {
    display: none;
  }
`;

const ErrorImage = styled.img<{ errors: FieldErrors<FieldValues> }>`
  position: absolute;
  bottom: 25px;
  width: 23px;
  height: 21px;
  display: ${(props) => (props.errors.fileUpload ? "block" : "none")};

  @media screen and (min-width: 890px) {
    width: 38px;
    height: 34px;
    top: 54px;
  }
`;

const CameraTitle = styled.h1<{ errors: FieldErrors<FieldValues> }>`
  max-width: 195px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 38px;
  text-align: center;
  color: ${(props) =>
    props.errors.fileUpload ? "var(--error-color)" : "var(--blue-color)"};
  @media screen and (max-width: 890px) {
    display: none;
  }
`;

const UploadPhotoLabel = styled.label<{ errors: FieldErrors<FieldValues> }>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${(props) =>
    props.errors.fileUpload ? "var(--error-color)" : "var(--blue-color)"};
  width: 146px;
  text-align: center;

  &:before {
    content: "ლეპტოპის ფოტოს ატვირთვა";
    display: block;
  }
  @media screen and (min-width: 890px) {
    &:before {
      content: "ატვირთე";
      display: block;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 233px;
    height: 60px;
    background-color: var(--btn-color);
    color: #ffffff;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 20px;
  }
`;

const UploadPhotoInput = styled.input`
  display: none;
`;

// uploaded image styles

const UploadedImageWrapper = styled.div`
  max-width: 878px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const UploadedImageContainer = styled.div`
  width: 100%;
  height: calc(min(100vw, 100vh) * 423 / 878);
  margin: auto;
  @media (min-width: 878px) {
    height: 423px;
  }

  @media (max-width: 600px) {
    height: calc(100vw * 181 / 390);
  }
`;

const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--large-border-radius);
  object-fit: cover;
`;

// Re-Upload Image Container

const ReuploadImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;

  @media screen and (min-width: 890px) {
    margin-top: 25px;
  }
`;

const UploadImageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SuccessImage = styled.img``;

const ReUploadButton = styled.label`
  width: 187px;
  height: 46px;
  background-color: var(--btn-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
`;

// desc container
const UploadImageDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 890px) {
    flex-direction: row;
    align-items: center;
    gap: 18px;
  }
`;
const ImageName = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #202020;

  @media screen and (min-width: 890px) {
    font-size: 18px;
    &::after {
      content: ",";
      display: inline-block;
      font-size: 18px;
    }
  }
`;

const ImageSize = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #5f5f5f;

  @media screen and (min-width: 890px) {
    font-size: 18px;
  }
`;
