export const Categories = () => {
  // category data
  const categoryItems = [
    {
      id: 1,
      title: "Main Dish",
      desc: "(86 dishes)",
      image: "/images/home/category/img1.png",
    },
    {
      id: 2,
      title: "Breakfast",
      desc: "(12 breakfast)",
      image: "/images/home/category/img2.png",
    },
    {
      id: 3,
      title: "Dessert",
      desc: "(48 dessert)",
      image: "/images/home/category/img3.png",
    },
    {
      id: 4,
      title: "Browse All",
      desc: "(255 Items)",
      image: "/images/home/category/img4.png",
    },
  ];
  return (
    <section className="section-container py-16">
      {/* heading section */}
      <div className="text-center">
        <p className="subtitle">customers favourite</p>
        <h2 className="title">popular categories</h2>
      </div>

      {/* card section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all border border-[#C1F1C6]"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.image}
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-2">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
