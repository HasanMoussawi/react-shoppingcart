import React from 'react';
import '../../css/Header/Header.css';
import { words } from '../../words.js'

function Header() {
    return (
        <header>
            {words.headertitle}
        </header>
    );
}

export default Header;
