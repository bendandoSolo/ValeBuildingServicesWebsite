import React, { Component } from 'react';
import Link from 'next/link';

class Testimonial extends Component {

	render() {

		return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg="/assets/img/bg/20.jpg" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonials</h6>
							<h1 className="section-title">Clients Feedback</h1>
						</div>
					</div>
				</div>
				<div className="row ltn__testimonial-slider-5-active slick-arrow-1">
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7">
							<div className="ltn__testimoni-info">
								<p><i className="flaticon-left-quote-1" />
									BIG Thanks to you and the team for the amazing job you did! The flat is absolutely beautiful, and I couldn't be happier :)</p>
								<div className="ltn__testimoni-info-inner">

									<div className="ltn__testimoni-name-designation">
										<h5>Mrs M Nielsen</h5>
										<label>Putney</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7">
							<div className="ltn__testimoni-info">
								<p><i className="flaticon-left-quote-1" />
									The workmen from Vale were polite, clean, efficient, and respectful that I was working on my computer while they worked, thanks a lot!</p>
								<div className="ltn__testimoni-info-inner">
									<div className="ltn__testimoni-name-designation">
										<h5>Mr G Sherman</h5>
										<label>Twickenham</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7">
							<div className="ltn__testimoni-info">
								<p><i className="flaticon-left-quote-1" />
									New boiler is working great, thanks for replacing at such short notice, it was going to be a very cold few days!</p>
								<div className="ltn__testimoni-info-inner">
									<div className="ltn__testimoni-name-designation">
										<h5>Mrs B Tinbergen</h5>
										<label>Richmond Upon Thames</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7">
							<div className="ltn__testimoni-info">
								<p><i className="flaticon-left-quote-1" />
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
								<div className="ltn__testimoni-info-inner">
									<div className="ltn__testimoni-img">
										<img src={publicUrl + "assets/img/testimonial/4.jpg"} alt="#" />
									</div>
									<div className="ltn__testimoni-name-designation">
										<h5>James Carter</h5>
										<label>Selling Agents</label>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					{/*  */}
				</div>
			</div>
			<div className="btn-wrapper animated flex-center-row">
				<Link href="/testimonials"><a className="btn theme-btn-1 btn btn-effect-1">READ MORE</a></Link>
			</div>
		</div>
	}
}

export default Testimonial