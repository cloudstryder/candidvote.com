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
  }
  
  note: the old candidate objects had avgAxis:number instead of axioms:[] and website:"url" instead of "links":{}
*/
candidateResults = [
  {
    "name": "Joe Biden", 
    "image":"https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg", 
    "text":"Joseph Robinette Biden Jr. (born November 20, 1942) is an American politician who is the 46th and current president of the United States. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under Barack Obama and represented Delaware in the United States Senate from 1973 to 2009. (via wikipedia)", 
    "website": "https://joebiden.com/presidency-for-all-americans/", 
    "zip": "00000", 
    "avgAxis": "-2", //will be replaced with "axioms":[pwt, ee, si, pb, h]
    "election":"2016 Presidential Race"
  },
  {"name": "Hillary Clinton", "image":"https://upload.wikimedia.org/wikipedia/commons/e/ec/Hillary_Clinton_by_Gage_Skidmore_4_%28cropped%29.jpg", "text":"Hillary Diane Rodham Clinton (born October 26, 1947) is an American politician, diplomat, lawyer, writer, and public speaker who served as the 67th United States Secretary of State from 2009 to 2013, as a United States Senator from New York from 2001 to 2009, and as first lady of the United States from 1993 to 2001, as the wife of President Bill Clinton. (via wikipedia)", "website": "https://www.hillaryclinton.com/", "zip": "00000", "avgAxis": "-1.9", "election":"2016 Presidential Race"},
  {"name": "Bernie Sanders", "image":"https://cdn.britannica.com/51/132851-050-D6CA13B6/Bernie-Sanders-2007.jpg", "text":"Bernard Sanders (born September 8, 1941) is an American politician and activist who has served as the junior United States senator from Vermont since 2007 and as U.S. Representative for the state's at-large congressional district from 1991 to 2007. (via wikipedia)", "website": "https://berniesanders.com/", "zip": "00000", "avgAxis": "-7.2", "election":"2016 Presidential Race"},
  {"name": "Donald Trump", "image":"https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg", "text":"Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021. (via wikipedia)", "website": "https://www.donaldjtrump.com/", "zip": "00000", "avgAxis": "8.9", "election":"election text goes here.", "election":"2016 Presidential Race"},
  {"name": "Mitt Romney", "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Mitt_Romney_official_US_Senate_portrait.jpg/1200px-Mitt_Romney_official_US_Senate_portrait.jpg", "text":"Willard Mitt Romney (born March 12, 1947) is an American politician and businessman who has served as the junior United States senator from Utah since January 2019, succeeding Orrin Hatch.  (via wikipedia)", "website": "https://www.romney.senate.gov/", "zip": "00000", "avgAxis": "2.5", "election":"2012 Presidential Race"},
  {"name": "Ron DeSantis", "image":"https://upload.wikimedia.org/wikipedia/commons/b/b3/Ron_DeSantis_2020_%28cropped%29.jpg", "text":"Ron DeSantis (Republican Party) is the 46th governor of Florida. He assumed office on January 8, 2019. His current term ends on January 3, 2023. (via wikipedia)", "website": "https://www.flgov.com/", "zip": "00000", "avgAxis": "5.3", "election":"2018 Governor of Florida Race"}

]
