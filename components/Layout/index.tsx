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
        <main className="flex flex-col h-screen bg-main-background">
            <div className="flex flex-1 overflow-visible">
                <div className="flex w-20 p-4">
                    <Sidebar />
                </div>
                <div className="flex flex-1 flex-col">
                    <div className="bg-white">
                        <Navbar />
                    </div>
                    <div className="flex flex-1 overflow-y-auto p-8">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
