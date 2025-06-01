
const BackgroundLighting = ({ isLit }) => {
  return (
    <div
      className={`fixed inset-0 -z-10 pointer-events-none transition-all duration-700 ${
        isLit
          ? "bg-gradient-to-b from-white/[0.05] via-white/[0.05] to-transparent"
          : "bg-black"
      }`}
    />
  );
};

export default BackgroundLighting;
