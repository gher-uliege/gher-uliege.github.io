# Diva Workshop -- 2018

This page provide the relevant information about the Diva user workshops organised in the frame of H2020 [SeaDataCloud](https://www.seadatanet.org/) project. [`Diva`](https://github.com/gher-ulg/DIVA) and [`divand`](https://github.com/gher-ulg/divand.jl) are software tools implementing advanced techniques to generate gridded fields from in situ observations.

## General information

### Participants

Participants are expected to be partners of [SeaDataCloud](https://www.seadatanet.org/) or EMODnet [Chemistry](http://www.emodnet-chemistry.eu/) or [Biology](http://www.emodnet-biology.eu/). Other scientists or data managers may request an invitation by contacting the organisers.     Priority will be given to those partners responsible for the Product preparation.

### Dates

From 3 to 6 of April, 2018.

### Venue

The 2018 edition will be hosted by the University of Liège, in the center of [Liège](http://www.liege.be/tourisme-en), Belgium.    
The meeting room is the 5/16 in the building A2 (see [map](https://www.campus.uliege.be/cms/c_1771004/en/a2-faculte-de-philosophie-et-lettres)). 

[How to get there?](howtogetthere.md)

## Preliminary program

The workshop will be focused on `divand` (n-dimensional interpolation), unlike the previous editions, which were dedicated to the 2D version (Diva). Half a day will be dedicated to the 3rd SeaDataCloud *Product Meeting*.

**[P]** denote presentations     
**[E]** denote exercises
**[D]** denote discussions

### Tuesday
**[P]** What is `divand`, differences with previous versions of Diva?           
**[E]** Example with topography constrain, advection      
**[P]** What is a [jupyter-notebook](http://jupyter.org/)?                       
**[P/E]** Demo CINECA jupyterhub        

### Wednesday

**[P/E]** Basic [Julia](https://julialang.org/) commands and major differences with MATLAB and Python      
**[E]** How to run `divand` (common dataset) using prepared notebooks and Black Sea ODV data       
**[E]** Preparation of topography      
**[E]** Data reading           

### Thursday
**[E]** Configuration for regional products                          
**[D]** Discussion: priorities of features from `Diva` implemented in new version `divand`     

### Friday
Parallel session:     
**[D]** SeaDataCloud *Product Meeting*      
**[D]** Question and answers and advanced topics (advection, reference fields, ...)

## Preparation

Ideally, participants will have with them a laptop with:     
16 GB RAM memory and     
sufficient free disk space (approx. 50 GB).

### Installation

* [Julia](https://julialang.org/downloads/) language
* [IJulia](https://github.com/JuliaLang/IJulia.jl), the Julia kernel for Jupyter.
* [OceanDataView](https://odv.awi.de/), to pre-process the data files.
* [Nco](http://nco.sourceforge.net/), a set of netCDF operators for regridding, editing etc.

More details about the procedure: [installation](installation.md).

### Before the workshop...

If you plan to use your own dataset, please verify that it has been quality controlled.     
Bring power adapters if need (check https://www.power-plugs-sockets.com/belgium/).     
If your institution is part of [eduroam](https://www.eduroam.org/), be sure to have your credentials for the wifi connexion.
