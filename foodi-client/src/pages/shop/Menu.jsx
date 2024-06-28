import { useEffect, useState } from "react";

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // loading data
  useEffect(() => {
    // fetching data from backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        // console.log(data)
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("error fetching error", error);
      }
    };
    fetchData();
  }, []);

  // filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  // show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
  };

  // sorting based on A-Z, Low-Htgh pricing
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    // sorting logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {/* menu banner */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          {/* text section */}
          <div className="text-center space-y-7 px-4">
            <h2 className="text-4xl md:text-5xl font-bold md:leading-snug leading-snug capitalize">
              for the love of delicious <span className="text-green">food</span>
            </h2>
            <p className="md:w-4/5 mx-auto text-xl text-[#4A4A4A]">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full capitalize">
              order now
            </button>
          </div>
        </div>
      </div>

      {/* menu category */}
      <div className="section-container"></div>
    </div>
  );
};
