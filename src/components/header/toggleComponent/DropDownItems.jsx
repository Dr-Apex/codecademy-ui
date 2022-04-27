import course from "../../../assets/svg/agenda.svg";
import community from "../../../assets/svg/chat-group.svg";
import price from "../../../assets/svg/dollar.svg";
import home from "../../../assets/svg/home.svg";
import book from "../../../assets/svg/book.svg";
import userPhoto from "../../../assets/img/images.png";

const DropDownItems = () => {
  return (
    <>
      <a href="#0">
        <img src={home} alt="home icon" className="navbar__icon--md" />
        My Home
      </a>

      <a href="#0">
        <img src={course} alt="course icon" className="navbar__icon--md" />
        Course Catalog
      </a>

      <a href="#0">
        <img src={book} alt="book icon" className="navbar__icon--md" />
        Resources
      </a>

      <a href="#0">
        <img
          src={community}
          alt="community icon"
          className="navbar__icon--md"
        />
        Community
      </a>

      <a href="#0">
        <img src={price} alt="price icon" className="navbar__icon--md" />
        Plans + Pricing
      </a>

      <a href="#0">
        <img
          src={userPhoto}
          alt="User"
          className="navbar__icon--md user-photo"
        />
        Alex
      </a>
    </>
  );
};

export default DropDownItems;
