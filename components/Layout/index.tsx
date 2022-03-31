/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

interface LayoutProps {
    children: ReactNode;
}
export default function Layout(props: LayoutProps) {
    const { children } = props;
    return (
        <div>
            <Navbar />
            <Sidebar />
            <main className="pt-16 sm:pl-32 bg-main-background py-8 px-8">
                {children}
            </main>
        </div>
    );
}
