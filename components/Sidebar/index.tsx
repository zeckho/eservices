/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
    faChartBar,
    faDollarSign,
    faFileInvoiceDollar,
    faInfoCircle,
    faOutdent,
    faShoppingCart,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function Sidebar() {
    // sidebar open and close state
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    // router
    const router = useRouter();

    return (
        <>
            {/* sidebar overlay */}
            <div className={sidebar ? 'bg-black cursor-pointer fixed inset-0 opacity-5 visible' : 'hidden opacity-0'} onClick={handleSidebar} />
            {/* sidebar */}
            <div className={`bg-white fixed inset-y-0 pb-4 shadow-lg ease-in-out left-0 translate-x-0 ${sidebar ? 'w-64' : 'duration-500 w-20'}`}>
                {/* sidebar close button */}
                <button className="absolute -right-14 p-4 text-gray-500 transition hover:text-maha-purple" onClick={handleSidebar}>
                    <FontAwesomeIcon
                        icon={faOutdent}
                        fixedWidth
                        transform={sidebar ? { rotate: 0 } : { rotate: 180 }}
                    />
                </button>

                <div className="flex justify-center shadow mx-auto px-5 py-2.5 h-16">
                    <Image src={sidebar ? '/maha-logo.png' : '/maha-logo-small.png'} width={sidebar ? 160 : 40} height={sidebar ? 33 : 40} alt="Logo" />
                </div>

                {/* sidebar menu */}
                <ul className="mt-4 text-gray-600">
                    <li>
                        <Link href="/">
                            <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full text-gray-700 hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${router ? 'text-maha-purple border-maha-purple border-r-4' : ''} ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                <Tooltip content={sidebar ? '' : 'Dashboard'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                    <FontAwesomeIcon icon={faChartBar} fixedWidth size="sm" />
                                </Tooltip>
                                {' '}
                                <span className={sidebar ? '' : 'hidden'}>
                                    Dashboard
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full text-gray-700 hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                <Tooltip content={sidebar ? '' : 'Order Management'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                    <FontAwesomeIcon icon={faShoppingCart} fixedWidth size="sm" />
                                </Tooltip>
                                {' '}
                                <span className={sidebar ? '' : 'hidden'}>Order Management</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full text-gray-700 hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                <Tooltip content={sidebar ? '' : 'Invoices'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                    <FontAwesomeIcon icon={faDollarSign} fixedWidth size="sm" />
                                </Tooltip>
                                {' '}
                                <span className={sidebar ? '' : 'hidden'}>Invoices</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full text-gray-700 hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                <Tooltip content={sidebar ? '' : 'Product Information'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                    <FontAwesomeIcon icon={faInfoCircle} fixedWidth size="sm" />
                                </Tooltip>
                                {' '}
                                <span className={sidebar ? '' : 'hidden'}>Product Information</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full text-gray-700 hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                <Tooltip content={sidebar ? '' : 'Recommendations'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                    <FontAwesomeIcon icon={faThumbsUp} fixedWidth size="sm" />
                                </Tooltip>
                                {' '}
                                <span className={sidebar ? '' : 'hidden'}>Recommendations</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={`font-medium space-x-2 inline-flex px-4 py-4 transition w-full text-gray-700 hover:text-maha-purple hover:border-r-4 hover:border-maha-purple ${sidebar ? 'items-center' : 'mb-4 justify-center'}`}>
                                <Tooltip content={sidebar ? '' : 'Quotations'} rounded contentColor="secondary" placement="right" hideArrow offset={40}>
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} fixedWidth size="sm" />
                                </Tooltip>
                                {' '}
                                <span className={sidebar ? '' : 'hidden'}>Quotations</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
