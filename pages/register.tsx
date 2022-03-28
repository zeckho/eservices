/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
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
                        {/* <!-- header --> */}
                        <div className="text-left m-3 mb-8">
                            <h1 className="text-3xl font-bold text-gray-700">Register for E-services</h1>
                            <p className="text-sm text-gray-500 mt-2">
                                This platform is for customers of MahaChem only.
                                To request for an account, please submit your details.
                            </p>
                        </div>
                        {/* <!-- sign-in --> */}
                        <div className="m-3">
                            <form className="mb-4">
                                <div className="mb-3">
                                    <input type="text" name="fullname" id="fullname" placeholder="Full Name" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="contact" id="contact" placeholder="Contact no." className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="company" id="company" placeholder="Company Name" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name="email" id="email" placeholder="Business Email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                                </div>
                                <div className="mb-3">
                                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                                </div>
                                <div className="mb-6">
                                    <input type="password" name="confpassword" id="confpassword" placeholder="Confirm your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 " />
                                </div>
                                <div className="mb-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <label className="block text-gray-500 font-light" htmlFor="remember">
                                                <input className="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                                                <span className="text-sm">
                                                    &nbsp; I have read and agree to the
                                                    <a className="font-light text-sm text-indigo-500 hover:text-indigo-600 hover:font-normal" href="#privacy-policy">
                                                        Privacy Policy
                                                    </a>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <Link href="/request-submitted">
                                        <button type="button" className="w-full px-3 py-3 text-white bg-maha-purple rounded-full hover:opacity-70 focus:outline-none duration-100 ease-in-out uppercase">sign up</button>
                                    </Link>
                                </div>
                                <p className="text-sm text-center text-gray-400">
                                    <Link href="/login"><a className="font-light text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline hover:font-normal">Sign in as existing Maha customer</a></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
