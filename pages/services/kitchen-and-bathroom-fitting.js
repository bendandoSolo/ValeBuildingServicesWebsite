import React from 'react';
import Navbar from '../../components/global-components/navbar-v2';
import PageHeader from '../../components/global-components/page-header';
import Footer from '../../components/global-components/footer';
import KitchenAndBathroom from '../../components/services/KitchenAndBathroom';

const GeneralBuilding = () => {
	return (
		<>
			<PageHeader headertitle="Kitchen & Bathroom Fitting" subheader="Kitchen & Bathroom Fitting" />
			<KitchenAndBathroom />
		</>
	);
};

export default GeneralBuilding;
