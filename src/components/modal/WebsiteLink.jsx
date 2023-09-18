const WebsiteLink = ({ link }) => {
  // if (!link) return null;

  const LinkButton = ({ link, unavailable = false }) => {
    // Unavailable link => Gray Button & No Link, Available Link => Blue Button & Link
    const backgroundColor = unavailable ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 hover:shadow-md";

    // If theres no link, we will return null otherwise pass the link to the href
    const siteLink = unavailable ? null : link;

    return (
      <a
        href={siteLink}
        target="_blank"
        rel="noreferrer"
        className={`${backgroundColor} flex justify-center items-center w-full h-12 text-white rounded-md px-8 py-2 shadow-sm shadow-[#bdbdbd] transition-all ease-in-out duration-300`}
        onClick={(e) => {
          //prevents page refresh if link is unavailable
          unavailable && e.preventDefault();
        }}
      >
        <button type="button" className={`${unavailable && "cursor-not-allowed"}`}>
          <span className="text-white font-semibold">Visit Website</span>
        </button>
      </a>
    );
  };

  return (
    <div className="flex justify-center items-center">
      {link ? <LinkButton link={link} /> : <LinkButton link={link} unavailable />}
    </div>
  );
};

export default WebsiteLink;
