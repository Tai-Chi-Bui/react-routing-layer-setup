import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Products: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname; // expects: /products
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '3rem' }}>Product List</h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1rem' }}>
                    <Link style={{ fontSize: '1.5rem' }} to={`${currentPath}/milk`}>Milk</Link>
                    <Link style={{ fontSize: '1.5rem' }} to={`${currentPath}/salt`}>Salt</Link>
                    <Link style={{ fontSize: '1.5rem' }} to={`${currentPath}/sugar`}>Sugar</Link>
                </div>
            </div >
        </>
    );
}

export default Products;
