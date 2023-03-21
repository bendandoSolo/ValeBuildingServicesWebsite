import React from 'react';
import Head from 'next/head';
import PageHeader from '../../components/global-components/page-header';
import KitchenAndBathroom from '../../components/services/KitchenAndBathroom';

const GeneralBuilding = () => {
	return (
		<>
			<Head>
				<title>Kitchen & Bathroom Fitting | Vale Building Services</title>
				<meta name="description" content="Kitchen & Bathroom Fitting, property maintenance, refurbishments and renovations in Surrey and London." />
				<meta name="keywords" content="Vale Building Services, Privacy Policy, professional, reliable, affordable, property,  maintenance,refurbishments, renovations, Kingston Upon Thames, Surrey, London" />
			</Head>
			<PageHeader headertitle="Kitchen & Bathroom Fitting" subheader="Kitchen & Bathroom Fitting" />
			<KitchenAndBathroom />
		</>
	);
};

export default GeneralBuilding;
