Exercise 1 
===========
	1. Go to Home directory
		
		cd ~
		
	2. Create .wskprops file 
		
		wsk property set --apihost runtime-preview.adobe.io --auth <Your auth code> --namespace <Your namespace>
		
		Alternatively, you can create .wskprops file manually
		
		vi .wskprops
		
		Enter following details
			AUTH=
			APIHOST=runtime-preview.adobe.io
			NAMESPACE=
	This sets up OpenWhisk to connect to Adobe I/O Runtime
	Now let's deploy a Hello World Action. 
	
	3. Create hello-world.js using a text editor or vi
		
		vi hello-world.js
		paste the code below
		
			function main(params) {
   				return {payload: 'Hello ' + params.firstName + ' ' + params.lastName };
			}
			
	4. Let's deploy this to Runtime
		
		wsk action create hello-world hello-world.js
		hello-world == name of the action 
		hello-world.js file to execute for the action hello-world
		
	5. Let's invoke this action
		wsk action invoke hello-world --result --param firstName Gary --param lastName Kirsten
		

		--result == blocking call, show me result after the execution 
		
	Without result flag: wsk action invoke hello --param firstName Gary --param lastName Kirsten
	This will return an id. You can get details of the invoke call and the id via 
		wsk activation result aed3825c70ac4fe4a5ed77353559dd8e
	
	You can also pass the params in a file 
		wsk action invoke --result hello --param-file parameters.json
	parameter.json content
		{
    		"firstName": "Gary",
    		"lastName": "Kirsten"
		}
	More details available at https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md

If you don't want to do anything, all files are available in L735_Exercise1.zip
		
		
	