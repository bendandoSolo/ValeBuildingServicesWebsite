import React, { Component } from 'react';
import ServicesSideMenu from '../widgets/ServicesSideMenu';

class GeneralBuildingService extends Component {
	render() {
		return <div className="ltn__page-details-area ltn__service-details-area mb-105">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__page-details-inner ltn__service-details-inner">
							<div className="ltn__blog-img">
								<img src="/valeImages/homeCarousel/refurbishment.jpg" alt="Refurbishment" />
							</div>
							<div className='row'>
								<p> <span className="ltn__first-letter">G</span>eneral Building Works are hard to define.
									They are the building works that are not covered by the other services we offer. And that covers a lot of other Building Services!
								</p>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<img src="/valeImages/services/Kitchen_Cabinets.jpg" alt="Kitchen Cabinets" />
									{/* <label>Image caption here.</label> */}
								</div>
								<div className="col-lg-6">
									<img src="/valeImages/services/Building_Works_Stairs.jpg" alt="Building Works Stairs" />
								</div>
							</div>
							<strong>
								<p className='pt-3'>General Building Work Services we offer include:</p>
								<ul>
									<li>Tiling: ceramic, porcelain, and natural stone</li>
									<li>Flooring: laminate, engineered and solid wood flooring, vinyl/lino replacement/installation</li>
									<li>Decorating: from a single wall to a full property/block </li>
									<li>Carpentry: repair/replacement/maintenance</li>
									<li>Structural, stud work & plastering</li>
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
								<img src="/valeImages/services/Room_And_Stairs_Refurbishment.jpg" alt="Room And Stairs Refurbishment" />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	}
}

export default GeneralBuildingService