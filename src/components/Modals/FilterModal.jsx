import React, { useState, useRef } from "react";
import {
  AdjustmentsIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useCheckIfClickedOutside } from "../../hooks";
import { setFilterText } from "../../features/posts/postSlice";

export const FilterModal = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const ref = useRef();
  useCheckIfClickedOutside(showFilterModal, ref, setShowFilterModal);

  const dispatch = useDispatch();

  const filterTypeHandler = type => {
    dispatch(setFilterText(type));
    setShowFilterModal(false);
  };

  return (
    <div className="relative" ref={ref}>
      <div className="icon group relative">
        <AdjustmentsIcon
          className="h-6 text-[#6e767d] group-hover:text-[#1d9bf0]"
          onClick={() => setShowFilterModal(!showFilterModal)}
        />
      </div>
      {showFilterModal && (
        <div className="w-[160px] h-auto bg-[#1E2732] absolute top-10 right-2 rounded-[4px] py-2 shadow border border-gray-700">
          <div
            className="flex items-center space-x-5 px-4 py-2 hover:bg-white hover:bg-opacity-[0.03] cursor-pointer"
            onClick={() => filterTypeHandler("Trending")}
          >
            <TrendingUpIcon className="h-5 text-white" />
            <h4 className="text-[16px]">Trending</h4>
          </div>
          <div
            className="flex items-center space-x-5 px-4 py-2 hover:bg-white hover:bg-opacity-[0.03] cursor-pointer"
            onClick={() => filterTypeHandler("Recent")}
          >
            <ArrowUpIcon className="h-5 text-white" />
            <h4 className="text-[16px]">Recent</h4>
          </div>
          <div
            className="flex items-center space-x-5 px-4 py-2 hover:bg-white hover:bg-opacity-[0.03] cursor-pointer"
            onClick={() => filterTypeHandler("Oldest")}
          >
            <ArrowDownIcon className="h-5 text-white" />
            <h4 className="text-[16px]">Oldest</h4>
          </div>
        </div>
      )}
    </div>
  );
};
