/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Orders from '../components/Dashboard/Orders';
import Outstanding from '../components/Dashboard/Outstanding';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <div className="text-3xl font-bold pt-8">
                Dashboard
            </div>
            <div className="flex flex-row">
                <div className="basis-3/5">
                    <Orders />
                </div>
                <div className="basis-2/5">
                    <Outstanding />
                </div>
            </div>
        </Layout>
    );
}
