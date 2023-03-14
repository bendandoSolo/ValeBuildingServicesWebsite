import React from 'react';
import Link from 'next/link';

const ServicesSideMenu = () => (
    <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
        <ul className="go-top">
            <li><Link href="/services/refurbishments" passHref><a>Refurbishments<span><i className="fas fa-arrow-right" /></span></a></Link></li>
            <li><Link href="/services/plumbing" passHref><a>Plumbing<span><i className="fas fa-arrow-right" /></span></a></Link></li>
            <li><Link href="/services/gas-and-boiler-works" passHref><a>Gas & Boilers Works<span><i className="fas fa-arrow-right" /></span></a></Link></li>
            <li><Link href="/services/kitchen-and-bathroom-fitting" passHref><a>Kitchen & Bathroom Fitting<span><i className="fas fa-arrow-right" /></span></a></Link></li>
            <li><Link href="/services/redecoration-and-handyman" passHref><a>Redecoration & Handyman<span><i className="fas fa-arrow-right" /></span></a></Link></li>
            <li><Link href="/services/general-building-and-exterior-works" passHref><a>Building & Exterior Works<span><i className="fas fa-arrow-right" /></span></a></Link></li>
        </ul>
    </div>
);

export default ServicesSideMenu;