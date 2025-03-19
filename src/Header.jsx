/* eslint-disable react/prop-types */
import { CartIcon } from "./CartIcon";
import Logo from "./Logo";
import { ProfileDropdown } from "./ProfileDropdown";
import './assets/styles.css'; 

export function Header({cartCount, username}) {
    return(
        <header className="header">
            <div className="header-content">
                <Logo />
                <div className="header-actions">
                    <CartIcon count={cartCount} />
                    <ProfileDropdown username = {username} />
                </div>
            </div>
        </header>
        
    )
}