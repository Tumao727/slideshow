const nextIndex = (slide, offset) => {
    // 找出当前 active 的元素
    let activeElement = e('.active')
    // 求出当前 active 元素的下标
    let index = Number(activeElement.id.slice(-1))
    let numberOfImgs = Number(slide.dataset.img)
    // 求出下一张图片的下标，从而通过选择器选出下一张图片
    let nextIndex = (numberOfImgs + index + offset) % numberOfImgs
    return nextIndex
}

const bindEventSlide = () => {
    let selector = ".slide-button" 
    bindAll(selector, 'click', (event) => {
        let self = event.target
        // 找到 slide 所在的 div
        let slide = self.closest('.slide-container')
        // 上一张 offset 是 -1
        // 下一张 offset 是 1
        let offset = Number(self.dataset.offset)
        let index = nextIndex(slide, offset)
        showImageAtIndex(index)
        showIndicatorAtIndex(index)
    })
}

const bindEventIndicator = () => {
    let selector = '.slide-indi'
    bindAll(selector, 'mouseover', (event) => {
        let self = event.target
        let index = Number(self.dataset.index)
        showImageAtIndex(index)
        showIndicatorAtIndex(index)
    })
}

const showImageAtIndex = (index) => {
    let nextIndex = index
    // 删除当前图片的 class，给下一张图片加上 class
    let className = 'active'
    removeClassAll(className)
    let nextSelector = '#id-img-' + String(nextIndex)
    let img = e(nextSelector)
    // 为下一张图片添加 active class
    img.classList.toggle('active')
}

const showIndicatorAtIndex = (index) => {
    let nextIndex = index
    // 切换小圆点
    let indicatorClass = 'indi-active'
    removeClassAll(indicatorClass)
    // 求出下一个小圆点的下标，从而通过选择器选出下一个小圆点
    let nextIndi = '#id-indicator-' + String(nextIndex)
    let indi = e(nextIndi)
    // 为下一个小圆点添加 indi-active class
    indi.classList.toggle('indi-active')
}

const __main = () => {
    bindEventSlide()
    bindEventIndicator()
}

__main()
