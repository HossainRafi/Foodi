export const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* image section */}
        <div className="md:w-1/2">
          <img src="/images/home/banner.png" />
          <div className="flex items-center justify-around flex-col md:flex-row -mt-14 gap-4">
            <div className="flex bg-white py-1 px-1 rounded-2xl items-center gap-3 shadow-md w-60">
              <img
                src="/images/home/b-food1.png"
                className="rounded-2xl h-[80px]"
              />
              <div className="space-y-0">
                <h5 className="capitalize font-medium mb-1">vegitable salad</h5>
                {/* ratting div */}
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    readOnly
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    readOnly
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    readOnly
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    readOnly
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                </div>
                <p className="text-red">$15.00</p>
              </div>
            </div>
            <div className="sm:flex hidden bg-white py-1 px-1 rounded-2xl items-center gap-3 shadow-md w-60">
              <img
                src="/images/home/b-food2.png"
                className="rounded-2xl h-[80px]"
              />
              <div className="space-y-0">
                <h5 className="capitalize font-medium mb-1">egg fruit salad</h5>
                {/* ratting div */}
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>
                <p className="text-red">$25.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* text section (left) */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="text-4xl md:text-5xl font-bold md:leading-snug leading-snug capitalize">
            dive into delights of delectable{" "}
            <span className="text-green">food</span>
          </h2>
          <p className="capitalize text-xl text-[#4A4A4A]">
            where each plate weaves a story of culinary mastery & passionate
            craftsmanship
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full capitalize">
            order now
          </button>
        </div>
      </div>
    </div>
  );
};
