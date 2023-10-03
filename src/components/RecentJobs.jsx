import React, { useState } from "react";
import HomeCard from "./HomeCard";
import Avatar1 from "../img/avatars/av1.json";
import Avatar2 from "../img/avatars/av2.json";
import AddJobForm from "./AddJobForm";
import { Link } from "react-router-dom";

const RecentJobs = () => {
  const [jobListings, setJobListings] = useState([
    {
      title: "Account Executive Web3",
      type: "Part Time",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been is simply dummy text of the printing...",

      salary: "50,000",
      organization: "Polygon pvt ltd.",
      shift: "10:00 - 14:00",
      requirements: "HTML, CSS, Reactjs",
      img: Avatar1,
      telegramUrl: "https://google.com/",
    },
    {
      title: "Marketing Intern",
      type: "Full Time",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been is simply dummy text of the printing...",

      salary: "50,000",
      organization: "Bitcoin pvt ltd.",
      shift: "10:00 - 14:00",
      requirements: "HTML, CSS, Reactjs",
      img: Avatar2,
      telegramUrl: "https://telegram.org/",
    },
  ]);


  return (
    <div className=" mt-16">
      <p className="text-2xl font-medium text-center">Recent Jobs</p>
      {jobListings.map((job, index) => (
        <HomeCard
          key={index}
          title={job.title}
          type={job.type}
          subTitle={job.subTitle}
          salary={job.salary}
          organization={job.organization}
          shift={job.shift}
          requirements={job.requirements}
          img={job.img}
          telegramUrl={job.telegramUrl}
        />
      ))}
    </div>
  );
};

export default RecentJobs;
