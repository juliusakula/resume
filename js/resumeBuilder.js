var bio = {
    name: "Justin Murdock",
    role: "Junior<span class=\"orange-text\">Web Developer</span>",
    contacts: {
        twitter: "https://twitter.com/JuicetinMurdock",
        location: "Berkeley, CA, USA",
        mobile: "1-555-123-5555",
        email: "jmurdock-idontcheckthisemail@im.uptilt.com",
        github: "https://github.com/juliusakula",
        linkedin: "https://www.linkedin.com/profile/view?id=322687836"
    },
    welcomeMessage: "Welcome to my Interactive Resume!",
    skills: ["Javascript", "Grunt", "PHP / HTML / CSS", "MySQL", "Node.js", "Angular.js"],
    biopic: 'images/profile_pic.jpg',
    display: function(){
        var formattedName = HTMLheaderName.replace("%data%", this.name),
            formattedContactMe = "",
            formattedRole = HTMLheaderRole.replace("%data%", this.role),
            formattedBioPic = HTMLbioPic.replace('%data%', this.biopic),
            formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', this.welcomeMessage),
            // make welcome message something that constantly changes like a text carousel
            formattedSkillsStart = HTMLskillsStart,
            formattedSkills = "";

        //create string of html to replace %data% in contacts, applying template to each iteration

        $.each(this.contacts, function(key, val){
            formattedContactMe += HTMLcontactGeneric.replace("%contact%", key).replace("%data%", val);
        });
        //create string of html to replace %data% in contacts, applying template to each iteration

        $.each(this.skills, function(key, val){
            formattedSkills += HTMLskills.replace("%data%", val);
        });

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").prepend(formattedContactMe);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(formattedSkillsStart);
        $('#skillsH3 + ul').append(formattedSkills).css('display', 'inline-block');
        $('#footerContacts').append($('#topContacts').clone());
        $('#letsConnect h2').wrap( "<a href='https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fabout.twitter.com%2Fresources%2Fbuttons&screen_name=JuicetinMurdock&tw_p=followbutton'></a>" );
        $('#mapDiv').append(googleMap); //Didn't quite know which display function this belonged in, but "Biography" seems right.
    }
}
var work = {
    jobs: [
        {
            employer: 'Lyris, Inc',
            title: 'Junior Web Developer',
            location: 'Emeryville, CA, USA',
            dates: 'October 2013 - Present',
            description: '<ul><li>While on the <i>Quality Assurance Team</i> I wrote testcases for our product and held the record for most test cases written in one day, myself only knowing programming for less than 4 months at the time, competing against the team in India for that record. My mentor during this time helped me a great deal with seeing things from a higher level, and the importance of communication. During this time I was programming in Java.</li>'+
            '<li>While on the <i>Product Engineering Team</i> I wrote an Object Oriented PHP Data Access Object library. By configuring multiple databases into the same object it required very little code to extract data from a multitude of locations as a single result set. By creating a seperation of concerns between data access and data credentials, scripts could be stored in version control systems (Git, SVN) without including passwords. It was a front-end agnostic library, so the data could be viewed in any way. It was used to write more secure billing scripts for Lyris.</li>'+
            '<li>Then, I recieved a promotion from <i>Intern</i> to <i>Junior Software Engineer</i> and I joined the <i>Deliverability Team</i>. I worked with a team of Data Analytics personnel and greatly improved the tools that they used to extract data for analysis. I learned practical Git, HTML & CSS, Bootstrap, Javascript, Angular.JS, Node.JS, Grunt, and User Interface Design. My first task was to refine ETL (Extract, Transform, Load) scripts already in the Deliverability Team\'s repertiour by using my Data Access Object PHP libraries. In one instance, this reduced a script from over 1200 lines of PHP, to less than 300 lines -- turning the toolset from an unmaintainable mess to something understandable at first glance. I combined these refined tools into a custom API, and also wrote a robust front end for the Deliverability Team to use, featuring <a class="inline-plz" href="http://ui-grid.info/">angular-ui/ui-grid</a>, beautiful <a class="inline-plz" href="http://codepen.io/paulrose/pen/mEGLg">css forms</a>, angular-routing, AJAX, and grunt scaffolding for rapid creation of new tools. Before I joined the team, the tools and development process were as basic as possible. I introduced and enforced a development process using Git with separate development and production environments. </li></ul>'
        },
        {
            employer: 'Ponderosa Farms, Inc',
            title: 'Farmhand',
            location: 'Murray, KY, USA',
            dates: 'March 2007 - August 2013',
            description: '<ul><li>At a very young age I began working on my family\'s farm. By my late teens I was doing essential tasks around my family\'s farm including being a part of <a class="inline-plz" href="https://www.youtube.com/watch?v=GzAdSxeyIY4">the seining crew</a>, driving boats and tractors, laying irrigation pipes and helping install irrigation equipment. I learned how to work together on a team - even if this job has nothing to do with programming, I think having this experience made me a more motivated programmer.</li><br></ul>'
        }
    ],
    display: function(){
        var formattedWorkStart = HTMLworkStart,
            array = [];

        $.each(this.jobs, function(key, val){
            var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', val.employer),
                formattedWorkTitle = HTMLworkTitle.replace('%data%', val.title),
                formattedWorkDates = HTMLworkDates.replace('%data%', val.dates),
                formattedWorkLocation = HTMLworkLocation.replace('%data%', val.location),
                formattedWorkDescription = HTMLworkDescription.replace('%data%', val.description);

            array[key] =  formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
        });

        $.each(array, function(key, val){
            $("#workExperience").append(formattedWorkStart.replace('%data%', array[key]));
        });
    }
};
var projects = {
    projects: [
        {
            title: 'Bitcoin Mining',
            dates: 'November 2013 - February 2014',
            description: '<ul><li>During the Bitcoin(BTC) bubble of 2013 where BTC was valued over $1000, I bought and built a computer to mine BTC and Dogecoin. The mined BTC paid for the multi-GPU mining computer twice over. I also learned a lot about cryptography in the process, and helped a few friends mine on their own computers. In addition to mining at home I mined BTC on cloud mining services, and on Amazon Web Service EC2 VMs.</li>'+
            '<li>I\'ve built dozens of computers since I was very young -- media centers, gaming computers, bitcoin mining computers, even one watercooled computer. </li></ul>',
            images: ['images/small_hung_up.jpg','images/small_on_table.jpg','images/small_parachord.jpg']

        },
        {
            title: 'Free Time Coding',
            dates: 'September 2013 - Future',
            description: '<ul><li>While employed at Lyris, I was also learning to code in my free time. I have used <a class="inline-plz" href="https://www.coursera.org/">Coursera</a>, <a class="inline-plz" href="http://www.codecademy.com/">Code Academy</a> and <a class="inline-plz" href="https://www.codeschool.com/">Code School</a> to learn a wide variety of topics from Javascript to Ruby on Rails to Git. I took a coursera course on Ruby on Rails from the University of New Mexico and earned a <a class="inline-plz" href="https://www.coursera.org/account/accomplishments/certificate/7C3P4MSZZJ">verified certificate</a> with distinction. I completed the entire <a class="inline-plz" href="http://www.codecademy.com/en/tracks/php">PHP path</a> on Code Academy, and several entire <a class="inline-plz" href="https://www.codeschool.com/paths">paths on Code School</a> including <a class="inline-plz" href="https://www.codeschool.com/paths/html-css">HTML & CSS</a>, <a class="inline-plz" href="https://www.codeschool.com/paths/javascript">Javascript</a>, <a class="inline-plz" href="https://www.codeschool.com/paths/git">Git</a>, and <a class="inline-plz" href="https://www.codeschool.com/paths/electives">Electives</a>. I\'ve mastered four paths on Code School, with 29 courses and over  <a class="inline-plz" href="https://www.codeschool.com/users/juliusakula">1400 code challenges completed</a>.</li></ul>',
            images: ['https://d1tijy5l7mg5kk.cloudfront.net/assets/paths/badge-html-css-2bcd13b6f0e8092b6e4136a448ea3244.svg','https://d1tijy5l7mg5kk.cloudfront.net/assets/paths/badge-javascript-6d3dadcfccd99554cff7af219749573e.svg', 'https://d1tijy5l7mg5kk.cloudfront.net/assets/paths/badge-git-e1fad31eec7e3bd5ede23600b3e29808.svg', 'https://d1tijy5l7mg5kk.cloudfront.net/assets/paths/badge-electives-027e9b36116e380db027b189555dfb0d.svg']

        }//TODO: add github projects from udacity.
         //TODO: github game project add level counter. upon death, don't display alert but instead make player blink and reappear at starting location.
    ],
    display: function(){
        var formattedProjectStart = HTMLprojectStart,
            array = [];

        $.each(this.projects, function(key, val){
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', val.title),
                formattedProjectDates = HTMLprojectDates.replace('%data%', val.dates),
                formattedProjectDescription = HTMLprojectDescription.replace('%data%', val.description),
                formattedProjectImages = '';
            $.each(val.images, function(_key, _val){
                if(val.title!=='Free Time Coding')
                    formattedProjectImages += HTMLprojectImage.replace('%data%', val.images[_key]);
                else
                    formattedProjectImages += '<div class="icon-img">' + HTMLprojectImage.replace('%data%', val.images[_key]) + '</div>';
            });

            array[key] =  formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages;
        });

        $.each(array, function(key, val){
            $("#projects").append(formattedProjectStart.replace('%data%', array[key]));
        });
        var numProjs = $('.project-entry').length;
        console.log('There are now ' + numProjs + ' projects listed.');
        //$(".project-entry").css({'box-sizing':'border-box',width: 1/numProjs*100+'%',float: 'left'});
        //console.log('There css: ' + $(".project-entry").css('width') + ' "width".');

    }
};
var education = {
    schools: [
        {
            name: 'Berkeley City College',
            location: 'Berkeley, CA, USA',
            degree: 'General Education',
            majors: ['--'],
            dates: 'August 2013 - December 2013',
            url: 'http://web.peralta.edu/blog/category/berkeley-city-college/'
        },
        {
            name: 'Murray State University',
            location: 'Murray, KY, USA',
            degree: 'General Education',
            majors: ['--'],
            dates: 'January 2013 - June 2013',
            url: 'http://http://www.murraystate.edu/'
        }
    ],
    onlineCourses: [
        {
            title: 'Web Application Architecture',
            school: 'University of New Mexico',
            date: 'September 2014',
            url: 'https://www.coursera.org/account/accomplishments/records/dZVr8KxqgpTbzaF5'
        },
        {
            title: 'Courses Completed',
            school: 'Code School',
            date: '2014 - Present',
            url: 'https://www.codeschool.com/users/juliusakula'
        }
    ],
    display: function(){
        var formattedSchoolStart = HTMLschoolStart,
            formattedOnlineClassesStart = HTMLonlineClasses,
            schoolArray = [],
            onlineArray = [];

        $.each(this.schools, function(key, val){
            var formattedSchoolName = HTMLschoolName.replace('#', val.url).replace('%data%', val.name),
                formattedSchoolDegree = HTMLschoolDegree.replace('%data%', val.degree),
                formattedSchoolDates = HTMLschoolDates.replace('%data%', val.dates),
                formattedSchoolLocation = HTMLschoolLocation.replace('%data%', val.location);
            formattedMajors = "";
            $.each(val.majors, function(_key, _val){
                formattedMajors += HTMLschoolMajor.replace('%data%', val.majors[_key]);
            });
            schoolArray[key] =  formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedMajors;
        });

        $.each(schoolArray, function(key, val){
            $("#education").append(formattedSchoolStart.replace('%data%', schoolArray[key]));
        });

        $.each(this.onlineCourses, function(key, val){
            var formattedOnlineCoursesTitle = HTMLonlineTitle.replace('#', val.url).replace('%data%', val.title),
                formattedOnlineCoursesSchool = HTMLonlineSchool.replace('%data%', val.school),
                formattedOnlineCoursesDate = HTMLonlineDates.replace('%data%', val.date),
                formattedOnlineCoursesUrl = HTMLonlineURL.replace('#"', val.url + "\" style=\"display:none;\"").replace('%data%', val.url);
            onlineArray[key] =  formattedOnlineCoursesTitle + formattedOnlineCoursesSchool + formattedOnlineCoursesDate + formattedOnlineCoursesUrl;
        });
        $('#education').append('<br>' +HTMLonlineClasses);
        $.each(onlineArray, function(key, val){
            $("#education").append(HTMLschoolStart.replace('%data%', onlineArray[key]));
        });

    }
};
var summary = {
    paragraphs: [
        "<li>I am a self-taught programmer with a passion for web development. If you are looking for someone who genuinely enjoys programming, here I am. I learn very quickly. My top skills are AngularJS, PHP, and MYSQL. I love open ended tasks where I can make decisions as to how to best complete the task in a scalable way. I also enjoy well defined tasks, which also sometimes force me to learn something new. When I learn something new, I obsess on the broader-level topic; I try to understand not only how to use a tool or technology, but what problem that tool or technology is trying to solve -- and why.</li>",
        "<li>When I first learned programming, I learned Java, and I learned it through the lens of Object Oriented Programming. With this as my foundation, I taught myself PHP for work-related tasks. Around that time, I took an online coursera class on Ruby on Rails, and completed it with a grade of 98%. After that course, I never used Rails in practice but in that class I learned how the whole web stack works, which proved very valuable during my transition from back-end to full-stack engineer. Ruby is an excellent language, and no-matter what language I program in, I write as many Rubyisms as possible I try Ruby code. I'm highly productive at writing Javascript code, I know my tools.</li>",
        "<li>I have more than a year of Experience in programming using all technologies to put together a web application. I code in my free time and have some <a href='#onlineClasses' class='inline-plz'>certifications</a>.</li>",
        "<br>"],
    display: function(){
        $("#summary").append("<div class='work-entry'><ul></ul></div>");
        $.each(this.paragraphs, function(key, val){
            $("#summary ul").append(val);
        });
    }
};

bio.display();
summary.display();
work.display();
projects.display();
education.display();