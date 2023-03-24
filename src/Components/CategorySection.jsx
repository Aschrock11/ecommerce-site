import React from "react";

function CategorySection() {
  return (
    <div className="flex flex-grow justify-center gap-4  max-h-[1440px] max-w-[1000px]">
      <div>
        <img className=" object-contain" src="./images/livingroom.jpg" alt="" />
      </div>

      <div className="flex bg-blue-300">
        <div>
          <img className=" object-contain" src="./images/lighting.jpg" alt="" />
        </div>
        <div className="flex flex-col bg-gray-400">
          <div>
            <img
              className="object-contain"
              src="./images/diningroom.jpg"
              alt=""
            />
          </div>
          <div>
            <img className="object-contain" src="./images/outdoor.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
