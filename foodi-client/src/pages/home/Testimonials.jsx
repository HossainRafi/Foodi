/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa6";
import avatar1 from "/images/home/testimonials/testimonial1.png";
import avatar2 from "/images/home/testimonials/testimonial2.png";
import avatar3 from "/images/home/testimonials/testimonial3.png";
import testimonialImage from "/images/home/testimonials/testimonials.png";

export const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* image section */}
        <div className="md:w-1/2">
          <img src={testimonialImage} />
        </div>

        {/* text section */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">testimonials</p>
            <h2 className="title">what our customers says about us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              "I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! the attention to detail in
              presentation and service was impeccable"
            </blockquote>

            {/* avatar */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src={avatar1} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={avatar2} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={avatar3} />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="uppercase text-lg font-semibold">customers feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-[#807E7E]">(15.9k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
