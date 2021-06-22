// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require('jquery')

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(function(){
  $("#search_repository").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".repository-group .repository-item").filter(function() {
      let visibility = $(this).children(".description").text().toLowerCase().indexOf(value) > -1 || $(this).children(".name").text().toLowerCase().indexOf(value) > -1
      $(this).toggle(visibility)
    });
  });
})
