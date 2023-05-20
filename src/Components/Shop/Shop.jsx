import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from "../ShopCard/ShopCard";
import "./Shop.scss";

const Shop = ({ loadedToys }) => {
  const [usedToy, setUsedToy] = useState(loadedToys);
  const [toys, setToys] = useState(loadedToys);

  const handleSelect = (categoryName) => {
    if (categoryName === "All") {
      setUsedToy(toys);
      console.log(usedToy);
    } else {
      setUsedToy(toys.filter((toy) => toy.subCategory === categoryName));
    }
  };

  return (
    <div>
      <Tabs>
        <TabList>
          {["All", "Marvel", "DC", "Transformers", "Star Wars"].map(
            (category, index) => (
              <Tab key={index} onClick={() => handleSelect(category)}>
                {category}
              </Tab>
            )
          )}
        </TabList>

        {["All", "Marvel", "DC", "Transformers", "Star Wars"].map(
          (category, index) => (
            <TabPanel key={index}>
              <div className="grid gap-4 m-8 grid-cols-2">
                {usedToy.map((toy) => (
                  <div key={toy._id}>
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
