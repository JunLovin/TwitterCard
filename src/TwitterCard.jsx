import { useState } from 'react'

export function TwitterCard({children, username}){
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return(
    <>
    <article className="tw-followCard">
        <header>
            <a href={`https://unavatar.io/twitter/${username}`}><img src={`https://unavatar.io/twitter/${username}`} alt="" /></a>
            <div>
                <a href={`https://twitter.com/${username}`}><strong>{children}</strong></a>
                <span>@{username}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>{text}</button>
        </aside>
    </article>
    </>
    )
}