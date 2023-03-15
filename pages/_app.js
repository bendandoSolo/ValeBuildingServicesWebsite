import '../public/assets/css/font-icons.css'
import '../public/assets/css/plugins.css';
//import '../public/assets/css/style.css';
import '../public/assets/css/responsive.css';
import '../public/assets/sass/style.scss';
//import '../public/assets/css/custom.scss'

import Script from 'next/script';

import NavbarV2 from '../components/global-components/navbar-v2';
import Footer from '../components/global-components/footer';

import useScript from '../components/hooks/useScript';
//import useScripts from '../components/hooks/useScripts';

//import jQuery from 'jquery';


function MyApp({ Component, pageProps }) {

	const status = useScript(
		"/assets/js/plugins.js"
	);

	return (
		<>
			{status === "ready" && (
				<>
					<Script src='/assets/js/main.js' fetchpriority="high" />
					<NavbarV2 />
					<Component {...pageProps} />
					<Footer />
				</>
			)}
		</>)
}

export default MyApp
