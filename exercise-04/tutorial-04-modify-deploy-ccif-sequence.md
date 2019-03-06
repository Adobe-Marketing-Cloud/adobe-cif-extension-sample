**__DEPRECATED__** Exercise 4 - Integrate CIF Services with AEM
============================================

# __NOTE: This exercise uses a package that is for demo purposes ONLY and not supported or maintained by Adobe. Please don't use this in implementation__

## Objective
![Image of ex4 outcome](../Resources/ex4.png)


## Pre work

1. Install the [We.Retail CCIF Connector](weretail-ccif-connector-all-1.0.2.zip)
2. Configure the CCIF Connector Service

![CCIF Connector Configuration Service](ccif-connector-configuration.png)

## Tasks

```diff
- **WARNING: PLEASE REPLACE seat-{YOUR_FIRSTNAME}-{YOUR_LASTNAME} with your firstname and lastname: seat-john-doe**
```

1. Go to We.Retail Page

    ```ruby
    http://localhost:4502/content/we-retail/us/en.html 
    ```


2. Navigate to product page **El Gordo Down Jacket**

    Click on **El Gordo Down Jacket**
        
    ```ruby
    http://localhost:4502/editor.html/content/we-retail/us/en/product.meskwielt.html
    ```

    see **El Gordo Down Jacket** product page
    ![Orginal Product](ElGordoJacker-original.png)

4. Update the sequence

    ```ruby
    wsk action update magento/searchProducts --sequence "commerce-cif-magento-product@latest/searchProductsService,seat-X-X/applyDiscount,commerce-cif-magento-common@latest/webActionTransformer" --web true
    ```
    
    updates the default **magento/searchProduct** sequence to use our **applyDiscount** action from exercise 3.

5. Refresh the product page
    
    Reload:
    ```ruby
    http://localhost:4502/editor.html/content/we-retail/us/en/product.meskwielt.html
    ```
    
    see **El Gordo Down Jacket** product page with new discounted price and updated title. 
    _This page might take a while to refresh because of the configured cachetime. OOTB value is 300s. See [exercise-00](../exercise-00/tutorial-00-setup.md) for more details_
    ![Orginal Product](ElGordoJacker-discount.png)

6. Overall outcome

    ![Image of ex4 outcome](../Resources/ex4.png)  
