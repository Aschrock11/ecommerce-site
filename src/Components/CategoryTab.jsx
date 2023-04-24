import React from 'react';

const CategoryTab = ({
  tabName,
  activeTab,
  active,
  filterName,
  filterItems,
  handleActiveTab,
  setTitleName,
}) => {
  console.log(active);
  console.log(activeTab);
  return (
    <div>
      <button
        className={`${
          activeTab === active
            ? 'cursor-pointer border-b border-black font-bold'
            : 'cursor-pointer border-black hover:border-b'
        }`}
        onClick={() => {
          filterItems(filterName);
          handleActiveTab(active);
          setTitleName(tabName);
        }}
      >
        {tabName}
      </button>
    </div>
  );
};

export default CategoryTab;
