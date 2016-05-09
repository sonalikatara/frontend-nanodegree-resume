/*
 Code to build the resume will go here.
 */

/* Biography   */
var bio = {
    "name" : "Sonali Lastname" ,
    "role" : "Web Developer",
    "contacts" : {
        "mobile"  : "999-888-111",
        "email"   : "sonalikatara@gmail.com",
        "github"  : "sonaligit",
        "twitter"    : "#s_katara",
        "location":  "San Fransisco"
        },
    "welcomeMessage" : "Welcome to my awsome Resume",
    "skills" : ["HTML5" , "CSS3" , "JavaScript", "Ruby on Rails", "PHP", "mySQL", "jQuery", "JSON"],
    "biopic" : "images/fry.jpg"
    };

bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail =  HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLblog.replace("%data%", bio.contacts.twitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage) ;
    var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(" "));

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#biopic").append(formattedPicture);
    $("#header").append(formattedWelcome);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedLocation);

    if(bio.contacts.length !==0){
        for(var contact in bio.contacts){
            var formattedFooterContact = HTMLfooterContact.replace("%contactFooterCategory%",contact).replace("%data%",bio.contacts[contact]);
         $("#footerContacts").append(formattedFooterContact);
        }
    }
    if(bio.skills.length !== 0){
        $("#topSkills").append(HTMLskillsStart);

        for(var skill in bio.skills){
         var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
         $("#skills").append(formattedSkills);
        }
     }
};

/* End Biography */

/* Education  */
var education = {
   "schools" : [
    { "name" : "Banasthali University",
      "location" : "Banasthali, India",
      "degree": "Masters",
      "majors" : ["Computer Applications"],
      "dates" : "1999-2002",
      "url" : "www.banasthalividhyapeeth.edu"
    }
    ],
    "onlineCourses" : [
    {
      "title": "Front-end Developer Nano Degree",
      "school" : "Udacity",
      "date" : "Feb 2016 - in progress",
      "url" : "www.udacity.com"
    }
    ]
  };

education.display = function(){
  if (education.schools.length !== 0){
      $("#education").append(HTMLschoolStart);

      for (var school in education.schools){
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        var formattedEducationEntry = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;

        $(".education-entry:last").append(formattedEducationEntry);
      }
  }
  if (education.onlineCourses.length !== 0){
      $("#education").append(HTMLonlineClasses);
      for (course in education.onlineCourses){
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url).replace("%link%",education.onlineCourses[course].url);

        var formattedOnlineCourseEntry = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL ;

        $("#education:last").append(formattedOnlineCourseEntry);
      }
  }
};
/* end Education */

/* Summary */
var summary = {
  "descriptions" : [
  "Over 3 years of professional experience as Web Application Developer/ Database Developer.",
  "Expertise in design, development and implementation of multi-tier business application software employing client/server technology, Internet/Intranet based RDBMS Applications, Object Oriented Programming , SaaS on different platforms like Windows and Linux. ",
  "Experience includes understanding the customer needs and creating  and managing  responsive and SEO  websites, providing exceptional user support and user experience."
  ]
};

summary.display = function(){
  if(summary.descriptions.length !== 0){
     $("#summary").append(HTMLsummaryStart);

     for(description in summary.descriptions){
        var formattedSummaryDescription = HTMLsummaryDescription.replace("%data%",summary.descriptions[description]);
        $(".summary-entry:last").append(formattedSummaryDescription);
     }
  }
};

/* End Summary */

/* Techical Skils */
var technicalSkills = {
    "mySkills" : {
      "Programming Languages" : "Ruby, PHP, C#, ASP",
      "Frameworks/Libraries" :  "jQuery, Bootstrap, Ajax, Rails, .NET, json, Grunt",
      "Languages" : "Rails, HTML5, CSS3, JavaScript ",
      "Databases" : "SQL, MS SQL Server, SQL Server 2000, MS Exchange Server (CDO, Event Scripting and Routing), IIS Server.",
      "Operating Systems" : "Linux, Windows",
      "Source Control" : "Git, Vault"
    }
};

technicalSkills.display = function(){
  if(technicalSkills.mySkills.length !== 0){
    $("#technicalSkills").append(HTMLtechnicalSkillsStart);

    for(var skill in technicalSkills.mySkills){
        var formattedTechnicalSkills = HTMLtechnicalSkills.replace("%skillCategory%", skill).replace("%data%",technicalSkills.mySkills[skill]);
        $(".technicalSkills-entry:last").append(formattedTechnicalSkills);
    }
  }
};

/* end Technical Skills  */

