import './footer.css';

const Footer = () => {
	const date = new Date();
	const fullYear = date.getFullYear();
	return (
		<footer className="w flex-col center">
			<div>
				<span className="font">By - </span>
				<span className="appsumo">APPSUMO</span>
				<span className="origin"> | ORIGINALS</span>
			</div>

			<small>
				Part of the <span>AppSumo</span> family. &#169; {fullYear} Sumo Group,
				Inc. All rights reserved. Terms. Privacy.
			</small>
		</footer>
	);
};

export default Footer;
