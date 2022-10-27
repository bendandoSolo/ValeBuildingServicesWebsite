import React from 'react';
import Navbar from '../../components/global-components/navbar-v2';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import ExteriorWorksService from '../../components/services/ExteriorWorks';

const ExteriorWorks = () => {
	return (
		<>
			<Navbar />
			<PageHeader headertitle="Exterior Works" subheader="Exterior Works" />
			<ExteriorWorksService />
			<Footer />
		</>
	);
};

export default ExteriorWorks;
