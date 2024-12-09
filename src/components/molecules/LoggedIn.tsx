import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie';

const secretWord = 'banaan'

export function LoggedIn({children}: {children: React.ReactNode}): JSX.Element {
    const [loggedIn, setLoggedIn] = useState(false)

    function checkPwd(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value == secretWord) {
            Cookies.set('calculator', e.target.value, {expires: 30})
            setLoggedIn(true)
        }
    }

    useEffect(() => {
        const cookiePwd = Cookies.get('calculator')
        if (cookiePwd == secretWord) {
            setLoggedIn(true)
        }
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