import React, { useEffect, useState } from 'react';
import Store from './Store';
import ProductCard from './ProductCard';

function Shop({ categoryTitle }) {
  const [data, setData] = useState(Store);
  const [allIsActive, setAllIsActive] = useState(false);
  const [sofaIsActive, setSofaIsActive] = useState(false);
  const [lightingIsActive, setLightingIsActive] = useState(false);
  const [diningIsActive, setDiningIsActive] = useState(false);
  const [outdoorIsActive, setOutdoorIsActive] = useState(false);
  const [bedroomIsActive, setBedroomIsActive] = useState(false);

  const filterItems = (category) => {
    const filteredArray = Store.filter((item) =>
      item.category.includes(category)
    );
    setData(filteredArray);
    if (category === 'sofa') {
      setAllIsActive(false);
      setSofaIsActive(!sofaIsActive);
      setLightingIsActive(false);
      setDiningIsActive(false);
      setOutdoorIsActive(false);
      setBedroomIsActive(false);
    } else if (category === 'lighting') {
      setAllIsActive(false);
      setSofaIsActive(false);
      setLightingIsActive(!lightingIsActive);
      setDiningIsActive(false);
      setOutdoorIsActive(false);
      setBedroomIsActive(false);
    } else if (category === 'dining') {
      setAllIsActive(false);
      setSofaIsActive(false);
      setLightingIsActive(false);
      setDiningIsActive(!diningIsActive);
      setOutdoorIsActive(false);
      setBedroomIsActive(false);
    } else if (category === 'outdoor') {
      setAllIsActive(false);
      setSofaIsActive(false);
      setLightingIsActive(false);
      setDiningIsActive(false);
      setOutdoorIsActive(!outdoorIsActive);
      setBedroomIsActive(false);
    } else if (category === 'bedroom') {
      setAllIsActive(false);
      setSofaIsActive(false);
      setLightingIsActive(false);
      setDiningIsActive(false);
      setOutdoorIsActive(false);
      setBedroomIsActive(!bedroomIsActive);
    }
  };

  const allButton = () => {
    setData(Store);
    setAllIsActive(!allIsActive);
    setSofaIsActive(false);
    setLightingIsActive(false);
    setDiningIsActive(false);
    setOutdoorIsActive(false);
    setBedroomIsActive(false);
  };

  // const sofaButton = () => {
  //   setSofaIsActive(!sofaIsActive);
  //   setData(filteredArray);
  // };

  // add new useState containing title and pull from new array

  useEffect(() => {}, [data]);
  //Add filter that filters and then maps out all products with correct category from Store should work with params from link if /sofas only display sofas and so on

  return (
    <div>
      <div className=''>
        <div className=' mb-8 mt-8 hidden justify-evenly md:flex'>
          {allIsActive ? (
            <button
              onClick={() => allButton()}
              className='cursor-pointer border-b-[1px] border-black font-bold'
            >
              All
            </button>
          ) : (
            <button
              onClick={() => allButton()}
              className='cursor-pointer border-black hover:border-b-[1px]'
            >
              All
            </button>
          )}
          {sofaIsActive ? (
            <button
              onClick={() => filterItems('sofa')}
              className='cursor-pointer border-b-[1px] border-black font-bold'
            >
              Sofas
            </button>
          ) : (
            <button
              onClick={() => filterItems('sofa')}
              className='cursor-pointer border-black hover:border-b-[1px]'
            >
              Sofas
            </button>
          )}

          {lightingIsActive ? (
            <button
              onClick={() => filterItems('lighting')}
              className='cursor-pointer border-b-[1px] border-black font-bold'
            >
              Lighting
            </button>
          ) : (
            <button
              onClick={() => filterItems('lighting')}
              className='cursor-pointer border-black hover:border-b-[1px]'
            >
              Lighting
            </button>
          )}
          {diningIsActive ? (
            <button
              onClick={() => filterItems('dining')}
              className='cursor-pointer border-b-[1px] border-black font-bold'
            >
              Dining
            </button>
          ) : (
            <button
              onClick={() => filterItems('dining')}
              className='cursor-pointer border-black hover:border-b-[1px]'
            >
              Dining
            </button>
          )}
          {outdoorIsActive ? (
            <button
              onClick={() => filterItems('outdoor')}
              className='cursor-pointer border-b-[1px] border-black font-bold'
            >
              Outdoor
            </button>
          ) : (
            <button
              onClick={() => filterItems('outdoor')}
              className='cursor-pointer border-black hover:border-b-[1px]'
            >
              Outdoor
            </button>
          )}
          {bedroomIsActive ? (
            <button
              onClick={() => filterItems('bedroom')}
              className='cursor-pointer border-b-[1px] border-black font-bold'
            >
              Bedroom
            </button>
          ) : (
            <button
              onClick={() => filterItems('bedroom')}
              className='cursor-pointer border-black hover:border-b-[1px]'
            >
              Bedroom
            </button>
          )}
        </div>
      </div>
      <h1 className='text-xl'>{categoryTitle}</h1>
      <div className='grid grid-cols-1 space-y-2 md:grid-cols-4 md:space-y-0 md:space-x-2'>
        {data.map((item) => (
          <ProductCard
            img={item.img}
            alt={item.alt}
            description={item.description}
            price={item.price}
            category={item.category}
            room={item.room}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
