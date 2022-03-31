/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
    Table, Row, Col, Tooltip,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { StyledBadge } from '../../Table/StyledBadge';
import { IconButton } from '../../Table/IconButton';

export default function Orders() {
    const columns = [
        { name: 'ACTIONS', uid: 'actions' },
        { name: 'P/O#', uid: 'po' },
        { name: 'PO RECEIVED', uid: 'received' },
        { name: 'PO STATUS', uid: 'status' },
    ];
    const orders = [
        {
            id: 1,
            po: 'NP-4512732',
            received: '21-05-2019',
            status: ["Open", "Scheduled"],
        },
        {
            id: 2,
            po: 'NP-0923818',
            received: '08-02-2020',
            status: ["Open", "Scheduled"],
        },
        {
            id: 3,
            po: 'NP-9513465',
            received: '10-07-2021',
            status: ["Open", "Scheduled"],
        },
        {
            id: 4,
            po: 'NP-2381943',
            received: '22-09-2021',
            status: ["Open"],
        },
        {
            id: 5,
            po: 'NP-3291047',
            received: '03-10-2021',
            status: ["Open"],
        },
        {
            id: 6,
            po: 'NP-3298104',
            received: '31-10-2021',
            status: ["Open"],
        },
        {
            id: 7,
            po: 'NP-9513465',
            received: '12-11-2021',
            status: ["Open"],
        },
        {
            id: 8,
            po: 'NP-7583219',
            received: '24-11-2021',
            status: ["Open"],
        },
        {
            id: 9,
            po: 'NP-7583219',
            received: '09-12-2021',
            status: ["Open"],
        },
        {
            id: 10,
            po: 'NP-7583219',
            received: '24-01-2022',
            status: ["Open"],
        },
    ];
    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
        case 'po':
            return <span className="font-semibold text-blue-500">{user.po}</span>;
        case 'status':
            return cellValue.map((v) => (<StyledBadge type={user.status}>{v}</StyledBadge>));

        case 'actions':
            return (
                <Row justify="center" align="center">
                    <Col css={{
                        width: 'auto', padding: '5px 7px', backgroundColor: '$gray100', borderRadius: '6px',
                    }}
                    >
                        <Tooltip content="Details">
                            <IconButton onClick={() => console.log('View user', user.id)}>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </IconButton>
                        </Tooltip>
                    </Col>
                </Row>
            );
        default:
            return cellValue;
        }
    };
    return (
        <div className="flex flex-col mr-3">
            <div className="text-lg font-semibold text-maha-purple py-4">
                Open Orders
            </div>
            <div className="flex flex-col bg-white shadow rounded-md text-xs h-auto py-4 px-4">
                <div className="flex justify-between pb-4">
                    <div className="flex justify-arround items-center basis-2/6 text-gray-400">
                        <div className="px-3 py-2 hover:border-b-2 active:border-b-2 hover:border-green-500 active:border-green-500 active:text-gray-700">
                            <Link href="#">
                                <a className="">
                                    All
                                    {' '}
                                    <span className="active:bg-green-200 bg-gray-200 active:text-green-600 text-gray-600 px-1 rounded-md">32</span>
                                </a>
                            </Link>
                        </div>
                        <div className="px-3 py-2 hover:border-b-2 active:border-b-2 hover:border-green-500 active:border-green-500 active:text-gray-700">
                            <Link href="#">
                                <a className="">
                                    Scheduled
                                    {' '}
                                    <span className="active:bg-green-200 bg-gray-200 active:text-green-600 text-gray-600 px-1 rounded-md">3</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-end basis-4/6 ">
                        <div>
                            <span className="pointer-events-none absolute text-gray-300 transform translate-y-1/2">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input type="text" name="search" id="search" placeholder="Search" className="w-full px-3 py-2 placeholder-gray-300 border-b-2 border-gray-300 pl-7 focus:outline-none focus:ring-0 " />
                        </div>
                    </div>
                </div>
                <div>
                    <Table
                        aria-label="Open Orders"
                        bordered
                        fixed
                        css={{
                            height: 'auto',
                            minWidth: '100%',
                        }}
                        shadow={false}
                        selectionMode="single"
                        sticked
                    >
                        <Table.Header
                            columns={columns}

                        >
                            {(column) => (
                                <Table.Column
                                    key={column.uid}
                                    hideHeader={column.uid === 'actions'}
                                    align={column.uid === 'actions' ? 'center' : 'start'}
                                    width={column.uid === 'actions' ? '9%' : ''}
                                >
                                    {column.name}
                                </Table.Column>
                            )}
                        </Table.Header>
                        <Table.Body items={orders}>
                            {(item) => (
                                <Table.Row>
                                    {(columnKey) => (
                                        <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                                    )}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
}
