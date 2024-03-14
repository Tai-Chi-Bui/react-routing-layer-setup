import { useLoaderData } from 'react-router-dom';

interface productState {
    name?: string
}

const Product: React.FC = () => {
    const product = useLoaderData() as productState;
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '2rem' }}>
                This is a detail page of {product?.name}!
            </div >
        </>
    );
}

export default Product;
