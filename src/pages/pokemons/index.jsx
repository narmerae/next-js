import React from 'react';
import Link from "next/link";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
    console.log(context.params)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const data = await res.json()

    return { props: { data } }
}

const Index = ({data}) => {
    const arrayPokemons = data.results;
    console.log(arrayPokemons)
    return (
        <>
            <h1 className={inter.className} style={{textAlign:"center"}}>List of Pokemons</h1>
            <div className={inter.className} id={"main"}>
            {
                arrayPokemons.map((pokemon, index) => (
                    <div key={index}>
                        <Link href={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
                    </div>
                ))
            }
            </div>
        </>
    );
};

export default Index;