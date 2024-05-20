import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export const ChangeSliderButtons = ({ swiperRef }) => {
  return (
    <div className="flex gap-4">
      <button
        className="w-8 h-8 flex justify-center items-center hover:bg-red-200 transition-all rounded-full"
        onClick={() => swiperRef?.current.slidePrev()}
      >
        <ChevronLeftIcon className="w-6 h-6 text-red-600" />
      </button>
      <button
        className="w-8 h-8 flex justify-center items-center hover:bg-red-200 transition-all rounded-full"
        onClick={() => swiperRef?.current.slideNext()}
      >
        <ChevronRightIcon className="w-6 h-6 text-red-600" />
      </button>
    </div>
  );
};
