Exercise 1 - Create a Adobe I/O Hello World Action
===========

1. Open Terminal.

2. Go to into a workspace (Example: If your workspace directory is *Desktop/l735*)
 	
	>> cd Desktop/l735
	
3. Checkout all code from Adobe Central GitHub repository
	
	>> git clone https://github.com/Adobe-Marketing-Cloud/adobe-cif-extension-sample.git 
	
4. Go into adobe-cif-extension-sample
	
	>> cd adobe-cif-extension-sample/exercise-01
	
5. Create a OpenWhisk Package (make sure to use a format seat-firstname-lastname)
	WARNING: PLEASE REPLACE X with your firstname and lastname: seat-john-doe
	
	>> wsk package create seat-X-X
	
	Learn more about [OpenWhisk Packages](https://github.com/apache/incubator-openwhisk/blob/master/docs/packages.md)
	
6. Create a action for hello world using a sample provided 
	
	>> wsk action create seat-X-X/hello-world hello-world.js
	
	Learn more about the [action command](https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md)
	
7. Execute and see results with params
	
	>> wsk action invoke seat-X-X/hello-world --result --param firstName Gary --param lastName Kirsten
	
8. Good to know: OpenWhisk Namespace and properties are already deployed for you. Checkout the .wskprop using below command on terminal
	
	>> cat ~/.wskprops
	
	Blocking call
	
	>> -- results flag means its a blocking call. Try invoking the action without the results flag and getting the result via the activation command
	
	Parameters file
	
	>> Try invoking the action using the param-file flag and passing the parameters.json file.

		
	
