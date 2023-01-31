const App = () => {
    const users = [
        {
            username : "test123", 
            name : "John Doe", 
            date : "1/1/2023", 
            msg : "This is a test"
        }, 
        {
            username : "test123", 
            name : "Jane Doe", 
            date : "1/12/2023", 
            msg : "This is another test"
        }, 
        {
            username : "test123", 
            name : "Janis Doe", 
            date : "1/31/2023", 
            msg : "This is a final test"
        }
    ]
    return (    
        <div>
            {users.map((user) => <Tweet user = {user}/>)}
        </div>
    )
}