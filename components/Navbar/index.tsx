import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Index() {
    const current = new Date();
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { // Typescript ways of adding the type
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    return (
        <>
            {/* navbar  */}
            <nav className="fixed top-0 inset-x-0 z-50 h-16 text-gray-700 text-xs bg-white font-medium flex justify-end items-center shadow-md">
                <div className="px-4">
                    {formatDate(current)}
                    {/* 15th Feb 2022, Tuesday */}
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
                    <span className="">
                        Achmad Joko Priyono
                    </span>
                </div>
            </nav>
        </>
    );
}
