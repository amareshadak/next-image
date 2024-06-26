import Image from "next/image";
import React from "react";

import i123Image from "@/public/123.jpg";

function ImagePage() {
  return (
    <>
      <div className="h-1/3">
        <Image
          src={"/100.jpg"}
          alt="test image"
          width={"500"}
          height={"500"}
        ></Image>
      </div>
      <div className="h-1/3">
        <Image
          src={i123Image}
          alt="test image"
          width={"500"}
          height={500}
        ></Image>
      </div>

      <Image
        src={"/articleImage/image-1.jpg"}
        alt="test image"
        width={"500"}
        height={500}
      ></Image>
      <Image
        src={"/articleImage/logo.png"}
        alt="test image"
        width={"500"}
        height={500}
      ></Image>

      <Image
        src={"/articleImage/2323.jpeg"}
        alt="test image"
        width={"500"}
        height={500}
      ></Image>
    </>
  );
}

export default ImagePage;
