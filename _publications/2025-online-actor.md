---
type: "Conference Paper"
layout: publication
group: publications
title: "Online Actor Critic Learning for Optimal Tracking in Servo Positioning Systems"
authors: "**Hyochan Lee**, **Kyunghwan Choi**&#42;"
domestic_or_international: "International" # or "domestic"
pubs: 
  - name: IEEE Industrial Electronics Society (IECON) 2025
    doi: 
    pdf: "/static/pub/2025-online-actor.pdf"
    state: "submitted"
pub_date: "2025-10-01" #Date of publication. Change from Biorxiv date to Journal date once accepted
image: "/static/pub/2025-online-actor.png"
abstract: "
 This paper proposes an online actor critic learning-based optimal tracking control method for output-feedback servo positioning systems under unknown external disturbances. The servo system is reformulated into a control-affine form, where the uncertain dynamics are compactly represented as a lumped unknown function. An online identifying filter is introduced to estimate these dynamics, while an actor-critic neural network structure is used to approximate the value function and optimal control input. The proposed method yields an approximate solution to the Hamilton–Jacobi–Bellman equation, with adaptive update laws ensuring asymptotic convergence of the Bellman residual error. Lyapunov-based analysis guarantees the stability of the closed-loop system. Simulation results confirm the effectiveness of the proposed method in achieving robust tracking under time-varying disturbances.
"
# links:
#   - name: 
#     url: 
---