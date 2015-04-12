var formattedName   =   "S Praveenkumar";
var formattedRole   =   "software development engineer";
var contactInfo     =   {
                            "mobile":"8904793037",
                            "email":"sbpraveen34@iitj.ac.in",
                            "github":"https://github.com/sbpraveen34",
                            "linkedin":"https://in.linkedin.com/in/spraveenk",
                            "twitter":"https://twitter.com/cicaro_speaker",
                            "blog":"https://cicarospeaker.wordpress.com/",
                            "location":"Currently Bangalore"
                            };
formattedContact    =   HTMLcontactGeneric.replace('%contact%','Contact Me');
formattedContact    =   formattedContact.replace('%data%','');
mobile              =   HTMLmobile.replace('%data%',contactInfo.mobile);
email               =   HTMLemail.replace('%data%',contactInfo.email);
github              =   HTMLgithub.replace('%data%',contactInfo.github);
linkedin            =   HTMLlinkedin.replace('%data%',contactInfo.linkedin);
twitter             =   HTMLtwitter.replace('%data%',contactInfo.twitter);
blog                =   HTMLblog.replace('%data%',contactInfo.blog);
loc                 =   HTMLlocation.replace('%data%',contactInfo.location);
formattedName       =   HTMLheaderName.replace('%data%',formattedName);
formattedRole       =   HTMLheaderRole.replace('%data%',formattedRole);
console.log(formattedContact);
$('#topContacts').html(formattedContact);
$('#topContacts').append(mobile);
$('#topContacts').append(email);
$('#topContacts').append(github);
$('#topContacts').append(linkedin);
$('#topContacts').append(twitter);
$('#topContacts').append(blog);
$('#topContacts').append(loc);
$('#header').append(formattedName);
$('#header').append(formattedRole);
