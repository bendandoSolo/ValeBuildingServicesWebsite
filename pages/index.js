import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/global-components/navbar-v2';
import Banner from '../components/section-components/banner-v2';
import Aboutv1 from '../components/section-components/about-v1';
import AboutV2 from '../components/section-components/about-v2';
import Aboutv3 from '../components/section-components/about-v3';
import Featuresv1 from '../components/section-components/features-v1';


export default function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			<Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />
			<Aboutv3 />
			{/* <AboutV2 />
			<Aboutv1 /> */}
		</>
	)
}
