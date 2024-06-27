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
      title: "Break Fast",
      desc: "(12 break fast)",
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
        <p className="subtitle">customers favourites</p>
        <h2 className="title">popular categories</h2>
      </div>

      {/* card section */}
      <div>
        {categoryItems.map((item, index) => (
          <div key={index}>
            <div>
              <img
                src={item.image}
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
