// DISPLAYS STORE DESCRIPTION
const Description = ({ text }) => {
  // IF STORE HAS NO DESCRIPTION RETURN NOTHING
  if (!text) return null;

  return (
    <div className="text-center xsm:text-left px-3 py-4">
      <p className="text-base">{text}</p>
    </div>
  );
};

export default Description;
