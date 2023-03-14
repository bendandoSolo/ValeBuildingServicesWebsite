import React, { Component } from 'react';
import ServicesSideMenu from '../widgets/ServicesSideMenu';

class KitchenAndBathroom extends Component {
	render() {
		return <div className="ltn__page-details-area ltn__service-details-area mb-105">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__page-details-inner ltn__service-details-inner">
							<div className="ltn__blog-img">
								<img src="/valeImages/services/Kitchen/Kitchen Top left.jpg" alt="Refurbishment" />
							</div>
							<div className='row'>
								<p> <span className="ltn__first-letter">W</span>hether you have a specific style in mind, or want to discuss the most suitable design & material choices for your project, we can assist with access to trade discounts from a wide range of quality, well known brands/suppliers.
								</p>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<img src="/valeImages/services/Kitchen/Kitchen bottom left.JPG" alt="Kitchen Cabinets" />
									{/* <label>Image caption here.</label> */}
								</div>
								<div className="col-lg-6">
									<img src="/valeImages/services/Kitchen/Kitchen bottom middle.jpg" alt="Building Works Stairs" />
								</div>
							</div>
							<strong>
								<p className='pt-3'>Kitchen and Bathroom Fitting Services we offer include:</p>
								<ul>
									<li>Removal and disposal of existing kitchen/bathrooms</li>
									<li>Fully certified gas/electrical works</li>
									<li>Any sub-wall/structural construction</li>
									<li>Full refitting of new, fully fitted kitchens with a wide range of worktop choices from laminate & wood block, through to quartz and stone</li>
									<li>Full refitting of bathrooms, with a wide range of showers, baths, enclosures available</li>
									<li>Full plumbing for accompanying white goods, pumps and heating</li>
									<li>Finishing flooring/tiling & redecoration</li>
								</ul>
							</strong>
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
								<img src="/valeImages/services/Kitchen/Kitchen bottom right.jpg" alt="Room And Stairs Refurbishment" />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	}
}

export default KitchenAndBathroom