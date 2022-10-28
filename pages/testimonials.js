import React from 'react';

import PageHeader from '../components/global-components/page-header';
import TestimonialsMasonry from '../components/testimonials/TestimonialsMasonry';


const TestimonialsPage = () => {
	return (
		<>
			<PageHeader headertitle="Testimonials" subheader="View our Testimonials" />
			<TestimonialsMasonry />
		</>
	);
};

export default TestimonialsPage;