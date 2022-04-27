import userPhoto from "../../../assets/img/images.png";

const navBarItems = () => {
  return (
    <>
      <a href="#0">My Home</a>

      <a href="#0">Course Catalog</a>

      <a href="#0">Resources</a>

      <a href="#0">Community</a>

      <a href="#0">Plans + Pricing</a>
      <img
        src={userPhoto}
        alt="User"
        className="navbarItems__icon user-photo"
      />
      <button className="navbarItems__btn btn">Try pro for free</button>
    </>
  );
};

export default navBarItems;
