import React from 'react';
import PageHeader from '../../components/global-components/page-header';
import HandyManService from '../../components/services/Handyman';

const Refurbishments = () => {
	return (
		<>
			<PageHeader headertitle="Redecoration & Handyman" subheader="Redecoration & Handyman" />
			<HandyManService />
		</>
	);
};

export default Refurbishments;