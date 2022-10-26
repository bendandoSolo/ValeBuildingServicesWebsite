import Head from 'next/head'

import Banner from '../components/section-components/banner-v2';
import Aboutv3 from '../components/section-components/about-v3';
import Featuresv1 from '../components/section-components/features-v1';
import Testimonial from '../components/section-components/testimonial-v1';

export default function Home() {
	return (
		<>
			<Banner />
			<Aboutv3 />
			<Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />
			<Testimonial />
		</>
	)
}
