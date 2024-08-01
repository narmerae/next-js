import React, {useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export async function getServerSideProps(context) {
    const { id } = context.query;
    let data = null

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        data = await res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return { props: { data } }
}
const Index = ({data}) => {
    console.log(data)
    return (
        <div className={inter.className} id={"main"}>
            <Head>
                <title>{data.name}</title>
                <meta name="description" content={`This is ${data.name}`} />
            </Head>
            <h1>{data.name}</h1>
            <Image style={{padding:`5px`}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} width={500} height={281}  alt={data.name}></Image>
            <Link href={`/pokemons`}>Pokemons</Link>

        </div>
    );
};

export default Index;