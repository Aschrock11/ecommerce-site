import React, { useEffect, useState } from 'react';
import Store from './Store';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function Shop({ categoryTitle }) {
  const [data, setData] = useState(Store);
  const [titleName, setTitleName] = useState('All');
  const [activeTab, setActiveTab] = useState(1);

  const filterItems = (category) => {
    if (category === 'all') {
      return setData(Store);
    }
    const filteredArray = Store.filter((item) => {
      return item.category.includes(category);
    });
    setData(filteredArray);
  };

  // add new useState containing title and pull from new array

  //figure out how to toggle active state for one and only one tab at a time
  const handleActiveTab = (number) => {
    setActiveTab(number);
  };
  useEffect(() => {
    // if (categoryTitle === 'sofa') {
    //   setActiveTab(2);
    //   setTitleName('Sofa');
    // } else if (categoryTitle === 'lighting') {
    //   setActiveTab(3);
    //   setTitleName('Lighting');
    // } else if (categoryTitle === 'dining') {
    //   setActiveTab(4);
    //   setTitleName('Dining');
    // } else if (categoryTitle === 'outdoor') {
    //   setActiveTab(5);
    //   setTitleName('Outdoor');
    // } else if (categoryTitle === 'bedroom') {
    //   setActiveTab(6);
    //   setTitleName('Bedroom');
    // }
  }, [data]);

  return (
    <div>
      <div className=''>
        <div className='mb-8 mt-8 hidden justify-evenly md:flex'>
          <button
            className={`${
              activeTab === 1
                ? 'cursor-pointer border-b-2 border-black font-bold'
                : 'cursor-pointer border-black hover:border-b'
            }`}
            onClick={() => {
              filterItems('all');
              handleActiveTab(1);
              setTitleName('All');
            }}
          >
            All
          </button>
          <button
            className={`${
              activeTab === 2
                ? 'cursor-pointer border-b-2 border-black font-bold'
                : 'cursor-pointer border-black hover:border-b'
            } `}
            onClick={() => {
              filterItems('sofa');
              handleActiveTab(2);
              setTitleName('Sofas');
            }}
          >
            <Link to={'sofa'} />
            Sofa
          </button>
          <button
            className={`${
              activeTab === 3
                ? 'cursor-pointer border-b-2 border-black font-bold'
                : 'cursor-pointer border-black hover:border-b'
            } `}
            onClick={() => {
              filterItems('lighting');
              handleActiveTab(3);
              setTitleName('Lighting');
            }}
          >
            Lighting
          </button>
          <button
            className={`${
              activeTab === 4
                ? 'cursor-pointer border-b-2 border-black font-bold'
                : 'cursor-pointer border-black hover:border-b'
            }`}
            onClick={() => {
              filterItems('dining');
              handleActiveTab(4);
              setTitleName('Dining');
            }}
          >
            Dining
          </button>
          <button
            className={`${
              activeTab === 5
                ? 'cursor-pointer border-b-2 border-black font-bold'
                : 'cursor-pointer border-black hover:border-b'
            }`}
            onClick={() => {
              filterItems('outdoor');
              handleActiveTab(5);
              setTitleName('Outdoor');
            }}
          >
            Outdoor
          </button>
          <button
            className={`${
              activeTab === 6
                ? 'cursor-pointer border-b-2 border-black font-bold'
                : 'cursor-pointer border-black hover:border-b'
            }`}
            onClick={() => {
              filterItems('bedroom');
              handleActiveTab(6);
              setTitleName('Bedroom');
            }}
          >
            Bedroom
          </button>
        </div>
      </div>
      <h1 className='text-xl'>{titleName}</h1>
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
            productId={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
