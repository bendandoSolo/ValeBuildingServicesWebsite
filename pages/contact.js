import React from 'react';

import PageHeader from '../components/global-components/page-header';
import ContactInfo from '../components/section-components/contact-info';
import ContactForm from '../components/section-components/contact-form';
import Map from '../components/section-components/map';

const ContactPage = () => {
	return (
		<>
			<PageHeader headertitle="Contact Us" subheader="Contact" />
			<ContactInfo />
			<ContactForm />
			<Map />
		</>
	);
};

export default ContactPage;