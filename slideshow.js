const bindEventSlide = () => {
    let selector = ".slide-button" 
    bindAll(selector, 'click', (event) => {
        let self = event.target
        // 找到 slide 所在的 div
        let slide = self.closest('.slide-container')
        // 找出当前 active 的元素
        let activeElement = e('.active')
        // 求出当前 active 元素的下标
        let index = Number(activeElement.id.slice(-1))
        let numberOfImgs = Number(slide.dataset.img)
        // 删除当前图片的 class，给下一张图片加上 class
        let className = 'active'
        removeClassAll(className)
        // 上一张 offset 是 -1
        // 下一张 offset 是 1
        let offset = Number(self.dataset.offset)
        // 求出下一张图片的下标，从而通过选择器选出下一张图片
        let nextIndex = (index + offset + numberOfImgs) % numberOfImgs
        let nextSelector = '#id-img-' + String(nextIndex)
        let img = e(nextSelector)
        // 为下一张图片添加 active class
        img.classList.toggle('active')
    })
}

const __main = () => {
    bindEventSlide()
}

__main()
