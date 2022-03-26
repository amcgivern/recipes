import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [activeItem, setActiveItem] = useState({});

  const handleItemClick = (event, { name }) => setActiveItem({ activeItem: name })

  return (
    <nav class="ui menu">
      <div class="active item"><Link to="/" className="">Recipe Website</Link></div>
      <div class="item"><Link to="/account" className="">My Account</Link></div>
      <div class="item"><Link to="/recipe" className="">Recipe</Link></div>
      <div class="item"><Link to="/recipeGrid" className="">Recipe List</Link></div>
      <div class="item"><Link to="/recipeGrid" className="">Recipe List</Link></div>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..."></input>
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">
          Logout
        </a>
      </div>
    </nav>
  )

}

