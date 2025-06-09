---
type: "Conference Paper"
layout: publication
group: publications
title: "Approximation-based Steering Controller with Deep Neural Network"
krtitle: "심층신경망 근사기반 조향 제어기"
authors: "<u>Myeongseok Ryu</u>, <u>Kyunghwan Choi</u>&#42;"
domestic_or_international: "Domestic"
pub: 
  - name: 제어로봇시스템학회 (ICROS)
    doi: 
    year: "2024"
    pp: "292-293"
    pdf: "/static/pub/2024-Approximation.pdf"
    state: "published"
pub_date: "2024-06-01" #Date of publication. Change from Biorxiv date to Journal date once accepted
image: "/static/pub/2024-Approximation.png"
abstract: "
  This paper introduces an approximation-based steering controller. The controller has three features: 1) Deep Neural Network (DNN) is employed as an approximator; 2) the stability of the controller is proven; 3) robustness of the controller is improved through some robust adaptive control techniques. The control policy in the controller is a type of feedback linearization control. Therefore, to cancel the system functions, the DNN approximates the unknown nonlinear system functions in the system dynamics. The adaptation laws for learning are derived using Lyapunov stability analysis. Using the analysis, the asymptotic convergence of the tracking error is guaranteed. Moreover, to prevent unpredictable parameter drift and chattering control around reference trajectory, 𝜖-modification and dead-zone modification are used. A simulation study using CarMaker demonstrates that the controller improves performance by learning the system functions.
"
# links:
#   - name: 
#     url: 
---