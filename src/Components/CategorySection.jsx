import React from "react";

function CategorySection() {
  return (
    <div className="z-10 mt-6 grid grid-cols-1 md:grid-cols-2 space-x-2 space-y-2">
      <div className=" bg-slate-100 cursor-pointer">
        <img
          className=" h-full hover:opacity-50"
          src="./images/livingroom.jpg"
          alt="image of furnished livingroom"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 space-x-2 space-y-2 ">
        <div className="hover:opacity-50 cursor-pointer">
          <img
            className=""
            src="./images/lighting.jpg"
            alt="image of lighting fixture"
          />
        </div>
        <div className="grid md:grid-cols-1 ">
          <div className="hover:opacity-50 cursor-pointer">
            <img
              className=" "
              src="./images/diningroom.jpg"
              alt="image of furnished dining room"
            />
          </div>
          <div className="hover:opacity-50 cursor-pointer">
            <img
              className=""
              src="./images/outdoor.jpg"
              alt="image of outdoor seating"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
