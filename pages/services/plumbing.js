import React from 'react';
import PageHeader from '../../components/global-components/page-header';
import PlumbingService from '../../components/services/Plumbing';

const Refurbishments = () => {
	return (
		<>
			<PageHeader headertitle="Plumbing" subheader="Plumbing" />
			<PlumbingService />
		</>
	);
};

export default Refurbishments;
