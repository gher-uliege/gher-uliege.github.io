<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="../assets/css/academicons.css">
</head>

# Diva Workshop -- 27-30 January 2020

Short URL: [🔗 https://tinyurl.com/DIVA2020](https://tinyurl.com/DIVA2020)

## Links to the presentations

Romain Escudier: *In-situ data quality control and preprocessing challenge* [(pdf)]](https://dox.ulg.ac.be/index.php/s/tM1XaJDFKvGS4dd/download)         

Nadia Pinardi: *A non-linear quality control procedure for climatology estimation: ARGO data and Pacific Western Boundary current regions* [(ppt)](https://dox.ulg.ac.be/index.php/s/TtHUCaxqPClJMRs/download) [(pdf)](https://dox.ulg.ac.be/index.php/s/8Ttu6YLIXalgZyO/download)

Simona Simoncelli:
* *Consistency analysis of DIVAnd output with reference products* [(pdf)](https://dox.ulg.ac.be/index.php/s/c97ahMQrjFkljvB/download)
* *Multi Year Products and Ocean Monitoring Indicators: overview for products consistency analysis and new data products generation* [(pdf)](https://dox.ulg.ac.be/index.php/s/i8DmErGyb0L0fUL)

## General information

### Dates

<i class="fa fa-calendar-check-o" aria-hidden="true"></i> From Monday 27 January (1.30 PM) to Thursday 30 January (5 PM), 2020.      
The *Product Meeting* will take place on Thursday between 3 and 5 PM.

### Venue

📍 The 2020 edition will be hosted by the University of Bologna, Department of Physics and Astronomy, Viale Berti Pichat 6/2, 40127 Bologna, 2nd floor Classroom "Biomedica".
[🔗 How to reach us?](../assets/pdf/How-to-reach-us.pdf)

### Participants

Participants are expected to be partners of [SeaDataCloud](https://www.seadatanet.org/) or EMODnet [Chemistry](http://www.emodnet-chemistry.eu/), [Biology](http://www.emodnet-biology.eu/) or [Physics](https://www.emodnet-physics.eu/) lots. Other scientists or data managers may request an invitation by contacting the organisers.

### Registration

📧 The registration period is now closed and the accepted participants have been notified by email.

### Accommodations

<i class="fa fa-bed" aria-hidden="true"></i> Bologna is a very busy town and we recommend you book at the hotel before the end of 2019.       
[🔗 List of hotels](../assets/pdf/HOTELS-IN-BOLOGNA.pdf).

## Preliminary program

The workshop will be focused on [`DIVAnd`](https://github.com/gher-ulg/DIVAnd.jl) (n-dimensional interpolation).

### Monday (1/2 day)

📍 Meeting point: Department of Physics and Astronomy, Viale Berti Pichat 6/2, Bologna at 1:00 PM.      
🕒 Meeting start: 1.30 PM

The group will be split into 2 groups: *beginners* and *advanced* users.

* Checking of installations
* Beginners:
    * (Possibly continuation of checking of installation)
    * Introduction to Objective Analysis, Optimal Interpolation, and Variational Objective Analysis (Alexander Barth)
    * Basic Julia commands and major differences with MATLAB and Python (Alexander Barth)
* Advanced users:
    * Multi Year Products and Ocean Monitoring Indicators: an overview for products consistency analysis and new data products generation (Simona Simoncelli)
    * New data products: how to use `DIVAnd` to produce sliding decades and derived information (Charles Troupin)


### Tuesday
* Introduction to [Jupyter Notebooks](https://jupyter.org/) (Charles Troupin)
* Data import and data downloading (Charles Troupin)
* Preparation of topography (Alexander Barth)
* Estimate the noise-to-signal ratio (Jean-Marie Beckers)

🍽️ Social dinner

### Wednesday

* Definition of the background field (Charles Troupin)
* Parameter optimization: horizontal and vertical correlation lengths (Alexander Barth)
* Computation of the error field (Jean-Marie Beckers)
* Advection constraint: (Alexander Barth)

### Thursday

* In-situ data quality control and preprocessing challenge: an illustration for the CMEMS Mediterranean reanalysis at CMCC (Romain Escudier)
* From data integration to `DIVAnd`: how to harmonize the work-flow (Charles Troupin)
* Use of residuals to discard non-representative data in the climatology (Jean-Marie Beckers)
* Concluding remarks on consistency analysis of `DIVAnd` output with reference products (Simona Simoncelli)           
🕒 *Meeting closure:* 3 PM.

* Follow-up meeting for SeaDataCloud partners: WP11 meeting on the new products (SeaDataCloud partners)

## Preparation

### Computers

Participants will have with them a laptop with:
* 16 GB RAM memory and
* sufficient free disk space (approx. 50 GB).
* Data files necessary for the preparation of a climatology.

More computing resources might be necessary depending on the resolution and size of the studied domain.

You may also need to check the list of [acronyms and definitions](../acronyms.md).

### Workshop material

The notebooks are available in the folder `notebooks` in the [zip file](https://github.com/gher-ulg/Diva-Workshops/archive/master.zip).
Follow the instructions [here](https://github.com/gher-ulg/Diva-Workshops/tree/master/notebooks#how-to-download-ipynb-files-from-github) to download and open the notebook files.

### Installation

Please install the following software beforehand:

* [Julia](https://julialang.org/downloads/) language
* [IJulia](https://github.com/JuliaLang/IJulia.jl), the `Julia` kernel for Jupyter.
* [PyPlot](https://github.com/JuliaPy/PyPlot.jl), the interface to use matplotlib.pyplot.
* [OceanDataView](https://odv.awi.de/), to pre-process the data files.
* Follow the steps described here: [installation](../installation.md).

Please make sure to install all these software early enough before the workshop. If you have an issue, you can contact us by mail about 1 week before the workshop and we will try to help you via mail.

### Before the workshop...

✅ If you plan to use your own dataset, please verify that it has been quality-controlled.

✅ If your institution is part of [eduroam](https://www.eduroam.org/), be sure to have your credentials for the wifi connexion.

✅ Register at [Marine ID](https://www.marine-id.org/) and bring your username and password
(in order to access the *Virtual Research Environment*).
