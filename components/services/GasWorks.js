import React, { Component } from 'react';

class GasWorksService extends Component {
	render() {
		return <div className="ltn__page-details-area ltn__service-details-area mb-105">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__page-details-inner ltn__service-details-inner">
							<div className="ltn__blog-img">
								<img src="/valeImages/services/Vaillant_Boiler.jpg" alt="Vaillant Boiler" />
							</div>
							<p> <span className="ltn__first-letter">A</span>t Vale Building Services we all our gas engineers are Approved Advanced Vaillant
								Engineers. We are also Gas Safe Registered and are able to carry out all aspects of gas work. We can install or replace Boilers and central heating systems.
								We can also carry out Landlord Gas Safety Checks and issue Landlord Gas Safety Certificates. We can also carry out Gas Appliance Servicing and Gas Appliance Repairs.
							</p>

							<div className="row">
								<div className="flex-row-around">
									<img src="/valeImages/logos/Gas_Safe_Register.png" alt="Gas Safe Register" style={{ maxHeight: '140px' }} />
									<img src='/valeImages/logos/Vaillant_logo.jpg' alt="Vaillant logo" />
								</div>
								{/* <div className="col-lg-6">
									<img src="/valeImages/services/Refurbished_Living_Room.jpg" alt="Refurbished Living Room" />
								</div>
								<div className="col-lg-6">
									<img src="/valeImages/services/Kitchen_Refurbishment_2.jpg" alt="Kitchen Refurbishment" />
								</div> */}
							</div>
							<strong>
								<p>Other key Gas Work Services we carry out:</p>
								<ul>
									<li>Central heating flush and service</li>
									<li>Gas leaks</li>
									<li>Landlord annual gas certificate</li>
									<li>Boiler service</li>
									<li>Gas hob repair/replacement</li>
								</ul>
							</strong>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="sidebar-area ltn__right-sidebar">
							{/* Menu Widget */}
							<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
								<ul className="go-top">
									<li><a href="/services/refurbishments">Refurbishments<span><i className="fas fa-arrow-right" /></span></a></li>
									<li><a href="/services/plumbing">Plumbing<span><i className="fas fa-arrow-right" /></span></a></li>
									<li className="active"><a href="/services/gas-works">Gas Works<span><i className="fas fa-arrow-right" /></span></a></li>
									<li><a href="/services/general-building">General Building<span><i className="fas fa-arrow-right" /></span></a></li>
									<li><a href="/services/handyman">Handyman<span><i className="fas fa-arrow-right" /></span></a></li>
									<li><a href="/services/exterior-works">Exterior Works<span><i className="fas fa-arrow-right" /></span></a></li>
								</ul>
							</div>
							{/* Newsletter Widget */}
							{/* <div className="widget ltn__search-widget ltn__newsletter-widget">                            
						<h6 className="ltn__widget-sub-title">// subscribe</h6>
						<h4 className="ltn__widget-title">Get Newsletter</h4>
						<form action="#">
							<input type="text" name="search" placeholder="Search" />
							<button type="submit"><i className="fas fa-search" /></button>
						</form>
						<div className="ltn__newsletter-bg-icon">
							<i className="fas fa-envelope-open-text" />
						</div>
						</div> */}
							{/* Banner Widget */}
							<div className="widget ltn__banner-widget go-top">
								<img src="/valeImages/services/Vaillant_Boiler_With_Pipes.jpg" alt="Vaillant Boiler With Pipes" />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	}
}

export default GasWorksService