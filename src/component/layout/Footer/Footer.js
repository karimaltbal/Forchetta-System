import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaFacebookSquare, FaInstagramSquare, FaYelp} from "react-icons/fa";

import "./footer.css"



const Footer = () => {
	const { t } = useTranslation();

	function Mailto({ email, ...props }) {
		return (
		<a href={`mailto:${email}`}>
			{props.children}
		</a>
		);
	}

    return (
        <footer className="footer-area">
			<div className="footer-widget-wrap">
				<div className="container">
					<div className="row section-gap">
						<div className="col-lg-4  col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h4>{t("home.footer.about.title")}</h4>
								<ul className="hr-list">
									<li className="d-flex justify-content-between">
										<p>{t("home.footer.about.description")}</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4  col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h4>{t("home.footer.conact.title")}</h4>
								<p>{t("home.footer.conact.address")}</p>
								<p className="number">
									<Mailto email="Forchettauae@gmail.com" obfuscate={true}>
										Forchettauae@gmail.com
									</Mailto><br/>
									0509435155 
								</p>
							</div>
						</div>						
						<div className="col-lg-4  col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h4>{t("home.footer.media.title")}</h4>
								<p>{t("home.footer.media.description")}</p>
								<div className="d-flex flex-row" id="mc_embed_signup">
										<ul className='list-unstyled footerIcon'>
											<li>
												<Link to="https://www.facebook.com/ForchettaCharlotte/">
													<FaFacebookSquare />
												</Link>
											</li>
											<li>
												<Link to="https://www.instagram.com/forchettacharlotte/?hl=en">
													<FaInstagramSquare />
												</Link>
											</li>
											<li>
												<Link to="https://www.yelp.com/biz/forchetta-charlotte?osq=forchetta">
													<FaYelp />
												</Link>
											</li>
										</ul>
								</div>
							</div>
						</div>						
					</div>					
				</div>					
			</div>
			{/*<div className="footer-bottom-wrap">
				<div className="container">
					<div className="row footer-bottom d-flex justify-content-between align-items-center">
						<p className="col-lg-8 col-mdcol-sm-6 -6 footer-text m-0 text-center">
							Copyright ©
						</p>
					</div>						
				</div>
			</div>*/}
		</footer>
    );
}

export default Footer