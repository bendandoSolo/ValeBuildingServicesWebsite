import React from 'react';
import Head from 'next/head';
import PageHeader from '../../components/global-components/page-header';
import RefurbishmentService from '../../components/services/Refurbishments';

const Refurbishments = () => {
	return (
		<>
			<Head>
				<title>Full house / Flat refurbishments | Vale Building Services</title>
				<meta name="description" content="Full house and Flat refurbishments, property maintenance, refurbishments and renovations in Surrey and London." />
				<meta name="keywords" content="Vale Building Services, Privacy Policy, professional, reliable, affordable, property,  maintenance,refurbishments, renovations, Kingston Upon Thames, Surrey, London" />
			</Head>
			<PageHeader headertitle="Full house / Flat refurbishments" subheader="Full house/Flat refurbishments" />
			<RefurbishmentService />
		</>
	);
};

export default Refurbishments;
