Exercise 3 - Create a CIF Package with Action Sequence
========================================================


1. Create a OpenWhisk Package using your seat ID (placed on seet of paper in front of your machine !!)

	>> wsk package create seat-X-X

	Example:

	>> wsk package create seat-0-1

2. Create Action 

	>> wsk action create seat-X-X/applyDiscount applyDiscount.js

	Example:

	>> wsk action create seat-0-1/applyDiscount applyDiscount.js

3. Create a Action Sequence

	>> wsk action create seat-X-X/getDiscountedProduct --sequence "getProductByIdService,seat-X-X/applyDiscount,webActionTransformer" --web true

4. Check if the action sequence is reated

	>> wsk action list

5. Check if the newly created sequence has the right actions configured 

	>> wsk action get seat-X-X/getDiscountedProduct

	Example:

	>> wsk action get seat-0-1/getDiscountedProduct

   Expected output

	```ruby
	ok: got action seat-X-X/getDiscountedProduct
	{
	    "namespace": "summit2018-L735/seat-X-X",
	    "name": "getDiscountedProduct",
	    "version": "0.0.1",
	    "exec": {
		"kind": "sequence",
		"components": [
		    "/summit2018-L735/getProductByIdService",
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
			"/summit2018-L735/getProductByIdService",
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

	>> https://runtime-preview.adobe.io/api/v1/web/varun-venkataraman-namespace/seat-X-X/getDiscountedProduct.http?id=0156c6fc-c94e-4785-be58-c624b408777b

