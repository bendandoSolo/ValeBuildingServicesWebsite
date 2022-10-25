import '../public/assets/css/font-icons.css'
import '../public/assets/css/plugins.css';
import '../public/assets/css/style.css';
import '../public/assets/css/responsive.css';

import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				src="https://code.jquery.com/jquery-3.5.1.js"
				integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
				crossorigin="anonymous" />
			<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>

			<Script
				src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"
				integrity="sha256-6XMVI0zB8cRzfZjqKcD01PBsAy3FlDASrlC8SxCpInY="
				crossorigin="anonymous" />
			<Script rsc="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js" crossorigin="anonymous" />\
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js" />
			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
				integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
				crossorigin="anonymous"
				referrerpolicy="no-referrer"
			/>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/scrollup/2.4.1/jquery.scrollUp.min.js" integrity="sha512-gAHP1RIzRzolApS3+PI5UkCtoeBpdxBAtxEPsyqvsPN950Q7oD+UT2hafrcFoF04oshCGLqcSgR5dhUthCcjdA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/lightcase/2.5.0/js/lightcase.min.js" integrity="sha512-i+A2/k3mB4TtIRp6fyk8Q+xzJqKusi0bvFgCIfDtdJT1tDEMqYvKo60q3bvp6LzGIeS6BahqN4AklwwxbdSaog==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js" integrity="sha512-d8F1J2kyiRowBB/8/pAWsqUl0wSEOkG5KATkVV4slfblq9VRQ6MyDZVxWl2tWd+mPhuCbpTB4M7uU/x9FlgQ9Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			{/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/tooltip.js/1.3.1/tooltip.min.js" integrity="sha512-ZAFwin0nQNXMJRo329TcU4ZyC+ZgKbnaopq/LH/6j7n9zT7ZVLK5BiSmnqgx7jNiewVLgc04geoE62cNN1D8VQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
			<Script src='/assets/js/plugins.js' />
			<Script src='/assets/js/main.js' />
			<Script>if (window.module) module = window.module;</Script>
			<Component {...pageProps} />
		</>)
}

export default MyApp
