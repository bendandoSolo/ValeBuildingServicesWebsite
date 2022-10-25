import '../public/assets/css/font-icons.css'
import '../public/assets/css/plugins.css';
import '../public/assets/css/style.css';
import '../public/assets/css/responsive.css';

import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script src='/assets/js/plugins.js' />
			<Script src='/assets/js/main.js' />
			<Component {...pageProps} />
		</>)
}

export default MyApp
