import React from "react";
import Image from "next/image";

interface CollageImage {
  src: string;
  alt: string;
}

interface CollageProps {
  images: CollageImage[];
}

const Collage: React.FC<CollageProps> = ({ images }) => {
  return (
    <div className="w-full flex justify-center columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className="rounded-lg border-4 border-black w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Collage;
