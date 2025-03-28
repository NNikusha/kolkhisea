const StatusBadge = ({ status }: { status: string }) => {
    return (
      <div
        className={`text-[12px] 2xl:px-[16px] h-[32px] lg:h-auto flex justify-center items-center py-[10px] lg:py-[10px] 2xl:py-[12px] rounded-full bg-opacity-10 w-[100px] 2xl:w-auto ${
          status === "Completed"
            ? "bg-[#01A43D1A] text-[#01A43D]"
            : "bg-[#E6FF001A] text-[#A6A100]"
        }`}
      >
        <p className='inline-block text-[12px] lg:text-[14px] 2xl:text-[16px]'>{status}</p>
      </div>
    );
  };
  
  export default StatusBadge;
  