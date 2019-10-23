## Julia for Oceanography

This pages makes an inventory of the ocean-related packages in `Julia`.

### File I/O
[NCDatasets.jl](https://github.com/Alexander-Barth/NCDatasets.jl): Load and create netCDF files in Julia.      
[MAT.jl](https://github.com/JuliaIO/MAT.jl): module for reading MATLAB files.      
[CSV.jl](https://github.com/JuliaData/CSV.jl): working with CSV and other delimited files.      
[JSON.jl](https://github.com/JuliaIO/JSON.jl): JSON file.
[GeoJSON.jl](https://github.com/JuliaGeo/GeoJSON.jl): working with GeoJSON data.     
[ODVspreadsheet.jl](https://github.com/gher-ulg/DIVAnd.jl/blob/master/src/ODVspreadsheet.jl): read ODV (Ocean DataView) spreadsheet (text files).     
[NCODV.jl](https://github.com/gher-ulg/DIVAnd.jl/blob/master/src/NCODV.jl): read ODV netCDF files.
[ArchGDAL.jl](https://github.com/yeesian/ArchGDAL.jl): geoTIFF (among others).      
[Shapefile.jl](https://github.com/JuliaGeo/Shapefile.jl): parsing `.shp` files.


Available in Julia standard library:      
[DelimitedFiles](https://docs.julialang.org/en/v1/stdlib/DelimitedFiles/): reading and writing delimited files (CSV, TSV, ...).

### General

[PhysOcean.jl](https://github.com/gher-ulg/PhysOcean.jl): utility functions for physical oceanography (properties of seawater, air-sea heat fluxes,...)       
[Unitful.jl](https://github.com/PainterQubits/Unitful.jl): physical quantities with arbitrary units.          


### Spatial interpolation
[DIVAnd.jl](https://github.com/gher-ulg/DIVAnd.jl): n-dimensional variational analysis of arbitrarily located observations in complex geometries.
[GeoStats.jl](https://github.com/juliohm/GeoStats.jl): extensible framework for high-performance geostatistics.     
[Interpolations.jl](https://github.com/JuliaMath/Interpolations.jl): fast, continuous interpolation of discrete datasets provided on a (irregular) grid.          
[GridInterpolations.jl](https://github.com/sisl/GridInterpolations.jl): multidimensional grid interpolation in arbitrary dimensions.     


### Numerical models

[Oceananigans.jl](https://github.com/climate-machine/Oceananigans.jl): incompressible fluid flow solver.

### Visualisation

[Plots.jl](https://github.com/JuliaPlots/Plots.jl): visualizations and data analysis.     
[PyPlot.jl](https://github.com/JuliaPy/PyPlot.jl): plotting based on `matplotlib.pyplot`.     
[Gadfly.jl](https://github.com/GiovineItalia/Gadfly.jl): Crafty statistical graphics.      
