import React, { Component } from 'react';
//import Copyright from './copyright';
import Link from 'next/link';

class Footer_v1 extends Component {

	// componentDidMount() {
	// 	const $ = window.$;
	// 	let publicUrl = process.env.PUBLIC_URL + '/'
	// 	const minscript = document.createElement("script");
	// 	minscript.async = true;
	// 	minscript.src = publicUrl + "assets/js/main.js";
	// 	document.body.appendChild(minscript);
	// 	$('.go-top').find('a').on('click', function () {
	// 		$(".quarter-overlay").fadeIn(1);
	// 		$(window).scrollTop(0);
	// 		setTimeout(function () {
	// 			$(".quarter-overlay").fadeOut(300);
	// 		}, 800);
	// 	});
	// 	$(document).on('click', '.theme-btn-1 ', function () {
	// 		$('div').removeClass('modal-backdrop');
	// 		$('div').removeClass('show');
	// 		$('div').removeClass('fade');
	// 		$('body').attr("style", "");
	// 	});
	// }

	render() {

		return (
			<footer className="ltn__footer-area  ">
				<div className="footer-top-area  section-bg-2 plr--5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-4 col-md-4 col-sm-6 col-12">
								<div className="footer-widget footer-about-widget">
									<div className="footer-logo">
										<div className="site-logo">
											<img src='/valeImages/logos/logo-no-bg.png' alt="Vale Building Services Logo" />
										</div>
									</div>
									<p>Professional and efficient property maintenance and refurbishment at affordable prices.</p>
									<p>Vale Building Limited (trading as Vale Building Services)<br/>Registered in England and Wales No. 11027613<br/>VAT Number: 28989223</p>
									<div className="footer-address">
										<ul>
											<li>
												<div className="footer-address-icon">
													<i className="icon-placeholder" />
												</div>
												<div className="footer-address-info">
													<p>Kingston Upon Thames, London, UK</p>
												</div>
											</li>
											<li>
												<div className="footer-address-icon">
													<i className="icon-call" />
												</div>
												<div className="footer-address-info">
													<p><a href="tel:02036673833">02036673833</a></p>
												</div>
											</li>
											<li>
												<div className="footer-address-icon">
													<i className="icon-call" />
												</div>
												<div className="footer-address-info">
													<p><a href="tel:07786400595">07786400595</a></p>
												</div>
											</li>
											<li>
												<div className="footer-address-icon">
													<i className="icon-mail" />
												</div>
												<div className="footer-address-info">
													<p><a href="mailto:admin@valeinfo.co.uk">admin@valeinfo.co.uk</a></p>
												</div>
											</li>
										</ul>
									</div>
									{/* <div className="ltn__social-media mt-20">
										<Social />
									</div> */}
								</div>
							</div>
							<div className="col-xl-4 col-md-4 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix pt-80" >
									<h4 className="footer-title">Company</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link href="/#about">About</Link></li>
											<li><Link href="/#services">Services</Link></li>
											<li><Link href="/testimonials">Testimonials</Link></li>
											<li><Link href="/contact">Contact</Link></li>
											<li><Link href="/privacy-policy">Privacy Policy</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-4 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix pt-80" >
									<h4 className="footer-title">Services</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link href="/services/refurbishments">Refurbishments</Link></li>
											<li><Link href="/services/plumbing">Plumbing</Link></li>
											<li><Link href="/services/gas-and-boiler-works">Gas & Boilers Works</Link></li>
											<li><Link href="/services/kitchen-and-bathroom-fitting">Kitchen & Bathroom Fitting</Link></li>
											<li><Link href="/services/redecoration-and-handyman">Redecoration & Handyman</Link></li>
											<li><Link href="/services/general-building-and-exterior-works">General Building & Exterior Works</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p className='text-center bendando-link' style={{ margin: '16px 0 0 0', padding: 0 }}><a href="https://bendando.com/" target="_blank">Website by Bendando</a></p>
					</div>
				</div>

				{/* <Copyright /> */}
			</footer>
		)
	}
}


export default Footer_v1