import React, { Component } from 'react';
import Link from 'next/link';

class AboutV3 extends Component {

	render() {

		return <div className="ltn__about-us-area pt-115 pb-100 ">
			<div className="container">
				<div className="section-title-area ltn__section-title-2--- mb-30">
					<h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">About Us</h6>
					<h1 className="section-title">Professional, reliable and efficient property maintenance and refurbishment at affordable prices</h1>

					<div className='row'>
						<div className="col-lg-6 align-self-center pb-4">
							<p>We are a local family run company and have been operating out of the South West London area for the last 30 years.</p>
							<p>Covering large parts of London and Surrey, with a skilful and experienced team of engineers & tradespeople we can carry out everything from repairing a broken tap to fully renovating your entire property.</p>
							<p>Over the years we have focused on providing a reliable and friendly service and take pride in the fact that over 80% of our business is from existing clients.</p>
							<p>Enquire through our online form or call us to discuss your requirements in person.</p>
						</div>
						<div className="col-lg-6 align-self-center pb-4">
							<div className="flex-row-around">
								<img src="/valeImages/logos/Gas_Safe_Register.png" alt="Gas Safe Register" style={{ maxHeight: '140px' }} />
								<img src='/valeImages/logos/Vaillant_logo.jpg' alt="Vaillant logo" />
							</div>
						</div>
					</div>
				</div>




				<div className="row pt-3">
					<div className="col-lg-6 align-self-center">
						<div className="about-us-info-wrap">

							<div className="ltn__feature-item ltn__feature-item-3">
								<div className="ltn__feature-icon">
									<span><i className="flaticon-house-4" /></span>
								</div>
								<div className="ltn__feature-info">
									<p>Professional and expert service covering a wide range of property maintenance and refurbishment</p>
								</div>
							</div>
							<div className="ltn__feature-item ltn__feature-item-3">
								<div className="ltn__feature-icon">
									<span><i className="flaticon-call-center-agent" /></span>
								</div>
								<div className="ltn__feature-info">
									<p>Certified and accredited – Gas safe & Vaillant Advance Installer </p>
								</div>
							</div>
							<div className="ltn__feature-item ltn__feature-item-3">
								<div className="ltn__feature-icon">
									<span><i className="flaticon-maps-and-location" /></span>
								</div>
								<div className="ltn__feature-info">
									<p>Clean and efficient</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 align-self-center">
						<div className="about-us-info-wrap">
							<div className="ltn__feature-item ltn__feature-item-3">
								<div className="ltn__feature-icon">
									<span><i className="flaticon-house-4" /></span>
								</div>
								<div className="ltn__feature-info">
									<p>12 months insurance backed labour guarantee. Materials covered under manufacturers guarantee/warranty</p>
								</div>
							</div>
							<div className="ltn__feature-item ltn__feature-item-3">
								<div className="ltn__feature-icon">
									<span><i className="flaticon-call-center-agent" /></span>
								</div>
								<div className="ltn__feature-info">
									<p>Fully detailed estimates including breakdowns/scheduling</p>
								</div>
							</div>
							<div className="ltn__feature-item ltn__feature-item-3">
								<div className="ltn__feature-icon">
									<span><i className="flaticon-maps-and-location" /></span>
								</div>
								<div className="ltn__feature-info">
									<p>No hidden charges or fees</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h6 className='text-center pt-5'>NB: All images on this website are taken from Building Works that are carried out by us, no stock images have been used</h6>

		</div>
	}
}

export default AboutV3