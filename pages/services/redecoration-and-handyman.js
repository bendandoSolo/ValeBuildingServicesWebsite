import React from 'react';
import Head from 'next/head';
import PageHeader from '../../components/global-components/page-header';
import HandyManService from '../../components/services/Handyman';

const Refurbishments = () => {
	return (
		<>
			<Head>
				<title>Redecoration & Handyman Services | Vale Building Services</title>
				<meta name="description" content="Redecoration & Handyman Services, property maintenance, refurbishments and renovations in Surrey and London." />
				<meta name="keywords" content="Vale Building Services, Privacy Policy, professional, reliable, affordable, property,  maintenance,refurbishments, renovations, Kingston Upon Thames, Surrey, London" />
			</Head>
			<PageHeader headertitle="Redecoration & Handyman" subheader="Redecoration & Handyman" />
			<HandyManService />
		</>
	);
};

export default Refurbishments;