import React, { useEffect, useState } from 'react';
import Store from './Store';
import ProductCard from './ProductCard';
import CategoryTab from './CategoryTab';

function Shop() {
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
  useEffect(() => {}, [data]);

  return (
    <div>
      <div className=''>
        <div className='mb-8 mt-8 ml-6 flex justify-between gap-20  overflow-x-scroll md:justify-evenly'>
          <CategoryTab
            tabName={'All'}
            activeTab={activeTab}
            active={1}
            filterName={'all'}
            filterItems={filterItems}
            handleActiveTab={handleActiveTab}
            setTitleName={setTitleName}
          />
          <CategoryTab
            tabName={'Sofas'}
            activeTab={activeTab}
            active={2}
            filterName={'sofa'}
            filterItems={filterItems}
            handleActiveTab={handleActiveTab}
            setTitleName={setTitleName}
          />
          <CategoryTab
            tabName={'Lighting'}
            activeTab={activeTab}
            active={3}
            filterName={'lighting'}
            filterItems={filterItems}
            handleActiveTab={handleActiveTab}
            setTitleName={setTitleName}
          />
          <CategoryTab
            tabName={'Dining'}
            activeTab={activeTab}
            active={4}
            filterName={'dining'}
            filterItems={filterItems}
            handleActiveTab={handleActiveTab}
            setTitleName={setTitleName}
          />
          <CategoryTab
            tabName={'Outdoor'}
            activeTab={activeTab}
            active={5}
            filterName={'outdoor'}
            filterItems={filterItems}
            handleActiveTab={handleActiveTab}
            setTitleName={setTitleName}
          />
          <CategoryTab
            tabName={'Bedroom'}
            activeTab={activeTab}
            active={6}
            filterName={'bedroom'}
            filterItems={filterItems}
            handleActiveTab={handleActiveTab}
            setTitleName={setTitleName}
          />
        </div>
      </div>
      <h1 className='ml-6 mb-8 text-xl'>{titleName}</h1>
      <div className='grid grid-cols-1 space-y-2 md:grid-cols-4 md:space-y-0 md:space-x-2'>
        {data.map((item) => (
          <ProductCard
            img={item.img}
            alt={item.alt}
            title={item.title}
            price={item.price}
            category={item.category}
            key={item.id}
            productId={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
