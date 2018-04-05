# Installation

* You will need to install [Julia](https://julialang.org/downloads/). We will use the latest version, i.e. version **0.6** as of January 2018. Older versions are not supported.

* You will need to install also `DIVAnd`. Launch Julia and in the terminal issue the following command:
```julia
Pkg.clone("https://github.com/gher-ulg/divand.jl")
```

* Install also [`IJulia`](https://github.com/JuliaLang/IJulia.jl), the graphical notebook interface to Julia (highly recommended for the workshop) and [`PyPlot`](https://github.com/JuliaPy/PyPlot.jl) for the plotting.

These two packages can be installed using the following commands.
```julia
Pkg.add("PyPlot")
Pkg.add("IJulia")
```
Installation can take a couple of minutes and will take about 3 GB of disk space.

Make sure to use the package `Mustache` of version 0.3.1. You can verify the version of `Mustache` by running the command `Pkg.installed("Mustache")`.


## For Windows users

Windows 7/Windows Server 2012 users also require [TLS "Easy Fix"](https://support.microsoft.com/en-us/help/3140245/update-to-enable-tls-1-1-and-tls-1-2-as-a-default-secure-protocols-in) update.

### Copying and pasting commands in a terminal

Windows user should have a look at this to [enable the quick edit mode](https://blogs.msdn.microsoft.com/adioltean/2004/12/27/useful-copypaste-trick-in-cmd-exe/) to facilitate copying and pasting commands.


<!---

A possibility for the installation is to use Anaconda:

* Install anaconda: [https://conda.io/docs/user-guide/install/index.html](https://conda.io/docs/user-guide/install/index.html)

* Install IJulia:
```julia
Pkg.add("IJulia")
```

* Install Plots:
```julia
Pkg.add("Plots")
```

* Clone `DIVAnd` into the v0.6 julia directory:
```bash
cd .julia/v0.6/
git clone git@github.com:gher-ulg/divand.jl.git
```

* Install Interpolations:
```julia
Pkg.add ("Interpolations")
```
Note: remove this command if we add a *required* into `DIVAnd` module.

* Install PyPlot:
```julia
Pkg.add("PyPlot")
```
-->


# Testing your installation

* In the Julia terminal, issue the following command to test `DIVAnd`:

```julia
Pkg.test("divand");
```
All tests should succeed.

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
A new browser window should open. Then, click on New => Julia 0.6. In the text box, type `1+2` and then hit `Control-Enter`. The answer should be 3! Normally your notebook should open in your home directory so you see the files/directories you have there. If you want to see another directory tree you can try to open the browser interface with 

```julia
using IJulia
notebook(dir="D:/myotherdirectory/onanotherdisk/")
```

### First steps with Jupyter and Julia

If you modify `divand` module, restart the kernel to make sure latest version is
used (remember, Julia does some compilations).

#### Updating Julia

1. Download binaries, install as usual.
2. Run in Julia (not IJulia of Jupyter): `Pkg.build("IJulia")`
3. Then in IJulia `Pkg.update()`

# Troubleshooting

## Installing additional packages

Depending on your current Julia setup, installing `DIVAnd` might ask for
installation of additional packages. This will be explicitly shown,
for example:

```julia
LoadError: ArgumentError: Module Roots not found in current path.
Run `Pkg.add("Roots")` to install the Roots package.
```

## C runtime library when calling PyPlot

`R6034 an application has made an attempt to load the C runtime library incorrectly` on Windows 10 with julia 0.6.1, matplotlib 2.1.0, PyPlot 2.3.2:

```julia
ENV["MPLBACKEND"]="qt4agg"
```
You can put this line in a file `.juliarc.jl` placed in your home directory (the output of `homedir()` in Julia).
