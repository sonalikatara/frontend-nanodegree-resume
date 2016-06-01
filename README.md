The resume looks something like this
![](http://i.imgur.com/pWU1Xbl.png)

The repository  includes the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

## The starting point...
### js/helper.js
Within helper.js, is a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

###  The Rest:
The resume has four distinct sections: work, education, projects and a header with biographical information. 

1. There are four JSON objects, each one representing a different resume section. These objects  follow the schema below exactly. Property names are case-sensitive. To maake sure your JSON objects are formatted correctly I am using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 date: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (Can be 'in progress')
                 description: string 
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2.We Iterate through each JSON object and append its information to index.html in the correct section.
 * First off,  jQuery’s `selector.append()` and `selector.prepend()` functions are used to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
  
* The JavaScript method `string.replace(old, new)`is used to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSON objects.
* Here’s an example of some code that would add the location of one your companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`

3. The resume includes an interactive map.
4. All of the code for adding elements to the resume is within functions. And all of the functions are encapsulated within the same objects containing the resume data. For instance, your functions for appending work experience elements to the page are within the same object containing data about  work experience.
