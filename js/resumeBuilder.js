var bio = {
    'name': 'Praveenkumar s',
    'role': 'Software Development Engineer',
    'contacts':
            {
                'mobile': '+91 - 8904793037',
                'email': 'sbpraveen34@iitj.ac.in',
                'github': 'sbpraveen34',
                'twitter': '@cicaro_speaker',
                'location': 'Bangalore'
            },
    'welcomeMessage': 'Feel Before you Think, Think Before you Speak, Speak what you do',
    'skills': ['Innovative', 'Compatability', 'Quick Learning'],
    'biopic': 'images/dual.jpg',
    'display': function () {
        $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
        $('#topContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace('%data%', this.contacts.email));
        $('#topContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
        $('#topContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
        $('#topContacts').append(HTMLlocation.replace('%data%', this.contacts.location));
        $('#header').append(HTMLbioPic.replace('%data%', this.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        for (skill in this.skills)
        {
            $('#skills').append(HTMLskills.replace('%data%', this.skills[skill]));
        }
    }
};

var education = {
    'schools': [
        {
            'name': 'Indian Institute of Technology Jodhpur',
            'location': 'Jodhpur, Rajasthan',
            'degree': 'B. Tech Computer Science and Engineering',
            'majors': ['Computer Science'],
            'dates': 2014,
            'url': 'http://www.iitj.ac.in/'
        },
        {
            'name': 'Kendriya Vidyalaya No. 2 Air Force Station',
            'location': 'Tambaram, Chennai',
            'degree': 'AISSCE(XIIth Grade) CBSE',
            'majors': ['Computer Science, Physics, Chemistry, Maths'],
            'dates': 2010,
            'url': 'http://www.kv2tambaram.tn.nic.in/'
        },
        {
            'name': 'SRDF Viveknanda Vidyalaya',
            'location': 'Chromepet, Chennai',
            'degree': 'AISSCE(Xth Grade) CBSE',
            'majors': ['Maths, Science, Computer Science'],
            'dates': 2008,
            'url': 'http://www.srdfvv.net/'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Javascript Basics',
            'school': 'Udacity',
            'date': '16th April 2015',
            'url': 'https://www.udacity.com/'
        }
    ],
    'display': function () {
        
        for (eachSchool in  this.schools)
        {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(
                    HTMLschoolName.replace('%data%', this.schools[eachSchool].name)
                    +
                    HTMLschoolDegree.replace('%data%', this.schools[eachSchool].degree)
                    );
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', this.schools[eachSchool].dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', this.schools[eachSchool].location));
            for (major in this.schools[eachSchool].majors)
            {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', this.schools[eachSchool].majors[major]));
            }
        }
        $('#education').append(HTMLonlineClasses);
        
        for (eachCourse in this.onlineCourses)
        {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(
                    HTMLonlineTitle.replace('%data%', this.onlineCourses[eachCourse].title)
                    +
                    HTMLonlineSchool.replace('%data%', this.onlineCourses[eachCourse].school)
                    );
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', this.onlineCourses[eachCourse].date));
            $('.education-entry:last').append(HTMLonlineURL.replace('%data%', this.onlineCourses[eachCourse].url));
        }
    }
};
var work = {
    'jobs': [
        {
            'employer': 'Cognizant Technologies Solutions India Pvt. Ltd.',
            'title': 'Senior Developer Service Delivery Mobility',
            'location': 'Chennai, Tamil Nadu',
            'dates': '1st September 2014 --- Till Now',
            'description': 'Facebook Application Developer'
        }
    ],
    'internships': [
        {
            'employer': 'The Perfect Future India Pvt. Ltd.',
            'title': 'Summer Intern',
            'location': 'Noida, New Delhi',
            'dates': 'May 2013 — July 2013',
            'description': 'Android Developer & Web Application Developer'
        },
        {
            'employer': 'Institute of Mathematical Science',
            'title': 'Visiting Summer Student',
            'location': 'Chennai, Tamil Nadu',
            'dates': '10th May 2012 — 30th June 2012',
            'description': 'Course work on Theoritical Computer Science'
        }
    ],
    'display': function () {        
        for(job in this.jobs)
        {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(
                                            HTMLworkEmployer.replace('%data%',this.jobs[job].employer)
                                            +
                                            HTMLworkTitle.replace('%data%',this.jobs[job].title)
                                        );
            $('.work-entry:last').append(HTMLworkDates.replace('%data%',this.jobs[job].dates));
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%',this.jobs[job].location));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%',this.jobs[job].description));
        }
        
        $('#workExperience').append('<h3>Internship</h3>');
        
        for(internship in this.internships)
        {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(
                                            HTMLworkEmployer.replace('%data%',this.internships[internship].employer)
                                            +
                                            HTMLworkTitle.replace('%data%',this.internships[internship].title)
                                        );
            $('.work-entry:last').append(HTMLworkDates.replace('%data%',this.internships[internship].dates));
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%',this.internships[internship].location));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%',this.internships[internship].description));
        }
    }
};

