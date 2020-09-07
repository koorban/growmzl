const create = async (newProduct) => {
    try {
        let response = await fetch('/products/new/', {
            method: 'POST',
            headers: { 
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        return response.json();
    } catch(err) {
        console.log(err);
    };
};

const listByCategory = async (params, signal) => {
    try {
        let response = await fetch(`/products/by/${params.category}`, {
            method: 'GET',
            signal: signal,
        });
        return await response.json();
    } catch(err) {
        console.log(err)
    }
};

const listAllProducts = async (signal) => {
    try {
        let response = await fetch('/products/list/all', {
            method: 'GET',
            signal: signal,
        });
        return await response.json();
    } catch(err) {
        console.log(err)
    }
};

const readByProductId = async (params, signal) => {
    try {
        let response = await fetch(`/products/product/${params.id}`, {
            method: 'GET',
            signal: signal,
        })
        return await response.json();
    } catch(err) {
        console.log(err)
    }
};

export { 
    create,
    listByCategory,
    listAllProducts,
    readByProductId
};