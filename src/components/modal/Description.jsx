// Displays passed text as a description for the selected store
const Description = ({ text }) => {
  // No text
  if (!text) return null;

  return (
    <div className="text-center xsm:text-left px-3 py-4">
      <p className="text-base">{text}</p>
    </div>
  );
};

export default Description;
