import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie';

const secretWord = 'banaan'

export function LoggedIn({children}: {children: React.ReactNode}): JSX.Element {
    const [loggedIn, setLoggedIn] = useState(false)

    async function checkPwd(e: React.ChangeEvent<HTMLInputElement>) {
        const response = await fetch("php/login.php", {
            method: "POST",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'password': e.target.value
            })
        })

        if (response.ok) {
            const json = await response.json()
            setLoggedIn(json['logged_in'])
        }
    }

    useEffect(() => {
        const fetchLogin = async () => {
            const response = await fetch("php/login.php")
            if (response.ok) {
                const json = await response.json()
                setLoggedIn(json['logged_in'])
            }
        }

        fetchLogin().catch(console.error)
    })

    if (loggedIn) {
        return <>{children}</>
    } else {
        {
            return <div className={'password-screen'}>
                <span>Password:</span><input type={'text'} onChange={checkPwd} />
            </div>
        }
    }
}