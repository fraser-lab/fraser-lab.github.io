---
type: "Journal Paper"
layout: publication
group: publications
title: "Constrained Optimization-Based Neuro-Adaptive Control (CONAC) for Euler-Lagrange Systems Under Weight and Input Constraints"
authors: "**Myeongseok Ryu**, **Donghwa Hong**,  **Kyunghwan Choi**&#42;"
pubs: 
  - name: Techrxiv
    doi: "10.36227/techrxiv.172954216.68720680/v1"
    pdf: "/static/pub/2025-CONAC-Robot.pdf"
    state: "published"
pub_date: "2024-10-21" #Date of publication. Change from Biorxiv date to Journal date once accepted
image: "/static/pub/2025-CONAC-Robot.png"
github: 
  - name: "CONAC"
    url: "KAIST-MIC-Lab/CONAC"
    description: "Code for the paper"
abstract: "
  This study presents a constrained optimization-based neuro-adaptive controller (CONAC) for uncertain EulerLagrange systems under weight norm and convex input constraints. A deep neural network (DNN) is employed to approximate the ideal stabilizing control law, while learning the unknown system dynamics and, addressing both types of constraints, simultaneously. The weight adaptation laws are formulated through a constrained optimization problem, ensuring first-order optimality conditions at steady state. The controller’s stability is rigorously analyzed using Lyapunov theory, guaranteeing bounded tracking errors and DNN weights. The proposed controller was validated via a real-time implementation conducted on a 2-DOF robotic manipulator, demonstrating the controller’s effectiveness in achieving desired trajectory tracking while satisfying constraints.
"
# links:
#   - name: 
#     url: 
---