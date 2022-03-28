/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home: NextPage = () => (
    <div>
        <h1 className="text-3l font-bold underline">Hello World</h1>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} size="10x" />
    </div>
);

export default Home;
