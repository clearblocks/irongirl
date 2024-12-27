import React, {useEffect, useState} from 'react'
import {login} from "../../helpers/requests";
import {isLoggedIn} from "../../helpers/requests";

export function LoggedIn({children}: {children: React.ReactNode}): JSX.Element {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    async function checkPwd(e: React.ChangeEvent<HTMLInputElement>) {
       setLoggedIn(await login(e.target.value))
    }

    useEffect(() => {
        const fetchLogin = async () => {
            setLoggedIn(await isLoggedIn())
        }

        fetchLogin().catch(console.error)
    }, [])

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