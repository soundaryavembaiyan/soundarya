#!c:\python27\python.exe

print ("Content-type:text/html\r\n\r\n")
import cgi, os
import cgitb
cgitb.enable()

import os, sys
try: #Windows needs stdio set for binary mode.
	import msvcrt
	msvcrt.setmode (0, os.O_BINARY) # stdin = 0
	msvcrt.setmode (1, os.O_BINARY) # stdout = 1
except ImportError:
	pass
	
form = cgi.FieldStorage()
#holds the file
fileitem = form['filename']

print "____"
print "filename", fileitem.filename
print "____", fileitem.file
print "____"

#test it, if the file was uploaded
if fileitem.filename:
#path from file to avoid dir

	fn = os.path.basename(fileitem.filename)

	open(fn, 'wb').write(fileitem.file.read(250000))
	message = 'File "'+ fn + '"uploaded successfully'
else:
	message += 'No file was uploaded'
	
print """
<html><body>
<p>%s</p>
</body></html>
""" %(message,)


	