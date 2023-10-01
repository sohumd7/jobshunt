import React from "react";
import HomeCard from "./HomeCard";

import Avatar1 from "../img/avatars/av1.json";
import Avatar2 from "../img/avatars/av2.json";

const FeaturedJobs = () => {
  return (
    <div className=" mt-16">
      <p className=" text-2xl font-medium  text-center">Featured Jobs</p>

      <HomeCard
        title="Marketing Intern"
        type={"Full  Time"}
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been is simply dummy text of the printing..."
        salary={"50,000"}
        organization={"Bitcoin pvt ltd."}
        shift={"10:00 - 14:00"}
        requirements={"HTML, CSS, Reactjs"}
        img={Avatar2}
        telegramUrl="https://telegram.org/"
      />

      <HomeCard
        title="Account Executive Web3"
        type={"Part Time"}
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been is simply dummy text of the printing..."
        salary={"50,000"}
        organization={"Polygon pvt ltd."}
        shift={"10:00 - 14:00"}
        requirements={"HTML, CSS, Reactjs"}
        img={Avatar1}
        telegramUrl="https://google.com/"
      />
    </div>
  );
};

export default FeaturedJobs;