// import './assets/styles.css';

// // eslint-disable-next-line react/prop-types
// export function CategoryNavigation({onCategoryClick}) {
//     const categories = ['SHIRTS', 'PANTS', 'ACCESSORIES', 'MOBILES', 'MOBILEACCESSORIES'];

//     return(
//         <nav className="category-navigation">
//             <ul className="category-list">
//                 {categories.map((category, index) => (
//                     <li key={index}
//                     className="category-item"
//                     onClick={() => onCategoryClick(category)}
//                     >
//                     {category}
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// }


import { useState } from "react";
import "./assets/styles.css";

// eslint-disable-next-line react/prop-types
export function CategoryNavigation({ onCategoryClick }) {
    const categories = ['SHIRTS', 'PANTS', 'ACCESSORIES', 'MOBILES', 'MOBILEACCESSORIES'];
    const [activeCategory, setActiveCategory] = useState("SHIRTS"); // Default active category

    const handleClick = (category) => {
        setActiveCategory(category);  // Set active category
        onCategoryClick(category); // Call the parent function
    };

    return (
        <nav className="category-navigation">
            <ul className="category-list">
                {categories.map((category, index) => (
                    <li key={index}
                        className={`category-item ${activeCategory === category ? "active" : ""}`}
                        onClick={() => handleClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
