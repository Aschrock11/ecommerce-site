import React from 'react';

const ImageWithOverlay = ({ src, altText, caption }) => {
  return (
    <div className='group relative cursor-pointer bg-slate-100'>
      <img className='h-full ' src={src} alt={altText} />
      <div className='z-11 absolute top-0 left-0 h-full w-full overflow-hidden bg-black opacity-0 transition-all group-hover:opacity-70'>
        <figcaption className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100 group-hover:opacity-100'>
          {caption}
        </figcaption>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
