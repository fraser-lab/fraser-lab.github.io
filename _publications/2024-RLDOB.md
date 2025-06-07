---
type: "Conference Paper"
layout: publication
group: publications
title: "Using Deep Reinforcement Learning for Dynamic Gain Adjustment of a Disturbance Observer"
authors: "**Kyunghwan Choi**, **Hyochan Lee**, Wooyong Kim&#42;"
domestic_or_international: "International" # or "domestic"
pubs: 
  - name: "TechRxiv"
    doi: "10.36227/techrxiv.171174527.70147690/v1"
    pdf: "/static/pub/2024-RL-DOB.pdf"
    year: "2024"
    state: "published"
pub_date: "2024-03-29"
image: "/static/pub/2024-RLDOB.png"
abstract: "
 Increasing estimation accuracy and reducing noise sensitivity are challenging trade-offs in designing disturbance observers (DOBs). The DOB gain tuning process for overcoming this trade-off is not straightforward, nor does it guarantee optimal performance for the resulting DOBs. This paper presents a dynamic gain DOB that intelligently adjusts its gain based on deep reinforcement learning (DRL) to overcome this tradeoff. First, a variable gain DOB is designed by modifying the conventional DOB. The variable gain DOB can exponentially estimate a constant disturbance with a varying gain. Then, DRL is used to train a dynamic gain adjuster for the variable gain DOB. A case study demonstrated that the proposed dynamic gain DOB increases its gain only when needed (i.e., when the estimation error is significant) and otherwise decreases the gain to reduce noise. Comparison with the conventional DOB of various constant gains shows that the proposed DOB achieves superior performance.
"
# links:
#   - name: 
#     url: 
---
