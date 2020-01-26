<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="../assets/css/academicons.css">
</head>

# Diva Workshop -- 27-30 January 2020

## General information

### Dates

<i class="fa fa-calendar-check-o" aria-hidden="true"></i> From Monday 27 January (1.30 PM) to Thursday 30 January (5 PM), 2020.
The Product Meeting will take place on Thursday between 3 and 5 PM.

### Venue

📍 The 2020 edition will be hosted by the University of Bologna, Department of Physics and Astronomy, Viale Berti Pichat 6/2, 40127 Bologna, 2nd floor Classroom "Biomedica".
[🔗 How to reach us?](../assets/pdf/How-to-reach-us.pdf)

### Participants

Participants are expected to be partners of [SeaDataCloud](https://www.seadatanet.org/) or EMODnet [Chemistry](http://www.emodnet-chemistry.eu/), [Biology](http://www.emodnet-biology.eu/) or [Physics](https://www.emodnet-physics.eu/) lots. Other scientists or data managers may request an invitation by contacting the organisers.

Priority will be given to those partners responsible for the Product preparation.

### Registration

📧 The registration period is now closed.
Registered participants will soon receive a confirmation email.

### Accommodations

<i class="fa fa-bed" aria-hidden="true"></i> Bologna is a very busy town and we recommend you book at the jotel before the end of 2019.
[🔗 List of hotels](../assets/pdf/HOTELS-IN-BOLOGNA.pdf).

## Preliminary program

The workshop will be focused on `DIVAnd` (n-dimensional interpolation).

### Monday (1/2 day)

📍 Meeting point: Department of Physics and Astronomy, Viale Berti Pichat 6/2, Bologna at 1:00 PM.
🕒 Meeting start: 1.30 PM

Checking of installations
Theory: introduction to variational analysis
Objective Analysis, Optimal Interpolation, and Variational Objective Analysis

### Tuesday

Ocean reanalysis
Data products consistency analysis
New data products: how to better use `DIVAnd` (sliding decades)
Ocean Monitoring Indicators, coastal high resolution maps
Introduction to jupyter-notebook and basic `Julia` commands and major differences with `MATLAB` and `Python`
Data reading
Preparation of topography
How to define the background field
Parameter optimization: horizontal and vertical correlation lengths, noise-to-signal ratio

🍽️ Social dinner

### Wednesday

Computation of error field
Add advection constraint (afternoon)

### Thursday

Wrap-up with future development ideas:
* From data integration to `DIVAnd`: how to harmonize the workflow
* Use of residuals to discard non-representative data in the climatology
* Consistency analysis of `DIVAnd` output with reference products

Afternoon (finish at 3PM), parallel session:
SeaDataCloud Product Meeting
🕒 *Meeting closure:* 3 PM.

## Preparation

### Computers

Participants will have with them a laptop with:
* 16 GB RAM memory and
* sufficient free disk space (approx. 50 GB).
* Data files necessary for the preparation of a climatology.

More resources might be necessary depending on the resolution and size of the studied domain.

You may also need to check the list of [acronyms and definitions](../acronyms.md).

### Workshop material

The notebooks are availabe in the folder `notebooks` in the [zip file](https://github.com/gher-ulg/Diva-Workshops/archive/master.zip).
Follow the instructions [here](https://github.com/gher-ulg/Diva-Workshops/tree/master/notebooks#how-to-download-ipynb-files-from-github) to download and open the notebook files.

### Installation

Please install the following software beforehand:

* [Julia](https://julialang.org/downloads/) language
* [IJulia](https://github.com/JuliaLang/IJulia.jl), the `Julia` kernel for Jupyter.
* [OceanDataView](https://odv.awi.de/), to pre-process the data files.
* Follow the steps decribed here: [installation](../installation.md).

### Before the workshop...

✅ If you plan to use your own dataset, please verify that it has been quality controlled.
✅ If your institution is part of [eduroam](https://www.eduroam.org/), be sure to have your credentials for the wifi connexion.
✅ Register at [Marine ID](https://www.marine-id.org/) and bring your username and password.
