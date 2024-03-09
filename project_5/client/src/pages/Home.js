import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="content">
            <h1>Welcome to our E-commerce Store</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
            <h2>Featured Products</h2>
            <ul>
                <li>
                    <Link to="/products/1">Product 1</Link>
                </li>
                <li>
                    <Link to="/products/2">Product 2</Link>
                </li>
                <li>
                    <Link to="/products/3">Product 3</Link>
                </li>
            </ul>
            <h2>Popular Categories</h2>
            <ul>
                <li>
                    <Link to="/categories/electronics">Electronics</Link>
                </li>
                <li>
                    <Link to="/categories/clothing">Clothing</Link>
                </li>
                <li>
                    <Link to="/categories/home">Home & Garden</Link>
                </li>
            </ul>
            <h2>Latest Deals</h2>
            <ul>
                <li>
                    <a href="https://example.com/deal1">Deal 1</a>
                </li>
                <li>
                    <a href="https://example.com/deal2">Deal 2</a>
                </li>
                <li>
                    <a href="https://example.com/deal3">Deal 3</a>
                </li>
            </ul>
        </div>
    );
};
  
export default Home;
