import React from 'react';
import SocialButton from './socialButton';

export default function SocialBar() {
    return (
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <SocialButton icon="fab fa-facebook-square" label="Facebook" link="https://www.facebook.com/dave.andrews.10004694" />
            <SocialButton icon="fab fa-github-square" label="GitHub" link="https://github.com/dandroos" />
            <SocialButton icon="fab fa-codepen" label="Codepen" link="https://codepen.io/DardinoDave/"/>
        </div>
    )
}
