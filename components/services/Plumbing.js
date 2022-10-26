import React, { Component } from 'react';
import Link from 'next/link';

export const PlumbingService = () => {

	return (
		<div className="ltn__page-details-area ltn__service-details-area mb-105">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__page-details-inner ltn__service-details-inner">
							<div className="ltn__blog-img">
								<img src="/valeImages/services/Bathroom_Refurbishment.jpg" alt="Bathroom Refurbishment" />
							</div>
							<div>
								<p> <span className="ltn__first-letter">O</span>perating over the last 30 years in and around London and Surrey there are few plumbing jobs we haven’t seen. We have a team of highly skilled plumbers who are able to tackle any job, big or small. We are able to offer a full range of plumbing services including:</p>
								<br></br>
							</div>
							<strong>
								<div className="row pb-4">
									<div className="col-lg-6">
										<ul>
											<li>Leak investigation/repair</li>
											<li>Fittings repair/replacement – taps, showers, bath/enclosures/trays, basins, toilets etc</li>
											<li>Clearing blockages</li>
											<li>Burst pipework</li>
											<li>Plumbing valves/stopcock installation and replacement</li>
										</ul>
									</div>
									<div className="col-lg-6">
										<ul>
											<li>Shower booster pumps/ zone valves</li>
											<li>Hot water cylinders & immersion repair/replacement/installation</li>
											<li>Leaking/faulty cold water tanks</li>
											<li>Leaking appliance/white goods repair/replacement </li>
										</ul>
									</div>
								</div>
							</strong>
							<div className="row">
								<div className="col-lg-6">
									<img src="/valeImages/services/Black-And-White-Bathroom.jpg" alt="Black and White Bathroom" />
									{/* <label>Image caption here.</label> */}
								</div>
								<div className="col-lg-6">
									<img src="/valeImages/services/Plumbing-Shower.jpg" alt="Black and White Shower" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="sidebar-area ltn__right-sidebar">
							{/* Menu Widget */}
							<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
								<ul className="go-top">
									<li ><a href="/services/refurbishments">Refurbishments<span><i className="fas fa-arrow-right" /></span></a></li>
									<li className="active"><a href="/services/plumbing">Plumbing<span><i className="fas fa-arrow-right" /></span></a></li>
									<li><a href="/services/gas-works">Gas Works<span><i className="fas fa-arrow-right" /></span></a></li>
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
								<img src="/valeImages/services/Plumbing-Sink-And-Shower.jpg" alt="Plumbing Sink And Shower" />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div >
	)
}

export default PlumbingService