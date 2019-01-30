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
    let location= $.trim(document.getElementById('whatYouDo').value);
    let ownABusiness = document.querySelector('input[name="ownABusiness"]:checked').value;
    let organisation = $.trim(document.getElementById('organisation').value);
    let websiteLink = $.trim(document.getElementById('websiteLink').value)
    let linkedin = $.trim(document.getElementById('linkedin').value);
    let twitter = $.trim(document.getElementById('twitter').value)
    let instagram = $.trim(document.getElementById('instagram').value);
    let facebook = $.trim(document.getElementById('facebook').value)
    let howLongBusiness = $.trim(document.getElementById('howLongBusiness').value);
    let challenges = $.trim(document.getElementById('challenges').value)
    let businessGoals = $.trim(document.getElementById('businessGoals').value);
    let businessHelp = $.trim(document.getElementById('businessHelp').value)
    let personalGoals = $.trim(document.getElementById('personalGoals').value);
    let gains = $.trim(document.getElementById('gains').value)
    let awloHelp = $.trim(document.getElementById('awloHelp').value);

    let dataString = 'firstName=' + firstName + '&lastName=' + lastName + '&email=' + email + '&phone=' + phone + '&whatYouDo=' + whatYouDo + '&ownABusiness=' + ownABusiness + '&organisation=' + organisation + '&websiteLink=' + websiteLink + '&linkedin=' + linkedin + '&twitter=' + twitter + '&instagram=' + instagram + '&facebook=' + facebook + '&howLongBusiness=' + howLongBusiness + '&challenges=' + challenges + '&businessGoals=' + businessGoals + '&businessHelp=' + businessHelp + '&personalGoals=' + personalGoals + '&gains=' + gains + '&awloHelp=' + awloHelp;



    
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
