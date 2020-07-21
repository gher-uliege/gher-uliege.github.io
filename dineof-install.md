# Install and compile DINEOF on a cluster

## Access the machine

Edit file `~/.ssh/config` according to the selected machine, for example
following the instructions from the [CECI wizard](http://www.ceci-hpc.be/sshconfig.html).

## Installing netCDF from source

The assumptions are:
* nothing is installed and
* you want to compile from sources

### Prepare directories

All the libraries will be installed in `~/.local`.       
The archived folders will be downloaded and stored in `~/download`.

```bash
mkdir ~/.local
mkdir ~/download
cd ~/download
```

### Load modules

We need a `C` and `Fortran` compilers. The module names depend on the cluster.
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
Download from https://www.hdfgroup.org/downloads/hdf5/source-code/      
(version 1.12 as of July 2020).

#### gfortran compiler

```bash
cd ~/download/
tar xvf hdf5-1-12-0-tar-gz
cd hdf5-1.12.0
ZDIR=~/.local
H5DIR=~/.local

./configure --with-zlib=${ZDIR} --prefix=${H5DIR} --enable-hl
make check
make install
```

#### ifort compiler

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

module load icc
module load ifort

```bash
cd ~/download/
tar xvf hdf5-1-12-0-tar-gz
cd hdf5-1.12.0
ZDIR=~/.local
H5DIR=~/.local/ifort/


./configure --with-zlib=${ZDIR} --prefix=${H5DIR} --enable-hl
make check
make install
```

### netCDF-C

https://www.unidata.ucar.edu/software/netcdf/documentation/NUG/getting_and_building_netcdf.html


#### gfortran

```bash
wget https://github.com/Unidata/netcdf-c/archive/v4.7.4.tar.gz
tar xvf v4.7.4.tar.gz
cd netcdf-c-4.7.4/
ZDIR=~/.local
H5DIR=~/.local
NCDIR=~/.local
CPPFLAGS="-I${H5DIR}/include -I${ZDIR}/include" LDFLAGS="-L${H5DIR}/lib -L${ZDIR}/lib" ./configure --prefix=${NCDIR}
make
make install
```

#### ifort compiler

```bash
ZDIR=~/.local
H5DIR=~/.local/ifort
NCDIR=~/.local/ifort
CPPFLAGS="-I${H5DIR}/include -I${ZDIR}/include" LDFLAGS="-L${H5DIR}/lib -L${ZDIR}/lib" ./configure --prefix=${NCDIR}
```


### netCDF Fortran

```bash
wget https://github.com/Unidata/netcdf-fortran/archive/v4.5.2.tar.gz
tar xvf v4.5.2.tar.gz
cd netcdf-fortran-4.5.2/
export LD_LIBRARY_PATH=${NCDIR}/lib:${LD_LIBRARY_PATH}
NFDIR=~/.local

export PATH=/home/ctroupin/.local/bin:$PATH
CPPFLAGS="-I${NCDIR}/include" LDFLAGS="-L${NCDIR}/lib" ./configure --prefix=${NFDIR} --disable-dap
CPPFLAGS="-I${NCDIR}/include" LDFLAGS="-L${NCDIR}/lib" ./configure --prefix=${NFDIR}
make
make install
```

#### ifort

```bash
NFDIR=~/.local/ifort
export PATH=/home/ctroupin/.local/ifort/bin:$PATH
export LD_LIBRARY_PATH=${NCDIR}/lib:${LD_LIBRARY_PATH}
CPPFLAGS="-I${NCDIR}/include" LDFLAGS="-L${NCDIR}/lib" ./configure --prefix=${NFDIR}
make
make install
```

### BLAS

#### gfortran

Download from http://www.netlib.org/blas/

```bash
wget http://www.netlib.org/blas/blas-3.8.0.tgz
tar xvf blas-3.8.0.tgz
cd BLAS-3.8.0/
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

http://www.netlib.org/lapack/     
(version 3.9.0 as of July 2020)

```bash
cd lapack-3.9.0
make
```

#### ifort

Before running `make`, ddit the file `make.inc` and modify the compilers and the corresponding flags:
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
(for iFort and most modern F95+ compilers).

### ARPACK

https://www.caam.rice.edu/software/ARPACK/

```bash
wget https://www.caam.rice.edu/software/ARPACK/SRC/arpack96.tar.gz
wget https://www.caam.rice.edu/software/ARPACK/SRC/patch.tar.gz
tar xvf arpack96.tar.gz
tar xvf patch.tar.gz
cd ARPACK/
```

Edit the file `ARmake.inc` and change the compiler `home` and the `FC` variables
```
FC      = gfortran
FFLAGS  = -O
```

#### ifort

Change the compilers and flags in `ARmake.inc`:
```
FC      = ifort
FFLAGS  = -O
```


### DINEOF

export PATH=/home/ctroupin/.local/bin/:$PATH
export PATH=/home/ctroupin/.local/ifort/bin/:$PATH
edit config.mk

Issue:
/home/ctroupin/ARPACK/libarpack.a(second.o):second.f:function second_: error: undefined reference to 'etime_'
Solved:
http://modb.oce.ulg.ac.be/mediawiki/index.php/How_to_compile_ARPACK


Internal Error: get_unit(): Bad internal unit KIND
