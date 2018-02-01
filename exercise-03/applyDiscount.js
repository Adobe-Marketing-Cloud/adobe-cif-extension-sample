/* Markus Haack - TBA */
function main(params, args) {

   var allVariants = params.variants;
   var variantFound = false;
   var discountToApply = 20;
   var discountedPrice = "Please refer into store for price !!";
   var arguement = "No Arguement";

   if(args != null && args.length > 0) {
   		arguement = args[0];
   }
   
   for (i in allVariants) {

   		if(allVariants[i].id == "526dc571-104f-40fb-b761-71781a97910b-2") {
   			variantFound = true;

   			var allVariantsPrices = allVariants[i].prices;

   			if(allVariantsPrices.length > 0) {
   				discountedPrice = allVariantsPrices[0].centAmount;

	   			if(discountedPrice != null && discountedPrice > discountToApply) {
	   				discountedPrice = discountedPrice - discountToApply;
	   			}

   			}

   		}

   }

   return {discountedPrice:  discountedPrice, args: arguement};
}