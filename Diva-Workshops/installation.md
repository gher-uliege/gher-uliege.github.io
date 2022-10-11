# Installation

* You will need to install [Julia](https://julialang.org/downloads/). We will use the latest version, i.e. version **1.8**. Versions earlier than julia 1.0 will not work. If you have any issue, please have a look to the [installation instructions](https://julialang.org/downloads/platform/) for more details. (Note however it is _not necessary_ to add julia to the Windows `PATH` environement variable).

* Install the following julia packages by executing the following lines in a julia terminal:

These two packages can be installed using the following commands.
```julia
using Pkg
Pkg.add(["NCDatasets","PyPlot","Interpolations","DIVAnd","IJulia"])
using PyPlot
using IJulia
notebook()
```
This installs [DIVAnd](https://github.com/gher-ulg/DIVAnd.jl/), [`IJulia`](https://github.com/JuliaLang/IJulia.jl), the graphical notebook interface to Julia (highly recommended for the workshop) and [`PyPlot`](https://github.com/JuliaPy/PyPlot.jl) for the plotting among others.
Installation can take a couple of minutes and will take about 3 GB of disk space.

### Copying and pasting commands in a terminal

Windows user should have a look at this to [enable the quick edit mode](https://blogs.msdn.microsoft.com/adioltean/2004/12/27/useful-copypaste-trick-in-cmd-exe/) to facilitate copying and pasting commands.





# Testing your installation

* In the Julia terminal, issue the following command to test `DIVAnd`:

```julia
using Pkg
Pkg.test("DIVAnd");
```
All tests should succeed but it might need some time to execute completely (you will need an active internet connection). Be patient.

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
A new browser window should open. Then, click on New => Julia 1.x (where 1.x is you julia version). In the text box, type `1+2` and then hit `Control-Enter`. The answer should be 3! Normally your notebook should open in your home directory so you see the files/directories you have there. 
If this does not work, please report the issue here with the full error message: https://github.com/gher-ulg/Diva-Workshops/issues/new



If you want to see another directory tree, you can try to open the browser interface with 

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

For any installation issue please have a look at:

* [DIVAnd troubleshooting section](https://gher-ulg.github.io/DIVAnd.jl/latest/#Troubleshooting-1)
* [NCDatasets known issues](https://alexander-barth.github.io/NCDatasets.jl/latest/issues/)

If the installation does not work, please report the issue here with the full error message: https://github.com/gher-ulg/Diva-Workshops/issues/new


## Julia

### Windows

* Make sure that PowerShell can connect to the internet. This command should work:

```
powershell -NoProfile -Command '[System.Net.ServicePointManager]::SecurityProtocol =[System.Net.SecurityProtocolType]::Tls12; $webclient = (New-Object System.Net.Webclient); $webclient.DownloadFile("https://github.com/JuliaInterop/ZMQBuilder/releases/download/v4.2.5+6/ZMQ.x86_64-w64-mingw32.tar.gz","foo.tar.gz")'
```

* Windows Management Framework 3.0 or later has to be installed. It should be already installed on Windows 10 and later.


## IJulia

* If Julia is installed/run as administator, IJulia cannot open a working web-browser.  If the url is copied into another chrome instance (with internet working), then jupyter works.
