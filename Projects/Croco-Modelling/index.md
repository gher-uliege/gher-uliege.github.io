<head>
  <script src="https://kit.fontawesome.com/495d02e8e8.js"></script>
</head>


## Model

* [<i class="fas fa-home"></i> https://www.croco-ocean.org/](https://www.croco-ocean.org/)
* [<i class="fas fa-code"></i> croco-v1.0](ftp://ftp.ifremer.fr/ifremer/croco/CODE_ARCHIVE/croco-v1.0.tar.gz) (26 June 2018)
* [<i class="fab fa-gitlab"></i> croco](https://gitlab.inria.fr/croco-ocean/croco)

## <i class="fas fa-tools"></i> Preprocessing tools

|Tool   | Language   | Last modified  | Author  | Note  |
|---|---|---|---|---|
| [<i class="fas fa-link"></i> croco-tools-v1.0](ftp://ftp.ifremer.fr/ifremer/croco/CODE_ARCHIVE/croco_tools-v1.0.tar.gz)   | MATLAB   |   |   |   |
|[tools.tar ](http://people.atmos.ucla.edu/alex/ROMS/tools.tar)   | Fortran  | 23 March 2018   |S. Shchepetkin   |[ROMS forum *Set a land mask on the sea in SeaGrid*](https://www.myroms.org/forum/viewtopic.php?f=14&t=4775)   |
|[<i class="fab fa-bitbucket"></i> easygrid_python.py](https://bitbucket.org/emason/easygrid-python/src/default/)   | Python 2.7  | 10 November 2016   | E. Mason   |   |
|[<i class="fab fa-github"></i> pyroms2roms](https://github.com/evanmason/pyroms2roms) | Python | 11 January 2018 | E. Mason | |


### Notes for easygrid

Works with Python2.7 → virtualenv
```bash
mkvirtualenv -p /usr/bin/python2.7 ROMS-python2.7
```

Install packages:
```bash
pip install numpy
pip install matplotlib
pip install netCDF4
pip install traits
pip install pathlib2
pip install wxPython
pip install scipy
pip install traitsui
pip install arrow==0.12.0
```
<i class="fas fa-hourglass-start"></i> Installing wxPython can take a while

#### Installing Basemap

* There is no `pip install ...` possibility
* `Cartopy` should take over Basemap...

1. Get sources from https://github.com/matplotlib/basemap/releases/
2. Install the following packages:
```bash
pip install pyproj
pip install pyproj==1.9.6
pip install pyshp
```
3. Run the installation script
```bash
python setup.py install
```

#### Installing Qt4 (not sure if needed, but keep it for now)

#### install SIP

https://www.riverbankcomputing.com/software/sip/download
sip-4.19.18.tar.gz
```bash
python configure.py
make
sudo make install
```

#### install pyqt

https://riverbankcomputing.com/software/pyqt/download
PyQt4_gpl_x11-4.12.3.tar.gz

```bash
python configure-ng.py
make
make install
```

## CROCO on NIC4

### Install compiler and libraries
```bash
module add intel/compiler/64/14.0/2013_sp1.1.106
module add hdf5/1.8.13/openmpi-1.7.5-intel2013_sp1.1.106
module add netcdf/4.3.2/openmpi-1.7.5-intel2013_sp1.1.106
```

### Compile
#### Basic
```bash
cd /home/ulg/gher/ctroupin/CROCO/croco-v1.0/OCEAN/Compile
./jobcomp
```
If everything goes well, you should end up with a new executable `croco`
```bash
ctroupin@nic4.master2 ~/CROCO/croco-v1.0/OCEAN/Compile $ ls -lah croco
-rwxrwxr-x 1 ctroupin ctroupin 697K Aug 27 15:30 croco
```
#### Optimised
There are a lot of compilation flags that can improve the code performance...

* According to the [CECI doc](https://support.ceci-hpc.be/doc/_contents/UsingSoftwareAndLibraries/CompilingSoftwareFromSources/index.html#with-the-intel-compiler):
> you could specify -axSSE4.2,AVX to build a binary optimized for all the CÉCI computers.


### Running with MPI

#### Wizard

Using http://www.ceci-hpc.be/scriptgen.html, we get a good starting point:

```bash
#!/bin/bash
# Submission script for Vega
#SBATCH --job-name=Croco-Basic
#SBATCH --time=02:00:00 # hh:mm:ss
#
#SBATCH --ntasks=2
#SBATCH --mem-per-cpu=1000 # megabytes
#SBATCH --partition=defq
#
# Uncomment the following line if your work
# is floating point intensive and CPU-bound.
### SBATCH --threads-per-core=1
#
#SBATCH --mail-user=ctroupin@uliege.be
#SBATCH --mail-type=ALL
#
#SBATCH --comment=CROCO-Modelling
```

**Note:**
```
###   WARNING: with this version of OpenMPI it is                 ###
###                                                               ###
###   MANDATORY to add the '--bind-to none' option to 'mpirun'    ###
###                                                               ###
###   even if your job seems working properly without it          ###
###                                                               ###
###   $ mpirun  --bind-to none  ./my_mpi_program ...  
```
