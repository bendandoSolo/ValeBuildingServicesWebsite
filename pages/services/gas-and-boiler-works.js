import React from 'react';
import Head from 'next/head';
import PageHeader from '../../components/global-components/page-header';
import GasWorksService from '../../components/services/GasWorks';

const Refurbishments = () => {
	return (
		<>
			<Head>
				<title>Gas and Boiler Works | Vale Building Services</title>
				<meta name="description" content="Gas and Boiler Works, property maintenance, refurbishments and renovations in Surrey and London." />
				<meta name="keywords" content="Vale Building Services, Privacy Policy, professional, reliable, affordable, property,  maintenance,refurbishments, renovations, Kingston Upon Thames, Surrey, London" />
			</Head>
			<PageHeader headertitle="Gas & Boilers Works" subheader="Gas & Boilers Works" />
			<GasWorksService />
		</>
	);
};

export default Refurbishments;
