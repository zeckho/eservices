import Image from 'next/image';

export default function Login() {
    return (
        <div className="bg-maha-purple font-poppins">
            <div className="flex flex-wrap overflow-hidden h-screen">

                <div className="hidden md:flex flex-wrap justify-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 place-items-center">
                    <Image src="/maha-logo-white.png" layout="fixed" width={600} height={139} alt="Logo Mahachem" />
                </div>

                <div className="flex justify-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 lg:rounded-tl-3xl lg:rounded-bl-3xl bg-white">

                    <div className="absolute top-2 right-5">
                        <select className="border-0 text-gray-500 leading-tight focus:outline-none">
                            <option>Singapore</option>
                            <option>Indonesia</option>
                        </select>
                    </div>

                    <div className="mx-48 my-auto max-w-3xl">
                        {/* header */}
                        <div className="text-left m-3 mb-8">
                            <h1 className="text-4xl font-bold text-gray-700">Thank you for your submission!</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                An administrator will review your request before approval.
                                Please check your email for the account verification.

                            </p>
                        </div>
                        {/* sign-in */}
                        <div className="m-3">
                            <div className="mb-6">
                                <button type="button" className="w-full px-3 py-3 text-white bg-maha-purple rounded-full hover:opacity-70 focus:outline-none duration-100 ease-in-out uppercase">return home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
