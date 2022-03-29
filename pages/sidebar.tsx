/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
    faChartBar, faDollarSign, faFileInvoiceDollar, faInfoCircle, faOutdent, faShoppingCart, faThumbsUp, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Tooltip } from '@nextui-org/react';
import { faBell } from '@fortawesome/free-regular-svg-icons';

export default function Sidebar() {
    // sidebar open and close state
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <>
            {/* navbar  */}
            <div className="bg-white text-sm fixed flex h-16 inset-x-0 items-center justify-end px-4 shadow-lg text-gray-500 top-0">
                <div className="px-4">
                    15th Feb 2022, Tuesday
                </div>

                <div className="px-4">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                {/* navbar user */}
                <div className="px-4">
                    <span className="rounded-full bg-gray-100 px-3 py-2">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    {' '}
                    Achmad Joko Priyono
                </div>
            </div>

            {/* sidebar container */}
            <div>
                {/* sidebar overlay */}
                <div className={sidebar ? 'bg-black cursor-pointer fixed inset-0 opacity-5 visible' : 'hidden opacity-0'} onClick={handleSidebar} />
                {/* sidebar */}
                <div className={`bg-white fixed inset-y-0 pb-4 shadow-lg ease-in-out delay-150 duration-300 left-0 ${sidebar ? 'translate-x-0 w-64' : 'translate-x-0 w-auto'}`}>
                    {/* sidebar close button */}
                    <button className="absolute -right-14 p-4 text-gray-500 transition hover:text-maha-purple" onClick={handleSidebar}>
                        <FontAwesomeIcon icon={faOutdent} fixedWidth transform={sidebar ? { rotate: 0 } : { rotate: 180 }} />
                    </button>

                    <div className="flex justify-center shadow mx-auto px-5 py-2.5 h-16">
                        <Image src={sidebar ? '/maha-logo.png' : '/maha-logo-small.png'} width={sidebar ? 160 : 40} height={sidebar ? 33 : 40} alt="Logo" />
                    </div>

                    {/* sidebar menu */}
                    <ul className="font-poppins mt-4 text-gray-600">
                        <li>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                    <Tooltip content={sidebar ? '' : 'Dashboard'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                        <FontAwesomeIcon icon={faChartBar} fixedWidth size="sm" />
                                    </Tooltip>
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>
                                        Dashboard
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                    <Tooltip content={sidebar ? '' : 'Order Management'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                        <FontAwesomeIcon icon={faShoppingCart} fixedWidth size="sm" />
                                    </Tooltip>
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Order Management</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                    <Tooltip content={sidebar ? '' : 'Invoices'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                        <FontAwesomeIcon icon={faDollarSign} fixedWidth size="sm" />
                                    </Tooltip>
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Invoices</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                    <Tooltip content={sidebar ? '' : 'Product Information'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                        <FontAwesomeIcon icon={faInfoCircle} fixedWidth size="sm" />
                                    </Tooltip>
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Product Information</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                    <Tooltip content={sidebar ? '' : 'Recommendations'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                        <FontAwesomeIcon icon={faThumbsUp} fixedWidth size="sm" />
                                    </Tooltip>
                                    {' '}
                                    <span className={sidebar ? 'text-gray-700' : 'hidden'}>Recommendations</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                    <Tooltip content={sidebar ? '' : 'Quotations'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                        <FontAwesomeIcon icon={faFileInvoiceDollar} fixedWidth size="sm" />
                                    </Tooltip>
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
