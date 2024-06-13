type InputErrorMessageProps = {
  message: string;
  className?: string;
};

const InputErrorMessage = ({ message, className }: InputErrorMessageProps) => {
  return <span className={`text-sm text-red-500 ${className}`}>{message}</span>;
};

export default InputErrorMessage;
