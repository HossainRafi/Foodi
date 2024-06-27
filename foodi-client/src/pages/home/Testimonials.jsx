/* eslint-disable react/no-unescaped-entities */
import bannerImg from "/images/home/testimonials/testimonials.png"



export const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* image section */}
        <div className="md:w-1/2">
          <img src={bannerImg} />
        </div>

        {/* text section */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">testimonials</p>
            <h2 className="title">what our customer says about us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! the attention to detail in presentation and service was impeccable"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
