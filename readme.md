# Death Map NYC
This is the source code for [deathmapnyc.com](http://deathmapnyc.com).


### Limitations & Caveats
- The data is incomplete, there are many ways people die that aren't captured by any of the four data sources that were available.
- Some records contain multiple deaths, especially the OSHA and motor vehicle records. These still appear as one icon on the map.
- The data is messy, some deaths aren't displayed because there isn't enough information.
- The location data is particularly messy, and is often the result of geocoding an address in the jupyter notebook using google maps, which may or may not be accurate.
- OSHA records may in some cases be the address of the employer rather than the location of the accident.


### 2015 Version
This is my second attempt at this, the first version from 2015 is [here](http://zischwartz.github.io/deathmapnyc_old/dist/)[(source code)](https://github.com/zischwartz/deathmapnyc_old) but it may break your browser.
