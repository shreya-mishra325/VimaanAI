const Logo = ({
  size = "text-3xl",
  iconSize = "w-7 h-7",
  color = "text-gray-900",
//   iconColor = "text-blue-600",
  className = ""
}) => {
  return (
    <span className={`inline-flex items-center gap-2 ${size} font-bold ${color} ${className}`}>
      <span>VimaanAI</span>
      <img mt-9
        src="/aero.png"
        alt="Plane icon"
        className={`inline-block ${iconSize} align-middle`}
      />
    </span>
  );
};

export default Logo;

