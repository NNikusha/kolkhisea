import React from "react";
import FilterButton from "../../atoms/FilterButton/FilterButton";
import { FilterItemProps } from "@/app/types/type";

const FilterItem: React.FC<FilterItemProps> = ({
  label,
  options = [],
  activeOption,
  onSelect = () => {}, 
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <p className="text-black md:text-white">{label}</p>
      <div className="flex gap-2 justify-between xl:gap-4 w-fit">
        {options.map((option) => {
          const isObjectOption = typeof option === 'object' && option !== null;
          const optionValue = isObjectOption ? option.value : option;
          const optionLabel = isObjectOption ? option.label : option;
          
          return (
            <div key={optionValue}>
              <FilterButton
                active={optionValue === activeOption}
                onClick={() => onSelect(optionValue)}
                padding={label === "The number of rooms" ? "large" : "default"}
              >
                {optionLabel}
              </FilterButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterItem;