/*
Dict contains all potential results a person can score. update w correct axiums and zips accordingly
*/
// order of axioms: [pwt, ee, si, pb, h]
/*
  NEW object template (more info on doc)
  {
    "name": "", 
    "image":"", 
    "text":"", 
    "links": {
      "website title":"website url",
      "website title2":"website url2"
    }, 
    "zip": "", 
    "axioms":[pwt, ee, si, pb, h]
    "election":""
  },
  
  note: the old candidate objects had avgAxis:number instead of axioms:[] and website:"url" instead of "links":{}
*/
candidateResults = [
  // zip:00000 (testing)
  {
    "name": "Joe Biden", 
    "image":"https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg", 
    "text":"Joseph Robinette Biden Jr. (born November 20, 1942) is an American politician who is the 46th and current president of the United States. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under Barack Obama and represented Delaware in the United States Senate from 1973 to 2009. (via wikipedia)", 
    "website": "https://joebiden.com/presidency-for-all-americans/", 
    "zip": ["00000"], 
    "avgAxis": "-2", //will be replaced with "axioms":[pwt, ee, si, pb, h]
    "election":"2016 Presidential Race"
  },
  {"name": "Hillary Clinton", "image":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Hillary_Clinton_by_Gage_Skidmore_4_%28cropped%29.jpg", "text":"Hillary Diane Rodham Clinton (born October 26, 1947) is an American politician, diplomat, lawyer, writer, and public speaker who served as the 67th United States Secretary of State from 2009 to 2013, as a United States Senator from New York from 2001 to 2009, and as first lady of the United States from 1993 to 2001, as the wife of President Bill Clinton. (via wikipedia)", "website": "https://www.hillaryclinton.com/", "zip": "00000", "avgAxis": "-1.9", "election":"2016 Presidential Race"},
  {"name": "Bernie Sanders", "image":"https://cdn.britannica.com/51/132851-050-D6CA13B6/Bernie-Sanders-2007.jpg", "text":"Bernard Sanders (born September 8, 1941) is an American politician and activist who has served as the junior United States senator from Vermont since 2007 and as U.S. Representative for the state's at-large congressional district from 1991 to 2007. (via wikipedia)", "website": "https://berniesanders.com/", "zip": "00000", "avgAxis": "-7.2", "election":"2016 Presidential Race"},
  {"name": "Donald Trump", "image":"https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg", "text":"Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021. (via wikipedia)", "website": "https://www.donaldjtrump.com/", "zip": "00000", "avgAxis": "8.9", "election":"election text goes here.", "election":"2016 Presidential Race"},
  {"name": "Mitt Romney", "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Mitt_Romney_official_US_Senate_portrait.jpg/1200px-Mitt_Romney_official_US_Senate_portrait.jpg", "text":"Willard Mitt Romney (born March 12, 1947) is an American politician and businessman who has served as the junior United States senator from Utah since January 2019, succeeding Orrin Hatch.  (via wikipedia)", "website": "https://www.romney.senate.gov/", "zip": "00000", "avgAxis": "2.5", "election":"2012 Presidential Race"},
  {"name": "Ron DeSantis", "image":"https://upload.wikimedia.org/wikipedia/commons/b/b3/Ron_DeSantis_2020_%28cropped%29.jpg", "text":"Ron DeSantis (Republican Party) is the 46th governor of Florida. He assumed office on January 8, 2019. His current term ends on January 3, 2023. (via wikipedia)", "website": "https://www.flgov.com/", "zip": "00000", "avgAxis": "5.3", "election":"2018 Governor of Florida Race"},

// zip:San Jose (san jose mayoral election)
{
  "name": "Matt Mahan", "image":"https://sanjosespotlight.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/01/19202039/mm-4.jpg", "text":"Matt Mahan ran for city council in 2020 because he knew it was time to give local government a “wake-up call.” Between a crisis of homelessness, crime, dirty streets and dysfunctional government, Matt knows we deserve better – and we can do better.", 
  "links": { "Campaign Website":"https://mahanforsanjose.com/about/" }, "zip": ["San Jose"], "axioms":[3, 0, 2, 7, 3], "election":"2022 San Jose Mayoral Race" 
},

{
  "name": "Cindy Chavez", "image":"https://santaclaralafco.org/sites/default/files/headshots/lafco_headshot_c_chavez.png", "text":"Cindy Chavez is a lifelong resident of San Jose. Her father was a carpenter and her mother worked as a teacher's aide, spending much of her free time volunteering in the community. Cindy attended San Jose State University, where her love of politics and commitment to community led her to a career in public service.", 
  "links": {"Campaign Website":"http://cindychavezformayor.com",}, "zip": ["San Jose"], "axioms":[-2,-1,-1, 5, -3],"election":"2022 San Jose Mayoral Race"
},

{
  "name": "Devora “Dev” Davis", "image":"https://images.squarespace-cdn.com/content/v1/5c9e979f8dfc8c337212615f/1564006040882-B7YN091BZW0ASYSQAB00/cm%2Bdavis%2Bheadshot%2Bhi%2Bres.jpg?format=500w", "text":"Councilmember Dev Davis represents District 6 in San José. Before being elected in 2016, Councilmember Davis spent 12 years as an education researcher for Stanford University's Center for Research on Education Outcomes (CREDO). With a strong interest in community organizing, she served as a Chair of the City of San José's Early Care and Education Committee, a delegate to the Junior League of California’s State Public Affairs Committee, President of the North Willow Glen Neighborhood Association, and Public Relations Chair for the Sherman Oaks Neighborhood Playground Committee. Dev has a bachelor's degree in Economics and master's degrees in Public Policy and Education Policy, Organization & Leadership from Stanford University. ", 
  "links": {"website title":"https://devdavis.com/" }, "zip": ["San Jose"], "axioms":[-3, -2, 1, 5, 7],"election":"2022 San Jose Mayoral Race"
},

{
  "name": "Jonathan Royce Esteban", "image":"https://sanjosespotlight.s3.us-east-2.amazonaws.com/wp-content/uploads/2021/06/23175338/Esteban-2022-Democrat-e1624578809796.png", "text":"As Mayor of San Jose, Esteban promises to improve city employee experiences, enhance city beautification, and fight for equitable wages for working people in the city. Esteban will be a mayor that puts working families and small businesses first. A champion of the ambitious progressive agenda “the Green New Deal for San Jose,” Esteban seeks to rapidly increasing urban housing developments, generate more tax revenue for city services with a slate of green infrastructure jobs, adequately staff up our emergency agencies, and demand healthcare for all.", 
  "links": {"website title":"https://vote4esteban.com/",}, "zip": ["San Jose"], "axioms":[-7, -8, -5, -4, -7],"election":"2022 San Jose Mayoral Race"
},

{
  "name": "Raul Peralez", "image":"https://i0.wp.com/sjd3.com/wp-content/uploads/2021/03/Raul-Peralez-Headshot-.jpg?resize=223%2C257&ssl=1", "text":"As Mayor, Raul will set a course for San Jose that creates comprehensive solutions to address our homeless crisis; build housing that is affordable to working families who call San Jose their home; work with the police and our entire criminal justice system to eradicate systemic racism and keep our communities safe, goals that should and can work hand in hand; continue his work to help our struggling small businesses get back on their feet; bring businesses of all sizes to the table as real partners committed to creating a San Jose that is economically thriving and resilient; and building back up a connected, affordable, dependable public transportation network.", 
  "links": { "Campaign Website":"https://www.raulperalez.com/", "Ballotpedia":"https://ballotpedia.org/Raul_Peralez"}, "zip": ["San Jose"], "axioms":[-6, -3, -6, -2, -3], "election":"2022 San Jose Mayoral Race"
},




]
