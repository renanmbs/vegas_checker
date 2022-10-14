/*Functions*/

//Function to display hidden area
function show_area(event){
    let show = document.getElementById("show"); //Get the HTML area
    show.style.display = "block"; //Show
}

//Prevent refreshing the page to show values
show.onsubmit = function(e) {

    //Don't refresh the page
    e.preventDefault();

}

//Function to change the images
function change_img(){

    let name_getter2 = document.getElementById("name").value; //Value read from form
    name_getter2 = name_getter2.toLowerCase(); //Set it to lowercase
    
    switch(name_getter2){

        case "asher":
            image1.src = "./img/form1/asher1.jpg";
            image2.src = "./img/form2/asher2.jpg";
            break;

        case "aziz":
            image1.src = "./img/form1/aziz1.jpg";
            image2.src = "./img/form2/aziz2.jpg";
            break;

        case "belal":
            image1.src = "./img/form1/belal1.jpg";
            image2.src = "./img/form2/belal2.jpg";
            break;

        case "brandon":
            image1.src = "./img/form1/brandon1.jpg";
            image2.src = "./img/form2/brandon2.jpg";
            break;    

        case "charly":
            image1.src = "./img/form1/charly1.jpg";
            image2.src = "./img/form2/charly2.jpg";
            break;
        
        case "christian":
            image1.src = "./img/form1/kontey1.jpg";
            image2.src = "./img/form2/kontey2.jpg";
            break;
        
        case "cooper":
            image1.src = "./img/form1/cooper1.jpg";
            image2.src = "./img/form2/cooper2.jpg";
            break;

        case "eman":
            image1.src = "./img/form1/eman1.jpg";
            image2.src = "./img/form2/eman2.jpg";
            break;

        case "gabe":
            image1.src = "./img/form1/gabe1.jpg";
            image2.src = "./img/form2/gabe2.jpg";
            break;

        case "jake w":
            image1.src = "./img/form1/jakew1.jpg";
            image2.src = "./img/form2/jakew2.jpg";
            break;
        
        case "jorge":
            image1.src = "./img/form1/jorge1.jpg";
            image2.src = "./img/form2/jorge2.jpg";
            break;

        case "jumaah":
            image1.src = "./img/form1/jumaah1.jpg";
            image2.src = "./img/form2/jumaah2.jpg";
            break;

        case "kaden":
            image1.src = "./img/form1/kaden1.jpg";
            image2.src = "./img/form2/kaden2.jpg";
            break;

        case "kolton":
            image1.src = "./img/form1/kolton1.jpg";
            image2.src = "./img/form2/kolton2.jpg";
            break;

        case "patrick":
            image1.src = "./img/form1/patrick1.jpg";
            image2.src = "./img/form2/patrick2.jpg";
            break;

        case "sergio":
            image1.src = "./img/form1/sergio1.jpg";
            image2.src = "./img/form2/sergio2.jpg";
            break;
        
        case "tyler":
            image1.src = "./img/form1/tyler1.jpg";
            image2.src = "./img/form2/tyler2.jpg";
            break;
        
        case "alex":
            image1.src = "./img/form1/alex1.jpg";
            image2.src = "./img/form2/alex2.jpg";
            break;
        
        case "jesus":
            image1.src = "./img/form1/jesus1.jpg";
            image2.src = "./img/form2/jesus2.jpg";
            break;

        case "jake a":
            image1.src = "./img/form1/jakea1.jpg";
            image2.src = "./img/form2/jakea2.jpg";
            break;

        case "james":
            image1.src = "./img/form1/james1.jpg";
            image2.src = "./img/form2/james2.jpg";
            break;

         case "riley":
            image1.src = "./img/form1/riley1.jpg";
            image2.src = "./img/form2/riley2.jpg";
            break;

        default:
            reset_img();
    }
}

//Function to reset image
function reset_img(){
    image1.src = "./img/4-2-3-1.jpg";
    image2.src = "./img/5-3-2.jpg";
}


//Function to check the names
function check_name(){
    
    let name_getter = document.getElementById("name").value; //Value read from form
    name_getter = name_getter.toLowerCase(); //Set it to lowercase

    //Iterate through going array
    for(const checker_going of going){

        //Check if name is in the going array
        if(checker_going === name_getter){

            //Replace text in these areas
            result.innerHTML = "You are in the Vegas squad";
            greet.innerHTML = "Congratulations"; 
            extra.innerHTML = "";
            checker = true;
            change_img();

        }

        //If it's not, go to another array
        else{

            //Iterate through not going array
            for(const checker_not of not){

                //Check if name is in the not going array
                if(checker_not === name_getter){

                    //Replace text in these areas
                    result.innerHTML = "You are not in the Vegas squad";
                    greet.innerHTML = "Thank you for understanding";
                    extra.innerHTML = "";
                    checker =  true; 
                    change_img();
                }

                //If it's not, go to another array
                else{

                     //Iterate through maybe array
                    for(const checker_maybe of maybe){

                        //Check if name is in the maybe array
                        if(checker_maybe === name_getter){

                            //Replace text in these areas
                            result.innerHTML = "The coaching staff is considering you";
                            greet.innerHTML = "Check back by the end of the week";
                            extra.innerHTML = "";
                            checker =  true;
                            change_img();
                        }

                        //If the name is in no array
                        if(checker === false){

                            //Replace text in these areas
                            result.innerHTML = "Name not in the database";
                            greet.innerHTML = "Refresh the page and try again";
                            extra.innerHTML = "If the error persists, talk to your coach";
                            change_img();
                        }
                    }
                }
            }
        }
    }
}

/*Arrays of players*/

//Going
let going = ["asher","aziz", "belal", "brandon", "charly", "christian", "cooper", "eman", "gabe", "jake w", "jorge", "jumaah",
"kaden", "kolton", "patrick", "sergio", "tyler", "alex", "riley"];

//Not going
let not = ["augustin", "bernardo", "luis", "luis a", "luis c", "santiago", "teegan", "will"];

//Maybe going
let maybe  = ["hunter", "james", "jesus", "jake a"];

//Get info from HTML
let image1 = document.getElementById("image1"); //Image 1
let image2 = document.getElementById("image2"); //Image 2
let button_name = document.getElementById("but"); //Checker button
let submit = document.getElementById("submit"); //Submit button
let result = document.getElementById("res"); //Result paragraph
let greet = document.getElementById("cong"); //Greeting paragraph
let names = document.getElementById("name"); //Name value
let extra = document.getElementById("extra"); //Extra paragraph
let checker = false; //Boolean to see if it was checked

//Add listener
button_name.onclick = show_area; //If checker button is clicked
submit.onclick = check_name; //If submit button is clicked

