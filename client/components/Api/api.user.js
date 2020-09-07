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

const signIn = async (user) => {
    try {
        let response = await fetch('/auth/signin/', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        return await response.json();
    } catch(err) {
        console.log(err)
    }
};

const signOut = async () => {
    try {
      let response = await fetch('/auth/signout/', { 
          method: 'GET' }
        )
      return await response.json()
    } catch(err) {
      console.log(err)
    }
};

export { createUser, signIn, signOut }
