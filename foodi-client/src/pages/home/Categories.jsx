export const Categories = () => {
  // category data
  const categoryItems = [
    {
      id: 1,
      title: "Main Dish",
      despriction: "(86 dishes)",
      image: "/images/home/category/img1.png",
    },
    {
      id: 2,
      title: "Break Fast",
      despriction: "(12 break fast)",
      image: "/images/home/category/img2.png",
    },
    {
      id: 3,
      title: "Dessert",
      despriction: "(48 dessert)",
      image: "/images/home/category/img3.png",
    },
    {
      id: 4,
      title: "Browse All",
      despriction: "(255 Items)",
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
      <div></div>
    </section>
  );
};
