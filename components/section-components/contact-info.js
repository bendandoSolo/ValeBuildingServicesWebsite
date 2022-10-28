import React, { Component } from 'react';
class ContactInfo extends Component {

	render() {

		let publicUrl = '';//process.env.PUBLIC_URL+'/'

		return <div className="ltn__contact-address-area mb-90">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
							<div className="ltn__contact-address-icon">
								<img src="assets/img/icons/10-blue.png" alt="Email Icon" />
							</div>
							<h3>Email Address</h3>
							<p><a href="mailto:admin@valeinfo.co.uk?subject=enquiry">admin@valeinfo.co.uk</a><br />&nbsp;</p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
							<div className="ltn__contact-address-icon">
								<img src="assets/img/icons/11-blue.png" alt="Phone Icon" />
							</div>
							<h3>Phone Number</h3>
							<p><a href="tel:02036673833">02036673833</a><br /> <a href="tel:07786400595">07786400595</a></p>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
							<div className="ltn__contact-address-icon">
								<img src="assets/img/icons/12-blue.png" alt="Address Icon" />
							</div>
							<h3>Office Address</h3>
							<p>Kingston Upon Thames<br />
								London, UK</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ContactInfo