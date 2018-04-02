<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="../assets/css/academicons.css">
</head>

Since 2006, we organize workshops for the DIVA users, principally members of the region groups responsible for the climatology production in [SeaDataNet](https://www.seadatanet.org/). During these workshops, several experts are present to help newcomers and the latest developments are presented for advanced users. Generally, a wish-list from users is established at the end of the workshop and most of the changes
are implemented during the following weeks or months.

[Previous workshops](./Previous-workshops.md): information about the previous workshops (including presentations).

# Diva Workshop -- 2018

This page provides the relevant information about the Diva user workshops organised in the frame of H2020 [SeaDataCloud](https://www.seadatanet.org/) project. [`Diva`](https://github.com/gher-ulg/DIVA) and [`DIVAnd`](https://github.com/gher-ulg/divand.jl) are software tools implementing advanced techniques to generate gridded fields from in situ observations.

## General information

### Participants

Participants are expected to be partners of [SeaDataCloud](https://www.seadatanet.org/) or EMODnet [Chemistry](http://www.emodnet-chemistry.eu/) or [Biology](http://www.emodnet-biology.eu/) lots. Other scientists or data managers may request an invitation by contacting the organisers.     
Priority will be given to those partners responsible for the Product preparation.

### Registration

The registration is done by email: contact C. Troupin with copy to A. Barth.     
**Deadline:** 31st of January, 2018.

### Dates

<i class="fa fa-calendar-check-o" aria-hidden="true"></i> From Tuesday 3 April (1.30 PM) to Friday 6 April (3 PM), 2018.

### Venue

The 2018 edition will be hosted by the University of Liège, in the center of [Liège](http://www.liege.be/tourisme-en), Belgium.    
The meeting room is the **5/16** in the building **A2** (see [map](https://www.campus.uliege.be/cms/c_1771004/en/a2-faculte-de-philosophie-et-lettres)).

[How to get to Liège?](howtogetthere.md)

### Accommodations

<i class="fa fa-bed" aria-hidden="true"></i> Participants are invited to consult the following [list](http://labos.ulg.ac.be/gher/home/colloquium/colloquium-2018/venue/accommodation/).

## Preliminary program

The workshop will be focused on `DIVAnd` (n-dimensional interpolation), unlike the previous editions, which were dedicated to the 2D version (DIVA). A specific session will be dedicated to the 3rd SeaDataCloud *Product Meeting* on Friday afternoon.

<i class="fa fa-television" aria-hidden="true"></i> denote presentations     
<i class="fa fa-cog fa-spin"></i> denote exercises      
<i class="fa fa-comments" aria-hidden="true"></i> denote discussions     

### Tuesday

Meeting pointing: side entrance (place Cockerill) at 1.15 PM.     
Lectures start at 1.30 PM     
<i class="fa fa-television" aria-hidden="true"></i> What is a [jupyter-notebook](http://jupyter.org/)?                       
<i class="fa fa-television" aria-hidden="true"></i> <i class="fa fa-cog fa-spin"></i> Basic [Julia](https://julialang.org/) commands and major differences with MATLAB and Python     
<i class="fa fa-television" aria-hidden="true"></i>Introduction to variational analysis     

### Wednesday

<i class="fa fa-television" aria-hidden="true"></i> + <i class="fa fa-cog fa-spin"></i> Demo CINECA jupyterhub     
<i class="fa fa-cog fa-spin"></i> Preparation of topography     
<i class="fa fa-cog fa-spin"></i> Data reading     
<i class="fa fa-cog fa-spin"></i> Parameter optimization     
<i class="fa fa-cog fa-spin"></i> How to run `DIVAnd` (common dataset) using prepared notebooks and sample data     


### Thursday
<i class="fa fa-cog fa-spin"></i> Configuration for regional products                          
<i class="fa fa-comments" aria-hidden="true"></i> Discussion: priorities of features from `DIVA` implemented in new version `DIVAnd`     

### Friday
Morning:     
<i class="fa fa-cog fa-spin"></i> Generation of regional products and optimisation

Afternoon (finish at 3PM), parallel session:     
<i class="fa fa-comments" aria-hidden="true"></i> SeaDataCloud *Product Meeting*      
<i class="fa fa-comments" aria-hidden="true"></i> Question and answers and advanced topics (advection, reference fields, ...)

Meeting closure: 3 PM.

## Preparation

Participants will have with them a laptop with:     
* 16 GB RAM memory and     
* sufficient free disk space (approx. 50 GB).

More resources might be necessary depending on the resolution and size of the studied domain.

You may also need to check the list of [acronyms and definitions](acronyms.md).

### Installation

* [Julia](https://julialang.org/downloads/) language
* [IJulia](https://github.com/JuliaLang/IJulia.jl), the Julia kernel for Jupyter.
* [OceanDataView](https://odv.awi.de/), to pre-process the data files.
* [Nco](http://nco.sourceforge.net/), a set of netCDF operators for regridding, editing etc.

More details about the procedure: [installation](installation.md).

### Before the workshop...

<i class="fa fa-database" aria-hidden="true"></i> If you plan to use your own dataset, please verify that it has been quality controlled.     
<i class="fa fa-plug" aria-hidden="true"></i> Bring power adapters if needed (<https://www.power-plugs-sockets.com/belgium/>).     
<i class="fa fa-wifi" aria-hidden="true"></i> If your institution is part of [eduroam](https://www.eduroam.org/), be sure to have your credentials for the wifi connexion.
