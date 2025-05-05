---
type: "Journal Paper"
layout: publication
group: publications
title: "Test Journal Paper"
authors: "**Myeongseok Ryu**, Niklas Monzen, Pascal Seitter,  **Kyunghwan Choi**, Christoph M. Hackl&#42;"
pubs: 
  - name: Techrxiv
    doi: "10.36227/techrxiv.174585949.94234666/v1"
    pdf: "/static/pub/2025_CONAC_SM.pdf"
    state: "published"
pub_date: "2025-04-28" #Date of publication. Change from Biorxiv date to Journal date once accepted
image: "/static/pub/2025_CONAC_SM.png"
github: 
  - name: "CoNAC on SM"
    url: "KAIST-MIC-Lab/CONAC-on-SM"
    description: "Code for the paper"
abstract: "
  This paper presents a **constrained optimization-based neuro-adaptive control (CONAC)** for **nonlinear synchronous machines (SMs)** under **voltage constraints**, which allows to control the completely **unknown** electrical drive system, after a brief learning phase with very satisfactory control performance. 
  The artificial neural network (ANN) in the proposed neuro-adaptive controller (NAC) learns online and empowers the controller to handle parameter uncertainties. 
  Moreover, it solves a **constrained optimization problem** which allows to consider the nonlinear voltage constraints as well, by deriving the adaptation laws of the ANN's weights from the Lagrangian function.
  Boundedness of tracking error, convergence of the ANN weights, and satisfaction of the constraints are guaranteed by **Lyapunov theory**.  
  Numerical simulations in combination with a realistic (nonlinear) synchronous machine drive demonstrate the effectiveness and robustness against parameter and modeling uncertainties of the proposed NAC and its very acceptable constraints handling.
"
# links:
#   - name: 
#     url: 
---