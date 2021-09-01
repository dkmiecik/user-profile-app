import React from 'react';

import user from '../../../../assets/images/user.png';

import { IInput } from '../types/input.model';

import { File, FileGroup } from '../InputGroup.component';
import { Image, Overlay, ImageWrapper, OverlayText } from '../../Image/Image.component';

type InputProps = IInput;

const FILE_MAX_SIZE = 1024 * 1024 * 2; // 2MB

export const FileInput: React.FC<InputProps> = (props) => {
  const textInput = React.useRef(null);
  const fileInput = React.useRef(null);
  const [isSizeInvalid, setIsSizeInvalid] = React.useState<boolean>(false);
  const [avatar, setAvatar] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setAvatar(props.defaultValue as string);
  }, [props.defaultValue]);

  const getBase64 = (file: Blob, callback: (param: string | ArrayBuffer | null) => void) => {
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        callback(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  };

  const handleChange = React.useCallback((event: React.FormEvent<EventTarget>) => {
    const target = event.currentTarget as HTMLInputElement;

    if (target.files) {
      if (target.files[0].size < FILE_MAX_SIZE) {
        setIsSizeInvalid(false);
        getBase64(target.files[0], (value) => {
          if (textInput && textInput.current && value) {
            ((textInput.current as unknown) as HTMLInputElement).value = value as string;
            setAvatar(value as string);
          }
        });
      } else {
        setIsSizeInvalid(true);
        ((fileInput.current as unknown) as HTMLInputElement).value = '';
        ((textInput.current as unknown) as HTMLInputElement).value = '';
      }
    }
  }, []);

  const handleOpenClick = React.useCallback(() => {
    ((fileInput.current as unknown) as HTMLInputElement).click();
  }, []);

  return (
    <FileGroup>
      <ImageWrapper onClick={handleOpenClick}>
        <Image src={avatar ?? user} alt="User empty avatar" />
        <Overlay>
          <OverlayText>Edit Avatar</OverlayText>
        </Overlay>
      </ImageWrapper>
      <File
        type="file"
        accept="image/*"
        autoComplete="none"
        onChange={handleChange}
        ref={fileInput}
      />
      <File
        id={props.id}
        name={props.name}
        defaultValue={props.defaultValue as string}
        type="text"
        ref={textInput}
      />
      {isSizeInvalid && <p>File size is limited to 2MB</p>}
    </FileGroup>
  );
};
