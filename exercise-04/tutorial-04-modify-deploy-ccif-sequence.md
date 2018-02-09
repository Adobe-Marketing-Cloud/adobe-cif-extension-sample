Exercise 4 - Integrate CIF Services with AEM
============================================

TODO: prepare Connector pointing to LAB namespace on OW
/apps/cloudcommerce/config/com.adobe.cq.commerce.cloud.pim.impl.CloudCommerceObjectMapperImpl-default.config

1. Start AEM

	Goto to Descktop
    Start AEM Author

2. Goto to We.Retail Page

    http://localhost:4502/content/we-retail/us/en.html


3. Navigate to product page "Amsterdam Short-Sleeve Travel Shirt" (red t-shirt)

    Click on products
    Click on Men's categaory
    Click on Amsterdam Short-Sleeve Travel Shirt (TODO add URL !!)
    >> see product price of                      (TODO add screenshot of PDP)

4. Instructor will update the sequence

    wsk action update searchProducts --sequence "getProductsService,seat-X-X/applyDiscount,webActionTransformer" --web true

    >> updates the default searchProduct sequence to use our applyDiscount action from exercise 3.

5. Refresh the product page

	>> product price updated                    (TODO add screenshot of PDP)

    http://or1010051034240.corp.adobe.com:4502/content/we-retail/us/en/product.mehisulat-xs.html#mehisulat-xs

9. Overall outcome

![Image of ex4 outcome](https://github.com/Adobe-Marketing-Cloud/adobe-cif-extension-sample/blob/master/Resources/ex4.png)  
