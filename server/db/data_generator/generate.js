// Goal: 10,000,000 records
// Use faker, Lorem Ipsum or Lorem Flickr

/*
/reviews/:id - GET : User gets all reviews for an item based on an id 
/reviews/ - POST : User fills out a form with the following data pertaining to item id: product rating, review title, review text, photos, videos, recommend, nickname, email, fit, did they read reviews, where did they buy, feedback for seller, and a checkbox for accepting privacy policy.  The data in bold is required on REI website.

Review Schema
Rating (int, 1-5) Not null
Title (str) Not null
Text (str) Not null
Recommend (boolean) not null
Fit (num, 0-5) Not null
itemID (num) Not null
helpful (num) Default 0
notHelpful (num) Default 0
flag (boolean) ?
Name (str) Not null

sampleItems = [
  {
    itemId,
    companyName,
    productName
  }
]
*/