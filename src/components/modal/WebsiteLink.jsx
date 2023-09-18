const WebsiteLink = ({ link }) => {
  // if (!link) return null;

  const LinkButton = ({ link, unavailable = false }) => {
    // Unavailable link => Gray Button & No Link, Available Link => Blue Button & Link
    const backgroundColor = unavailable ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400";

    // If theres no link, we will return null otherwise pass the link to the href
    // const siteLink = unavailable ? null : `https://www.${link}`;
    const siteLink = unavailable ? null : link;

    return (
      <a
        // href={`https://www.${link}`}
        // href={link}
        href={siteLink}
        target="_blank"
        rel="noreferrer"
        className={`${backgroundColor} flex justify-center items-center w-full h-full- h-12 text-white rounded-md px-8 py-2`}
        onClick={(e) => {
          //prevents page refresh if link is unavailable
          unavailable && e.preventDefault();
        }}
      >
        <button type="button" className={`${unavailable && "cursor-not-allowed"}`}>
          <span className="text-white font-semibold ">Visit Website</span>
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
