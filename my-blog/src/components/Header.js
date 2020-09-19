import React from 'react';

function Header() {
    return (
        <div>
			   <div class="logo">
					<h1>The <span className="redtext">Alien</span><span className="blacktext"> Talks</span></h1>
             </div>
            <nav>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Episodes</li>
						<li>Contact</li>
					</ul>
					<button>Subscribe</button>
            </nav>
            <input type='text' placeholder='Search...'></input>
        </div>
    )
}

export default Header;
