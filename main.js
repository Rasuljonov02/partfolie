let options = {
	strings: ["Assalomu Alaykum", "My Name", " Muhammadjon"],
	typeSpeed: 50,
	startDelay: 1000,
	loop: true,
	loopCount: Infinity,
	backSpeed: 50,
	backDelay: 400,
	showCursor: true,
	cursorChar: "",
};

let typed = new Typed("#sozchiqaradi", options);


$(document).ready(function() {
 $('#contactForm').submit(function(e) {
     e.preventDefault(); // Prevent the form from submitting normally

     // Serialize the form data
     var formData = $(this).serialize();

     // Send an AJAX request
     $.ajax({
         type: 'POST',
         url: 'your_php_script.php', // Replace 'your_php_script.php' with the actual filename of your PHP script
         data: formData,
         success: function(response) {
             // Display the response message
             $('#msgSubmit').removeClass('hidden').html(response);
         },
         error: function(xhr, status, error) {
             // Display an error message
             $('#msgSubmit').removeClass('hidden').text('Oops! Something went wrong and we couldn\'t send your message.');
         }
     });
 });
});