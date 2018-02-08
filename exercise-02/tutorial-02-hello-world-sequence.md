Exercise 2 - Create a Adobe I/O Hello World Sequence
===========

```
## WARNING: Steps 1 - 5 may be repetition for you, if you have done other exercises**

	
1. Open Terminal.

	![Image of terminal on desktop](https://github.com/Adobe-Marketing-Cloud/adobe-cif-extension-sample/blob/master/exercise-01/Files/Terminal.png)

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
	
```

```diff
- WARNING: PLEASE REPLACE seat-X-X with your FIRSTNAME and LASTNAME: Example: seat-john-doe -
```

6. Let us create a sequence using two actions sequence files hello_sequence_action1.js and hello_sequence_action2.js.  
	
	```ruby
	wsk action create seat-X-X/action1 hello_sequence_action1.js
	```
	```ruby
	>> wsk action create seat-X-X/action2 hello_sequence_action2.js
	```
	
7. Let's create a sequence with these two sequences

	```ruby
	wsk action create seat-X-X/hello-world-sequence --sequence seat-X-X/action1,seat-X-X/action2
	```
	
7. Let's invoke 
	
	```ruby
	wsk action invoke  seat-X-X/hello-world-sequence --result --param text "Hello, my name is Larry"
	```
	
8. Expected output
	```ruby
		{
	    "array": [
		"Larry",
		"is",
		"name",
		"my",
		"Hello,"
	    ]
	}
	```
9. Learn more about [OpenWhisk sequence] 
	1. https://www.raymondcamden.com/2017/01/06/an-example-of-an-openwhisk-sequence
	2. https://console.bluemix.net/docs/openwhisk/openwhisk_actions.html#openwhisk_create_action_sequence
	
