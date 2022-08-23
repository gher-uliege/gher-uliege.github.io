# Install and compile DINEOF on a cluster

## Access the machine

Edit file `~/.ssh/config` according to the selected machine, for example
following the instructions from the [CECI wizard](http://www.ceci-hpc.be/sshconfig.html) or contact the sysadmin.

The assumptions are:
1. nothing is initially installed except the `C` and `Fortran` compilers and
2. you want to compile the different libraries (netCDF, BLAS, ...) from sources.

### Prepare directories

* All the libraries will be installed in `~/.local`.        
* The archived folders will be downloaded and stored in `~/download`.

```bash
mkdir -p ~/.local
mkdir -p ~/download
cd ~/download
```

If we plan to compile the libraries with different compilers, we can create
one directory for each of them, for instance:
```bash
mkdir -p ~/.local/ifort/
mkdir -p ~/.local/gfortran/
mkdir -p ~/.local/...
```

### Load modules

We need `C` and `Fortran` compilers. The module names depend on the cluster.     
If [`curl`](https://ss64.com/bash/curl.html) is not available, you can either install it from source (see next section), or load it using the `module` commands.

For example on Hercules2, to load GCC and curl:
```bash
module load GCC/5.4.0-2.26   					
module load cURL/7.49.1-foss-2016b 	   
```

### curl (from source) [optional]

```bash
cd ~/download
wget https://curl.haxx.se/download/curl-7.70.0.tar.gz
tar xvf curl-7.70.0.tar.gz
cd curl-7.70.0
./configure --prefix=/home/ctroupin/.local
make
```

## Installing netCDF from source

There are a few libraries to install in the right order.

### zlib

```bash
cd ~/download/
wget http://prdownloads.sourceforge.net/libpng/zlib-1.2.11.tar.gz
tar xvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
```

We will specify where the library is installed by using the option `--prefix` and creating a variable `ZDIR`:

```bash
ZDIR=~/.local
./configure --prefix=${ZDIR}
make check
make install
```

### HDF5

Download the last version of the library from      
🔗 [https://www.hdfgroup.org/downloads/hdf5/source-code/](https://www.hdfgroup.org/downloads/hdf5/source-code/)     
(version 1.12 as of July 2020).
Copy it (using `scp` or `rsync`) to the machine of your choice.

```bash
cd ~/download/
tar xvf hdf5-1-12-0-tar-gz
cd hdf5-1.12.0
```

#### gfortran compiler

```bash
H5DIR=~/.local
./configure --with-zlib=${ZDIR} --prefix=${H5DIR} --enable-hl
make check
make install
```

#### ifort compiler

We set a bunch of environment variables related to the compiler      
(probably they are not all needed):

```bash
export CC=icc
export CXX=icpc
export CFLAGS='-O3 -xHost -ip -no-prec-div -static-intel'
export CXXFLAGS='-O3 -xHost -ip -no-prec-div -static-intel'
export F77=ifort
export FC=ifort
export F90=ifort
export FFLAGS='-O3 -xHost -ip -no-prec-div -static-intel'
export CPP='icc -E'
export CXXCPP='icpc -E'
```

__Note:__ the `-x` option tells the compiler which processor features it may target.     
Check [CECI instructions](https://support.ceci-hpc.be/doc/_contents/UsingSoftwareAndLibraries/CompilingSoftwareFromSources/index.html#with-the-intel-compiler) for more details.

then we load the compilers with `module`:
```bash
module load icc
module load ifort
```
__Note:__ the name or path of the compilers may change according to the machine.     
Adapt the 2 previous lines accordingly.

and finally the compilation is done as with `gfortran`, except that we use a different
directory for the library (`H5DIR`):
```bash
H5DIR=~/.local/ifort/
./configure --with-zlib=${ZDIR} --prefix=${H5DIR} --enable-hl
make check
make install
```

### netCDF-C

First step: compiling the netCDF library for C.       
🔗 [https://www.unidata.ucar.edu/software/netcdf/documentation/NUG/getting_and_building_netcdf.html](https://www.unidata.ucar.edu/software/netcdf/documentation/NUG/getting_and_building_netcdf.html)

```bash
cd ~/download
wget https://github.com/Unidata/netcdf-c/archive/v4.7.4.tar.gz
tar xvf v4.7.4.tar.gz
cd netcdf-c-4.7.4/
ZDIR=~/.local
```

#### gfortran

```bash
H5DIR=~/.local
NCDIR=~/.local
CPPFLAGS="-I${H5DIR}/include -I${ZDIR}/include" LDFLAGS="-L${H5DIR}/lib -L${ZDIR}/lib" ./configure --prefix=${NCDIR}
make
make install
```

#### ifort

```bash
H5DIR=~/.local/ifort
NCDIR=~/.local/ifort
CPPFLAGS="-I${H5DIR}/include -I${ZDIR}/include" LDFLAGS="-L${H5DIR}/lib -L${ZDIR}/lib" ./configure --prefix=${NCDIR}
make
make install
```

### netCDF Fortran

After netCDF for C has been installed, it is the turn for the Fortran library.

```bash
wget https://github.com/Unidata/netcdf-fortran/archive/v4.5.2.tar.gz
tar xvf v4.5.2.tar.gz
cd netcdf-fortran-4.5.2/
export PATH=${NCDIR}/bin:$PATH
export LD_LIBRARY_PATH=${NCDIR}/lib:${LD_LIBRARY_PATH}
```

#### gfortran

```bash
NFDIR=~/.local
CPPFLAGS="-I${NCDIR}/include" LDFLAGS="-L${NCDIR}/lib" ./configure --prefix=${NFDIR}
make
make install
```

#### ifort

```bash
NFDIR=~/.local/ifort
CPPFLAGS="-I${NCDIR}/include" LDFLAGS="-L${NCDIR}/lib" ./configure --prefix=${NFDIR}
make
make install
```

## Other libraries (BLAS, LAPACK, ...)

### BLAS

🔗 [http://www.netlib.org/blas/](http://www.netlib.org/blas/)   

```bash
wget http://www.netlib.org/blas/blas-3.8.0.tgz
tar xvf blas-3.8.0.tgz
cd BLAS-3.8.0/
```

#### gfortran

```bash
make
cp blas_LINUX.a ~/.local/lib/libblas.a
```

#### ifort

Edit the file `make.inc` and modify the variables as follows:
```bash
FORTRAN  = ifort
...
LOADER   = ifort
```
In addition we can change the compiling flags:
```bash
	OPTS     = '-O3 -xHost -ip -no-prec-div -static-intel'
```

recompile the library and copy the resulting file:
```bash
make
cp blas_LINUX.a ~/.local/lib/ifort/libblas.a
```

### LAPACK

🔗 [http://www.netlib.org/lapack/](http://www.netlib.org/lapack/)   
(version 3.9.0 as of July 2020)

```bash
cd ~/download
wget https://github.com/Reference-LAPACK/lapack/archive/v3.9.0.tar.gz
tar xvf v3.9.0.tar.gz
cd lapack-3.9.0
```

#### gfortran

```bash
make
```

#### ifort

Before running `make`, copy `make.inc.example` as `make.inc`:
```bash
cp make.inc.example make.inc
```
and modify the compilers and the corresponding flags:
```
CC = icc
CFLAGS = '-O3 -xHost -ip -no-prec-div -static-intel'
...
FC = ifort
FFLAGS = '-O3 -xHost -ip -no-prec-div -static-intel'
```
and uncomment the line
```
TIMER = INT_CPU_TIME
```
(for `ifort` and most modern F95+ compilers).
```bash
make
```

### ARPACK

🔗 [https://www.caam.rice.edu/software/ARPACK/](https://www.caam.rice.edu/software/ARPACK/)

```bash
cd ~/download
wget https://www.caam.rice.edu/software/ARPACK/SRC/arpack96.tar.gz
wget https://www.caam.rice.edu/software/ARPACK/SRC/patch.tar.gz
tar xvf arpack96.tar.gz
tar xvf patch.tar.gz
cd ARPACK/
```

Edit the file `ARmake.inc` and the values of `home` and, if needed, `MAKE`, depending
on the machine.
```
home = $(HOME)/download/ARPACK
...
MAKE    = /usr/bin/make
```

#### gfortran

Edit the file `ARmake.inc` and modify the compiling options:
```
...
FC      = gfortran
FFLAGS  = -O
```
then compile
```bash
make all
```

#### ifort
Change the compilers and flags in `ARmake.inc`:
```
FC      = ifort
FFLAGS  = -O3 -xHost -ip -no-prec-div -static-intel
```
then
```bash
make
```

## DINEOF

🔗 http://modb.oce.ulg.ac.be/mediawiki/index.php/DINEOF

### Environment variables

Ensure that `PATH` and `LD_LIBRARY_PATH` have been updated:
```bash
NCDIR=~/.local/	      # for gfortran
#NCDIR=~/.local/ifort  # for ifort
export PATH=${NCDIR}/bin/:$PATH
export LD_LIBRARY_PATH=${NCDIR}/lib:${LD_LIBRARY_PATH}
```

#### Download

```bash
cd ~
wget https://github.com/aida-alvera/DINEOF/archive/master.zip
unzip master.zip
cd DINEOF-master/
```

#### Compile

Copy `config.mk.template` to `config.mk` and set the compiler and the library paths according to your installation,

`FORT ?= gfortran` or `FORT ?= ifort`

The netCDF directories and options are located with `nc-config` command, if it is found in the path.       
If you want to modify the compiling flag, edit the corresponding file in the `Compilers` directory, for example `Linux-ifort.mk`.

Once this is done, you can compile:
```bash
make
```

#### Issues

```bash
/home/ctroupin/ARPACK/libarpack.a(second.o):second.f:function second_: error: undefined reference to 'etime_'
```
__Solution:__ http://modb.oce.ulg.ac.be/mediawiki/index.php/How_to_compile_ARPACK

```bash
ld: cannot find -llapack
```
__Solution:__ ensure that the Lapack library is found, for instance by updating
the environment variable `LD_LIBRARY_PATH`.

```bash
../../dineof: error while loading shared libraries: libifport.so.5: cannot open shared object file: No such file or directory
```
__Solution:__ make sure that the module containing the ifort compiler was loaded prior to starting the run. For example with `Lemaitre3`:
```bash
module load intel/2019b
```

```bash
../dineof: error while loading shared libraries: libnetcdff.so.7: cannot open shared object file: No such file or directory
```

```bash
../dineof: error while loading shared libraries: libnetcdf.so.18: cannot open shared object file: No such file or directory
```

```bash
checking size of off_t... configure: error: in `/home/ulg/gher/ctroupin/Downloads/netcdf-fortran-4.5.2':
configure: error: cannot compute sizeof (off_t)
```
__Solution:__ `export LD_LIBRARY_PATH=${NCDIR}/lib:${LD_LIBRARY_PATH}``

```bash
checking wether the C compiler works... no
```
__Solution:__
`module load intel/compiler/15.0.0` instead of `module load ifort/2017.4.196-GCC-6.4.0-2.28` (on )

```bash
gfortran -fimplicit-none -g -fbounds-check -fdefault-real-8 -fconvert=big-endian -frecord-marker=4 -DDOUBLE_PRECISION -I/opt/sw/arch/easybuild/2019b/software/netCDF-Fortran/4.5.2-iimpi-2019b/include   -c ufileformat.F90
f951: Fatal Error: Reading module ‘netcdf’ at line 1 column 2: Unexpected EOF
compilation terminated.
```
__Solution:__ load the correct netCDF library (according to your compiler).

```bash
ncdump: error while loading shared libraries: libimf.so: cannot open shared object file: No such file or directory
```bash

__Solution:__

```bash
libtool: warning: library FILENAME was moved.
```
This can happen when you moved a library into another directory. Even if this directory is your
`LD_LIBRARY_PATH`, the error arises.      
__Solution:__ edit the file, for example `libhdf5_hl.la` and modify the paths accordingly:
```bash
dependency_libs=' -L/home/ulg/gher/ctroupin/.local/lib /home/ulg/gher/ctroupin/.local/ifort/lib/libhdf5.la -lrt -lz -ldl -lm'
...
libdir='/home/ulg/gher/ctroupin/.local/ifort/lib'
```

## Tests

The size of the domain is **180 X 144 X 244** time steps and contains measurements of
sea surface temperature in the North East Atlantic Ocean.
The DINEOF code and the other libraries were all installed from source using the Intel compiler `ifort`, following the procedure described before.

The submission scripts had the same parameters (CPU, nodes etc) but were
slightly adapted to the machine using the CECI *Wizard* as guideline.

### Computation time

| Machine  | Number of modes | Total time	(s) |	Time per EOF (s) ⁽²⁾| Processor	|
|:--------:|:----------------|:---------------|:--------------|:--------------|
| Laptop	 | 60			| 5318.3443		| 2.2952	|	Intel(R) Core(TM) i7-6600U CPU @ 2.60GHz | 								
| Vega 		 | 60			|	6907.0500		| 2.7896	| AMD Opteron(TM) Processor 6272|
| NIC4		 | 60			| 3418.7813   | 1.5118	| E5-2650 @ 2GHz, 64 GB RAM|
| NIC5           | 60                   | 2271.7226   | 0.8734  | Rome 2.9 GHz | 
| Hercules | 60			|	3111.9435		| 1.1419	| AMD EPYC 7551P 32-Core Processor|
| Lemaitre3| 60			|	46182.3758	| 9.4441  | Intel Skylake 5118@2.3GHz, 96GB RAM|
| Dragon1	 | 60			| 1999.7440		| 0.8739  | Intel(R) Xeon(R) CPU E5-2620 0 @ 2.00GHz|
| Dragon2	 | 60			|	2097.0578		| 0.8300	| Intel(R) Xeon(R) Gold 6130 CPU @ 2.10GHz|

⁽¹⁾ The runs were repeated several times and did not show significant differences in the times.

* The number of modes for the final reconstruction was always 60, except for `NIC4` when we used the pre-installed libraries (`module load ...`)
* The fastest machine was `Dragon2` while the slowest was `Lemaitre3`.
* The expected error, convergence achieved and number of iterations were the same for all the machines.

### Effect of the compiler

Quick test on my laptop:
- `gfortran`: Time (in seconds) for 1 EOF mode calculation in DINEOF    4.3770
- `ifort`:  Time (in seconds) for 1 EOF mode calculation in DINEOF    2.4482
the difference is significant.

On NIC4 we tested the same application but with different compilers and
different ways to load the libraries.

| Modules  | Number of modes | Total time	(s) |	Time per EOF (s) |
|:--------:|:----------------|:---------------|:--------------||
| Module load ...	  			| 64					|	13394.7937		| 3.5995	|
| Compiled with `ifort`		| 60					| 3418.7813     | 1.5118	|
| Compiled with `gfortran`| 61					|	6883.6695			|	2.1437	|

* Compilation from source with `ifort` is the fastest.
* Final numbers of EOFs is differ.

### Further tests on Dragon1

Quick assessment of the role of the different parameters.

|ntasks	| cpus-per-task	| mem-per-cpu		| Time per EOF	| Total time (s) |
|:-----:|:--------------|:--------------|:--------------|:---------------|
| 1			| 2							| 2653 					| 0.8739				| 1999.7440			 |
| 1			| 2							| 1000 					| 0.8749				| 1994.6578			 |
| 1			| 4							| 1000					| 0.8739				| 1992.8910			 |

* No need to use too large _memory per CPU_ if not required by the application.
* Possible to run DINEOF for `MPI`?

### Compiler options

There are several compiling options that can improve the speed of the code, for example:
* `-xHost`: tells the compiler to generate instructions for the highest instruction set available on the compilation host processor.
* `-ftz`: flushes subnormal results to zero.
* `-ip`: interprocedural optimizations for single-file compilation are enabled
* `-qopenmp`: multi-threaded code based on OpenMP* directives

Different (non-systematic) tests showed that using `F90FLAGS ?= -fast` gave the best results on my laptop.     
The differences on `Dragon1` was not significant.

[`fast`](https://software.intel.com/content/www/us/en/develop/documentation/fortran-compiler-developer-guide-and-reference/top/compiler-reference/compiler-options/compiler-option-details/optimization-options/fast.html) strives to maximize speed across the entire program. On Linux systems, it is equivalent to:
`-ipo -O3 -no-prec-div -static -fp-model fast=2 -xHost`.
