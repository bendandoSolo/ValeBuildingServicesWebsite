import React, { Component } from 'react';
import ServicesSideMenu from '../widgets/ServicesSideMenu';

class RefurbishmentService extends Component {
	render() {
		return <div className="ltn__page-details-area ltn__service-details-area mb-105">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__page-details-inner ltn__service-details-inner">
							<div className="ltn__blog-img">
								<img src="/valeImages/services/Kitchen_Refurbishment.jpg" alt="Kitchen Refurbishment" />
							</div>
							<p> 
								<span className="ltn__first-letter">W</span>e cover all aspects of full house or flat refurbishments from start to finish. From the initial design to handing over the keys to a move ready property; we offer services ranging from liaising with architects/planning/building control to trade discounts on a wide range of top manufacturers, that we can recommend/source based on our extensive experience in the industry over the last 30+ years.
							</p>
							<div className="row">
								<div className="col-lg-6">
									<img src="/valeImages/services/Refurbished_Living_Room.jpg" alt="Refurbished Living Room" />
									{/* <label>Image caption here.</label> */}
								</div>
								<div className="col-lg-6">
									<img src="/valeImages/services/Kitchen_Refurbishment_2.jpg" alt="Kitchen Refurbishment" />
								</div>
							</div>
							<p>After designing a package for you we perform the initial gutting, structural, stud work and plastering.</p>
							<p>We carry out all gas, plumbing and electrical works (with all associated certificates & registrations).</p>
							<p>We install new kitchens, bathrooms and boiler/central heating systems.</p>
							<p>We cover all aspects of redecorating and flooring.</p>
							<p>We take extra care to ensure that the final fittings and fixtures such as door handles and lights are professionally installed.</p>
							<p>Other more bespoke services such as solar panels, EV charging points, Wi-Fi enabled security systems can also be incorporated into the service. </p>
							<p>Book <b>now</b> for a free quote.</p>
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
								<img src="/valeImages/services/Bathroom_Refurbishment.jpg" alt="Bathroom Refurbishment" />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	}
}

export default RefurbishmentService