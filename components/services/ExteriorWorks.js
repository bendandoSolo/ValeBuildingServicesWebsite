import React, { Component } from 'react';
import ServicesSideMenu from '../widgets/ServicesSideMenu';

const ExteriorWorksService = () => {
	return (<div className="ltn__page-details-area ltn__service-details-area mb-105">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="ltn__page-details-inner ltn__service-details-inner">
						<div className="ltn__blog-img">
							<img src="/valeImages/services/Building_Exterior.jpg" alt="Building Exterior" />
						</div>
						<div className='pb-4'>
							<p> <span className="ltn__first-letter">E</span>xterior Works describes any works carried out to the external environment of a building. These can be works to functional or aesthetic features.</p>
						</div>
						{/* <div className="row">
							<div className="col-lg-6">
								<img src="/valeImages/services/Building_Exterior.jpg" alt="Building Exterior" />
					</div>
					<div className="col-lg-6">
						<img src="/valeImages/services/Kitchen_Refurbishment_2.jpg" alt="Kitchen Refurbishment" />
					</div>
				</div> */}
						<strong>
							<p className='pt-3'>Exterior Works Services we commonly offer include:</p>
							<ul>
								<li>Exterior block and slab paving removal, replacement and installation</li>
								<li>Shed installation/replacement/repairs </li>
								<li>Fencing replacement/repair</li>
								<li>Artificial turf</li>
								<li>Brickworks and repointing</li>
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
						{/* <div className="widget ltn__banner-widget go-top">
							<img src="/valeImages/services/Bathroom_Refurbishment.jpg" alt="Bathroom Refurbishment" />
						</div> */}
					</aside>
				</div>
			</div>
		</div >
	</div >)
}

export default ExteriorWorksService
