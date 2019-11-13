# Invoice Generator
## A super basic script that generates an HTML invoice for the past five days at an hourly rate for 8 hours per day.

To use: Update your info in the HTML and JS files, then open the HTML file in a browser. Boom! 

I made this for myself and figured I'd share. It works best for clients where you have a consistent number of hours and duties and generating individual invoices is tedious and you don't need advanced functionality of a time management system.

Work descriptions can be hard-coded into the script.js file or you could store the descriptions in a JSON file and access them based on keys in the object. I might make this as a new feature in the future. Essentially the object could look like this:

```
{
    "meeting":"Development Team Call",
    "support":"Worked on support tickets",
    "dev":"Feature development and testing",
    "doc": "Documentation"
}

```
You will need to hard-set your hourly rate and can update the hours per day and week in the code as well.

I just save the file to PDF from the browser but you could also add functionality to export to PDF in the code. Might add that at some pont as well.

Any contributions super welcome. Feel free to create issues if you'd like to see me code them. I'll be going over how I coded this app in a future stream on [My Twitch Channel](http://twitch.tv/ceceliacreates).

As always, you can follow me on Twitter [@ceceliacreates](http://www.twitter.com/ceceliacreates).