/* work */
var work = {
    "jobs" : [
        {
        "employer" : "MapMyVideo",
        "title"    : "Web Application Developer Consultant",
        "location" : "San Jose",
        "dates"    : "Feb 2016 - March 2016",
        "description" : "Developed the website and User login and authentication system for the client’s web product. My work involved designing,developing and integrating the client’s web product to a website that helps manage user sessions and authenticate and manage user roles."
        },
        {
        "employer" : "Foamlinx",
        "title"    : "Front-End and SEO Consultant",
        "location": "Sunnyvale",
        "dates" :  " 2015 - 2016",
        "description" : "Improved the client's website by moving it to HTML5 and CSS3, adding social media and improving it's functionality. Optimized the site for Search Engines (SEO) and made it responsive. "
        },
        {
        "employer" : "iLoveToRead",
        "title"    : "Software Developer",
        "location": "Sunnyvale",
        "dates" :  " 2014 - 2015",
        "description" : "Worked on a web product in Ruby on Rails, javascript, jQuery, AJAX  using Git source control and deployed it on Heroku."
        },
        {
        "employer" : "NetworkEarth",
        "title"    : "Software Engineer",
        "location": "Oakland",
        "dates" :  " 2004 - 2006",
        "description" : "Develop, deploy and maintain web multiple web products varying from real estate, ecommerce to business. "
        },
        {
        "employer" : "SchoolCity",
        "title"    : "Software Intern",
        "location": "Mountain View",
        "dates" :  " 2003",
        "description" : "Tested and made queries on their application that processed STAR test results. "
      }
    ]
};

work.display = function(){
   if(work.jobs.length !== 0) {
    $("#workExperience").append(HTMLworkStart);

    for(var job in work.jobs){
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedWorkEntry =  formattedTitle + formattedEmployer  + formattedDates + formattedLocation + formattedDescription;

        $(".work-entry:last").append(formattedWorkEntry);
     }
    }
};
/* end work */

/* Projects */
 var projects = {
    "projects" :[
        {
        "title" : "MapMyVideo",
        "dates" : "feb 2016 - April 2016",
        "description" : "Developing the website and User login and authentication system for the client’s web product. My work involves designing,developing and integrating the client’s web product to a website that helps manage user sessions and authenticate and manage user roles.",
        "images" : ["images/mapmyvideo.png"],
        "link"   : "",
        "caption": "HTML5, Bootstrap, PHP, mySQL"
        },
        {
        "title" : "Foamlinx",
        "dates" : " 2015 -  early2016",
        "description" : "Improved the client's website by moving it to HTML5 and CSS and adding social media and improving it's functionality. Optimized the site for Search Engines (SEO) and made the site responsive. ",
        "images" : ["images/feature1.png"],
        "link"   : "http://www.foamlinx.com",
        "caption": "Search Engine Optimization, HTML5, CSS3"
        },
        {
        "title" : "Agencylogic, NetworkEarth",
        "dates" : " 2004 - 2006",
        "description" : "AgencyLogic PowerSites are listing tool available for Real Estate professionals, every prospect receives a 100% unique Web address representing their specific property. ● Enhanced the administration and client site developed using ASP.net, C#, ADO.net and SQL Server 2000 ● Developing UI in ASP.Net using Web Forms.● Used ADO.NET, SQL provider, DataSets, DataList and DataRepeaters to establish database connectivity, data manipulation and display data.● Wrote the stored procedures in SQL Server involved in data base access.● Created libraries and user controls ● Performed image manipulation tasks.● Automated the process of registering domain names for the new powersites, now the sites get live within 2 hours of their creations.",
        "images" : ["images/powersite.PNG"],
        "link"   : "",
        "caption": "javaScript, C#, HTML5, CSS"
        },
        {
        "title" : "Chamber Business Suite, NetworkEarth",
        "dates" : " 2004 - 2006",
        "description" : "Chamber Business Suite provides system integration services for the Chamber Business Suite. Features I worked on include the Event Calendar, member directory and registration system.● Developed web interfaces using ASP.net Web Forms, User Controls, and C#.● Developed and worked with APIs, Data Model, Data Entities and Data Adapters.● Created Views to extract data from sql server",
        "images" : ["images/197x148.gif"],
        "link"   : "#",
        "caption": "javaScript, C#, HTML5, CSS"
        },
        {
        "title" : "SteamingBean (Retail Coffee), NetworkEarth",
        "dates" : " 2004 - 2006",
        "description" : "Designed and developed the administrative site using ASP.net, C#, ADO.net and SQL Server 2000 www.thebean.com/components/administrationwebsite ● Overtook the project and was responsible for further enhancements ● Developing UI in ASP.Net using Web Forms.● Used ADO.NET, SQL provider, DataSets, DataList and DataRepeaters to establish database connectivity, data manipulation and display data.● Wrote the stored procedures in SQL Server involved in data base access.SerendipiTea (Retail Tea)www.serendipitea.com Using the common objects (by inheriting them) from the ecommerce project I worked on new site for tea. ",
        images : ["images/thebean.PNG"],
        "link"   : "http://www.thebean.com",
        "caption": "javaScript, C#, HTML5, CSS"
        }
    ]
};

projects.display  = function(){
  if (projects.projects.length !== 0){
        $("#projects").append(HTMLprojectStart);
        for (project in projects.projects){
              var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%link%",projects.projects[project].link);
              var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
              var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
              var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images).replace("%caption%",projects.projects[project].caption);
              var formattedProjectEntry = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;

              $(".project-entry:last").append(formattedProjectEntry);
        }
  }
};

/* Map */

function displayMap(){
  $("#mapDiv").append(googleMap);
}

/* End Map */

/* display the information */
bio.display();
summary.display();
technicalSkills.display();
work.display();
education.display();
projects.display();
displayMap();







