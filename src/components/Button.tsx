const Button = ({ classes, content, onClick }: IButtonProps) => {
  return (
    <div
      className={`flex primaryBtn rounded-lg py-[1rem] px-[2.5rem] btn ${classes}`}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Button;
