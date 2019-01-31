;(() => {
  'use strict'
  window.addEventListener(
    'load',
    () => {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      let forms = document.getElementsByClassName('needs-validation')
      // Loop over them and prevent submission
      let validation = Array.prototype.filter.call(forms, form => {
        form.addEventListener(
          'submit',
          event => {
            if (form.checkValidity() === false) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          },
          false
        )
      })
    },
    false
  )
})()

$(document).ready(() => {
  // DOM is fully loaded
  // Capitalize the first letter of First Name
  $('#firstName').on('change', function(e) {
    let $this = $(this),
      val = $this.val()
    RegExp = /\b[a-z]/g

    val = val.charAt(0).toUpperCase() + val.substr(1)
  })

  // Capitalize the first letter of Last Name
  $('#lastName').on('change', function(e) {
    let $this = $(this),
      val = $this.val()
    RegExp = /\b[a-z]/g

    val = val.charAt(0).toUpperCase() + val.substr(1)
  })

  // change the email to lowercase
  $('#email').on('change', function(e) {
    let $this = $(this),
      val = $this.val()
    val = val.toLowerCase()
  })
  // Hide the products fields until yes is clicked
  $('#yes').click(function (e) {
    $('#mentor').prop("disabled", false);
  });

  // Hide the products fields if no is clicked
  $('#no').click(function (e) {
    $('#mentor').prop("disabled", true);
  });

  $('form').submit(function (event) {
    event.preventDefault();

  $('form').submit(event => {
    // stop the button from submitting
    event.preventDefault()

    // Make the submit button load
    $('button').removeClass('btn-danger')
    $('button').toggleClass('btn-primary')
    $('button').html(
      'Loading <span class="spinner"></span><i class="fa fa-spinner fa-spin"></i></span>'
    )
    // Put the Form Data into Variables
    let firstName = $.trim(document.getElementById('firstName').value);
    let lastName = $.trim(document.getElementById('lastName').value);
    let email = $.trim(document.getElementById('email').value);
    let phone = $.trim(document.getElementById('phone').value);
    let location = $.trim(document.getElementById('location').value);
    let service = document.querySelector('input[name="service"]:checked').value;
    let cases = $.trim(document.getElementById('cases').value);
    let probono= $.trim(document.getElementById('probono').value)
    let sentence= $.trim(document.getElementById('sentence').value);
    let mentor= $.trim(document.getElementById('mentor').value)
    

    let dataString = 'firstName=' + firstName + '&lastName=' + lastName + '&email=' + email + '&phone=' + phone + '&location=' + location + '&service=' + service + '&cases=' + cases + '&probono=' + probono+ '&sentence=' + sentence+ '&mentor=' + mentor;


    
        then(response => {
          return response.json()
        })
        .then(data => {
          if (data === 'user_exists') {
            swal(
              'Already Registered',
              'You have already registered for the conference.',
              'error'
            )
            setTimeout(function() {
              window.location = 'https://awlo.org/awlc/'
            }, 3000)
          } else {
            window.location.href = data
            // console.log(data);
          }
        })
        .catch(error => {
          console.log('The Request Failed', error)
        })
    })
  })
})
