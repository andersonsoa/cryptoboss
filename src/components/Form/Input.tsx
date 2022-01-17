interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="flex border text-sm border-gray-700 rounded-lg items-center group focus-within:border-gray-400">
      <label htmlFor={name} className="px-4 py-2 text-right w-1/3 text-gray-400 border-r border-r-gray-700 box-content">
        {label}
      </label>
      <div>
        <input id={name} name={name} type="text" className="bg-transparent w-full outline-none px-4" placeholder="0,0000000" {...rest} />
      </div>
    </div>
  );
};
