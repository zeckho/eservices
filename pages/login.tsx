/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';

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

                    <div className="m-auto max-w-3xl">
                        {/* header */}
                        <div className="text-left m-3 mb-8">
                            <h1 className="text-3xl font-bold text-gray-700">Welcome to E-services</h1>
                            <p className="text-sm text-gray-500 mt-2">Please sign in to continue</p>
                        </div>
                        {/* sign-in */}
                        <div className="m-3">
                            <form className="mb-4">
                                <div className="mb-3">
                                    <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                                </div>
                                <div className="mb-3">
                                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                                </div>
                                <div className="mb-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <label className="block text-gray-500 font-light" htmlFor="remember">
                                                <input className="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                                                <span className="text-sm"> Remember me </span>
                                            </label>
                                        </div>
                                        <div>
                                            <a className="font-light text-sm text-indigo-500 hover:text-indigo-600 hover:font-normal" href="#password-request">Forgot password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <button type="button" className="w-full px-3 py-3 text-white bg-maha-purple rounded-full hover:opacity-70 focus:outline-none duration-100 ease-in-out uppercase">sign in</button>
                                </div>
                                <p className="text-sm text-center text-gray-400">
                                    <Link href="/register"><a className="font-light text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline hover:font-normal">Register for a customer account</a></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
