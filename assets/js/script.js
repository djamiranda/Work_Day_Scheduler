// added start function
$(document.start(function () {
  // added arrays
  var dayHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  var scheduledEvents = [];
  $("#currentDate").text(dayjs().format("dddd, MMMM Do"));
  var currentHour = dayjs().hour();

  scheduledEvents = getDaysEvents();

  for(var i = 0; i < dayHours.length; i++) {
    $("#"+i+"a").append("<section class='col-md-1 col-1' id='scheduleTime'><p>"+dayHours[i]+"</p></section>"+
                    "<form class='col-md-10 col-10' id='formSchedule"+i+"'><section class='form-group'>"+
                    "<textarea class='col-md-10 col-10 description scheduleText' rows='3' id='textSchedule"+i+"'></textarea>"+
                    "</section></form><button class='col-md-1 col-1 saveBtn' id='eventSave"+i+"'>"+
                    "<i class='fa fa-save' data-index='"+i+"' style='font-size:20px'></i></button>");
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

});
