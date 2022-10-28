import React from 'react';

import PageHeader from '../components/global-components/page-header';
import ContactInfo from '../components/section-components/contact-info';
import ContactForm from '../components/section-components/contact-form';
import Map from '../components/section-components/map';
import AreasWeCover from '../components/AreasWeCover';

const ContactPage = () => {
	return (
		<>
			<PageHeader headertitle="Contact Us" subheader="Contact" />
			<ContactInfo />
			<ContactForm />
			<AreasWeCover />

			<Map />
		</>
	);
};

export default ContactPage;