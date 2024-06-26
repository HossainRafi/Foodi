import banner from "/images/home/banner.png";
import floatingImg from "/images/home/b-food1.png";

export const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
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

        {/* image section (right) */}
        <div className="md:w-1/2">
          <img src={banner} />

          <div>
            <div>
              <img src={floatingImg} className="rounded-2xl" />
              <div>
                <h5 className="capitalize ">spicy noodles</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
