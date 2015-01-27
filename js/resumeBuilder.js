var bio = {
    name: "Justin Murdock",
    role: "Junior Web Developer",
    contacts: {
        mobile: "1-555-123-5555",
        email: "jmurdock-spamudacity@im.uptilt.com",
        github: "https://github.com/juliusakula",
        twitter: "https://twitter.com/JuicetinMurdock",
        location: "Berkeley, CA"
    },
    welcomeMessage: "Welcome to my Interactive Resume!",
    skills: ["Javascript", "Grunt", "PHP / HTML / CSS", "MySQL", "Node.js", "Angular.js"],
    biopic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw01USki2nz8a3B2te3R8VgKuPUNarqlV2c3w9GwrLBw7WDyGTZA',
    display: function(){
        var formattedName = HTMLheaderName.replace("%data%", this.name),
            formattedContactMe = "",
            formattedRole = HTMLheaderRole.replace("%data%", this.role),
            formattedBioPic = HTMLbioPic.replace('%data%', this.biopic),
            formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', this.welcomeMessage),
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
    }
}
var work = {
    jobs: [
        {
            employer: 'Lyris, Inc',
            title: 'Junior Web Developer',
            location: 'Emeryville, CA',
            dates: 'October 2013 - Present',
            description: 'Working on everything from QA to Engineering to Professional Services, learning at an incredible pace.'
        },
        {
            employer: 'Ponderosa Farms, Inc',
            title: 'Farmhand',
            location: 'Murray, KY',
            dates: 'March 2007 - August 2013',
            description: 'Helping wherever I could on the family farm'
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
            dates: '11-01-2013',
            description: 'Made some computers to mine bitcoin, it worked out very nicely.',
            images: ['http://i.dailymail.co.uk/i/pix/2013/04/16/article-2309673-19531071000005DC-123_638x331.jpg']
            
        }
    ],
    display: function(){
        var formattedProjectStart = HTMLprojectStart,
            array = [];
            
        $.each(this.projects, function(key, val){
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', val.title),
                formattedProjectDates = HTMLprojectDates.replace('%data%', val.dates),
                formattedProjectDescription = HTMLprojectDescription.replace('%data%', val.description),
                formattedProjectImage = HTMLprojectImage.replace('%data%', val.images);
            
            array[key] =  formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;
        });
        
        $.each(array, function(key, val){
            $("#projects").append(formattedProjectStart.replace('%data%', array[key]));
        });
    }
};
var education = {
    schools: [
    {
        name: 'Berkeley City College',
        location: 'Berkeley, CA',
        degree: 'General Education',
        majors: ['Transfer Requirements'],
        dates: 'August 2013 - December 2013',
        url: 'http://web.peralta.edu/blog/category/berkeley-city-college/'
    }
    ],
    onlineCourses: [
        {
            title: 'Web Application Architecture',
            school: 'University of New Mexico',
            date: '11-03-2014',
            url: 'https://www.coursera.org/account/accomplishments/records/dZVr8KxqgpTbzaF5'
        }
    ],
    display: function(){
        var formattedSchoolStart = HTMLschoolStart,
            formattedOnlineClassesStart = HTMLonlineClasses,        
            schoolArray = [],
            onlineArray = [];
            
        $.each(this.schools, function(key, val){
            var formattedSchoolName = HTMLschoolName.replace('%data%', val.name),
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
            var formattedOnlineCoursesTitle = HTMLonlineTitle.replace('%data%', val.title),
                formattedOnlineCoursesSchool = HTMLonlineSchool.replace('%data%', val.school),
                formattedOnlineCoursesDate = HTMLonlineDates.replace('%data%', val.date),
                formattedOnlineCoursesUrl = HTMLonlineURL.replace('%data%', val.url);
            onlineArray[key] =  formattedOnlineCoursesTitle + formattedOnlineCoursesSchool + formattedOnlineCoursesDate + formattedOnlineCoursesUrl;
        });
        $('#education').append(HTMLonlineClasses);
        $.each(onlineArray, function(key, val){
            $("#education").append(HTMLschoolStart.replace('%data%', onlineArray[key]));
        });
        
    }
};

bio.display();
work.display();
projects.display();
education.display();