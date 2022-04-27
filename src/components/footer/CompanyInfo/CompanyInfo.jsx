import GooglePlayIcon from "../../../assets/svg/googleplay.svg";
import AppleStoreIcon from "../../../assets/svg/applestore.svg";

const CompanyInfo = () => {
	return (
		<div className="infoContainer">
			<div className="footerItems">
				<h3 className="footerItems__title">Company</h3>
				<div className="footerItems__items">
					<a href="#0">About</a>
					<a href="#0">We're Hiring</a>
					<a href="#0">Shop</a>
				</div>
			</div>
			<div className="footerItems">
				<h3 className="footerItems__title">Resources</h3>
				<div className="footerItems__items">
					<a href="#0">Blog</a>
					<a href="#0">CheatSheets</a>
					<a href="#0">Articles</a>
				</div>
			</div>

			<div className="footerItems">
				<h3 className="footerItems__title">Support</h3>
				<div className="footerItems__items">
					<a href="#0">Help Center</a>
				</div>
			</div>
			<div className="footerItems">
				<h3 className="footerItems__title">Community</h3>
				<div className="footerItems__items">
					<a href="#0">forums</a>
					<a href="#0">Chapter</a>
					<a href="#0">Events</a>
				</div>
			</div>

			<div className="footerItems">
				<h3 className="footerItems__title">Individual plans</h3>
				<div className="footerItems__items">
					<a href="#0">Pro membership</a>
					<a href="#0">pro students</a>
				</div>
			</div>
			<div className="footerItems">
				<h3 className="footerItems__title">Enterprise plans</h3>
				<div className="footerItems__items">
					<a href="#0">for business</a>
					<a href="#0">for education</a>
				</div>
			</div>

			<div className="footerItems">
				<h3 className="footerItems__title">Mobile</h3>
				<div className="footerItems__items mobileIcon">
					<a href="#0">
						<img
							src={GooglePlayIcon}
							alt="googleplay icon"
							className="googleplayIcon"
						/>
					</a>
					<a href="#0">
						<img src={AppleStoreIcon} alt="applestore icon" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default CompanyInfo;
