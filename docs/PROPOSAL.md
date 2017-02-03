# Resident Advisor Dashboard

### Prompt

> Develop/Extend a web application for a community group to encourage communication about activities and projects.

## Description

### Purpose

The Resident Advisor Dashboard is intended to encourage better communication throughout the housing community by sending reminders to members of staff that are required be on shift. The web interface will be designed to provide a simple way to schedule these shifts and events resulting in a safer, more organized housing experience for all on campus residents.

### Content

Content can be broken down into three categories – __events__, __people__ and __reminders__. The __events__ are anything from shifts to activities with residents. These events are created by users of the service. All events will be user created, and then displayed through a calendar-like interface in the application. The __people__ category is used to represent users. __Reminders__ will be sent via either email or SMS to remind subscribed users of an upcoming event. Reminders will be generated from events created by users.

<div style="page-break-after: always"></div>

## Users and Stakeholders

### Resident Advisors

Residents Advisors (RAs) will be the main __users__ of this application. After the initial setup by the supervisors, this group will be creating most events, and receiving most reminders.

### Resident Education Coordinators

Resident Education Coordinators (RECs) will also be __users__, however, less frequent than the RAs. There is one REC per building. That REC is the supervisor of the all the RAs in that building. Because of this, RECs will be in charge of initially scheduling RA shifts and approving change requests.

#### Stakeholder - Josh Finch

[Josh](http://housing.uncc.edu/directory/josh-finch) is the REC of Lynch Hall at UNC Charlotte. Being the person in charge of scheduling and having a direct line of communication with the RAs through bimonthly one on ones, I feel his opinion holds a great deal of significance, making it important for him to be a __stakeholder__. He can get a feel from all of his RAs about what needs to be improved in terms of communication and how this application can help. If more information is needed, feel free to contact him at [jfinch5@uncc.edu](mailto:jfinch5@uncc.edu).

### Graduate Assistants

The Graduate Assistants (GAs) act as a helper to the RECs. There is also one per building. For the purposes of this application, they have exactly the same roles and responsibilities as RECs, also making them __users__.

### Residents

Residents of the building are not direct users for this application, but rather indirect users. This application will try to improve communication among the RAs to benefit the residents.

<div style="page-break-after: always"></div>

## Dynamic Functionality

This web application is intended to be very dynamic. It will only consist of one page, but will use JavaScript to simulate routing and rendering of new pages via the HTML5 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History).

### Calendar

The main interface to the Resident Advisor Dashboard.
  - Enables users to iterate through months to see upcoming events.
  - Provides different colors for events corresponding to the specific user versus the general staff.
  - Provides an interface to swap shifts by selecting the corresponding days.
  - Facilitates the creating of events by RAs and supervisors.
  - Similar examples:
    - [Google Calendar](https://calendar.google.com/)
    - [Outlook Calendar](https://outlook.live.com/owa/?path=/calendar/view/Month)

### Sign Up / Sign In Page

The first page a user will interface with when launching the service.
  - Allows user to create an account or login to existing account.
  - Will most likely interface with an authentication service similar to [Firebase Auth](https://firebase.google.com/docs/auth/).
  - Similar examples (may need to sign out to see):
    - [Google Login Service](https://accounts.google.com/ServiceLogin)
    - [UNC Charlotte SSO](https://uncc.instructure.com)

<div style="page-break-after: always"></div>

### SMS / Email Notifications

The user will have the opportunity to sign up for SMS or email alerts.
  - JavaScript will make a call to an API to setup alerts for a specific time.
  - Possible API services include:
    - [Iron.io](https://www.iron.io/) - Scheduler
    - [Twilio](https://www.twilio.com/) - SMS
    - [MailChimp](https://mailchimp.com/) - Email

### Event Creation Page

This page will allow the user to schedule an event, shift, or other activity.
  - JavaScript will be used to POST data as an AJAX request instead of reloading the page like a traditional server-based web application.
    - Example of a __form__ page.
  - Data will be stored in a [Firebase](https://firebase.google.com/) database or a similar service.
  - Pictures of RAs will be displayed while adding people to the event.
    - Example of __interactive images__.


## Conclusion

The application described in this document is meant to be the minimum viable product for the Resident Advisor Dashboard. The intention is to make a fully dynamic and responsive web application to encourage better communication among the housing staff.
