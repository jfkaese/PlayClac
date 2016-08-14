// Calculate FHOF
$('#FHOF').keyup(function() {
  var FHOF = $(this).val();
  var result = $('#FHOF-result a');
  var alert = $('#FHOF-result .alert')

  var extentOfFallZone = Math.round((((2/3)*FHOF) + 500)*100) / 100;

  // If the input is empty
  if (FHOF.length <= 0) {
    alert.removeClass('alert-success alert-warning alert-danger').addClass('alert-info');
    result.html('Please enter a <strong>FHOF</strong> above');

    // If the input is less than or equal to 0
  } else if (FHOF <= 0) {
    alert.removeClass('alert-success alert-warning alert-info').addClass('alert-danger');
    result.html('Please enter a valid number above');

    // If the input is less than 600
  } else if (FHOF < 600) {
    alert.removeClass('alert-danger alert-warning').addClass('alert-info');
    result.html('An impact area less than <strong>1500 mm</strong> is acceptable.');

    // If the input is greater than or equal to 600 and less than 1500
  } else if (FHOF >= 600 && FHOF <= 1500) {
    result.html('An impact area of at least <strong>1500 mm</strong> is required.');

    // If the input is greater than or equal to 1500 and less than or equal too 3000
  } else if (FHOF > 1500 && FHOF <= 3000) {
    result.html('An impact area of at least <strong>' + extentOfFallZone + ' mm</strong> is required.');

  } else {
    alert.removeClass('alert-infoalert-warning').addClass('alert-danger');
    result.html('A FHOF greater than <strong>3000 mm</strong> is not permitted!');
  }
});

// Change the FHOF droupdown button
$("#unit-type li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});
