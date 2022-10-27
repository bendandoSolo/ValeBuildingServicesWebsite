import React, { Component } from 'react';
class Map extends Component {
	render() {
		return <div className="google-map">
			<iframe src="https://maps.google.com/maps?q=Kingston%20Upon%20Thames&t=&z=9&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
	}
}

export default Map;
