import { Banner } from "../../components/Banner";
import { Categories } from "./Categories";
import { Service } from "./Service";
import { SpecialDishes } from "./SpecialDishes";
import { Testimonials } from "./Testimonials";

export const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Service />
    </>
  );
};
