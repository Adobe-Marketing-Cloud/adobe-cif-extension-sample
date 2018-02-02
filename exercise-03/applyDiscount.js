function main(params) {
    let discountToApply = 0.05 // 5% discount
    let discountText = " - Today 5% off"
    // this is the id of the men's category, we only apply the discount to products within this category
    let discountCategory = "693b0fc5-7283-4673-a362-589d37fb7b73"

    // get the product data from previous action
    let product = params.response.body
    let categories = product.categories.filter(category => category.id === discountCategory);

    // only apply discount if the product belongs to the discounted category
    if (categories[0] != null) {
        // apply message to product title
        Object.keys(product.name).map(key => {
            product.name[key] += discountText
        })

        // apply discount to all product prices
        product.variants.map(variant => {
            return variant.prices.map(price => {
                price.centAmount -= price.centAmount * discountToApply
                return price
            })
        })
    }

    return params
}