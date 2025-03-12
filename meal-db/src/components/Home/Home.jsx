document.documentElement.setAttribute("data-theme", "dark");

import logo from '../../../src/assets/Logo.png';
const Home = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold underline">This is Home Page</h2>
            <img src={logo} alt="Logo of the website MealDB" />
        </div>
    );
};

export default Home;