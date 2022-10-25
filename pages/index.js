import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/global-components/navbar-v2';
import Banner from '../components/section-components/banner-v2';
import Aboutv1 from '../components/section-components/about-v1';

export default function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			{/* <Aboutv1 /> */}
		</>
	)
}
