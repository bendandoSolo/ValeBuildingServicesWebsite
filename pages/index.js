import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'

//import Navbar from './global-components/navbar-v2';
import Navbar from '../components/global-components/navbar-v2';


export default function Home() {
	return (
		<>
			<Navbar />
			<h1>We have body display none somehow </h1>
		</>
	)
}
