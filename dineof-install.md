# Install and compile DINEOF on a cluster

## Access the machine

Edit file `~/.ssh/config` according to the selected machine, for example
following the instructions from the [CECI wizard](http://www.ceci-hpc.be/sshconfig.html).

## Installing netCDF from source

The assumptions are:
* nothing is initially installed except the compilers and
* you want to compile from sources.

### Prepare directories

* All the libraries will be installed in `~/.local`.        
* The archived folders will be downloaded and stored in `~/download`.

```bash
mkdir -p ~/.local
mkdir -p ~/download
cd ~/download
```

### Load modules

We need `C` and `Fortran` compilers. The module names depend on the cluster.
If [`curl`](https://ss64.com/bash/curl.html) is not available, you can either install it from source (see next section), or load it using the `module` commands.

```bash
module load GCC/5.4.0-2.26   			# on Hercules2
module load cURL/7.49.1-foss-2016b 	    # on Hercules2
```

### curl (from source)

```bash
cd ~/download
wget https://curl.haxx.se/download/curl-7.70.0.tar.gz
tar xvf curl-7.70.0.tar.gz
cd curl-7.70.0
./configure --prefix=/home/ctroupin/.local
make
```

### zlib

```bash
cd ~/download/
wget http://prdownloads.sourceforge.net/libpng/zlib-1.2.11.tar.gz
tar xvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
```

We will specify where the library is installed by using the option `prefix` and creating a variable `ZDIR`:

```bash
ZDIR=~/.local
$ ./configure --prefix=${ZDIR}
$ make check
$ make install
```

### HDF5

🔗 https://www.hdfgroup.org/downloads/hdf5/source-code/       
(version 1.12 as of July 2020).

```bash
cd ~/download/
tar xvf hdf5-1-12-0-tar-gz
cd hdf5-1.12.0
ZDIR=~/.local
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
then we load the compilers with `module`:
```bash
module load icc
module load ifort
```
and finally the compilation is done as with gfortran, except that we use a different
directory for the library (`H5DIR`):
```bash
H5DIR=~/.local/ifort/
./configure --with-zlib=${ZDIR} --prefix=${H5DIR} --enable-hl
make check
make install
```

### netCDF-C

First step: compiling the netCDF library for C.       
🔗 https://www.unidata.ucar.edu/software/netcdf/documentation/NUG/getting_and_building_netcdf.html

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

### BLAS

🔗 http://www.netlib.org/blas/     

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

🔗 http://www.netlib.org/lapack/     
(version 3.9.0 as of July 2020)

```bash
cd ~/download
wget https://github.com/Reference-LAPACK/lapack/archive/v3.9.0.tar.gz
tar xvf lapack-3.9.0.tar.gz
cd lapack-3.9.0
```

#### gfortran

```bash
make
```

#### ifort

Before running `make`, edit the file `make.inc` and modify the compilers and the corresponding flags:
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
(for ifort and most modern F95+ compilers).
```bash
make
```

### ARPACK

🔗 https://www.caam.rice.edu/software/ARPACK/     

```bash
cd ~/download
wget https://www.caam.rice.edu/software/ARPACK/SRC/arpack96.tar.gz
wget https://www.caam.rice.edu/software/ARPACK/SRC/patch.tar.gz
tar xvf arpack96.tar.gz
tar xvf patch.tar.gz
cd ARPACK/
```

#### gfortran

Edit the file `ARmake.inc` and change the variable `home` and the compiling options:
```
home = $(HOME)/download/ARPACK
...
FC      = gfortran
FFLAGS  = -O
```
then compile
```bash
make
```

#### ifort

Change the compilers and flags in `ARmake.inc`:
```
FC      = ifort
FFLAGS  = -O
```
then
```bash
make
```

### DINEOF


#### Environment variables
Ensure that `PATH` and `LD_LIBRARY_PATH` have been updated:

```bash
NCDIR=~/.local/			  # for gfortran
NCDIR=~/.local/ifort  # for ifort
export PATH=${NCDIR}/bin/:$PATH
export LD_LIBRARY_PATH=${NCDIR}/lib:${LD_LIBRARY_PATH}
```

#### Compiling options and paths

Edit `config.mk` and set the paths according to your installation:
```bash

```


#### Issues

```
/home/ctroupin/ARPACK/libarpack.a(second.o):second.f:function second_: error: undefined reference to 'etime_'
```
Solved: http://modb.oce.ulg.ac.be/mediawiki/index.php/How_to_compile_ARPACK
