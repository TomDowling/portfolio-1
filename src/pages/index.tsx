import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
    const router = useRouter();
    
    return (
        <Main
            meta={
                <Meta
                title="Homepage..."
                description="The desc..."
                />
            }
        >
            <h1>Hi Tom</h1>
        </Main>
    );
};

export default Index;    