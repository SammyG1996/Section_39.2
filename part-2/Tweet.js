const Tweet = ({user}) =>  (
        <div>
            <h1>{user.username}</h1>
            <p><b>{user.name}</b></p>
            <p>{user.date}</p>
            <p>{user.msg}</p>
        </div>
    )
