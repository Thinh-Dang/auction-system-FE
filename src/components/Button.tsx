const Button = ({ classes, content, onClick }: IButtonProps) => {
  return (
    <div
      className={`flex primaryBtn rounded-lg py-[1rem] px-[2.5rem] btn ${classes}
       from-blue-400 to-main-light_blue text-h2 items-center justify-center bg-gradient-to-tr 
       hover: text-white`}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Button;
