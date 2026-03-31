
jQuery('.jqueryvers').html(jQueryVers());

jQuery('.jqueryuivers').html(jQueryUIVers());

function jQueryVers() {
  if (typeof jQuery != 'undefined') {
    // jQuery is loaded => print the version
    //alert('jQuery version loaded : ' + jQuery.fn.jquery);
    return jQuery.fn.jquery;
  }
  return "not loaded";
}

function jQueryUIVers() {
  if (typeof jQuery.ui != 'undefined') {
    // jQuery is loaded => print the version
    //alert('jQuery UI version loaded : ' + jQuery.ui.version);
    return jQuery.ui.version;
  }
  return "not loaded";
}

function validate() {
  if (jQuery("#mF").valid()) {
    //alert("It's valid!");
    return true;
  } else {
    //alert("It's not valid!");
    return false;
  }
}

function getBrowserDateTime() {
  var currentDate = new Date();
  var dateField = currentDate.toISOString().split('T')[0];
  var timeField = currentDate.toTimeString().split(' ')[0];
  var timeZoneField = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log('D'+dateField + 'T' + timeField + 'TZ' + timeZoneField);
  return 'D'+dateField + 'T' + timeField + 'TZ' + timeZoneField;
}
