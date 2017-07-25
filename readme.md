# Death Map NYC
This is the source code for [deathmapnyc.com](http://deathmapnyc.com), a map of deaths that occurred in New York City in 2015 and 2016. It's incomplete and imperfect. For some categories/data-sources there's data going as far back as 2006. Check the "Show All Years" button to see that.

### Data Sources

- [NYPD Complaint Data](https://data.cityofnewyork.us/Public-Safety/NYPD-Complaint-Data-Historic/qgea-i56i)
- [NYPD Motor Vehicle Collision Data](https://data.cityofnewyork.us/Public-Safety/NYPD-Motor-Vehicle-Collisions/h9gi-nx95)
- [The Guardian's "The Counted"](https://github.com/flother/thecounted)
- [OSHA Worker Fatalities](https://www.osha.gov/dep/fatcat/dep_fatcat.html)

You can see how the data was combined and used in the  [jupyter notebook](https://github.com/zischwartz/deathmapnyc/blob/master/data/processs.ipynb).

If you have suggestions of other data sources, please let me know by opening an [issue](https://github.com/zischwartz/deathmapnyc/issues/new).

### Notes
Rather than use clustering to show where lots of death occurred at the same location, this map shows each record but adjusts the locations slightly so they're visible.

### Development
To get started:

```bash
# clone it
git clone git@github.com:zischwartz/deathmapnyc.git && cd deathmapnyc
# install deps
npm install
# start development web server
npm start
```

If you have docker installed, you can easily run the [jupyter](http://jupyter.org/about.html) [notebook](https://github.com/zischwartz/deathmapnyc/blob/master/data/processs.ipynb) that collects and processes the data.

```bash
npm run jupyter
# follow instructions, copy and paste link into browser, and then click process.ipynb
```

### Limitations & Caveats
- The data is incomplete, there are many ways people die that aren't captured by any of the four data sources that were available.
- Some records contain multiple deaths, especially the OSHA and motor vehicle records. These still appear as one icon on the map.
- The data is messy, some deaths aren't displayed because there isn't enough information.
- The location data is particularly messy, and is often the result of geocoding an address in the jupyter notebook using google maps, which may or may not be accurate.
- OSHA records may in some cases be the address of the employer rather than the location of the accident.


### 2015 Version
This is my second attempt at this, the first version from 2015 is [here](http://zischwartz.github.io/deathmapnyc_old/dist/)[(source code)](https://github.com/zischwartz/deathmapnyc_old) but it may break your browser.
