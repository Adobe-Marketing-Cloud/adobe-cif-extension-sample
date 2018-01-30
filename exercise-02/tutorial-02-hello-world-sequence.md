Exercise 2
===========

	1. Create a sequence - list of actions executed in order
	Samples taken from https://www.raymondcamden.com/2017/01/06/an-example-of-an-openwhisk-sequence
	Let's create two actions
		vi hello_sequence_action1.js
		copy content
		function main(params) {

    		var words = params.text.split(' ');
    		return {array:words};

		}
		
		vi hello_sequence_action2.js
		copy content
		function main(params) {

    		return { array:params.array.reverse() };
    
		}
	2. Let's deploy these 
		wsk action create action1 hello_sequence_action1.js
		wsk action create action2 hello_sequence_action2.js
	
	3. Let's create a sequence with these two sequences
		wsk action create hello-world-sequence --sequence action1,action2
	
	4. Let's invoke 
		wsk action invoke hello-world-sequence --result --param-file parameters.json
		
		parameters.json 
		{
    		"text": "Hello my name is Kaushal"
		}

		OR 
		
		wsk action invoke hello-world-sequence --result --param text "Hello, my name is Kaushal"
		
More details available at https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md
If you don't want to do anything, all files are available in L735_Exercise2.zip
		
		
	