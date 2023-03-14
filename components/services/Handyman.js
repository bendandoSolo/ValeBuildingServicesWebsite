import React, { Component } from 'react';
import ServicesSideMenu from '../widgets/ServicesSideMenu';

class HandyManService extends Component {
	render() {
		return <div className="ltn__page-details-area ltn__service-details-area mb-105">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__page-details-inner ltn__service-details-inner">
							<div className="ltn__blog-img">
								<img src="/valeImages/services/Kitchen_Refurbishment.jpg" alt="Kitchen Refurbishment" />
							</div>
							<p> <span className="ltn__first-letter">P</span>roviding a clean and efficient service, whether it’s redecorating your whole property, a ceiling that’s been damaged following a leak or a refresh of a rental property in-between tenancies, we can assist in delivering the professional finish required.
							</p>
							<p>Working with a range of surfaces such as: plaster, wood and masonry and with a variety of treatments/finishes, we can assist in restoring and redecorating your property.</p>
							<div className="row">
								<div className="col-lg-6">
									<img src="/valeImages/services/Refurbished_Living_Room.jpg" alt="Refurbished Living Room" />
									{/* <label>Image caption here.</label> */}
								</div>
								<div className="col-lg-6">
									<img src="/valeImages/services/Kitchen_Refurbishment_2.jpg" alt="Kitchen Refurbishment" />
								</div>
							</div>
							<strong>
								<p>We also offer a range of common handyman services:</p>
								<ul>
									<li>Door and window handle/ironmongery replacement</li>
									<li>Made to measure blinds and curtains/poles</li>
									<li>Fitting shelves</li>
									<li>Gutter clearance</li>
									<li>Power washing </li>
									<li>General fixings</li>
									<li>Site clearance</li>
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
								<img src="/valeImages/services/Bathroom_Refurbishment.jpg" alt="Bathroom Refurbishment" />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	}
}

export default HandyManService