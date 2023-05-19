// added ready function
$(document).ready(function() {
  // added arrays
  var dayHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  var scheduledEvents = [];
  $("#currentDate").text(dayjs().format("dddd, MMMM D"));
  var currentHour = dayjs().hour();
// get scheduled events, if available
  scheduledEvents = getDaysEvents();
// for loop to display each hour, text area & button.
  for(var i = 0; i < dayHours.length; i++) {
    $("#"+i).append("<section class='col-md-1 col-1' id='scheduleTime'><p>"+dayHours[i]+"</p></section>"+
                    "<form class='col-md-10 col-10' id='formSchedule"+i+"'><section class='form-group'>"+
                    "<textarea class='col-md-10 col-10 description scheduleText' rows='3' id='textSchedule"+i+"'></textarea>"+
                    "</section></form><button class='col-md-1 col-1 saveBtn' id='eventSave"+i+"'>"+
                    "<i class='fa fa-save' data-index='"+i+"' style='font-size:20px'></i></button>");
    // Colors each hour as past, present or future.
        if(i+9 < currentHour) {
            $("#textSchedule"+i).addClass("past 'form-control' required");
        }
        else if(i+9 == currentHour) {
            $("#textSchedule"+i).addClass("present 'form-control' required");
        }
        else {
            $("#textSchedule"+i).addClass("future 'form-control' required");
        }
        
        $("#textSchedule"+i).val(scheduledEvents[i]);
        $("#eventSave"+i).on("click", eventSave);
    }
    // Get scheduled events from local storage
    function getDaysEvents() {
      var daysEvents = localStorage.getItem("scheduledEvents");
      var tempSchedEvents = ["","","","","","","","",""];

      if (daysEvents) {
          tempSchedEvents = JSON.parse(daysEvents);
      }
      return tempSchedEvents;
    }
    // Saves events to storage if entered
      function eventSave(event) {
        var index = event.target.getAttribute("data-index");
        console.log(index)
        var tempSchedEvents = getDaysEvents();
        console.log(tempSchedEvents)
      //  Updates scheduled event in local storage & displays message confirming
        if ($("#textSchedule"+index).val() !== tempSchedEvents[index]) {
            scheduledEvents.splice(index, 1, $("#textSchedule"+index).val());
            localStorage.setItem("scheduledEvents", JSON.stringify(scheduledEvents));
            $("#eventSaved").append("<section class='col-md-12 eventSaved'><p>Your schedule has been updated! <i class='fa fa-save' aria-hidden='true'></i></p></section>");
            setTimeout(() => {
                $("#eventSaved").empty();
            }, 1000);
        }
        return;

  }
});