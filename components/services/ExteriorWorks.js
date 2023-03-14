import React, { Component } from 'react';
import ServicesSideMenu from '../widgets/ServicesSideMenu';

const ExteriorWorksService = () => {
	return (<div className="ltn__page-details-area ltn__service-details-area mb-105">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="ltn__page-details-inner ltn__service-details-inner">
						<div className="ltn__blog-img">
							<img src="/valeImages/services/GeneralBuilding/General building top left.jpg" alt="Building Exterior" />
						</div>
						<div className='pb-4'>
							<p> <span className="ltn__first-letter">F</span>rom converting a disused space into a home office, knocking through the kitchen wall to make an open plan space or replacing that perished garden shed, we can assist with a wide range of general and exterior works.</p>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<img src="/valeImages/services/GeneralBuilding/General building bottom left.jpg" alt="Building Exterior" />
					</div>
					<div className="col-lg-6">
						<img src="/valeImages/services/GeneralBuilding/General building bottom middle.jpg" alt="Kitchen Refurbishment" />
					</div>
				</div>
						<strong>
							<p className='pt-3'>General building works we offer include:</p>
							<ul>
								<li>Tiling: ceramic, porcelain, and natural stone.</li>
								<li>Flooring: laminate, engineered and solid wood flooring, vinyl/lino replacement/installation</li>
								<li>Carpentry: repair/replacement/maintenance</li>
								<li>Structural, studwork & plastering</li>
							</ul>
						</strong>
						<strong>
							<p className='pt-3'>Exterior works we offer include:</p>
							<ul>
								<li>Exterior block and slab paving</li>
								<li>Shed installation/replacement/repairs </li>
								<li>Fencing & post replacement/repair </li>
								<li>Artificial turf</li>
								<li>Brickwork and re-pointing </li>
								<li>Garden clearance</li>
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
							<img src="/valeImages/services/GeneralBuilding/General building bottom right.JPG" alt="Bathroom Refurbishment" />
						</div> 
					</aside>
				</div>
			</div>
		</div >
	</div >)
}

export default ExteriorWorksService
