/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
    faChartBar, faDollarSign, faFileInvoiceDollar, faInfoCircle, faOutdent, faShoppingCart, faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Sidebar() {
    // sidebar open and close state
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <>
            {/* navbar  */}
            <div className="bg-white fixed flex h-16 inset-x-0 items-center justify-end px-4 shadow-lg text-gray-500 top-0">
                {/* navbar logo */}
                <div>
                    E-Services
                </div>
            </div>

            {/* sidebar container */}
            <div>
                {/* sidebar overlay */}
                <div className={sidebar ? 'bg-black cursor-pointer fixed inset-0 opacity-5 visible' : 'hidden opacity-0'} onClick={handleSidebar} />
                {/* sidebar */}
                <div className={sidebar ? 'bg-white duration-300 transition-left ease-in-out fixed inset-y-0 pb-4 left-0 w-64' : 'bg-white duration-300 ease-in-out transition-left fixed inset-y-0 pb-4 -left-0 w-20 shadow-lg'}>
                    {/* sidebar close button */}
                    <button className="absolute -right-11 p-4 text-gray-500 transition hover:text-maha-purple" onClick={handleSidebar}>
                        <FontAwesomeIcon icon={faOutdent} fixedWidth transform={sidebar ? { rotate: 0 } : { rotate: 180 }} />
                    </button>

                    <div className="flex justify-center shadow mx-auto px-5 py-2.5 h-16">
                        <Image src={sidebar ? '/maha-logo.png' : '/maha-logo-small.png'} width={sidebar ? 160 : 40} height={sidebar ? 33 : 40} alt="Logo" />
                    </div>

                    {/* sidebar menu */}
                    <ul className="font-normal text-gray-600">
                        <li onClick={handleSidebar}>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple mb-4 hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'justify-center'}`}>
                                    <FontAwesomeIcon icon={faChartBar} fixedWidth size="lg" />
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple mb-4 hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'justify-center'}`}>
                                    <FontAwesomeIcon icon={faShoppingCart} fixedWidth size="lg" />
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Order Management</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple mb-4 hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'justify-center'}`}>
                                    <FontAwesomeIcon icon={faDollarSign} fixedWidth size="lg" />
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Invoices</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple mb-4 hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'justify-center'}`}>
                                    <FontAwesomeIcon icon={faInfoCircle} fixedWidth size="lg" />
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Product Information</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple mb-4 hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'justify-center'}`}>
                                    <FontAwesomeIcon icon={faThumbsUp} fixedWidth size="lg" />
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Recommendations</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple mb-4 hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'justify-center'}`}>
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} fixedWidth size="lg" />
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Quotations</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
