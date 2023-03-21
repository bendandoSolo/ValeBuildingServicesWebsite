import React from 'react';
import Head from 'next/head';

import PageHeader from '../components/global-components/page-header';
import TestimonialsMasonry from '../components/testimonials/TestimonialsMasonry';


const TestimonialsPage = () => {
	return (
		<>
			<Head>
				<title>Vale Building Services Testimonials</title>
				<meta name="description" content="Vale Building Services Testimonials. Property maintenance, refurbishments and renovations in Surrey and London." />
				<meta name="keywords" content="Vale Building Services, Privacy Policy, professional, reliable, affordable, property,  maintenance,refurbishments, renovations, Kingston Upon Thames, Surrey, London" />
			</Head>
			<PageHeader headertitle="Testimonials" subheader="View our Testimonials" />
			<TestimonialsMasonry />
		</>
	);
};

export default TestimonialsPage;