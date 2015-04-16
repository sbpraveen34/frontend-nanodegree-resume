var bio = {
            'name' : 'S Praveenkumar',
            'role' : 'Software Development Engineer',
            'contacts' : 
                        {
                            'mobile'  : '+91 - 8904793037',
                            'email'   : 'sbpraveen34@iitj.ac.in',
                            'github'  : 'sbpraveen34',
                            'twitter' : '@cicaro_speaker', 
                            'location': 'Bangalore'
                        },
            'welcomeMessage': 'Feel Before you Think, Think Before you Speak, Speak what you do',
            'skills': ['Innovative','Compatability','Quick Learning'],
            'biopic': 'images/dual.jpg',
            'display': function (){
                $('#header').prepend(HTMLheaderRole.replace('%data%',this.role));
                $('#header').prepend(HTMLheaderName.replace('%data%',this.name));
                $('#topContacts').append(HTMLmobile.replace('%data%',this.contacts.mobile));
                $('#topContacts').append(HTMLemail.replace('%data%',this.contacts.email));
                $('#topContacts').append(HTMLgithub.replace('%data%',this.contacts.github));
                $('#topContacts').append(HTMLtwitter.replace('%data%',this.contacts.twitter));
                $('#topContacts').append(HTMLlocation.replace('%data%',this.contacts.location));
                $('#header').append(HTMLbioPic.replace('%data%',this.biopic));
                $('#header').append(HTMLwelcomeMsg.replace('%data%',this.welcomeMessage));
                $("#header").append(HTMLskillsStart);
                for(skill in this.skills)
                {
                    $('#skills').append(HTMLskills.replace('%data%',this.skills[skill]));
                }
            }
        };
        
var education = {
                    'schools': [
                                {
                                    'name'    : 'Indian Institute of Technology Jodhpur',
                                    'location': 'Jodhpur',
                                    'degree'  : 'B. Tech Computer Science and Engineering',
                                    'majors'  : ['Computer Science'],
                                    'dates'   : 2014,
                                    'url'     : 'http://www.iitj.ac.in/'
                                },                                
                                {
                                    'name'    : 'Kendriya Vidyalaya No. 2 Air Force Station',
                                    'location': 'Tambaram, Chennai',
                                    'degree'  : 'AISSCE(XIIth Grade) CBSE',
                                    'majors'  : ['Computer Science, Physics, Chemistry, Maths'],
                                    'dates'   : 2010,
                                    'url'     : 'http://www.kv2tambaram.tn.nic.in/'
                                },
                                {
                                    'name'    : 'SRDF Viveknanda Vidyalaya',
                                    'location': 'Chromepet, Chennai',
                                    'degree'  : 'AISSCE(Xth Grade) CBSE',
                                    'majors'  : ['Maths, Science, Computer Science'],
                                    'dates'   : 2008,
                                    'url'     : 'http://www.srdfvv.net/'
                                }                                
                            ],
                    'onlineCourses' : [
                                        {
                                            'title' : 'Javascript Basics',
                                            'school': 'Udacity',
                                            'date'  : '',
                                            'url'   : ''
                                        }
                                    ],         
                    'display' : function(){
                        $('#education').append(HTMLschoolStart);
                        for(eachSchool in  this.schools)
                        {
                            $('.education-entry').append(
                                                            HTMLschoolName.replace('%data%',this.schools[eachSchool].name)
                                                            +
                                                            HTMLschoolDegree.replace('%data%',this.schools[eachSchool].degree)
                                                            );
                            $('.education-entry').append(HTMLschoolDates.replace('%data%',this.schools[eachSchool].dates));
                            $('.education-entry').append(HTMLschoolLocation.replace('%data%',this.schools[eachSchool].location));
                            for(major in this.schools[eachSchool].majors)
                            {
                                $('.education-entry').append(HTMLschoolMajor.replace('%data%',this.schools[eachSchool].majors[major]));
                            }
                        }
                    }    
                };

bio.display();
education.display();