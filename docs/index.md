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

`.yml` files can be a little annoying at times. Indentation can _only_ be done 
using spaces. While not required, when a line is longer than 80 characters, 
usually used in descriptions, consider using the `>` character as shown below.
This helps everybody so they do not have to scroll left and right to read the 
data file.

```yml
description: >
  Really long text goes here...
  It can even span multiple lines!

  If you need a separate paragraph, separate them with a blank line.
```

Anything that starts with a dash (`-`) can be repeated over and over and over...
It is a list, where each item start with that dash.

In some cases, you might see text like `["Something", "Something Else", "Unknown something"]`.
This represents an array. Think of this like a list where each item is separated with 
a comma.

In one example you will notice something a little different... The championships 
start with an asterisk. All description like fields accept 
[markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/).
In markdown, the asterisk starts a list item. Feel free to use any markdown you wish.

## Data Files

### wordofthemonth.yml

```yml
wordofthemonth: Supercalifragilisticexpialidocious

pastwinners:
  - word: Inconceivable
    names: ["Vizzini", "Inigo Montoya"]
```

### birthdays.yml

```yml
belated: ["Thing One", "Thing Two"]
today: ["One Fish", "Two Fish", "Blue Fish", "Red Fish"]
future: ["Dr. Seuss"]
```

## Folder Based Data Files

The following files should be made in separate files within the `_data/` folder.

### Sports

#### sports/sportname.yml

```yml
name: Sportsball
pastchampionships: >
  * 2016 State Champions 
```

#### sports/sportname/gamedate-time.yml

```yml
date: 4/1/2016
time: 3:14 pm
location: Middle of Nowhere!
score:
  - team: Red
    points: 3.14159
  - team: Blue
    points: 1.61803
  - team: Hilliard Darby
    points: All of them!
result: Win
awards: If the sport has awards, list them here...
changes: >
  If the game is ever canceled or postponed, list the changes here and adjust 
  them above.
tickets: Purchese them at the end of the mobius strip.
```

### Clubs

#### clubs/clubname.yml

```yml
name: Announcements Maitinence Club (Not Real)
meetingdates: Every week day.
nextdate: Today
location: Anywhere
time: All day
description: >
  Help work on these announcements!
changes: List any meeting date/time/other changes here.
website: https://hcsd-dby.github.io
twitter: enzanki-ars
facebook: Facebook? Facebook? Don't talk about Facebook!
remind: Ummmmm.... I can't think of anything clever...
```

