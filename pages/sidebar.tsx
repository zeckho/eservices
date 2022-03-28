import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="relative flex min-h-screen">
            {/* sidebar */}
            <div className="bg-white text-gray-500 w-64">
                <div className="shadow mx-auto px-2 py-4 h-16">
                    <Image src="/maha-logo.png" width={200} height={40} alt="Logo" />
                </div>
                <div className="min-h-screen px-2 py-4">
                    sidebar
                </div>
            </div>

            {/* main */}
            <div className="flex-1">
                {/* header */}
                <div className="bg-white shadow px-2 py-4 h-16 ">
                    Header
                </div>

                {/* content */}
                <div className="p-8 text-gray-600 font-extrabold">
                    Content
                </div>

            </div>
        </div>
    );
}
