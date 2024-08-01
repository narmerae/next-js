import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
`;

const NavLink = styled.a`
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <NavbarContainer>
            <div className={inter.className}>
                <Link href="/" passHref>
                    <NavLink>Home</NavLink>
                </Link>
                <Link href="/pokemons" passHref>
                    <NavLink>Pokemons</NavLink>
                </Link>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
