Exercise 3 - Create a CIF Package with Action Sequence
========================================================


1. If you don't have a package `seat-john-doe` created please follow steps in [Exercise 1](../exercise-01/tutorial-01-hello-world.md) or [Exercise 2](../exercise-02/tutorial-02-hello-world-sequence.md)

2. Create Action 

	>> wsk action create seat-X-X/applyDiscount applyDiscount.js --param discountCategory 693b0fc5-7283-4673-a362-589d37fb7b73

	For the "discountCategory" parameter we provide a default value, which is used of not categeory is prodvided via URL query parameter. See step 6.

	Example:

	>> wsk action create seat-john-doe/applyDiscount applyDiscount.js --param discountCategory 693b0fc5-7283-4673-a362-589d37fb7b73

3. Create a Action Sequence

	>> wsk action create seat-X-X/getDiscountedProducts --sequence "getProductsService,seat-X-X/applyDiscount,webActionTransformer" --web true

4. Check if the action sequence is reated

	>> wsk action list

5. Check if the newly created sequence has the right actions configured 

	>> wsk action get seat-X-X/getDiscountedProducts

	Example:

	>> wsk action get seat-john-doe/getDiscountedProducts

   Expected output
   
   ```ruby 
   
   ok: got action seat-X-X/getDiscountedProducts
   {
       "namespace": "summit2018-L735/seat-X-X",
       "name": "getDiscountedProducts",
       "version": "0.0.1",
       "exec": {
           "kind": "sequence",
           "components": [
               "/summit2018-L735/getProductsService",
               "/summit2018-L735/seat-X-X/applyDiscount",
               "/summit2018-L735/webActionTransformer"
           ]
       },
       "annotations": [
           {
               "key": "web-export",
               "value": true
           },
           {
               "key": "raw-http",
               "value": false
           },
           {
               "key": "final",
               "value": true
           },
           {
               "key": "exec",
               "value": "sequence"
           }
       ],
       "parameters": [
           {
               "key": "_actions",
               "value": [
                   "/summit2018-L735/getProductsService",
                   "/summit2018-L735/seat-X-X/applyDiscount",
                   "/summit2018-L735/webActionTransformer"
               ]
           }
       ],
       "limits": {
           "timeout": 60000,
           "memory": 256,
           "logs": 10
       },
       "publish": false
   }
   
   ```
6. Open PostMan and run the following command and see the response (as you can see discount is applied)

	Sample call 1: (apply discount to default category - men)
	GET https://runtime.adobe.io/api/v1/web/summit2018-L735/seat-X-X/getDiscountedProducts.http?id=a60fe100-4121-4b74-b55b-18886579e202
	>> discount is applied to all product in the men's category, product name is suffied as well

	Sample call 2: (apply discount to default category provide as param)
	GET https://runtime.adobe.io/api/v1/web/summit2018-L735/seat-X-X/getDiscountedProducts.http?text=shirt&discountCategory=1146e785-0a44-47d7-a9d4-744f219843fd
	>> discount is applied to all product in the men's > shirts category, product name is suffied as well



