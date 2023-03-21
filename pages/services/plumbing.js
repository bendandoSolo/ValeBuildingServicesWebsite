import React from 'react';
import Head from 'next/head';
import PageHeader from '../../components/global-components/page-header';
import PlumbingService from '../../components/services/Plumbing';

const Refurbishments = () => {
	return (
		<>
			<Head>
				<title>Plumbing | Vale Building Services</title>
				<meta name="description" content="Plumbing, property maintenance, refurbishments and renovations in Surrey and London." />
				<meta name="keywords" content="Vale Building Services, Privacy Policy, professional, reliable, affordable, property,  maintenance,refurbishments, renovations, Kingston Upon Thames, Surrey, London" />
			</Head>
			<PageHeader headertitle="Plumbing" subheader="Plumbing" />
			<PlumbingService />
		</>
	);
};

export default Refurbishments;
