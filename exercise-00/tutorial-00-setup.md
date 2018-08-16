Exercise 0 - Setting things up
===========

## Objective

The objective of this exercise is to setup your custom Adobe I/O Runtime namespace. 

## Assumptions

1. You already have an Adobe I/O Runtime namespace.
2. You already have an auth code for your namespace. 
3. You already have a Magento instance and the corresponding connection details.
4. You already have [OpenWhisk CLI](https://github.com/apache/incubator-openwhisk-cli) downloaded and installed.
5. You already have an AEM instance setup and running. 
6. You already have NodeJS and NPM installed. 

## Tasks
1. Setup wskprops file 
```wsk property set --apihost runtime.adobe.io --auth <Your auth code> --namespace <Your namespace>```

2. Clone the [CIF Extension Sample](https://github.com/Adobe-Marketing-Cloud/adobe-cif-extension-sample) repository
	
	```ruby
	git clone https://github.com/Adobe-Marketing-Cloud/adobe-cif-extension-sample.git 
	```

3. Switch to the `magento` branch. 

4. Clone the [Magento CIF Repository](https://github.com/adobe/commerce-cif-magento) 
```git clone https://github.com/adobe/commerce-cif-magento```

5. In the cloned directory, go to the `customer-deployment` folder.

6. Copy the `credentials-example.json` file to `credentials.json` file.

7. Update the `credentials.json` file with your Magento connection details.
```
{
    "MAGENTO_SCHEMA": "http",
    "MAGENTO_HOST": "xxxxxxx",
    "MAGENTO_API_VERSION": "V1",
    "MAGENTO_CUSTOMER_TOKEN_EXPIRATION_TIME": "3600",
    "MAGENTO_AUTH_ADMIN_TOKEN": "xxxxxx",
    "MAGENTO_MEDIA_PATH": "media/catalog/product",
    "PRODUCT_ATTRIBUTES": ["color", "size"],
    "GRAPHQL_PRODUCT_ATTRIBUTES": ["color", "size"],
    "MAGENTO_IGNORE_CATEGORIES_WITH_LEVEL_LOWER_THAN": 2
}
```

`MAGENTO_CUSTOMER_TOKEN_EXPIRATION_TIME` - logged in user token expiration for Magento
`MAGENTO_MEDIA_PATH` - local directory where the product assets are stored in Magento
`PRODUCT_ATTRIBUTES` - attributes that are relevant to determine the variants, used for display 
`GRAPHQL_PRODUCT_ATTRIBUTES` - same as above, used for queries
`MAGENTO_IGNORE_CATEGORIES_WITH_LEVEL_LOWER_THAN` - category tree level for navigation

8. Update `bindings-namespace` and `customer-namespace` properties in `package.json` file.
```
"customer-namespace": "kmall",
"bindings-namespace": "ccif-core-library",
```

9. Run ```npm install; npm run deploy```

10. Confirm that the bindings were successful. 

```
https://runtime.adobe.io/api/v1/web/YOUR_NAMESPACE/magento/searchProducts.http?text=jacket
``` 

11. Complete details are available [here](https://github.com/adobe/commerce-cif-magento/tree/master/customer-deployment)

12. In the `serverless.yml` file, you can configure the `cachetime`. Also possible to do using `wsk package update commerce-cif-magento-category@latest --param cachetime 400` command. 

```
 commerce-cif-magento-category@latest:
      binding: /${self:custom.bindings-namespace}/commerce-cif-magento-category@latest
      parameters:
        cachetime: 300
        $<<: ${file(credentials.json)}
```
