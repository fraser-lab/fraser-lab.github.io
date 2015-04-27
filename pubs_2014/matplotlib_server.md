---
title: BP205 Server
layout: default
group: pubs
---

# Using matplotlib (pyplot) to make plots on the class server

The server for the class doesn't have a GUI, which means it lacks a graphical
engine to show plots by default. However, since you are doing most of your
calculations in the server, it may be convenient to do plotting on the server
anyway. This can be accomplished easily with just two small changes to your
code.

The first is to change the backend that matplotlib uses. The backend is the
tool that matplotlib tells to draw lines, shapes, and everything else that makes
up a plot. For the server, we recommend using the "agg" backend. PDF and SVG are
also acceptable options.  

Changing the backend happens at the top of your file. Find the following line in the code:

```python
from matplotlib import pyplot as plt
```

or

```python
import matplotlib.pyplot as plt
```

Replace this line with the following 3 lines:

```python
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
```

Now your backend is Agg, which will work on the server!

However, Agg is unable to interactively display a graph, so `plt.show()`
will not work. Therefore, the second thing you need to do is find the line:

```python
plt.show()
```
or

```python
fig.show()
```

Replace this line with the following:

```python
plt.savefig('OUTPUT_FILENAME.png') # You can also use SVG or PDF as a file extension if you prefer vector graphics.
```

Instead of the plot being displayed in a popup, it will now be saved to the folder where you run your python script. Grab it with SCP or with a graphical tool like cyberduck or transmit and you can view it on your computer.

Happy coding!
