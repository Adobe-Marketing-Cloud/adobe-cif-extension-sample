Exercise 2
===========

** WARNING: Steps 1 - 5 may be repetition for you, if you have done other exercises **

1. Open Terminal.

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
	cd adobe-cif-extension-sample/exercise-02
	```
5. Create a OpenWhisk Package (make sure to use a format seat-firstname-lastname)
	WARNING: PLEASE REPLACE X with your firstname and lastname: seat-john-doe
	```ruby
	wsk package create seat-X-X
	```
	
5. Let us create a sequence using two actions sequence files hello_sequence_action1.js and hello_sequence_action2.js. Please open both files in this directory and observe.


6. Let's deploy these (**WARNING** Make sure to change seat-X-X to your package name example seat-firstname-lastname)
	```ruby
	wsk action create seat-X-X/action1 hello_sequence_action1.js
	wsk action create seat-X-X/action2 hello_sequence_action2.js
	```
	
7. Let's create a sequence with these two sequences
	```ruby
	wsk action create seat-X-X/hello-world-sequence --sequence seat-X-X/action1,seat-X-X/action2
	```
	
8. Let's invoke 
	```ruby
	wsk action invoke  seat-X-X/hello-world-sequence --result --param text "Hello, my name is Larry"
	```	
	
