import React from 'react';
import PageHeader from '../../components/global-components/page-header';
import GasWorksService from '../../components/services/GasWorks';

const Refurbishments = () => {
	return (
		<>
			<PageHeader headertitle="Gas & Boilers Works" subheader="Gas & Boilers Works" />
			<GasWorksService />
		</>
	);
};

export default Refurbishments;
