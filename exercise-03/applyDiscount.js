function main(params) {
   var discountToApply = 0.05; // 5% discount
   
   params.response.body.variants.map(variant => {
		return variant.prices.map(price => {
			price.centAmount -= price.centAmount * discountToApply;
			return price;
		})
	})
   return params;
}