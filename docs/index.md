---
layout: default
---

# Documentation

## Usage/Editing

Editing a site like this is a little different than most people would expect.
Instead of manually going through the code and finding the various items that 
need to be changed, you simply have to look at the files in the `_data` 
directory. The rest of this page provides examples representing every possible 
field that can be used in the file. In the examples below, many of these fields 
are optional. If you do not require that field, just skip adding that line.

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

* In some cases, you might see text like `[...]`.
This represents an array. Think of this like a list where each item is separated with 
a comma. Example: `["Something", "Something Else", "Unknown something"]`

* All description like fields accept 
[markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/).
In markdown, the asterisk starts a list item. Feel free to use any markdown you wish.

## Data Files

Shown in order of appearance in views.

### _data/other.yml

```yml
wordofthemonth: 
pastwordofthemonthwinners:
  - word: 
    names: [...]

birthdays:
  belated: [...]
  today: [...]
  weekend: [...]
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

### _sports/date-sportsname.md

`slidetime:` is use to extend the default time that the description slide 
is visible. By default, this time is 10 seconds.

```md
---
name: 
enabled: 
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
