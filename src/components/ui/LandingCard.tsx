import React from "react";
import { MdOutlineFastfood } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";

import Tag from "../common/Tag";
import UserInfo from "./UserInfo";
import Button from "../common/Button";
import Image from "next/image";

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strCategory: string;
  strInstructions: string;
  strArea: string;
  strTags: string;
};

const LandingCard = ({ meal }: { meal: Meal }) => {
  const tagsArray = meal.strTags ? meal.strTags.split(",") : [];

  return (
    <article className="flex w-full max-w-auto rounded-4xl overflow-hidden">
      {/* Left Section */}
      <div className="flex-1 bg-sky-blue ">
        <div className="flex flex-col gap-6 p-10">
          <div className="flex gap-2">
            <h1 className="font-semibold text-7xl leading-tight">
              <div className="flex gap-2">
                {tagsArray.map((tag: string, index: number) => (
                  <Tag
                    key={index}
                    name={tag}
                    bgColor="bg-white"
                    textColor="text-black"
                  />
                ))}
              </div>
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-7xl leading-tight">
              {meal.strMeal.split(" ").slice(0, 5).join(" ")}
            </h1>
            <p className="text-[16px] text-black mt-6 font-light">
              {meal.strInstructions.split(" ").slice(0, 31).join(" ")} ....
            </p>
            <div className="flex gap-4">
              <Tag icon={<MdOutlineFastfood />} name={meal.strCategory} />
              <Tag icon={<PiMapPinAreaBold />} name={meal.strArea} />
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <UserInfo
              image="/userImage.png"
              userName="John Doe"
              date="2 days ago"
            />
            <Button text="View Recipes" icon={<FaPlayCircle />} />
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 relative bg-sky-blue">
        <Image
          src={meal.strMealThumb}
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
