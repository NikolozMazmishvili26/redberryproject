import { FieldValues } from "react-hook-form/dist/types/fields";
import { FieldErrors } from "react-hook-form";
import styled from "styled-components";

export const UploadPhotoContainer = styled.div<{
  errors: FieldErrors<FieldValues>;
}>`
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
  padding-bottom: 54px;
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

export const CameraImage = styled.img`
  width: 54px;

  @media screen and (min-width: 890px) {
    display: none;
  }
`;

export const ErrorImage = styled.img<{ errors: FieldErrors<FieldValues> }>`
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

export const CameraTitle = styled.h1<{ errors: FieldErrors<FieldValues> }>`
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

export const UploadPhotoLabel = styled.label<{
  errors: FieldErrors<FieldValues>;
}>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${(props) =>
    props.errors.fileUpload ? "var(--error-color)" : "var(--blue-color)"};
  max-width: 146px;
  width: 100%;
  text-align: center;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--btn-hover-color);
  }

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
    max-width: 233px;
    width: 100%;
    height: 60px;
    background-color: var(--btn-color);
    color: #ffffff;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 20px;
  }
`;

export const UploadPhotoInput = styled.input`
  display: none;
`;

// uploaded image styles

export const UploadedImageWrapper = styled.div`
  max-width: 878px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const UploadedImageContainer = styled.div`
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

export const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: var(--large-border-radius);
  object-fit: cover;
`;

// Re-Upload Image Container

export const ReuploadImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;

  @media screen and (min-width: 890px) {
    margin-top: 25px;
    margin-bottom: 39px;
  }
`;

export const UploadImageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SuccessImage = styled.img``;

export const ReUploadButton = styled.label`
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
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--btn-hover-color);
  }

  @media screen and (min-width: 890px) {
    width: 233px;
    height: 60px;
    font-size: 20px;
    line-height: 24px;
  }
`;

// desc container
export const UploadImageDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 890px) {
    flex-direction: row;
    align-items: center;
    gap: 18px;
  }
`;
export const ImageName = styled.h3`
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

export const ImageSize = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #5f5f5f;

  @media screen and (min-width: 890px) {
    font-size: 18px;
  }
`;

// error mesage

export const ErrorMessage = styled.h2``;
