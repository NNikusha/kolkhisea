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
    <div className="flex flex-col gap-6">
      <p>{label}</p>
      <div className="flex gap-2 xl:gap-4">
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
