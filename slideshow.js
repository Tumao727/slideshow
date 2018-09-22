var bindEventSlide = function() {
    var button = e('button')
    bindEvent(button, 'click', function() {
        var activeElement = e('.active')
        var index = Number(activeElement.id.slice(-1))
        var numberOfImgs = Number(e('.slide-container').dataset.img)
        var nextIndex = (index + 1) % numberOfImgs
        var nextSelector = '#id-img-' + String(nextIndex)
        var className = 'active'
        removeClassAll(className)
        var img = e(nextSelector);
        img.classList.toggle('active')
    })
}

var __main = function() {
    bindEventSlide()
}

__main()
