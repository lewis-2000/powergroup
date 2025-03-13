import React from "react";

interface GalleryProps {
  Gallery1Src: string;
  Gallery2Src: string;
  Gallery3Src: string;
  Gallery4Src: string;
}

const MiniGallery: React.FC<GalleryProps> = ({
  Gallery1Src,
  Gallery2Src,
  Gallery3Src,
  Gallery4Src,
}) => {
  return (
    <div className="w-full px-10 md:px-15 py-3 h-auto flex flex-wrap justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="h-64 md:w-1/5 w-full mb-4 overflow-hidden border-4 border-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl md:translate-x-2">
        <img
          src={Gallery1Src}
          alt="Gallery Image"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="h-64 md:w-1/5 w-full mb-4 overflow-hidden border-4 border-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl md:translate-x-4">
        <img
          src={Gallery2Src}
          alt="Gallery Image"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="h-64 md:w-1/5 w-full mb-4 overflow-hidden border-4 border-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl md:translate-x-8">
        <img
          src={Gallery3Src}
          alt="Gallery Image"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="h-64 md:w-1/5 w-full mb-4 overflow-hidden border-4 border-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl md:translate-x-12">
        <img
          src={Gallery4Src}
          alt="Gallery Image"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default MiniGallery;
