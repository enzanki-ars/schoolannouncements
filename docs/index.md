---
layout: default
---

# Documentation

<div class="alert alert-warning" role="alert">
  <strong>Warning! </strong> Before diving into a contribution, make sure you check this site's 
  <a href="{{ site.github.issues_url }}">issues</a> and <a href="{{ site.github.repository_url }}/pulls">pull requests</a>
  incase someone else already submitted a change.
</div>

<div class="alert alert-warning" role="alert">
  <strong>Warning! </strong> In the next couple of days, this will get easier! There will soon be a submition form where people can submit new items very quickly.  
</div>

<div class="alert alert-info" role="alert">
  <strong>Overwhelmed? </strong> Don't worry! Just click <a href="{{ site.github.issues_url }}">here</a>
  and create a new issue documenting exactly what you would like included on the site. 
  We can take care of the rest!
</div>

## Usage/Editing

Editing a site like this is a little different than most people would expect.
Instead of manually going through the code and finding the various items that 
need to be changed, you simply have to look at the files in the `_data` 
directory. The rest of this page provides examples representing every possible 
field that can be used in the file. In the examples below, many of these fields 
are optional. If you do not require that field, just skip adding that line.

Look at the existing files in [this project's repository code]({{ site.github.repository_url }}) 
for some examples. 

**Some important notes:** 

* `.yml` files can be a little annoying at times. Indentation can _only_ be done 
using spaces. 

* While not required, when a line is longer than 80 characters, 
usually used in descriptions, consider using the `>` character as shown below.
This helps everybody so they do not have to scroll left and right to read the 
data file.

```yml
description: >
  Really long text goes here...
  It can even span multiple lines!

  If you need a separate paragraph, separate them with a blank line.
```

* Anything that starts with a dash (`-`) can be repeated over and over and over...
It is a list, where each item start with that dash.

* In some cases, you might see text like `[...]`. This represents an array. 
In a yml list, each item is separated with a comma. 
Example: `["Something", "Something Else", "Unknown something"]`

* All description like fields accept 
[markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/).
Markdown includes features such as bold, italics, lists, and more. Feel free to 
use any markdown you wish.

* `date:` should be input in the form `YEAR-MONTH-DAY HOUR:MINUTESam/pm`. 
Example: `2016-07-21 1:00pm` 

* `color:` can be any color you wish to use for the background of the slide. 
You can use any [named colors](https://en.wikipedia.org/wiki/Web_colors#X11_color_names),
or you can use a [hex triplet](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet).


## Data Files

Shown in order of appearance in views.

### _data/other.yml

```yml
wordofthemonth: 
  color:
  word: 
  description: 
  winners: [...]
  next: 
  nextdescription: 
  
birthdays:
  color: LightPink
  belated: [...]
  today: [...]
  weekend: [...]
  breakname: ...
  break: [...]
```

### _announcements/year-month-day-title.md

`slidetime:` is use to extend the default time that the description slide 
is visible. By default, this time is 10 seconds.

`description:` is visible in all views, while `extendeddescription:` will not 
shown on the slideshow. 

```md
---
title: 
enabled: 
color: 
date: 
location: 
changes: 
description: 
extendeddescription: 
slidetime: 
picture: 
video: 
tweet: 
---
```

### _sports/year-month-day-sportsname.md

`slidetime:` is use to extend the default time that the description slide is 
visible. By default, this time is 10 seconds.

```md
---
name: 
enabled: 
color: 
date: 
location: 
tickets: 
status: 
description: 
slidetime: 
changes: 
result: 
score:
  - team: 
    points: 
awards: 
tweet: 
---
```

### _clubs/clubname.md

```md
---
name: 
enabled:
color:
meetingdates: 
nextdate: 
location: 
changes: 
description: 
website:
twitter:
facebook:
remind:
---
```
