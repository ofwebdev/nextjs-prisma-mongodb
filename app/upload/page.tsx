"use client";
import React, { useState } from "react";

import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
  source_url: string;
  url: string;
}

export default function UploadPage() {
  const [publicId, setPublicId] = useState("");
  // const [imgSource, setImgSource] = useState("");
  console.log(publicId);
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={700}
          height={500}
          alt={"fistImg"}
        ></CldImage>
      )}
      <CldUploadWidget
        uploadPreset={"onluyc1s"}
        onUpload={(result, widgets) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult; // Define for type recolonization
          setPublicId(info.public_id);
          console.log(result);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}
