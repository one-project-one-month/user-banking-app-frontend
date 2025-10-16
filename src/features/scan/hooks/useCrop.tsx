import React, { useRef, useState } from "react";
import type { Crop } from "react-image-crop";

function useCrop() {
  const [isOpenCrop, setIsOpenCrop] = useState<boolean>(false);
  const [cropSrc, setCropSrc] = useState<string>("");
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const onCropImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight, width, height } = e.currentTarget;
    const aspect = 50 / 50;

    let widthPercent = 100;
    let heightPercent = (naturalWidth / aspect / naturalHeight) * 100;

    if (heightPercent > 100) {
      heightPercent = 100;
      widthPercent = ((naturalHeight * aspect) / naturalWidth) * 100;
    }

    const initialCrop = {
      unit: "%",
      x: (100 - widthPercent) / 2,
      y: (100 - heightPercent) / 2,
      width: widthPercent,
      height: heightPercent,
    };

    setCrop(initialCrop as Crop);

    const completed: Crop = {
      unit: "px",
      x: (initialCrop.x / 100) * width,
      y: (initialCrop.y / 100) * height,
      width: (initialCrop.width / 100) * width,
      height: (initialCrop.height / 100) * height,
    };

    setCompletedCrop(completed);
  };

  return {
    isOpenCrop,
    setIsOpenCrop,
    imgRef,
    completedCrop,
    setCompletedCrop,
    onCropImageLoad,
    crop,
    cropSrc,
    setCropSrc,
    setCrop,
  };
}

export default useCrop;
