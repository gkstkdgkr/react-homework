function Profile({ name, status = "tving", size = 234 }) {
  let profilePath = "";
  let description = "";

  switch (status) {
    default:
    case "tving":
      profilePath = "/icons/icon_tving.png";
      description = "tving profile";
      break;
    case "bear":
      profilePath = "/icons/icon_bear.png";
      description = "bear profile";
      break;
    case "girl":
      profilePath = "/icons/icon_girl.png";
      description = "girl profile";
      break;
    case "man":
      profilePath = "/icons/icon_man.png";
      description = "man profile";
      break;
  }

  return (
    <figure className="Profile" aria-label={description} title={description}>
      <img src={profilePath} alt={name} width={size} height={size} />
    </figure>
  );
}
export default Profile;
