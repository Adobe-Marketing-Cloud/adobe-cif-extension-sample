Exercise 4 - Integrate CIF Services with AEM
============================================

TODO: prepare Connector pointing to LAB namespace on OW
/apps/cloudcommerce/config/com.adobe.cq.commerce.cloud.pim.impl.CloudCommerceObjectMapperImpl-default.config

1. Goto to We.Retail Page

    http://localhost:4502/content/we-retail/us/en.html 


2. Navigate to product page **El Gordo Down Jacket** (red t-shirt)

    Click on products
    Click on Men's category
    http://localhost:4502/content/we-retail/us/en/category.693b0fc5-7283-4673-a362-589d37fb7b73.html 

    Sample URL:
    ```
    http://or1010051034240.corp.adobe.com:4502/content/we-retail/us/en/category.693b0fc5-7283-4673-a362-589d37fb7b73.html
    ```

    Click on Amsterdam Short-Sleeve Travel Shirt
    http://localhost:4502/content/we-retail/us/en/product.meskwielt.1-s.html
    
    ```
    http://or1010051034240.corp.adobe.com:4502/content/we-retail/us/en/product.meskwielt.1-s.html
    ```

    see **El Gordo Down Jacket** product page
    ![Orginal Product](ElGordoJacker-original.png)

4. Instructor will update the sequence

    ```
    wsk action update searchProducts --sequence "getProductsService,seat-X-X/applyDiscount,webActionTransformer" --web true
    ```
    
    updates the default **searchProduct** sequence to use our **applyDiscount** action from exercise 3.

5. Refresh the product page
    
    ```
    http://localhost:4502/content/we-retail/us/en/product.meskwielt.1-s.html
    ```

    Sample Server URL:
    ```
    http://or1010051034240.corp.adobe.com:4502/content/we-retail/us/en/product.meskwielt.1-s.html
    ```
    
    see **El Gordo Down Jacket** product page with new discounted price and updated title
    ![Orginal Product](ElGordoJacker-discount.png) 

6. Overall outcome

    ![Image of ex4 outcome](https://github.com/Adobe-Marketing-Cloud/adobe-cif-extension-sample/blob/master/Resources/ex4.png)  
