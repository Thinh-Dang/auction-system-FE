const Button = ({
   classes,
   content,
   type = "button",
   onClick,
}: IButtonProps) => {
   return (
      <button
         className={`flex primaryBtn rounded-lg py-[1em] px-[3rem] btn ${classes}`}
         onClick={onClick}
         type={type}
      >
         {content}
      </button>
   );
};

export default Button;
