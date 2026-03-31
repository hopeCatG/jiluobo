(self["webpackChunk"] = self["webpackChunk"] || []).push([["frontend-contact-form-dcs"],{

/***/ "./assets/js/frontend/contact-form.js":
/*!********************************************!*\
  !*** ./assets/js/frontend/contact-form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
var Sugar = __webpack_require__(/*! sugar */ "./node_modules/sugar/index.js");
__webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
$(document).ready(function () {
  Sugar.extend();
  var $form = $('form[name="contact"]');
  var error = $('.alert-danger', $form);
  var success = $('.alert-success', $form);
  console.log('Contact Form Validator');
  $form.validate({
    doNotHideMessage: true,
    //this option enables to show the error/success messages on tab switch.
    errorElement: 'span',
    //default input error message container
    errorClass: 'help-block help-block-error',
    // default input error message class
    focusInvalid: false,
    // do not focus the last invalid input
    rules: {
      'contact[name]': {
        required: true
      },
      'contact[email]': {
        required: true,
        email: true
      },
      'contact[subject]': {
        required: true
      },
      'contact[message]': {
        required: true
      },
      'contact[privacy]': {
        required: true
      }
    },
    messages: {
      // custom messages for radio buttons and checkboxes
      'contact[name]': {
        required: Translator.trans('contact.error.form.name.required', {}, 'contact')
      },
      'contact[email]': {
        required: Translator.trans('contact.error.form.email.required', {}, 'contact'),
        email: Translator.trans('contact.error.form.email.email', {}, 'contact')
      },
      'contact[subject]': {
        required: Translator.trans('contact.error.form.subject.required', {}, 'contact')
      },
      'contact[message]': {
        required: Translator.trans('contact.error.form.message.required', {}, 'contact')
      },
      'contact[privacy]': {
        required: Translator.trans('contact.error.form.privacy.required', {}, 'contact')
      }
    },
    errorPlacement: function (error, element) {
      // render error placement for each input type
      if (element.attr("type") == "checkbox") {
        // for uniform radio buttons, insert the after the given container
        error.insertAfter(element.closest('div').find('label'));
      } else {
        error.insertAfter(element); // for other inputs, just perform default behavior
      }
    },

    invalidHandler: function (event, validator) {
      //display error alert on form submit
      success.hide();
      error.show();
    },
    highlight: function (element) {
      // hightlight error inputs
      $(element).closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
    },

    unhighlight: function (element) {
      // revert the change done by hightlight
      $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
    },

    success: function (label) {
      if (label.find('input').length > 0) {
        // for checkboxes and radio buttons, no need to show OK icon
        label.closest('.form-group').removeClass('has-error').addClass('has-success');
        label.remove(); // remove error label here
      } else {
        // display success icon for other inputs
        label.addClass('valid') // mark the current input as valid and display OK icon
        .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
      }
    },

    submitHandler: function (form) {
      success.show();
      error.hide();
      // form.submit();
      const $ewzReCaptcaV3 = $('#contact_captchaCode');
      let n = 1;
      if ($ewzReCaptcaV3.length > 0) {
        let checkInterval = setInterval(function () {
          console.log(n++);
          if ($ewzReCaptcaV3.val() !== '') {
            clearInterval(checkInterval);
            submitHandler(form);
          }
        }, 100);
      } else {
        submitHandler(form);
      }
    }
  });
  function submitHandler(form) {
    // setup some local variables
    var $form = $(form);
    // let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
    // serialize the data in the form
    var serializedData = $form.serialize();

    // let's disable the inputs for the duration of the ajax request
    $inputs.prop("disabled", true);

    // fire off the request to /form.php

    var request = $.ajax({
      url: $form.attr('action'),
      type: "post",
      data: serializedData
    });

    // callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR) {
      // log a message to the console
      $form.closest('div').html(response);
    });

    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
      // log the error to the console
      console.error("The following error occured: " + textStatus, errorThrown);
    });

    // callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
      // reenable the inputs
      $inputs.prop("disabled", false);
    });
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_src_exports_global_js-node_modules_jquery_src_jquery_js","vendors-node_modules_sugar_index_js","vendors-node_modules_jquery-validation_dist_jquery_validate_js"], () => (__webpack_exec__("./assets/js/frontend/contact-form.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFLLENBQUNvQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUNtQyxJQUFJLENBQUNILFFBQVEsQ0FBQztJQUN2QyxDQUFDLENBQUM7O0lBRUY7SUFDQU4sT0FBTyxDQUFDVSxJQUFJLENBQUMsVUFBVUYsS0FBSyxFQUFFRCxVQUFVLEVBQUVJLFdBQVcsRUFBRTtNQUNuRDtNQUNBdEQsT0FBTyxDQUFDRixLQUFLLENBQ1QsK0JBQStCLEdBQUdvRCxVQUFVLEVBQUVJLFdBQVcsQ0FBQztJQUNsRSxDQUFDLENBQUM7O0lBRUY7SUFDQTtJQUNBWCxPQUFPLENBQUNZLE1BQU0sQ0FBQyxZQUFZO01BQ3ZCO01BQ0FoQixPQUFPLENBQUNHLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQztFQUNOO0FBRUosQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Zyb250ZW5kL2NvbnRhY3QtZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3VnYXIgPSByZXF1aXJlKCdzdWdhcicpO1xucmVxdWlyZSgnanF1ZXJ5LXZhbGlkYXRpb24nKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgU3VnYXIuZXh0ZW5kKCk7XG5cbiAgICB2YXIgJGZvcm0gPSAkKCdmb3JtW25hbWU9XCJjb250YWN0XCJdJyk7XG4gICAgdmFyIGVycm9yID0gJCgnLmFsZXJ0LWRhbmdlcicsICRmb3JtKTtcbiAgICB2YXIgc3VjY2VzcyA9ICQoJy5hbGVydC1zdWNjZXNzJywgJGZvcm0pO1xuXG4gICAgY29uc29sZS5sb2coJ0NvbnRhY3QgRm9ybSBWYWxpZGF0b3InKTtcblxuICAgICRmb3JtLnZhbGlkYXRlKHtcbiAgICAgICAgZG9Ob3RIaWRlTWVzc2FnZTogdHJ1ZSwgLy90aGlzIG9wdGlvbiBlbmFibGVzIHRvIHNob3cgdGhlIGVycm9yL3N1Y2Nlc3MgbWVzc2FnZXMgb24gdGFiIHN3aXRjaC5cbiAgICAgICAgZXJyb3JFbGVtZW50OiAnc3BhbicsIC8vZGVmYXVsdCBpbnB1dCBlcnJvciBtZXNzYWdlIGNvbnRhaW5lclxuICAgICAgICBlcnJvckNsYXNzOiAnaGVscC1ibG9jayBoZWxwLWJsb2NrLWVycm9yJywgLy8gZGVmYXVsdCBpbnB1dCBlcnJvciBtZXNzYWdlIGNsYXNzXG4gICAgICAgIGZvY3VzSW52YWxpZDogZmFsc2UsIC8vIGRvIG5vdCBmb2N1cyB0aGUgbGFzdCBpbnZhbGlkIGlucHV0XG4gICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgICAnY29udGFjdFtuYW1lXSc6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjb250YWN0W2VtYWlsXSc6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjb250YWN0W3N1YmplY3RdJzoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2NvbnRhY3RbbWVzc2FnZV0nOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnY29udGFjdFtwcml2YWN5XSc6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1lc3NhZ2VzOiB7IC8vIGN1c3RvbSBtZXNzYWdlcyBmb3IgcmFkaW8gYnV0dG9ucyBhbmQgY2hlY2tib3hlc1xuICAgICAgICAgICAgJ2NvbnRhY3RbbmFtZV0nOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFRyYW5zbGF0b3IudHJhbnMoJ2NvbnRhY3QuZXJyb3IuZm9ybS5uYW1lLnJlcXVpcmVkJywge30sICdjb250YWN0JylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnY29udGFjdFtlbWFpbF0nOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFRyYW5zbGF0b3IudHJhbnMoJ2NvbnRhY3QuZXJyb3IuZm9ybS5lbWFpbC5yZXF1aXJlZCcsIHt9LCAnY29udGFjdCcpLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBUcmFuc2xhdG9yLnRyYW5zKCdjb250YWN0LmVycm9yLmZvcm0uZW1haWwuZW1haWwnLCB7fSwgJ2NvbnRhY3QnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjb250YWN0W3N1YmplY3RdJzoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBUcmFuc2xhdG9yLnRyYW5zKCdjb250YWN0LmVycm9yLmZvcm0uc3ViamVjdC5yZXF1aXJlZCcsIHt9LCAnY29udGFjdCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2NvbnRhY3RbbWVzc2FnZV0nOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFRyYW5zbGF0b3IudHJhbnMoJ2NvbnRhY3QuZXJyb3IuZm9ybS5tZXNzYWdlLnJlcXVpcmVkJywge30sICdjb250YWN0JylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnY29udGFjdFtwcml2YWN5XSc6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogVHJhbnNsYXRvci50cmFucygnY29udGFjdC5lcnJvci5mb3JtLnByaXZhY3kucmVxdWlyZWQnLCB7fSwgJ2NvbnRhY3QnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbiAoZXJyb3IsIGVsZW1lbnQpIHsgLy8gcmVuZGVyIGVycm9yIHBsYWNlbWVudCBmb3IgZWFjaCBpbnB1dCB0eXBlXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHsgLy8gZm9yIHVuaWZvcm0gcmFkaW8gYnV0dG9ucywgaW5zZXJ0IHRoZSBhZnRlciB0aGUgZ2l2ZW4gY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5jbG9zZXN0KCdkaXYnKS5maW5kKCdsYWJlbCcpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudCk7IC8vIGZvciBvdGhlciBpbnB1dHMsIGp1c3QgcGVyZm9ybSBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW52YWxpZEhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCwgdmFsaWRhdG9yKSB7IC8vZGlzcGxheSBlcnJvciBhbGVydCBvbiBmb3JtIHN1Ym1pdFxuICAgICAgICAgICAgc3VjY2Vzcy5oaWRlKCk7XG4gICAgICAgICAgICBlcnJvci5zaG93KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoZWxlbWVudCkgeyAvLyBoaWdodGxpZ2h0IGVycm9yIGlucHV0c1xuICAgICAgICAgICAgJChlbGVtZW50KS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtc3VjY2VzcycpLmFkZENsYXNzKCdoYXMtZXJyb3InKTsgLy8gc2V0IGVycm9yIGNsYXNzIHRvIHRoZSBjb250cm9sIGdyb3VwXG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7IC8vIHJldmVydCB0aGUgY2hhbmdlIGRvbmUgYnkgaGlnaHRsaWdodFxuICAgICAgICAgICAgJChlbGVtZW50KS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTsgLy8gc2V0IGVycm9yIGNsYXNzIHRvIHRoZSBjb250cm9sIGdyb3VwXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgICAgICBpZiAobGFiZWwuZmluZCgnaW5wdXQnKS5sZW5ndGggPiAwKSB7IC8vIGZvciBjaGVja2JveGVzIGFuZCByYWRpbyBidXR0b25zLCBubyBuZWVkIHRvIHNob3cgT0sgaWNvblxuICAgICAgICAgICAgICAgIGxhYmVsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvcicpLmFkZENsYXNzKCdoYXMtc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnJlbW92ZSgpOyAvLyByZW1vdmUgZXJyb3IgbGFiZWwgaGVyZVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gZGlzcGxheSBzdWNjZXNzIGljb24gZm9yIG90aGVyIGlucHV0c1xuICAgICAgICAgICAgICAgIGxhYmVsLmFkZENsYXNzKCd2YWxpZCcpIC8vIG1hcmsgdGhlIGN1cnJlbnQgaW5wdXQgYXMgdmFsaWQgYW5kIGRpc3BsYXkgT0sgaWNvblxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJykuYWRkQ2xhc3MoJ2hhcy1zdWNjZXNzJyk7IC8vIHNldCBzdWNjZXNzIGNsYXNzIHRvIHRoZSBjb250cm9sIGdyb3VwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgICAgIHN1Y2Nlc3Muc2hvdygpO1xuICAgICAgICAgICAgZXJyb3IuaGlkZSgpO1xuICAgICAgICAgICAgLy8gZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRld3pSZUNhcHRjYVYzID0gJCgnI2NvbnRhY3RfY2FwdGNoYUNvZGUnKTtcbiAgICAgICAgICAgIGxldCBuID0gMTtcbiAgICAgICAgICAgIGlmICgkZXd6UmVDYXB0Y2FWMy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG4rKyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXd6UmVDYXB0Y2FWMy52YWwoKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRIYW5kbGVyKGZvcm0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VibWl0SGFuZGxlcihmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGZvcm0pIHtcbiAgICAgICAgLy8gc2V0dXAgc29tZSBsb2NhbCB2YXJpYWJsZXNcbiAgICAgICAgdmFyICRmb3JtID0gJChmb3JtKTtcbiAgICAgICAgLy8gbGV0J3Mgc2VsZWN0IGFuZCBjYWNoZSBhbGwgdGhlIGZpZWxkc1xuICAgICAgICB2YXIgJGlucHV0cyA9ICRmb3JtLmZpbmQoXCJpbnB1dCwgc2VsZWN0LCBidXR0b24sIHRleHRhcmVhXCIpO1xuICAgICAgICAvLyBzZXJpYWxpemUgdGhlIGRhdGEgaW4gdGhlIGZvcm1cbiAgICAgICAgdmFyIHNlcmlhbGl6ZWREYXRhID0gJGZvcm0uc2VyaWFsaXplKCk7XG5cbiAgICAgICAgLy8gbGV0J3MgZGlzYWJsZSB0aGUgaW5wdXRzIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGFqYXggcmVxdWVzdFxuICAgICAgICAkaW5wdXRzLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcblxuICAgICAgICAvLyBmaXJlIG9mZiB0aGUgcmVxdWVzdCB0byAvZm9ybS5waHBcblxuICAgICAgICB2YXIgcmVxdWVzdCA9ICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhOiBzZXJpYWxpemVkRGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYWxsYmFjayBoYW5kbGVyIHRoYXQgd2lsbCBiZSBjYWxsZWQgb24gc3VjY2Vzc1xuICAgICAgICByZXF1ZXN0LmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICAgICAgLy8gbG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZVxuICAgICAgICAgICAgJGZvcm0uY2xvc2VzdCgnZGl2JykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhbGxiYWNrIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGNhbGxlZCBvbiBmYWlsdXJlXG4gICAgICAgIHJlcXVlc3QuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAvLyBsb2cgdGhlIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiVGhlIGZvbGxvd2luZyBlcnJvciBvY2N1cmVkOiBcIiArIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2FsbGJhY2sgaGFuZGxlciB0aGF0IHdpbGwgYmUgY2FsbGVkIHJlZ2FyZGxlc3NcbiAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgZmFpbGVkIG9yIHN1Y2NlZWRlZFxuICAgICAgICByZXF1ZXN0LmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyByZWVuYWJsZSB0aGUgaW5wdXRzXG4gICAgICAgICAgICAkaW5wdXRzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7Il0sIm5hbWVzIjpbIlN1Z2FyIiwicmVxdWlyZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiZXh0ZW5kIiwiJGZvcm0iLCJlcnJvciIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwidmFsaWRhdGUiLCJkb05vdEhpZGVNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImZvY3VzSW52YWxpZCIsInJ1bGVzIiwicmVxdWlyZWQiLCJlbWFpbCIsIm1lc3NhZ2VzIiwiVHJhbnNsYXRvciIsInRyYW5zIiwiZXJyb3JQbGFjZW1lbnQiLCJlbGVtZW50IiwiYXR0ciIsImluc2VydEFmdGVyIiwiY2xvc2VzdCIsImZpbmQiLCJpbnZhbGlkSGFuZGxlciIsImV2ZW50IiwidmFsaWRhdG9yIiwiaGlkZSIsInNob3ciLCJoaWdobGlnaHQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidW5oaWdobGlnaHQiLCJsYWJlbCIsImxlbmd0aCIsInJlbW92ZSIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtIiwiJGV3elJlQ2FwdGNhVjMiLCJuIiwiY2hlY2tJbnRlcnZhbCIsInNldEludGVydmFsIiwidmFsIiwiY2xlYXJJbnRlcnZhbCIsIiRpbnB1dHMiLCJzZXJpYWxpemVkRGF0YSIsInNlcmlhbGl6ZSIsInByb3AiLCJyZXF1ZXN0IiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiZG9uZSIsInJlc3BvbnNlIiwidGV4dFN0YXR1cyIsImpxWEhSIiwiaHRtbCIsImZhaWwiLCJlcnJvclRocm93biIsImFsd2F5cyJdLCJzb3VyY2VSb290IjoiIn0=