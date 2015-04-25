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
    'skills': ['Innovative', 'Compatibility', 'Quick Learning'],
    'biopic': 'images/dual.jpg',
    'display': function () {
        $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', this.name));
        $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
        $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', this.contacts.email));
        $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
        $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
        $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', this.contacts.location));
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
        'title': 'Magento Facebook Plugin',
        'aim':  'Develop a Magento plugin to create a facebook pagetab application for an e-commerce website to show case the available products and also to increase user engagement',
        'tools':'PHP',
        'special':'Plugin has more social features like custom stories, like & share options with facebook, googleplus, twitter and pinterest.'
                +' <br>Plugin does not require to import data to outside server as it will act like a third party module with magento',
        'dates': 'Dec 2014 - till Now',        
        'images': [],
        'location': 'Cognizant Technologies Solutions, Bangalore',
        'role' : 'PHP Developer, Magento Developer',
        'story':'' ,
        'type':'[<b>On going Project</b>] Client Project'
      },      
      {
        'title': 'Storelocator',
        'aim':  'Develop a storelocator module for a magento based e-commerce web application.',
        'tools':'PHP',
        'special':'Module makes only a single call to server to get the data which makes displaying result very fast.<br> Module also supports different types of maps like Google & Yandex.',
        'dates': 'Feb 2015 - March 2015',
        'images': [],
        'location': 'Cognizant Technologies Solutions, Bangalore',
        'role' : 'PHP Developer, Magento Developer',
        'story':'' ,
        'type':'Client Project'
      },
      {
        'title': 'Social Media Metrics Crawler',
        'aim':  'Application deals with data pulling from social media platforms like Facebook, Twitter, Instagram, Tumblr and YouTube',
        'tools':'PHP',
        'special':'Data includes information regarding their fans detail in their respective pages in social media platforms. The metrics changes every month with respect to the requirement from the cilent',
        'dates': 'Sep 2014 - Dec 2014',        
        'images': [],
        'location': 'Cognizant Technologies Solutions, Chennai',
        'role' : 'PHP Developer, Research on facebook metrics & other social media apis',
        'story':'' ,
        'type':'Client Project'
      },
      {
        'title': 'Page feeds of Social Media',
        'aim':  'Application takes the social media (includes Facebook, Twitter and Instagram) page id gives back the news feed of the respective pages.',
        'tools':'PHP',
        'special':'Application returns the Likes and Comment count for respective posts and also classifies the post as post made by Users and Page.',
        'dates': 'Nov 2014 - Nov 2014',        
        'images': [],
        'location': 'Cognizant Technologies Solutions, Chennai',
        'role' : 'PHP Developer',
        'story':'' ,
        'type':'Internal Project'
      },
      {
        'title': 'App Insights',
        'aim':  'Application takes information regarding any IPhone application like app id or search terms and returns information regarding user comments',
        'tools':'PHP',
        'special':'Application also does sentiment Analysis and retrieves theme of user comments using Alchemy API to reveal the users opinion regarding the application.',
        'dates': 'Nov 2014 - Nov 2014',        
        'images': [],
        'location': 'Cognizant Technologies Solutions, Chennai',
        'role' : 'PHP Developer',
        'story':'' ,
        'type':'Internal Project'
      },      
      {
        'title': 'Study of Covert information using Steganography and Steganalysis',
        'aim':  'Studied and implemented various steganography algorithms and steganalysis based on various transformations like DFT, DCT.',
        'tools':'Java',
        'special':'A term paper comprising detailed study on various steganography algorithms and steganalysis based on various transformations like DFT, DCT.',
        'dates': 'Oct 2013 - April 2014',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role' : 'Research and Development on networking Topics',
        'story':'' ,
        'type':'B.Tech Project'
      },
      {
        'title': 'Computer Networks and Security',
        'aim':  'To study various methods of performing Denial of Service and Man In The Middle attack on wireless network.',
        'tools':'C, Python',
        'special':'A term paper comprising detailed study on various DOS attacks on various levels of OSI network model and Man In the Middle Attacks',
        'dates': 'Oct 2013 - Nov 2013',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role' : 'Research and Development on networking Topics',
        'story':'' ,
        'type':'Course Project - Advanced Computer Networks'
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
        'story':'' ,
        'type':'Internship Project'
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
        'story': '',
        'type':'Internship Project'
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
        'story' : '',
        'type':'Internship Project'
      },
      {
        'title': 'Complete Database Management System',
        'aim':  'Java Application which can act as a complete database management system.',
        'tools':'Java',
        'special':'Main components of the project include Disk storage, in particular the data are stored in a pagnited files, a buffer manager which is going to buffer the disk space, an index manager which manages the loaded indices which supports efficient query execution, an execution engine which performs parsing, query optimization and query processing, a meta-data manager which manages the meta-data of the databases and supplies meta data to query engine for optimization and a multithreaded connection manager.',
        'dates': 'Feb 2013 - April 2013',
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role': 'Java Developer',
        'story':'',
        'type':'Course Project - Principles of Database Systems'
      },
      {
        'title': 'Resume Storage and Editing Web Application',
        'aim':  'To develop a web application to store and edit resume given in Excel file format',
        'tools':'PHP',
        'special':'Reads resume contents from excel sheet and displays in the content in browser for editing and allows to save the edited version back in excel file.',
        'dates': 'Feb 2013 - April 2013',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role': 'PHP Developer',
        'story':'',
        'type':'Course Project - Software Engineering'
      },
      {
        'title': 'Cab Booking Service Software',
        'aim':  'To automate the process of booking cabs from a travel agent',
        'tools':'Java',
        'special':'Communication between customer and the service provider is done through socket programming.'+
                    '<br>Allows the customer to choose their starting and destination point through map to make it more customized.',
        'dates': 'Feb 2013 - April 2013',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role': 'Java Developer',
        'story':'',
        'type':'Course Project - Software Engineering'
      },
      {
        'title': 'Student Registration and Timetable Allotment',
        'aim':  'To automate the complete process of student registration and timetable allotment of an Institute.',
        'tools':'Java',
        'special':'Implemented graph coloring algorithm to find the total number of distinct slot without any common student in any two same slots.',
        'dates': 'Feb 2013 - April 2013',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role': 'Java Developer',
        'story':'',
        'type':'Course Project - Software Engineering'
      },
      {
        'title': 'Remote Administration',
        'aim':  'Java application for remote administration of a node from another node in a network using socket programming.',
        'tools':'Java',
        'special':'Nodes can be controlled by Graphical User Interface, uses Multithreading to handle mouse events and monitor change.',
        'dates': 'Oct 2012 - Nov 2012',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role': 'Java Developer',
        'story':'',
        'type':'Course Project - Computer Networks'
      },      
      {
        'title': 'Password Checker Using Bloom Filter Implementation',
        'aim':  'To develop an application in Java to check whether the entered password is given in the list or not.',
        'tools':'Java',
        'special':'Project involved the implementation of BloomFilters',
        'dates': 'Oct 2012 - Nov 2012',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role': 'Java Developer',
        'story':'',
        'type':'Course Project - Algorithms II'
      },
      {
        'title': 'Words Isomorphism',
        'aim':  'An application in python for checking whether given two words are isomorphic to each other or not.',
        'tools':'Python',
        'special':'Used Libraries like Tkinter and standard python libraries to handle GUI and Inputs.',
        'dates': 'Feb 2012 - April 2012',        
        'images': [],
        'location': 'IIT Jodhpur, Rajasthan',
        'role': 'Python Developer',
        'story':'',
        'type':'Course Project - Discreet Mathematics'
      },
  ],
  'display': function (){      
      for(project in this.projects)
      {
          var projectAim = HTMLprojectAim.replace('%data%',this.projects[project].aim);
          var projectTools = HTMLprojectLanguage.replace('%data%',this.projects[project].tools);          
          var projectSpecial = HTMLprojectSpecial.replace('%data%',this.projects[project].special);
          var projectRole = HTMLprojectRole.replace('%data%',this.projects[project].role);          
          var projectType = HTMLprojectType.replace('%data%',this.projects[project].type);
          var projectDescription = HTMLprojectDescription.replace('%data%',projectAim+projectTools+projectSpecial+projectRole+projectType);
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
//
//var Resume = {
//    'show': false,
//    'showHideBlocks' : function(selector){
//        if(this.show === false)
//        {
//            jQuery(selector).show('slow');
//            this.show = true;
//        }
//        else
//        {
//            jQuery(selector).slideUp('slow');
//            this.show = false;
//        }
//    }  
//};