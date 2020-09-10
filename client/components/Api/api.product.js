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

const updateProduct = async(params, product) => {
    console.log('PRINTING', product)
    console.log('ID',params.id)
    try {
        let response = await fetch('/products/product/' + params.id, {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
};

const deleteProduct = async(params) => {
    try {
        let response = await fetch('/products/product/' + params.id, {
            method: 'DELETE',
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
    readByProductId,
    updateProduct,
    deleteProduct
};