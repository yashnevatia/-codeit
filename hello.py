input = sys.argv[1];

def intersection(containerx,containery,containerHeight,containerWidth,childx,childy,childHeight,childWidth):
    containerleftx = containerx
    containerlefty = containery
    containerrightx = containerx+containerWidth
    containerrighty = containery+containerHeight
    childleftx = childx
    childlefty = childy
    childrightx = childx+childWidth
    childrighty = childy+childHeight


    intersect = True
    if(containerrightx < childleftx):
        intersect = False
    elif(containerrighty < childlefty):
        intersect = False

    if(childrightx < containerleftx) :
        intersect = False
    elif(childrighty < containerlefty) :
        intersect = False
    x5=""
    y5=""
    x6=""
    y6=""
    if(intersect == True):
        x5 = max(childleftx, containerleftx);
        y5 = max(childlefty, containerlefty);
        x6 = min(childrightx, containerrightx);
        y6 = min(containerrighty, childrighty);
        area = (x6-x5)*(y6-y5)
        return ((containerHeight*containerWidth) - area)
    return (containerHeight*containerWidth)


containerx = input['container']['coordinate']['X']
containery = input['container']['coordinate']['Y']
containerHeight = input['container']['height']
containerWidth = input['container']['width']
child = ""
childx =0
childy =0
childHeight =0
childWidth =0
childRadius=0

i=0;
for key, value in input.iteritems() :

    if(key!="container"):
        if(key=="circle"):
            child = key
            childx = input[key]['center']['X']
            childy = input[key]['center']['Y']
            childRadius = input[key]['radius']
        elif (key=="square"):
            child = "square"
            childx = input[key]['coordinate']['X']
            childy = input[key]['coordinate']['Y']
            childWidth = input[key]['width']

        else:
            child = key
            childx = input[key]['coordinate']['X']
            childy = input[key]['coordinate']['Y']
            childHeight = input[key]['height']
            childWidth = input[key]['width']


if(child == "rectangle"):
   check = intersection(containerx,containery,containerHeight,containerWidth,childx,childy,childHeight,childWidth);

elif(child == "square"):
   check = intersection(containerx,containery,containerHeight,containerWidth,childx,childy,childWidth,childWidth);
print check
