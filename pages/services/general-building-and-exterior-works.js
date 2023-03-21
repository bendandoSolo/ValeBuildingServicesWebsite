import React from 'react';
import Head from 'next/head';
import PageHeader from '../../components/global-components/page-header';
import ExteriorWorksService from '../../components/services/ExteriorWorks';

const ExteriorWorks = () => {
	return (
		<>
			<Head>
				<title>General Building & Exterior Works | Vale Building Services</title>
				<meta name="description" content="General Building & Exterior Works, property maintenance, refurbishments and renovations in Surrey and London." />
				<meta name="keywords" content="Vale Building Services, Privacy Policy, professional, reliable, affordable, property,  maintenance,refurbishments, renovations, Kingston Upon Thames, Surrey, London" />
			</Head>
			<PageHeader headertitle="General Building & Exterior Works" subheader="General Building & Exterior Works" />
			<ExteriorWorksService />
		</>
	);
};

export default ExteriorWorks;
