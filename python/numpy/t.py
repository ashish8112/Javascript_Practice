from tkinter import *
from tkinter.ttk import Combobox
root = Tk()
Label(root,text="Hello").place(x=0,y=0)
Combobox(root,text="choose",values=["Python","Java"]).place(x=50,y=60)
Radiobutton(root,text="Male",value="Male").place(x=100,y=86)
Radiobutton(root,text="Female",value="Female").place(x=200,y=86)
root.geometry("400x300+0+0")
root.mainloop()