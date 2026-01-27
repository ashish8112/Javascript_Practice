from reportlab.pdfgen import canvas as can #type:ignore
c=can.Canvas("new.pdf")
c.drawString(0,0,"Hello World ")
c.showPage()
c.rect(100,100,300,100)
c.save()