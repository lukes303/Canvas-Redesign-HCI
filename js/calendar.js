// Initilaze and setup calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      // Basic settings
      initialView: 'dayGridMonth', // Default view (month, week, day)
      
      // Appearance settings
      height: 'auto', // or a specific height like 600
      aspectRatio: 1.35, // width-to-height ratio
      themeSystem: 'standard', // or 'bootstrap' if using Bootstrap
      
      // Date/time settings
      firstDay: 0, // 0 = Sunday, 1 = Monday
      timeZone: 'local', // or 'UTC'
      locale: 'en', // language/locale
      
      // Event settings
      editable: false, // allows event dragging and resizing
      selectable: true, // allows date selection
      nowIndicator: true, // shows a marker for current time (in time views)

      eventBackgroundColor: '#ff0000', // Bright red to make events very visible
      eventBorderColor: '#000000',
      eventTextColor: '#ffffff',

      // Callback functions
      dateClick: function(info) {
          // Handle date clicks
          console.log('Clicked on: ' + info.dateStr);
      }
    });
    calendar.render();

  });