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

      // Add events here
      events: [
        {
          title: '',
          start: '2025-04-25',
          classNames: ['algorithm-analysis'],
          extendedProps: {
            title: 'Assignment 1',
            course: 'Algorithm Analysis',
            due: '2025-04-25'
          }
        },
        {
          title: '',
          start: '2025-04-26',
          classNames: ['hci'],
          extendedProps: {
            title: 'Assignment 1',
            course: 'HCI',
            due: '2025-04-26'
          }
        },
        {
          title: '',
          start: '2025-05-04',
          classNames: ['intro-to-os'],
          extendedProps: {
            title: 'Project1',
            course: 'Intro to Operating Systems',
            due: '2025-05-04'
          }
        },
        {
          title: '',
          start: '2025-05-10',
          classNames: ['artificial-intelligence'],
          extendedProps: {
            title: 'Final',
            course: 'Artificial Intelligence',
            due: '2025-05-10'
          }
        }
      ],


      // date click functions
      dateClick: function(info) {
        // Handle date clicks
        console.log('Clicked on: ' + info.dateStr);
      },

      // event click
      eventClick: function(info){
        console.log('Event clicked:')
  
        // Call your existing function to display event details
        displayEventDetails(info.event);

      }

    });
    calendar.render();

    function displayEventDetails(event){
      // Get the event details elements
      const titleElement = document.getElementById('set-assignment');
      const courseElement = document.getElementById('set-course');
      const dueElement = document.getElementById('set-due-date');
     
      // Set the content of the details elements
      titleElement.textContent = `${event.extendedProps.title}`;
      courseElement.textContent = `${event.extendedProps.course}`;
      dueElement.textContent = `${event.extendedProps.due}`;
    }

});


