import React, { Component } from 'react';
import Link from 'next/link';
class FeaturesV1 extends Component {

	render() {
		return <div id='services' >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
							<h1 className="section-title">Our Main Focus</h1>
						</div>
					</div>
				</div>
				<div className="row ltn__custom-gutter--- justify-content-center go-top">
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
							<div className="ltn__feature-icon">
								{/* <i class="fa-sharp fa-solid fa-building"></i> */}
								<i className="flaticon-apartment" />
								{/* <img src="/assets/img/icons/icon-img/21.png" alt="Renovations and Refurbishment" /> */}
							</div>
							<div className="ltn__feature-info">
								<h3><a href="/services/refurbishments">Refurbishments</a></h3>
								<p>All aspects covered, full design, gutting, structural, studwork & plastering, gas, plumbing, electrics, redecorating.</p>
								<a href="/services/refurbishments"><a className="ltn__service-btn">Refurbishments&nbsp;<i className="flaticon-right-arrow" /></a></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
							<div className="ltn__feature-icon">
								<i className="flaticon-toilet" />
								{/* <i class="fa-solid fa-toilet"></i> */}
								{/* <img src="/assets/img/icons/icon-img/22.png" alt="#" /> */}

							</div>
							<div className="ltn__feature-info">
								<h3><a href="/services/plumbing">Plumbing</a></h3>
								<p>Leaks, fittings, clearing blockages, burst pipework, plumbing valves, shower booster pumps, cylinders and immersion.</p>
								<a href="/services/plumbing"><a className="ltn__service-btn">Plumbing&nbsp;<i className="flaticon-right-arrow" /></a></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
							<div className="ltn__feature-icon">
								<i className="flaticon-secure-shield" />
								{/* <img src="/assets/img/icons/icon-img/23.png" alt="#" /> */}
							</div>
							<div className="ltn__feature-info">
								<h3><a href="/services/gas-and-boiler-works">Gas & Boilers Works</a></h3>
								<p>Boiler and central heating; repair/replacement, flush & service. Gas leaks. Landlord annual gas certificate, gas hobs.</p>
								<a href="/services/gas-and-boiler-works"><a className="ltn__service-btn">Gas & Boilers Works&nbsp;<i className="flaticon-right-arrow" /></a></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
							<div className="ltn__feature-icon">
								<i className="flaticon-home-1" />
								{/* <i className="flaticon-secure" /> */}
								{/* <img src="/assets/img/icons/icon-img/21.png" alt="#" /> */}
							</div>
							<div className="ltn__feature-info">
								<h3><a href="/services/kitchen-and-bathroom-fitting">Kitchen & Bathroom Fitting</a></h3>
								<p>Tiling: ceramic, porcelain, and natural stone. Flooring, decorating, carpentry, structural, studwork and plastering.</p>
								<a href="/services/kitchen-and-bathroom-fitting"><a className="ltn__service-btn">Kitchen & Bathroom Fitting	&nbsp;<i className="flaticon-right-arrow" /></a></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
							<div className="ltn__feature-icon">
								<i className="flaticon-home-2" />
								{/* </img src="/assets/img/icons/icon-img/21.png" alt="#" /> */}
							</div>
							<div className="ltn__feature-info">
								<h3><a href="/services/redecoration-and-handyman">Redecoration & Handyman</a></h3>
								<p>Door and window handles, stairs and banisters, guttering and fascia's, shelving and brackets, clearance.</p>
								<a href="/services/redecoration-and-handyman"><a className="ltn__service-btn">Redecoration & Handyman&nbsp;<i className="flaticon-right-arrow" /></a></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
						<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
							<div className="ltn__feature-icon">
								<i className="flaticon-building" />
								{/* <img src="/assets/img/icons/icon-img/21.png" alt="#" /> */}
							</div>
							<div className="ltn__feature-info">
								<h3><a href="/services/general-building-and-exterior-works">General Building & Exterior Works</a></h3>
								<p>Exterior block and slab paving, sheds, fencing, artificial turf, brickwork and repainting, garden clearance.</p>
								<a href="/services/general-building-and-exterior-works"><a className="ltn__service-btn">General Building & Exterior Works&nbsp;<i className="flaticon-right-arrow" /></a></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default FeaturesV1