import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import parse from 'html-react-parser';
import Link from 'next/link';


const BannerV2 = () => {

	return (<div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
		<div className="ltn__slider-11-inner">
			<div className="ltn__slider-11-active">
				{/* slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
					<div className="ltn__slide-item-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 align-self-center">
									<div className="slide-item-info">
										<div className="slide-item-info-inner ltn__slide-animation">
											<h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Vale Building Services</h6>
											<h1 className="slide-title animated ">Property Maintenance <br /><span>&&nbsp;Refurbishment</span></h1>
											<div className="slide-brief animated">
												<p>Based in Kingston; Covering London, Surrey and the surrounding areas.</p>
											</div>
											<div className="btn-wrapper animated">
												<Link href="#services"><a className="theme-btn-1 btn btn-effect-1">OUR SERVICES</a></Link>
												<Link href="#about"><a className="btn btn-transparent btn-effect-3">LEARN MORE</a></Link>
											</div>
										</div>
									</div>
									<div className="slide-item-img">
										<img src="/valeImages/homeCarousel/new/Spacious Modern Kitchen.webp" alt="Spacious Modern Kitchen" />
										{/* <img src="/valeImages/homeCarousel/modern_kitchen.jpg" alt="modern kitchen" /> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
					<div className="ltn__slide-item-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 align-self-center">
									<div className="slide-item-info">
										<div className="slide-item-info-inner ltn__slide-animation">
											<h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Vale Building Services</h6>
											<h1 className="slide-title animated ">Professional, <br /><span>Reliable,</span><br />Affordable</h1>
											<div className="slide-brief animated">
												<p>A family run business operating for over 30 years.</p>
											</div>
											<div className="btn-wrapper animated">
												<Link href="/contact"><a className="theme-btn-1 btn btn-effect-1">Make An Enquiry</a></Link>
											</div>
										</div>
									</div>
									<div className="slide-item-img">
										<img src="/valeImages/homeCarousel/new/Exposed Brick Kitchen.jpg" alt="Exposed Brick Kitchen" />
										{/* <img src="/valeImages/homeCarousel/rustic_kitchen.jpg" alt="modern kitchen 2" /> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
					<div className="ltn__slide-item-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 align-self-center">
									<div className="slide-item-info">
										<div className="slide-item-info-inner ltn__slide-animation">
											<h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Vale Building Services</h6>
											<h1 className="slide-title animated ">Property Maintenance <br /><span>&&nbsp;Refurbishment</span></h1>
											<div className="slide-brief animated">
												<p>Based in Kingston; Covering London, Surrey and the surrounding areas.</p>
											</div>
											<div className="btn-wrapper animated">
												<Link href="#services"><a className="theme-btn-1 btn btn-effect-1">OUR SERVICES</a></Link>
												<Link href="#about"><a className="btn btn-transparent btn-effect-3">LEARN MORE</a></Link>
											</div>
										</div>
									</div>
									<div className="slide-item-img">
										<img src="/valeImages/homeCarousel/new/Bright Modern Bathroom.webp" alt="Bright Modern Bathroom" />
										{/* <img src="/valeImages/homeCarousel/bathroom.jpg" alt="bathroom" /> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
					<div className="ltn__slide-item-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 align-self-center">
									<div className="slide-item-info">
										<div className="slide-item-info-inner ltn__slide-animation">
											<h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Vale Building Services</h6>
											<h1 className="slide-title animated ">Professional, <br /><span>Reliable,</span><br />Affordable</h1>
											<div className="slide-brief animated">
												<p>A family run business operating for over 30 years.</p>
											</div>
											<div className="btn-wrapper animated">
												<Link href="/contact"><a className="theme-btn-1 btn btn-effect-1">Make An Enquiry</a></Link>
											</div>
										</div>
									</div>
									<div className="slide-item-img">
										<img src="/valeImages/homeCarousel/new/Modern Red And Black Kitchen.JPG" alt="Modern Red And Black Kitchen" />
										{/* <img src="/valeImages/homeCarousel/refurbishment.jpg" alt="rustic kitchen" /> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* slider-4-pagination */}
			<div className="ltn__slider-11-pagination-count">
				<span className="count" />
				<span className="total" />
			</div>
			{/* slider-sticky-icon */}
			{/* <div className="slider-sticky-icon-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
					</ul>
				</div> */}
			{/* slider-4-img-slide-arrow */}
			<div className="ltn__slider-11-img-slide-arrow">
				<div className="ltn__slider-11-img-slide-arrow-inner">
					<div className="ltn__slider-11-img-slide-arrow-active">
					<div className="image-slide-item">
							<img src="/valeImages/homeCarousel/new/Spacious Modern Kitchen.webp" alt="Spacious Modern Kitchen Thumbnail" />
						</div>
						<div className="image-slide-item">
							<img src="/valeImages/homeCarousel/new/Exposed Brick Kitchen.jpg" alt="Exposed Brick Kitchen Thumbnail" />
						</div>
						<div className="image-slide-item">
							<img src="/valeImages/homeCarousel/new/Bright Modern Bathroom.webp" alt="Bright Modern Bathroom Thumbnail" />
						</div>
						<div className="image-slide-item">
							<img src="/valeImages/homeCarousel/new/Modern Red And Black Kitchen.JPG" alt="Modern Red And Black Kitchen Thumbnail" />
						</div>
						{/* <div className="image-slide-item">
							<img src="/valeImages/homeCarousel/new/Front page 5.jpg" alt="Refurbishment Thumbnail" />
						</div> */}
						{/* <div className="image-slide-item">
							<img src="/valeImages/homeCarousel/modern_kitchen_2.jpg" alt="Modern Kitchen Thumbnail" />
						</div>
						<div className="image-slide-item">
							<img src="/valeImages/homeCarousel/rustic_kitchen.jpg" alt="Rustic Kitchen Thumbnail" />
						</div>
						<div className="image-slide-item">
							<img src="/valeImages/homeCarousel/bathroom.jpg" alt="Bathroom Thumbnail" />
						</div>
						<div className="image-slide-item">
							<img src="/valeImages/homeCarousel/refurbishment_thumbnail.jpg" alt="Refurbishment Thumbnail" />
						</div> */}
					</div>
					{/* slider-4-slide-item-count */}
					<div className="ltn__slider-11-slide-item-count">
						<span className="count" />
						<span className="total" />
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}


export default BannerV2