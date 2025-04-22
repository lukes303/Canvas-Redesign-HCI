# Canvas-Redesign-HCI

Authors: Luke Selby, Cale Stringfellow, Joseph Rodriguez

This is a redesign of the UI of Canvas learning management software.

The existing UI of Canvas has several issues that need to
be addressed:

Overly Complicated: There are many features that are
not often used by students and only make the website
more confusing to navigate. For example, all three mem-
bers of the team are in their senior year and have never
had to click on ”BigBlueButton”, ”Collaborations”, or
”NewAnalytics”. They only serve to increase the amount
of buttons to sort through.

Lack of Critical Information: Students will likely want
to see their important due dates and grades from the
dashboard in card mode, allowing them to see their
progress easily at a glance. However, the dashboard of the
website only shows class cards, an unsorted upcoming as-
signments list, recent graded assignments, a view grades
button, and a start new course button, the latter two being
in the bottom right corner where most computer screens
have to scroll down to. Most important items, such as
grades or class-specific upcoming assignments, must be
found through clicking through multiple pages.

Inconsistencies between List and Card view: Card view
does not have a notification center while list view does.

No Dark Mode: Canvas lacks a dark mode. Including it
can improve accessibility for users who suffer from eye
strain or light sensitivity.

Project will be built with HTML, CSS, JavaScript, and FullCalendar.js

Requirments:
FullCalendar.js: https://fullcalendar.io/docs/initialize-globals

Download fullcalendar-6.1.15.zip from FullCalendar's website or install with NPM with the command:

# Running the site
### Option 1: View online
Visit http://redesign-canvas.site/ to see a live view
### Option 2: Install and run locally.
Step 1: Use Windows PowerShell or linux to install FullCalendar library by running **npm install fullcalendar.**
Step 2: Clone the repository using git clone https://github.com/lukes303/Canvas-Redesign-HCI.git.
Step 3: Open the cloned folder and run index.html in your favorite browser
Step 4: The site is now working and open!

# Note
For prototype purposes, quick access links, to-do list links and adding shortcuts to quick access only fully work for the Algorithm Analysis class. Not every feature carried over from Canvas is fully implemented if we did not decide to change its functionality. Below are the features we have changed and can be used.

# Features

### Dark Mode
To toggle darkmode, click the three dots settings button on the top right of the window. In the menu, click the dark mode button to switch between light and dark mode.

### Calendar
Open the calendar by clicking the calendar icon in the nav bar on the far left of the screen. Assignments will show up color coded by class. Click on an event to pull up more information on the assignment.

### Quick Access
Navigate to the files section by clicking on the folder icon in a class card. This will take you to the new files screen. Click the add button next to any file to add it to the quick accesss section of the class card for the current class. Delete quick access items by cliking the delete button that appears when hovering your mouse over the quick access item.

### New Assignment and Files Page
The assignment and files pages have been updated to match the new visual style of our re-design.
