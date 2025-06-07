---
type: "Conference Paper"
layout: publication
group: publications
title: "Stator Flux Linkage Estimation of Synchronous Machines Based on Integration Error Estimation for Improved Transient Performance"
authors: "**Seunghun Jang**,  **Kyunghwan Choi**&#42;"
domestic_or_international: "International" # or "domestic"
pubs: 
  - name: IEEE Conference on Decision and Control (CDC)
    doi: "10.1109/CDC49753.2023.10383827"
    pp: "4197-4202"
    year: "2023"
    # pdf: "/static/pub/2023-IntegrationErrorBased-FLE.pdf"
    state: "published"
pub_date: "2023-01-19" #Date of publication. Change from Biorxiv date to Journal date once accepted
image: "/static/pub/2023-IntegrationErrorBased-FLE.png"
github: 
  - name: "Integration-Error-Estimation-Based-FLE"
    url: "KAIST-MIC-Lab/Integration-Error-Estimation-Based-FLE"
    description: "Code for the paper"
abstract: "
  The stator flux linkages of synchronous machines (SMs) are generally estimated by integrating their differential equations in the stationary frame. The technical challenge is removing the integration error arising from inaccurate integrator inputs and initial values. The conventional method uses a frequency domain approach to remove the integration error as a DC component by designing a high-pass filter. However, the frequency domain approach also affects irrelevant frequency components other than the DC component; thus, the magnitude or phase of the estimates could be distorted. Therefore, this study presents a novel stator flux linkage estimator for SMs, where the integration error is estimated in the time domain and subtracted from the integration result. This time domain approach does not affect other components than the integration error, guaranteeing accurate estimation. The key idea to estimating the integration error is using a linear state observer based on a circular motion of the stator flux linkages in the stationary frame. Simulation results obtained using a 35-kW SM drive demonstrate that the proposed estimator has significantly improved transient performance compared to existing methods. 
"
# links:
#   - name: 
#     url: 
---

