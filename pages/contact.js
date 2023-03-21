import React from 'react';
import Head from 'next/head';

import PageHeader from '../components/global-components/page-header';
import ContactInfo from '../components/section-components/contact-info';
import ContactForm from '../components/section-components/contact-form';
import Map from '../components/section-components/map';
import AreasWeCover from '../components/AreasWeCover';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact Vale Building Services</title>
				<meta name="description" content="Contact us for a quote regarding property maintenance, refurbishments and renovations in Surrey and London." />
				<meta name="keywords" content="Vale Building Services, Privacy Policy, professional, reliable, affordable, property,  maintenance,refurbishments, renovations, Kingston Upon Thames, Surrey, London" />
			</Head>
			<PageHeader headertitle="Contact Us" subheader="Contact" />
			<ContactInfo />
			<ContactForm />
			<AreasWeCover />

			<Map />
		</>
	);
};

export default ContactPage;