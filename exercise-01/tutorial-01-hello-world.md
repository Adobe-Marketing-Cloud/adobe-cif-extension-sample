Exercise 1 - Create a Adobe I/O Hello World Action
===========
```diff
- WARNING: PLEASE REPLACE seat-X-X with your FIRSTNAME and LASTNAME: Example: seat-john-doe -
```
	
1. Open Terminal.
	![Image of terminal on desktop](https://github.com/Adobe-Marketing-Cloud/adobe-cif-extension-sample/blob/master/Resources/Terminal.png)

2. Go to into a workspace (Example: If your workspace directory is *Desktop/l735*)
 	
	```ruby
	cd Desktop/l735
	```
	
3. Checkout all code from Adobe Central GitHub repository
	
	```ruby
	git clone https://github.com/Adobe-Marketing-Cloud/adobe-cif-extension-sample.git 
	```
	
4. Go into adobe-cif-extension-sample
	
	```ruby
	cd adobe-cif-extension-sample/exercise-01
	```
	
5. Create a OpenWhisk Package (make sure to use a format seat-firstname-lastname)
	```diff
	**WARNING: PLEASE REPLACE X with your firstname and lastname: seat-john-doe**
	```
	
	```ruby
	wsk package create seat-X-X
	```
	
	**Expected Output**
	
	```diff
	+ ok: created package seat-X-X
	```
	
	
	
	Learn more about [OpenWhisk Packages](https://github.com/apache/incubator-openwhisk/blob/master/docs/packages.md)
	
6. Create a action for hello world using a sample provided 
	
	```ruby
	wsk action create seat-X-X/hello-world hello-world.js
	```
	
	**Expected Output**
	
	```diff
	+ ok: created action seat-V-V/hello-world
	```
	
	Learn more about the [action command](https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md)
	
7. Execute and see results with params
	
	```ruby
	wsk action invoke seat-X-X/hello-world --result --param firstName Gary --param lastName Kirsten
	```
	
	**Expected Output**
	
	```ruby
	{
        "payload": "Hello Gary Kristen"
     	}
	```
	
8. Good to know: OpenWhisk Namespace and properties are already deployed for you. Checkout the .wskprop using below command on terminal

	```ruby
	cat ~/.wskprops
	```
	
	Parameters file
	
	>> Try invoking the action using the param-file flag and passing the parameters.json file.
	
	```ruby
	wsk action invoke seat-X-X/hello-world --result --param-file parameters.json
	```
		
	
