

const setData = (newProduct) => {
    const allProducts = getData();
    localStorage.setItem('Ordered-Products', JSON.stringify([...allProducts, newProduct]));
}

const getData = () => {
    let allData = [];
    const storedData = localStorage.getItem('Ordered-Products');
    if(storedData) {
        allData = JSON.parse(storedData);
    }
    return allData;
}

export { setData, getData };

