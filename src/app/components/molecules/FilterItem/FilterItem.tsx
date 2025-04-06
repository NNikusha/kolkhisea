import React from "react";
import FilterButton from "../../atoms/FilterButton/FilterButton";
import { FilterItemProps } from "@/app/types/type";

const FilterItem: React.FC<FilterItemProps> = ({
  label,
  options,
  activeOption,
  onSelect,
}) => {
  return (
    <div className="flex flex-col  gap-4 md:gap-6">
      <p className="text-black md:text-white">{label}</p>
      <div className="flex gap-2 justify-between xl:gap-4 w-[90%]">
        {options.map((option) => (
          <div key={option}>
            <FilterButton
              active={option === activeOption}
              onClick={() => onSelect(option)}
              padding={label === "The number of rooms" ? "large" : "default"}
            >
              {option}
            </FilterButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterItem;
