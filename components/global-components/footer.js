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

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="ltn__footer-area  ">
				<div className="footer-top-area  section-bg-2 plr--5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-4 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-about-widget">
									<div className="footer-logo">
										<div className="site-logo">
											<img src='/valeImages/logos/logo.png' alt="Logo" />
										</div>
									</div>
									<p>Professional and efficient property maintenance and refurbishment at affordable prices.</p>
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
							<div className="col-xl-4 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Company</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link href="#about">About</Link></li>
											<li><Link href="#services">Services</Link></li>
											<li><Link href="/testimonials">Testimonials</Link></li>
											<li><Link href="/contact">Contact</Link></li>
											<li><Link href="/privacy-policy">Privacy Policy</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Services</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link href="/cart">Service</Link></li>
											<li><Link href="/wishlist">Service</Link></li>
											<li><Link href="/login">Service</Link></li>
											<li><Link href="/checkout">Service</Link></li>
											<li><Link href="/about">Service</Link></li>
											<li><Link href="/shop">Service</Link></li>
										</ul>
									</div>
								</div>
							</div>
							{/* <div className="col-xl-2 col-md-6 col-sm-6 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Customer Care</h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link href="/login">Login</Link></li>
											<li><Link href="/my-account">My account</Link></li>
											<li><Link href="/wishlist">Wish List</Link></li>
											<li><Link href="/add-listing">Add listing</Link></li>
											<li><Link href="/faq">FAQ</Link></li>
											<li><Link href="/contact">Contact us</Link></li>
										</ul>
									</div>
								</div>
							</div> */}
							{/* <div className="col-xl-3 col-md-6 col-sm-12 col-12">
								<div className="footer-widget footer-newsletter-widget">
									<h4 className="footer-title">Newsletter</h4>
									<p>Subscribe to our weekly Newsletter and receive updates via email.</p>
									<div className="footer-newsletter">
										<form action="#">
											<input type="email" name="email" placeholder="Email*" />
											<div className="btn-wrapper">
												<button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
											</div>
										</form>
									</div>
									<h5 className="mt-30">We Accept</h5>
									<img src={publicUrl + "assets/img/icons/payment-4.png"} alt="Payment Image" />
								</div>
							</div> */}
						</div>
					</div>
				</div>
				{/* <Copyright /> */}
			</footer>
		)
	}
}


export default Footer_v1