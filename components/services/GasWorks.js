import React, { Component } from 'react';
import ServicesSideMenu from '../widgets/ServicesSideMenu';

class GasWorksService extends Component {
	render() {
		return <div className="ltn__page-details-area ltn__service-details-area mb-105">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__page-details-inner ltn__service-details-inner">
							<div className="ltn__blog-img">
								<img src="/valeImages/services/Gas/Gas main left.jpg" alt="Vaillant Boiler" />
							</div>
							<p> <span className="ltn__first-letter">A</span>t Vale Building Services all our gas engineers are Approved Advanced Vaillant Installers, which means that any boiler we install for you comes with extended free manufacturer guarantees up to 10 years. 
							</p>
							<p>
								We carry out all aspects of gas work, from investigating and repairing leaks to Landlord Gas Safety Checks and replacing central heating systems.
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
									<li>Gas leaks</li>
									<li>Landlord annual gas certificate</li>
									<li>Boiler service</li>
									<li>Design installation of new central heating system</li>
									<li>Replacement of radiators and valves</li>
									<li>Central heating flush and service</li>
									<li>Gas hob repair/replacement</li>
								</ul>
							</strong>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="sidebar-area ltn__right-sidebar">
							{/* Menu Widget */}
							<ServicesSideMenu />

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