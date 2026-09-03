/*CONTACT BUTTON
First we find the Contact Me button from our HTML.
The button has:
id="contactButton"
So we can use getElementById() to select it.*/
const contactButton =
    document.getElementById("contactButton");
/*MESSAGE ELEMENT
We also find the empty paragraph:
<p id="message"></p>
JavaScript will put our message inside it.*/
const message =
    document.getElementById("message");
/*CLICK EVENT
addEventListener() waits for something to happen.
Here we are telling JavaScript:
"When the Contact Me button is clicked,
run this function."*/
contactButton.addEventListener("click", function () {
    /*  textContent changes the text inside
        the selected HTML element.
        So after clicking the button,
        the empty <p> will display this message.    */
    message.textContent =
        "Thank you for your interest!";
});