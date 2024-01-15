


async function loadQuestions(){
	const APIUrl = 'https://opentdb.com/api.php?amount=15';
	const result = await fetch(`${APIUrl}`);
	const data = await result.json();
    
    showQuestion(data.results[0]);
   
	display(data);
}

var correct=0;
var correctarray=[];
var youranswerarray=[];
var questionarray=[];
var incorrect=0;
var question;
var nextquestion=0;
let correctanswer;
let incorrectanswer;

function display(data) {
            // Sample JSON data as a map
            var jsonData = data.results;
            
            

            // Function to display the list
            function displayList() {
                var listContainer = $("#listContainer");
                listContainer.empty(); // Clear previous content
                 
                // Iterate over the map and create list items
                Object.keys(jsonData).forEach(function(itemId,index,i) {
					
					
                    var listItem = $("<button  class='btn btn-primary btn-sm' style='display:inline-block;margin-right:20px'>").text(index+1);
						  
						
						
	
						
                    listItem.attr("data-id", index); // Set data attribute for click event
                    listContainer.append(listItem);
                 
                    
                     
                });
            }

            // Function to display details for a selected item
          
            function displayDetails(itemId) {
				   if(nextquestion>=15){
					 console.log(correct);
					 console.log(incorrect);
					 var jsoncorrect = JSON.stringify(correctarray);
					 var jsonyouranswer = JSON.stringify(youranswerarray);
					 var jsonquestion = JSON.stringify(questionarray);
					 var url = '/successfull?correct='+encodeURIComponent(jsoncorrect)+'&incorrect='+encodeURIComponent(jsonyouranswer)
					 +'&question='+encodeURIComponent(jsonquestion)+'&correctnumber='+correct+'&incorrectnumber='+incorrect;
					
					 window.location.href = url
				 }
                var selectedItem = jsonData[itemId];

            
            correctanswer = selectedItem.correct_answer;
			incorrectanswer = selectedItem.incorrect_answers;
			question=selectedItem.question;

     
	let optionlist = incorrectanswer;
	optionlist.splice(Math.floor(Math.random()*incorrectanswer.length),0,correctanswer);
	
  
	
	document.getElementById("question").innerHTML = selectedItem.question;
	document.getElementById("category").innerHTML = selectedItem.category;
	
	document.getElementById("options").innerHTML = `${optionlist.map((option,index)=>`
	                                              
	                                            <button class="btn btn-outline-success "><h6 style="text-align:left">${option}</h6></button>
	                                               `).join(' ')}`;
             
             
             var clickbutton = document.getElementById("listContainer");
            
                // Display details in a separate container
              /*<!--  $("#options").text("Details: " + selectedItem.correct_answer);-->*/
 
   
            }

            // Initial display of the list
            displayList();
            displayDetails(0);
      
                       $("#options").on("click","button",function(){
				 var answer = $(this).text();
				 var button = $("#listContainer button")
				 var clickindex = button.index(this);
				 
				 
				
				 
				 nextquestion++;
				  var questionremain = document.getElementById("questionremain");
				questionremain.textContent = nextquestion;
				 
				correctarray.push(correctanswer);
				youranswerarray.push(answer);
				questionarray.push(question);
				 console.log(nextquestion);
				 if(answer===correctanswer){
					 $(this).css("background-color","yellow");
					 correct++;
			console.log("correct"+correct);
					 
				 }else{
					 
					 incorrect++;
					 console.log("incorrect"+incorrect);
					$(this).css("background-color","red");
				 }
				 
				 displayDetails(nextquestion);
			  });
      
            // Click event handler for list items
            $("#listContainer").on("click", "button", function() {
                var itemId = $(this).data("id");
                displayDetails(itemId);
            });
           
        };
    




function showQuestion(data){
	/*let correctanswer = data.correct_answer;
	let incorrectanswer = data.incorrect_answers;
	console.log(incorrectanswer);
	let optionlist = incorrectanswer;
	optionlist.splice(Math.floor(Math.random()*incorrectanswer.length),0,correctanswer);
    console.log(optionlist);
	console.log(correctanswer);
	
	document.getElementById("question").innerHTML = data.question;
	document.getElementById("category").innerHTML = data.category;
	
	document.getElementById("options").innerHTML = `${optionlist.map((option,index)=>`
	                                              
	                                               <button class="btn btn-outline-success "><h6 style="text-align:left">${index+1}.${option}</h6></button>
	                                               `).join(' ')}`;*/
}

loadQuestions();

/*$(document).ready(function(data){
	function displaylist(){
		var listcontainer = json.
		
	}
	
	
});

*/








