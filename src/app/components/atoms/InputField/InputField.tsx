type InputFieldProps = {
    label: string
    id: string
    type?: string
    placeholder?: string
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
    className?: string
  }
  
  const InputField = ({
    label,
    id,
    type = 'text',
    placeholder,
    onInput,
    inputMode,
    className = '',
  }: InputFieldProps) => (
    <div className="pb-[24px]">
      <label htmlFor={id} className="block font-normal text-[#1C1C1E] pb-[8px]">
        {label}
      </label>
      <div className="w-full border border-[#E3E3E3] rounded-[8px] px-4 py-3 focus-within:border-[#1C1C1E] transition-colors duration-200">
        <input
          type={type}
          id={id}
          name={id}
          inputMode={inputMode}
          onInput={onInput}
          className={`w-full border-none outline-none text-[#1C1C1E] placeholder-[#D3D3D3] ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
  
  export default InputField