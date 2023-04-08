import React from 'react';
import { Link } from 'react-router-dom';

const ImageWithOverlay = ({ src, altText, caption }) => {
  return (
    <div className='group relative cursor-pointer bg-slate-100'>
      <Link to={'/categories'}>
        <img className='h-full ' src={src} alt={altText} />
        <div className='z-11 absolute top-0 left-0 h-full w-full overflow-hidden bg-black opacity-0 transition-all group-hover:opacity-70'>
          <figcaption className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
            {caption}
          </figcaption>
        </div>
      </Link>
    </div>
  );
};

export default ImageWithOverlay;
