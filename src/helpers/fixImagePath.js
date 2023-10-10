const fixImageUrl = (products) => 
    products.map(p => {
        p.images = p.images.map(i =>{
        i.url = process.env.APP_BASE_URL + i.url
        return i
    })
        return p
    })

module.exports = fixImageUrl
