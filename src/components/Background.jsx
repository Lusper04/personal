
const BackgroundLighting = ({ isLit }) => {
  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none transition-all duration-700 ${
        isLit
          ? "bg-gradient-to-b from-white via-white to-transparent"
          : "bg-black"
      }`}
    />
  );
};

export default BackgroundLighting;
