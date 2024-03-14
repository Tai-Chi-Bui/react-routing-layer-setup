import { useLoaderData, Form } from 'react-router-dom';

interface productState {
    name?: string
}

const Product: React.FC = () => {
    const product = useLoaderData() as productState;
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '2rem' }}>{product?.name?.toUpperCase()}</span>
                <Form method='post' id='product-update-form' style={{ margin: '6rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <label htmlFor="new-name">New Product Name</label>
                    <input type="text" id="new-name" name="new-name" defaultValue={product.name} />
                    <button type="submit">Save</button>
                    <button type="button">Cancel</button>
                </Form>
            </div >
        </>
    );
}

export default Product;
