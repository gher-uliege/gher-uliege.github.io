# Installation

* You will need to install [Julia](https://julialang.org/downloads/). We will use the latest version, i.e. version **1.3**. Versions earlier than julia 1.0 will not work.

* You will need to install also `DIVAnd` following [these instructions](https://github.com/gher-ulg/DIVAnd.jl/#installing).

* Install also [`IJulia`](https://github.com/JuliaLang/IJulia.jl), the graphical notebook interface to Julia (highly recommended for the workshop) and [`PyPlot`](https://github.com/JuliaPy/PyPlot.jl) for the plotting.

These two packages can be installed using the following commands.
```julia
using Pkg
Pkg.add("PyPlot")
Pkg.add("IJulia")
```
Installation can take a couple of minutes and will take about 3 GB of disk space.

### Copying and pasting commands in a terminal

Windows user should have a look at this to [enable the quick edit mode](https://blogs.msdn.microsoft.com/adioltean/2004/12/27/useful-copypaste-trick-in-cmd-exe/) to facilitate copying and pasting commands.





# Testing your installation

* In the Julia terminal, issue the following command to test `DIVAnd`:

```julia
using Pkg
Pkg.test("DIVAnd");
```
All tests should succeed but it might need some time to execute completely. Be patient.

* Testing `PyPlot`. Again in the Julia terminal, issue the following commands:

```julia
using PyPlot
plot(1:10)
```

A new window should open with a straight line.

* Testing `IJulia`. Issue the following commands in a Julia terminal:

```julia
using IJulia
notebook()
```
A new browser window should open. Then, click on New => Julia 0.6. In the text box, type `1+2` and then hit `Control-Enter`. The answer should be 3! Normally your notebook should open in your home directory so you see the files/directories you have there. If you want to see another directory tree, you can try to open the browser interface with 

```julia
using IJulia
notebook(dir="D:/myotherdirectory/onanotherdisk/")
```

For issues with IJulia/Jupyter please have a look at https://github.com/JuliaLang/IJulia.jl.

### First steps with Jupyter and Julia

If you modify `DIVAnd` module, restart the kernel to make sure latest version is
used (remember, Julia does some compilations).

## Updating Julia

1. Download binaries, install as usual.
2. Run in Julia (NOT IJulia of Jupyter): `Pkg.build("IJulia")`
3. Then (in IJulia or Julia) `Pkg.update()`

More information is available at: https://github.com/JuliaLang/IJulia.jl#updating-julia-and-ijulia

# Troubleshooting

For any installation issue please have a look at the [troubleshooting section](https://gher-ulg.github.io/DIVAnd.jl/latest/#Troubleshooting-1) in the documentation.
