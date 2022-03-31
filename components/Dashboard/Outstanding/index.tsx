import SG from 'country-flag-icons/react/1x1/SG';
import US from 'country-flag-icons/react/1x1/US';

export default function Outstanding() {
    return (
        <div className="flex flex-col mr-2">
            <div className="text-lg font-semibold text-maha-purple py-4">
                Total Outstanding Payables
            </div>
            <div className="flex flex-col space-y-3">
                <div className="flex text-xs h-auto space-x-3">
                    <div className="flex flex-col bg-white shadow rounded-md w-full h-auto px-7 py-5">
                        <div className="flex justify-start items-center">
                            <div className="mr-3">
                                <SG className="w-6 rounded-full shadow-lg" />
                            </div>
                            <div className="bg-gray-200 uppercase text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full">SGD Account</div>
                        </div>
                        <div className="font-bold text-2xl text-gray-800 w-full pt-3">S$ 103,675.93</div>
                    </div>
                    <div className="flex flex-col bg-white shadow rounded-md w-full h-auto px-7 py-5">
                        <div className="flex justify-start items-center">
                            <div className="mr-3">
                                <US className="w-6 rounded-full shadow-lg" />
                            </div>
                            <div className="bg-gray-200 uppercase text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full">usd Account</div>
                        </div>
                        <div className="font-bold text-2xl text-gray-800 w-full pt-3">US$ 295,414.61</div>
                    </div>

                </div>
                <div className="flex-1 flex-col bg-white shadow rounded-md w-full h-auto px-7 py-5">
                    <div>
                        <span className="text-sm text-gray-600 font-semibold">Account Payable by Age</span>
                    </div>
                    <div>test 2</div>
                    <div>test 3</div>
                </div>
            </div>
        </div>
    );
}
