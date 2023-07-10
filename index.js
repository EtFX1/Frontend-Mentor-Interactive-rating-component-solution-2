//* functions to grab any element by it's id and class name
const getByID = (elem_id) => document.getElementById(elem_id);
const getByClassName = (elem_class) => document.getElementsByClassName(elem_class);

//* stores the list of input elements
const radio_buttons_input = getByClassName("radio-btn-input"),
    radio_buttons_label = getByClassName("radio-btn-label"),
    form_elem = getByID("form"),
    rating_card = getByID("rating-card-cont"),
    thank_you_card = getByID("thank-you-card-cont");



//@! form submit function to submit form
const submitForm = () => {
    //! event listener function to handle for form submission
    form_elem.addEventListener("submit", (event) => {
        //? prevents the default form behaviour
        event.preventDefault();

        //! function to retrieve the user's selected rating, and display it on the console
        const displaySelection = () => {

            //? variable that stores the form data using the 
            const form_data = new FormData(event.target);

            //? FormData: get() method gets the value of the `rating` field
            const user_selection = form_data.get('rating');

            let rating_out_of_5 = getByID("rating-out-of-5"); //? variable to store the "rating-out-of-5" element from the HTML which contains the user's selection

            rating_out_of_5.innerHTML = user_selection; //? updates the innerHTML of the  class ("answer")

            //* if statement to prevent the form from submitting if a radio button is not selected
            if (user_selection === null) {
                alert("Please select a rating number");
            } else {
                //* else means a button was clicked (is_clicked=== true)
                rating_card.style.display = "none";
                thank_you_card.style.display = "grid";
            }
        };
        displaySelection();
    });

};

submitForm();

//? calling the "submitForm()" function as a callback (so it'll be executed after "selectRating")



