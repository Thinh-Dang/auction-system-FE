const Button = ({
   classes,
   content,
   type = "button",
   onClick,
}: IButtonProps) => {
   return (
      <button
         className={`flex primaryBtn rounded-lg py-[1rem] px-[2.5rem] btn ${classes}`}
         onClick={onClick}
         type={type}
      >
         {content}
      </button>
   );
};

export default Button;
