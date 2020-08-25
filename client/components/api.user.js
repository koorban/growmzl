const createUser = async (newUser) => {
    try {
        let response = await fetch('/api/users/', {
            method: 'POST',
            headers: { 
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        return response.json();
    } catch(err) {
        return console.log(err)
    }
};

export { createUser }