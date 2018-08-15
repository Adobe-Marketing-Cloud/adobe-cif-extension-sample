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

## Tasks
1. Setup wskprops file 
```wsk property set --apihost runtime.adobe.io --auth <Your auth code> --namespace <Your namespace>```

2. Clone the [Magento CIF Repository](https://github.com/adobe/commerce-cif-magento) 
```git clone https://github.com/adobe/commerce-cif-magento```

3. In the cloned directory, go to the `customer-deployment` folder.

4. Copy the `credentials-example.json` file to `credentials.json` file.

5. Update the `credentials.json` file with your Magento connection details.
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

6. Update `bindings-namespace` and `customer-namespace` properties in `package.json` file.
```
"customer-namespace": "kmall",
"bindings-namespace": "ccif-core-library",
```

7. Run ```npm install; npm run deploy```

8. Complete details are available [here](https://github.com/adobe/commerce-cif-magento/tree/master/customer-deployment)
