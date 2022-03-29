import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Index() {
    return (
        <>
            {/* navbar  */}
            <div className="flex justify-end items-center text-sm shadow h-16">
                <div className="px-4">
                    15th Feb 2022, Tuesday
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
                    Achmad Joko Priyono
                </div>
            </div>
        </>
    );
}
