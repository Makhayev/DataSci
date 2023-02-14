interface InputProps {
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number | readonly string[];
}

/**
 * An input element
 */
const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    value = "",
    placeholder = "",
    onChange = () => null,
    name = "",
  } = props;
  function triggerOnChangeEvent(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event);
  }

  return (
    <input
      type="text"
      className="border-2 border-gray-300 w-full px-3 py-1.5 rounded-md shadow-md focus:border-gray-400"
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={triggerOnChangeEvent}
    />
  );
};

<Input />;
export default Input;
