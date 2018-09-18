function main(params) {

    let discountToApply = 0.05 // 5% discount
    let discountText = " - Today 5% off"

    let discountCategory = params.discountCategory
    console.log("[Debug] apply discount to category " + discountCategory)

    // get the product data from previous action and loop
    let products = params.response.body.results
    products.forEach(product => {
        let categories = product.categories.filter(category => category.id == discountCategory);

        console.log( "Categories [0] " + categories[0])

        // only apply discount if the product belongs to the discounted category
        if (categories[0] != null) {
            // apply message to product title
            product.name+= discountText

            //change price of the main variant
            product.prices.map(price => {
                price.amount -= price.amount * discountToApply
                return price
            })

            // apply discount to all product variant prices
            product.variants.map(variant => {
                variant.prices.map(price => {
                    price.amount -= price.amount * discountToApply
                    return price
                })

                return variant.name+= discountText
            })
        }

    });

    return params
}