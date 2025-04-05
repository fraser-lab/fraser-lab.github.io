---
title: Research in the MIC Lab
layout: default
group: research
---

<!-- ********************************** -->
<div class="row">

## Learning + Control Theory

We strive to harness the synergy between learning and control theory to maximize their potential. In doing so, we address the limitations of conventional deep learning (DL) in control applications. Despite the remarkable progress in DL, its adoption in control remains constrained by three major challenges: the __sim-to-real gap__, the lack of guaranteed __stability__, and the __difficulty in handling constraints__. These limitations prevent conventional DL from ensuring safety in real-world applications. 
To overcome these challenges, we propose a DL framework that enables deep neural networks (DNNs) to continuously learn from streaming data collected directly from real-world systems. By integrating control theory, this approach guarantees stability and ensures rigorous constraint handling.
With these three key properties, the proposed DL framework enables online optimization with safety guarantees, making it a viable solution for real-world control applications.

<div style="text-align: center;">
<img class="img-fluid" src="/static/img/research/control_learning/control_learning1.jpg" alt="qFit" style="width: 80%; height: auto;">
</div>

Below is a preliminary result of the proposed DL-based control approach [3]. This DNN is designed to learn the optimal control law for autonomous driving in real time, without relying on any prior information. The stability of both the learning and control processes has been theoretically proven. 
In a vehicle simulation, the <span style="color: #0000FF"> DNN successfully learned the optimal control law online while maintaining stability, even without prior knowledge</span>. 
These results strongly validate the feasibility of the proposed online DL approach for real-world control applications.

<div style="text-align: center;">
<img class="img-fluid" src="/static/img/research/control_learning/control_learning2.jpg" alt="qFit" style="width: 80%; height: auto;">
</div>

#### Relevant Work


[1] M. Ryu, D. Hong, and __K. Choi__\*, “[Constrained Optimization-Based Neuro-Adaptive Control (CoNAC) for Uncertain Euler-Lagrange Systems Under Weight and Input Constraints](https://www.techrxiv.org/users/754523/articles/1232684-constrained-optimization-based-neuro-adaptive-control-conac-for-uncertain-euler-lagrange-systems-under-weight-and-input-constraints),” Under review for __IEEE Transactions on Neural Networks and Learning Systems__.
<br/>
[2] M. Ryu, J. Kim, and __K. Choi__\*, “[Imposing Weight Norm Constraint for Neuro-Adaptive Control](https://www.techrxiv.org/users/754523/articles/1234375-imposing-a-weight-norm-constraint-for-neuro-adaptive-control),” Under review for __European Control Conferences 2025__.
<br/>
[3] M. Ryu and __K. Choi__\*, “[CNN-based Adaptive Controller with Stability Guarantees](https://arxiv.org/abs/2403.03499),” Under review for __L4DC 2025__.
<br/>
[4] S. Jang, M. Ryu, and __K. Choi__\*, “[Physics-Informed Online Learning of Flux Linkage Model for Synchronous Machines](https://www.techrxiv.org/users/754523/articles/1231145-physics-informed-online-learning-of-flux-linkage-model-for-synchronous-machines),” __TechRxiv__, Preprint, 172893538.89561848/v1. Link
<br/>
[5] __K. Choi__, H. Lee, and W. Kim\*, “[Using Deep Reinforcement Learning for Dynamic Gain Adjustment of a Disturbance Observer](https://www.techrxiv.org/users/754523/articles/732085-using-deep-reinforcement-learning-for-dynamic-gain-adjustment-of-a-disturbance-observer),” __TechRxiv__, Preprint, 171174527.70147690/v1. Link
<br/>
[6] Y. Jeong, S. Jang, and __K. Choi__\*, “[Neural Network-based Nonlinearity Estimation of Voltage Source Inverter for Synchronous Machine Drives](https://ieeexplore.ieee.org/abstract/document/10595703),” in __2024 IEEE 33rd International Symposium on Industrial Electronics (ISIE)__, 2024: IEEE. Link

</div>