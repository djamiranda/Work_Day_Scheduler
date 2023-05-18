// added start function
$(document.start(function () {
  // added arrays
  var dayHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  var scheduledEvents = [];
  $("#currentDate").text(dayjs().format("dddd, MMMM Do"));
  var currentHour = dayjs().hour();

  scheduledEvents = getDaysEvents();

  

});
