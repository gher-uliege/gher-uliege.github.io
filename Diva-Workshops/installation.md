
Install anaconda: [https://conda.io/docs/user-guide/install/index.html](https://conda.io/docs/user-guide/install/index.html) 

Install IJulia:
```julia
Pkg.add("IJulia")
```

Install Plots:
```julia
Pkg.add("Plots")
```

Clone `divand` into the v0.6 julia directory:
```bash
cd .julia/v0.6/
git clone git@github.com:gher-ulg/divand.jl.git
```

Install Interpolations:
```julia
Pkg.add ("Interpolations")
```
(remove if we add a *required* into divand module).

Install PyPlot:
```julia
Pkg.add("PyPlot")
```

### First steps with Jupyter and Julia

When modifying the code, restart the kernel to make sure latest version is
used (remember, julia does some compilations).


#### Updating julia
1. Download binaries, install as usual.     
2. Run in Julia (not IJulia of Jupyter): `Pkg.build("IJulia")` or ??
`Pkg.add("IJulia")``
3. Then in IJulia `Pkg.update()`


Depending on your current Julia setup, installing divand might ask for
installation of additional packages. This will clearly been shown
for example
```julia
LoadError: ArgumentError: Module Roots not found in current path.
Run `Pkg.add("Roots")` to install the Roots package.
```
