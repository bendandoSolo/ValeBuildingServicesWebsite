import React, { Component } from 'react';
import Link from 'next/link';

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
							<p> <span className="ltn__first-letter">W</span>e cover all aspects of full house or flat refurbishments from start to finish.
								We create a complete design and build package for you, from the initial design and planning stage, including a wide range of top manufacturers products that we can recommend based on our extensive experience in the industry over the last 30+ years.
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
							<p>After designing a package for you we perform the gutting, structural, stud work and plastering.</p>
							<p>We do perform all gas, plumbing and electrical works.</p>
							<p>We install and replace bathrooms, kitchens and utility areas.</p>
							<p>We cover all aspects of redecorating and flooring.</p>
							<p>We take extra care to ensure the final fittings such as door handles and lights are carefully installed.</p>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="sidebar-area ltn__right-sidebar">
							{/* Menu Widget */}
							<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
								<ul className="go-top">
									<li className="active"><a href="/services/refurbishments">Refurbishments<span><i className="fas fa-arrow-right" /></span></a></li>
									<li><a href="/services/plumbing">Plumbing<span><i className="fas fa-arrow-right" /></span></a></li>
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