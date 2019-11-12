The Diva workshop is intended for all kinds of users of the software (beginners, intermediate, or experts), especially the partners to the [Seadatanet2](http://www.seadatanet.org/) and [Emodnet](http://www.emodnet-chemistry.eu/portal/portal/) projects.

# Dates : 9-14 October 2015

The workshop will take place during 6 days (Friday-Wednesday), with one rest day during the weekend.
The participants are expected to arrive on Friday and leave on Wednesday.
The accommodation at STARESO before Friday and after Wednesday is not possible...

# Venue

The workshop will be held at [Stareso](http://www.stareso.ulg.ac.be/Stareso/Stareso.html/) research station, with rooms in the Revellata lighthouse and meetings in the station.

![image](https://user-images.githubusercontent.com/19711048/27429368-247363a2-5745-11e7-886a-244913a111eb.png)

## How to get there?

*  Plane: you need to flight into [Calvi's airport](http://www.calvi.aeroport.fr/AeroportCal/accueilAeroCal.php) (usually via Paris, Marseilles or Nice), unless you want to spent some hours driving around the island:
    * from Ajaccio (165 km, > 2h30)
    * or from Bastia (109 km, > 1h45)
Consider the travel times above and note that rental cars cannot be used in the last 3 km of the road to the Research Station. So try to arrive at [Calvi's airport](http://www.calvi.aeroport.fr/AeroportCal/accueilAeroCal.php).

*  Local train : There is a comfortable train connecting Ajaccio and Bastia to Calvi, if you like wonderful sceneries. We highly recommend the moutainous trip between Ajaccio and Calvi. Maps, timetables and prices : [cfc](http://cf-corse.fr/en/)

*  Ferry & TGV : Ferries to Corsica are operated by Corsica Ferries, SNCM and Moby Lines from France (Marseille, Nice, Toulon) and Italy (Savona, Livorno and Genova) to Ajaccio, Bastia and Calvi. Some connections are seasonal. Marseille and Nice are connected to the high speed train line with fast and direct connections from Paris and Brussels (hub to London, Amsterdam, Frankfurt). Timetables and prices : [B-Europe](https://www.b-europe.com/Travel). More info to avoid flying : [UK-to-Corsica](http://www.seat61.com/France.htm#London%20to%20Corsica%20by%20train%20and%20ferry).

## Logistics

* Transports from the Calvi airport to STARESO will be arranged according to the arrival of the participants.

Please provide us with your flight schedules (arrival/departure times at at/from Calvi as well as flight number).

* We cannot arrange car trips from Bastia to Calvi.

If you plan to rent a car, let us know so that we can arrange trips for other participants arriving at the same time.

* Let us know if you arrive earlier or leave later than the workshop dates.

## Accommodation

The participants will be housed at the station.
Bath towels and soap are provided in the rooms.
Meals are taken on place. Let us know in advance if you have any food preference.
Power sockets are [Type~F](http://en.wikipedia.org/wiki/AC_power_plugs_and_sockets#CEE_7.2F5_.28French.29), some of you may need adapters.

# Registration

Just send an email to Sylvain Watelet (swatelet@ulg.ac.be) with your intention to attend the workshop.

## Important

Since the number of participants who can attend the workshop is limited, you are advised to wait for a confirmation before booking your flight tickets.
Later on we will ask you details concerning your flight schedules, in order to organize transportation from the airport to the workshop venue.
Preference will be given to researchers so as to ensure a presence of Emodnet and SeaDataNet partners.

## Costs

Participants have to organize their travel and cover their travel expenses.
Local accommodation (lodging and food) must be paid on place (approximatively 425€ per person for the five nights; cost of drinks are to be added based on consumption).

# 2013 Program

The 2013 program is given as an example. The final program will be confirmed before the workshop and depends on the level and needs of each participants.

## Monday

* Arrival of participants, checking of hardware, compilers and libraries to be installed (see list of things to be installed).
* Installation and compilation of the latest stable version of the code. Basic test of the installation for 2D, choice of solver depending on hardware (parallel, serial, iterative)
* Registration to the Diva user group.

## Tuesday

* General presentation of the workshop: historic, participants, organization.
* Presentation of Diva software (formulation, advantages, implementation).
* Tests with a common data set in 2D (influence of analysis parameters and error field calculation).
* Extraction of topography and creation of contours from topography.
* Test with user's data set (2D).

## Wednesday

* Presentation of GODIVA (Diva with loops on time and depth levels).
* Test case with a common data set: role of the parameters in the driver file.
* Extraction of data from ODV spreadsheets.
* Application with user data.

## Thursday

* Presentation: recent developments and future improvements of Diva.
* Application with user data (continued).
* Advanced analysis (for expert users): advection, source/decay, multivariate analysis, data transformation, correlated observational errors
* Presentation of the results by the participants.

## Friday

* User specific questions.
* Feedback questionnaire.
* Departure of participants.

# Requirements

Prior to the workshop, the participants are advised to perform a few [installations](http://modb.oce.ulg.ac.be/mediawiki/index.php/Diva_installation) of software and to prepare their own data files.

## Software

1. Compilation and execution: [cygwin](http://www.cygwin.com/) (if windows machine), a Fortran compiler (gfortran, ifort, …) and the netcdf library compiled with the same Fortran compiler that will be used for Diva.
2. Visualization of results: gnuplot, [ncview](http://meteora.ucsd.edu/~pierce/ncview_home_page.html), [ncbrowse](http://www.epic.noaa.gov/java/ncBrowse/) or any other plotting software that can read NetCDF format.
3. Processing of results and advanced plotting: [python](http://www.python.org/), [octave](http://www.gnu.org/software/octave/) or [matlab](http://www.mathworks.es/products/matlab/), and the NetCDF toolbox.
4. Check the page dedicated to the [plotting tools](http://modb.oce.ulg.ac.be/mediawiki/index.php/DIVA#Plotting_tools).

## Data files

1. One or several data files in [ODV](http://odv.awi.de/) format (spreadsheet). The file may contain several variables if desired.
2. A topography for you area of interest (you can extract one via [Diva on Web](http://ec.oceanbrowser.net/emodnet/diva.html); just upload a data set and specify as output grid the grid you want for topography later)

# Group picture

![image](https://user-images.githubusercontent.com/19711048/27435457-989e12e2-575c-11e7-86a1-3c8429bb2f9f.png)

# Presentations

*  General information for participants: [DivaWorkshop2015_general.pdf](http://orbi.ulg.ac.be/retrieve/318443/355912/DivaWorkshop2015_general.pdf)
*  Installation: [DivaWorkshop2015_installation.pdf](http://orbi.ulg.ac.be/retrieve/318446/355912/DivaWorkshop2015_installation.pdf)
*  Diva in 2 dimensions: [DivaWorkshop2015_diva2D.pdf](http://orbi.ulg.ac.be/retrieve/318444/355912/DivaWorkshop2015_diva2D.pdf)
*  Diva in 4 dimensions: [DivaWorkshop2015_diva4D.pdf](http://orbi.ulg.ac.be/retrieve/318445/355912/DivaWorkshop2015_diva4D.pdf)
*  New developments: [DivaWorkshop2015_highlights.pdf](http://orbi.ulg.ac.be/retrieve/318447/355912/DivaWorkshop2015_highlights.pdf)

The User Guide can be downloaded from [github](https://github.com/gher-ulg/Diva-User-Guide/raw/master/DivaUserGuide.pdf).
