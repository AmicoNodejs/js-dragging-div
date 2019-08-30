var div1 = document.createElement('div')
div1.className = 'demo'

document.body.appendChild(div1)
var lastX
var lastY
var dragging

div1.onmousedown = function(e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.body.onmousemove = function(e) {
    if (dragging == true) {
        deltaX = e.clientX - lastX
        deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        topY = top + deltaY
        if (topY < 0) {
            topY = 0
        }
        leftX = left + deltaX
        if (leftX < 0) {
            leftX = 0
        }
        if (leftX > document.body.offsetWidth - 100) {
            leftX = document.body.offsetWidth - 100
        }
        div1.style.top = topY + 'px'
        div1.style.left = leftX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}
div1.onmouseup = function() {
    dragging = false
}
