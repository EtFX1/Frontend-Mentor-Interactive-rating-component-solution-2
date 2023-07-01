//* functions to grab any element by it's id and class name
const getByID = (elem_id) => document.getElementById(elem_id);
const getByClassName = (elem_class) => document.getElementsByClassName(elem_class);

//* stores the list of input elements
const radio_buttons_input = getByClassName("radio-btn-input"),
  radio_buttons_label = getByClassName("radio-btn-label"),
  form_elem = getByID("form"),
  rating_card = getByID("rating-card-cont"),
  thank_you_card = getByID("thank-you-card-cont");

let rating_selected = false;

//! function to allow user to select rating
const selectRating = (callback) => {
  //* for loop to iterate over list of radio buttons
  for (const radio_button of radio_buttons_input) {
    //* "click" event listener
    radio_button.addEventListener("click", (event) => {
      rating_selected = true; //? means that a button has been clicked

      //! function that styles radio button...
      const styleBtn = () => {
        //* "for..of" loop to iterate over buttons that were clicked

        for (let current_btn of radio_buttons_label) {
          const clicked_btn = event.target.value; //? stores the button that was clicked (rating number that was selected)
          console.log(clicked_btn);

          //* if statement comparing the clicked button and current button

          //?removes the grey background from a button that is not clicked and toggles it onto a button that is clicked

          if (clicked_btn !== current_btn.value) {
            current_btn.classList.remove("radio-btn-selected");
          } else {
            event.target.classList.toggle("radio-btn-selected");
          }
        }
      };
      styleBtn();

      //* retrieving and displaying the user's rating selection by reading and updating the value

      const displaySelection = () => {
        const user_selection = event.target.value; //? reads the "value=" attribute of the selected radio button element from the html

        let displayed_rating = getByID("rating-num"); //? variable to store the "rating" span element from the HTML which will contain the user's selection

        displayed_rating.innerHTML = user_selection; //? updates the innerHTML of the final rating class ("answer")
      };
      displaySelection();
    });
  }
  callback();
};

//* form submit
const submitForm = () => {
  form_elem.addEventListener("submit", (event) => {
    //? prevents the default form behaviour
    event.preventDefault();

    //* if statement to prevent the form from submitting if a radio button is not selected
    if (!rating_selected) {
      alert("Please select a rating number");
    } else {
      //* else means a button was clicked (is_clicked=== true)
      rating_card.style.display = "none";
      thank_you_card.style.display = "grid";
    }
  });
};

//? calling the "submitForm()" function as a callback (so it'll be executed after "selectRating")
selectRating(submitForm);
