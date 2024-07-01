"use client";

import Image from "next/image"

import { useState } from "react";

export default function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(ev) {
        ev.preventDefault();
        fetch('@/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'aplication/json'},
        });
    }



    return(
        <section className="mt-8">
            <h1 className="text-center text-purple-500 text-4xl mb-4">

                register

            </h1>

            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email}
                onChange={ev => setEmail(ev.target.value)} />

                <input type="password" placeholder="password" value={password}
                onChange={ev => setPassword(ev.target.value)}/>

                <button className="button" type="submit">register</button>

                <div className="my-4 text-center to-gray-600">
                    o registrate con tu cuenta de
                </div>

                <button className="button flex justify-center">
                <div className="text-center">
            <Image src={'/logogoogle.png'} alt={''} width={30} height={24} style={{ display: 'block', margin: '0 auto' }} />
                    <span>Login with Google</span>
    </div>
                </button>

            </form>

        </section>
    );
}