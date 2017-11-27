from __future__ import division
from sys import argv
import math
import numpy as np


spec1 = open(argv[1])
spec2 = open(argv[2])
spec1data = {}
spec2data = {}
Cppm = {}
Hppm = {}
spectra_CSPs = {}
CSP_values = []

# Identifies the two .list files to calculate CSPs from.
print "Loaded two spectra: %s and %s" % (argv[1], argv[2])
name_of_file = raw_input("Output filename (will be automatically saved as .txt): ")
output_file = open('/Users/student/nmr/nmrdata/CSP_data/'+name_of_file+'.txt', "w")

output_file.write("Assignment\tCSP\n")

for line in spec1:
	line.replace('\n','')
	data1 = line.split()
	if data1 == [] or data1[0] == 'Assignment' or data1[0] == '?-?':
		continue
	else:
		spec1data[data1[0]] = float(data1[1]), float(data1[2])

for line in spec2:
	line.replace('\n','')
	data2 = line.split()
	if data2 == [] or data2[0] == 'Assignment' or data1[0] == '?-?':
		continue
	else:
		spec2data[data2[0]] = float(data2[1]), float(data2[2])
		
#print spec1data, spec2data

for res in spec1data:
	Cppm[res] = spec1data[res][0], spec2data[res][0]
	Hppm[res] = spec1data[res][1], spec2data[res][1]

for perturb in Cppm:
	delC = float(Cppm[perturb][1]) - float(Cppm[perturb][0])
	delH = float(Hppm[perturb][1]) - float(Hppm[perturb][0])
	obs_CSP = math.sqrt(0.5*((delH**2)+(0.2*(delC**2))))
	spectra_CSPs[perturb] = obs_CSP
	CSP_values.append(obs_CSP)
	#mk_str = str(obs_CSP)
	line_to_write = "%s \t%r\n" % (perturb, obs_CSP)
	output_file.write(line_to_write)

# Find greatest CSP value observed:
greatest_CSP = max(CSP_values)

# Calculate standard deviation of the observed CSPs.
mean_CSP = np.mean(CSP_values)
sum_sq_dist = 0

for value in CSP_values:
	dist_from_mean = (value - mean_CSP)**2
	sum_sq_dist = sum_sq_dist + dist_from_mean

std_dev = math.sqrt(float(1/(len(CSP_values)-1))*sum_sq_dist)
print "The mean and standard deviation for this dataset is: %r and %r" % (mean_CSP, std_dev)
print "The greatest observed CSP is: %r" % greatest_CSP


spec1.close()
spec2.close()
output_file.close()