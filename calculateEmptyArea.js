
function intersection(containerx,containery,containerHeight,containerWidth,childx,childy,childHeight,childWidth){
    containerleftx = containerx
    containerlefty = containery
    containerrightx = containerx+containerWidth
    containerrighty = containery+containerHeight
    childleftx = childx
    childlefty = childy
    childrightx = childx+childWidth
    childrighty = childy+childHeight


    intersect = true
    if(containerrightx < childleftx)intersect = false
    else if(containerrighty < childlefty)intersect = false

    if(childrightx < containerleftx) intersect = false
    else if(childrighty < containerlefty)intersect = false

    var x5="",
    y5="",
    x6="",
    y6="";
    if(intersect === true){
      x5 = Math.max(childleftx, containerleftx);
      y5 = Math.max(childlefty, containerlefty);
      x6 = Math.min(childrightx, containerrightx);
      y6 = Math.min(containerrighty, childrighty);
      area = (x6-x5)*(y6-y5)
      return ((containerHeight*containerWidth) - area)
    }
    return (containerHeight*containerWidth);
}

function calculateEmptyArea(input){
  var containerx = input['container']['coordinate']['X'],
  containery = input['container']['coordinate']['Y'],
  containerHeight = input['container']['height'],
  containerWidth = input['container']['width'],
  child = "",
  childx =0,
  childy =0,
  childHeight =0,
  childWidth =0,
  childRadius=0;

  for(var key in input){
      if(key === 'circle'){
        child = "circle";
        childx = input[key]['center']['X'];
        childy = input[key]['center']['Y'];
        childRadius = input[key]['radius']
      }
      else if (key=="square"){
        child = "square"
        childx = input[key]['coordinate']['X']
        childy = input[key]['coordinate']['Y']
        childWidth = input[key]['width']
      }else{
        child = key
        childx = input[key]['coordinate']['X']
        childy = input[key]['coordinate']['Y']
        childHeight = input[key]['height']
        childWidth = input[key]['width']
      }
  }

  if(child === "rectangle"){
    check = intersection(containerx,containery,containerHeight,containerWidth,childx,childy,childHeight,childWidth);
  }else if(child === 'square'){
    check = intersection(containerx,containery,containerHeight,containerWidth,childx,childy,childWidth,childWidth);
  }
  console.log(check);
  return check;

}
calculateEmptyArea({
        "container": {
            "coordinate": {
                "X": 0,
                "Y": 0
            },
            "width": 10,
            "height": 8
        },
        "square": {
            "coordinate": {
                "X": 5,
                "Y": 2
            },
            "width": 4

        }
    })
// module.exports={
//   calculateEmptyArea
// }
