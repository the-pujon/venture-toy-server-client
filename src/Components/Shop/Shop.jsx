import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "../ShopCard/ShopCard";
import "./Shop.scss";

import AOS from "aos";

AOS.init();

const Shop = ({ loadedToys }) => {
  const [usedToy, setUsedToy] = useState(loadedToys);
  const [toys, setToys] = useState(loadedToys);

  const handleSelect = (categoryName) => {
    setUsedToy(toys.filter((toy) => toy.subCategory === categoryName));
  };

  return (
    <div>
      <Tabs>
        <TabList>
          {/* categories */}
          {["Marvel", "DC", "Transformers", "Star Wars"].map(
            (category, index) => (
              <Tab key={index} onClick={() => handleSelect(category)}>
                {category}
              </Tab>
            )
          )}
        </TabList>

        {/* Showing cards by category */}
        {["Marvel", "DC", "Transformers", "Star Wars"].map(
          (category, index) => (
            <TabPanel key={index}>
              {/* Showing all card */}
              <div className="grid gap-4 m-8 grid-cols-1 md:grid-cols-2">
                {usedToy.map((toy) => (
                  <div key={toy._id} data-aos="flip-left">
                    <ShopCard toy={toy} />
                  </div>
                ))}
              </div>
            </TabPanel>
          )
        )}
      </Tabs>
    </div>
  );
};

export default Shop;