var projects = {
  'projects': [
      {
        'title': 'Remote Administration',
        'aim':  'Java application for remote administration of a node from another node in a network using socket programming.',
        'tools':'Java',
        'special':'Nodes can be controlled by Graphical User Interface, uses Multithreading to handle mouse events and monitor change.',
        'dates': 'Oct 2013 - Nov 2013',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role': 'Java Developer',
        'story':''
      },
      {
        'title': 'Smart SMS',
        'aim':  'Android App. which will act as an Automated Expense Manager by keeping track of the transactions made electronically by the user, through SMSes',
        'tools':'Android, PHP, Python',
        'special':' Messages are classified in two categories expense or non-expense messages and displayed to the user as demanded., '+
                    'Generates expense sheet in the form of pdf/excel format and sends it to users email id with all the details of purchase. ',
        'dates': 'May 2013 - July 2013',        
        'images': [],
        'location': 'The Perfect Future India Pvt. Ltd., Noida, New Delhi',
        'role' : 'Android Developer, RESTful API web service, worked on google APIs, NLP, Algorithm Design',
        'story':'' 
      },
      {
        'title': 'Smart Dialer',
        'aim':  'An android application to make possible suggestion for the user to make calls at a particular time.',
        'tools':'Android',
        'special':' Naive bayes classifier is used for classification'+
                    ',Accuracy analysis of algorithm using corpus of call logs which yielded an accuracy of approximately 61%.',
        'dates': 'May 2013 - July 2013',        
        'images': [],
        'location': 'The Perfect Future India Pvt. Ltd., Noida, New Delhi',
        'role': 'Android Developer, widget development, Research and Algorithm Design',
        'story': ''
      },
      {
        'title': 'Smart Browser',
        'aim':  'An Android application which suggests users web pages based on their browsing interests.',
        'tools':'Android, PHP, Python.',
        'special':'Suggestions will also be based on the other users who have similar interests.',
        'dates': 'May 2013 - July 2013',        
        'images': [],
        'location': 'The Perfect Future India Pvt. Ltd., Noida, New Delhi',
        'role': 'Android Developer, Layout development, the RESTful API web service, Research and algorithm design and server workflow.',
        'story' : ''
      },      
  ],
  'display': function (){      
      for(project in this.projects)
      {
          var projectAim = HTMLprojectAim.replace('%data%',this.projects[project].aim);
          var projectTools = HTMLprojectLanguage.replace('%data%',this.projects[project].tools);          
          var projectSpecial = HTMLprojectSpecial.replace('%data%',this.projects[project].special);
          var projectRole = HTMLprojectRole.replace('%data%',this.projects[project].role);          
          var projectDescription = HTMLprojectDescription.replace('%data%',projectAim+projectTools+projectSpecial+projectRole);
          $('#projects').append(HTMLprojectStart);          
          $('.project-entry:last').append(HTMLprojectTitle.replace('%data%',this.projects[project].title));
          $('.project-entry:last').append(HTMLprojectDates.replace('%data%',this.projects[project].dates));
          $('.project-entry:last').append(HTMLprojectLocation.replace('%data%',this.projects[project].location));
          $('.project-entry:last').append(projectDescription);
          $('.project-entry:last').append(HTMLprojectStory.replace('%data%',this.projects[project].story));
          for(image in this.projects[project].images)
          {
              $('.project-entry:last').append(HTMLprojectImage.replace('%data%',this.projects[project].images[image]));
          }
      }
  }
};
$('#main').append(internationalizeButton);
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);