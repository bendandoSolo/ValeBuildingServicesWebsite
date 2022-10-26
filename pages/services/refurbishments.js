import React from 'react';
import PageHeader from '../../components/global-components/page-header';
import RefurbishmentService from '../../components/services/Refurbishments';

const Refurbishments = () => {
	return (
		<>
			<PageHeader headertitle=" Full house / Flat refurbishments" subheader="Full house/Flat refurbishments" />
			<RefurbishmentService />
		</>
	);
};

export default Refurbishments;
