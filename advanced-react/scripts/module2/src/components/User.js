import { useState, useEffect } from "react";

function User () {
    const [userData, setUserData] = useState({});

    const fetchData = () => { 
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data => setUserData(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return Object.keys(userData).length > 0 ? (
        <div>
            <h1>Data returned</h1>
            <h2>First Name: {userData.results[0].name.first}</h2>
            <h2>Last Name: {userData.results[0].name.last}</h2>
        </div>
    ) : (
        <h1>Data pending...</h1>
    )
} 

export default User;