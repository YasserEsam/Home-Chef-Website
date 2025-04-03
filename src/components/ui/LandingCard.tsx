import React from "react";
import { FaRegClock } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";

import Tag from "../common/Tag";
import UserInfo from "./UserInfo";
import Button from "../common/Button";
import Image from "next/image";

const LandingCard = () => {
  return (
    <article className="flex w-full max-w-auto rounded-4xl overflow-hidden">
  {/* Left Section */}
  <div className="flex-1 bg-sky-blue ">
    <div className="flex flex-col gap-6 p-10">
      <div className="px-5 py-2 rounded-4xl cursor-pointer bg-white w-fit">
        <h3 className="text-sm font-semibold text-black">Hot Recipes</h3>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-7xl leading-tight">
          Spicy delicious chicken wings
        </h1>
        <p className="text-[16px] text-black mt-6 font-light">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magn alabore et dolore magna
          aliqut enim ad minim
        </p>
        <div className="flex gap-4">
          <Tag icon={<FaRegClock />} name="30 minutes" />
          <Tag icon={<PiForkKnifeFill />} name="Chicken" />
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <UserInfo image="/userImage.png" userName="John Doe" date="2 days ago" />
        <Button text="View Recipes" icon={<FaPlayCircle />} />
      </div>
    </div>
  </div>

  {/* Right Section (Image) */}
  <div className="flex-1 relative">
    <Image
      src="/food-image.svg"
      alt="Landing Image"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
    />
  </div>
</article>
  );
};

export default LandingCard;
