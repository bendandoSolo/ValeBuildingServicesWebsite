import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/global-components/navbar-v2';
import Banner from '../components/section-components/banner-v2';

export default function Home() {
	return (
		<>
			<Navbar />
			<Banner />
		</>
	)
}
