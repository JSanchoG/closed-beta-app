$(document).ready(function () {
  // FETCHING DATA FROM JSON FILE
  $.getJSON("https://raw.githubusercontent.com/JSanchoG/Test/main/test-trash/json3.json",
  function (data) {
    var fetchJSON = '';
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {

      // CONSTRUCTION OF ROWS HAVING
      // DATA FROM JSON OBJECT
      fetchJSON += '<div class="col-sm-4 grid-margin notatka">';
      fetchJSON += '<div class="card tihub-note-card" onclick="'+value.referral+'">';
      fetchJSON += '<div class="card-body">';
      fetchJSON += '<h5>'+value.date+'</h5>';
      fetchJSON += '<div class="row">';
      fetchJSON += '<div class="col-8 col-sm-12 col-xl-8 my-auto">';
      fetchJSON += '<div class="d-flex d-sm-block d-md-flex align-items-center MGb8"><h2 class="mb-0">'+value.subject+'</h2></div>';
      fetchJSON += '<div><h6 class="text-muted font-weight-normal MGb4 notatka-temat">'+value.description+'</h6></div>';
      fetchJSON += '</div>';
      fetchJSON += '<div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right"><i class="'+value.icon+'"></i></div>';
      fetchJSON += '</div>';
      fetchJSON += '</div>';
      fetchJSON += '</div>';
      fetchJSON += '</div>';
    });
    // INSERTING ROWS INTO CONTAINER 
    $('#TIkontener').append(fetchJSON);
  });
});
