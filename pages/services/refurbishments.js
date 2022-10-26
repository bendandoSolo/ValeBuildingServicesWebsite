import React from 'react';
import Navbar from '../../components/global-components/navbar-v2';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import RefurbishmentService from '../../components/services/Refurbishments';

const Refurbishments = () => {
	return (
		<>
			<Navbar />
			<PageHeader headertitle=" Full house/' Flat refurbishments" subheader="Full house/Flat refurbishments" />
			<RefurbishmentService />
			<Footer />
		</>
	);
};

export default Refurbishments;



// import React from 'react';
// import Navbar from './global-components/navbar';
// import PageHeader from './global-components/page-header';
// import ServiceDetails from './section-components/service-details';
// import CallToActionV1 from './section-components/call-to-action-v1';
// import Footer from './global-components/footer';

// const Service_Details = () => {
//     return <div>
//         <Navbar />
//         <PageHeader headertitle="Service Details" subheader="Property Management" />
//         <ServiceDetails />
//         <CallToActionV1 />
//         <Footer />
//     </div>
// }

// export default Service_Details