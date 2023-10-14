from io import StringIO
from lxml import etree

html=StringIO('''
<html>
<head>
</head>
<body>
    <div class="ClassA">
        <div>Text 1</div>
        <div>Text 2</div>
    </div>
    <div class="ClassB">Text 3</div>
</body>
</html>
''')

tree = etree.parse(html)

def xpath_homework1():
    #r = tree.xpath("") #Text 3
    r = tree.xpath("//div[@class='ClassB']/text()")
    return r[0]

def xpath_homework2():
    r = tree.xpath("//div[@class='ClassA']]") #Text 1