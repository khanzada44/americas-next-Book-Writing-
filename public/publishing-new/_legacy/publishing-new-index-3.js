function validate() {
  var number = $("input[name='phone']").intlTelInput("getNumber");
  iso = $("input[name='phone']").intlTelInput("getSelectedCountryData").iso2;

  var exampleNumber = intlTelInputUtils.getExampleNumber(iso, 0, 0);
  if (number == "") number = exampleNumber;

  var formattedNumber = intlTelInputUtils.formatNumber(
    number,
    iso,
    intlTelInputUtils.numberFormat.NATIONAL
  );
  var isValidNumber = intlTelInputUtils.isValidNumber(number, iso);
  var validationError = intlTelInputUtils.getValidationError(number, iso);

  console.log(number);
  console.log(formattedNumber);
  console.log(
    intlTelInputUtils.formatNumber(
      number,
      iso,
      intlTelInputUtils.numberFormat.INTERNATIONAL
    )
  );
  console.log(
    intlTelInputUtils.formatNumber(
      number,
      iso,
      intlTelInputUtils.numberFormat.E164
    )
  );
  console.log(
    intlTelInputUtils.formatNumber(
      number,
      iso,
      intlTelInputUtils.numberFormat.RFC3966
    )
  );
  console.log(isValidNumber);
  console.log(validationError);
}

//var input = document.querySelector("#phone");

$("input[name='phone']").intlTelInput({
   geoIpLookup: function (callback) {
     $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
       var countryCode = resp && resp.country ? resp.country : "";
       callback(countryCode);
     });
   },
  //hiddenInput: "full_number",
  initialCountry: "auto",
  separateDialCode: true
  //autoPlaceholder: "off",
});

$("input[name='phone']").on("countrychange", function (e) {
  $(this).val("");

  var selectedCountry = $(this).intlTelInput("getSelectedCountryData");
  var dialCode = selectedCountry.dialCode;
  var maskNumber = intlTelInputUtils.getExampleNumber(
    selectedCountry.iso2,
    0,
    0
  );
  console.log("placeholder > " + maskNumber);
  maskNumber = intlTelInputUtils.formatNumber(
    maskNumber,
    selectedCountry.iso2,
    2
  );
  console.log("placeholder > " + maskNumber);
  maskNumber = maskNumber.replace("+" + dialCode + " ", "");
  console.log("placeholder > " + maskNumber);
  mask = maskNumber.replace(/[0-9+]/gi, "0");
  //maskPlaceHolder = mask.replace(/[0-9+]/ig, '_');

  $("input[name='phone']").mask(mask, { placeholder: maskNumber });
});
$("input[name='phone']").on("input", function() {
  if (/^1/.test(this.value)) {
    this.value = this.value.replace(/^1/, "")
  }
})
