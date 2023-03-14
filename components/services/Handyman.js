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
							<p> <span className="ltn__first-letter">E</span>very handyman we supply is a professionally trained & experienced tradesman. We come to your home fully equipped and aims to finish each task as quickly and efficiently as possible.
								In the case that the work required does not require a team, that can usually be completed in a single visit, we recommend sending a single tradesman, as the most economical option. We are happy to provide a free quote for any work you require.
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
							<strong>
								<p>The following Handyman services we commonly supply include:</p>
								<ul>
									<li>Leak investigation/repair</li>
									<li>Fittings repair/replacement – taps, showers, bath/enclosures/trays, basins, toilets etc</li>
									<li>Clearing blockages</li>
									<li>Burst pipework</li>
									<li>Plumbing valves/stopcock installation and replacement</li>
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