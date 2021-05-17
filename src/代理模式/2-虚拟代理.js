class PreloadImage {
    constructor(imageNode){
        // 获取真实的DOM节点
        this.imageNode = imageNode
    }
    // 操作img节点的src属性
    setSrc(url){
        this.imageNode.src = url
    }
}

class ProxyImage {
    
    constructor(targetImage) {
        // 目标Image，即PreLoadImage实例
        this.targetImage = targetImage
        // 占位图的url地址
        this.loadingUrl = 'xxx';
    }

    // 该方法主要操作虚拟Image，完成加载
    setSrc(targetUrl) {
        // 真实img节点初始化时展示的是一个占位图
         this.targetImage.setSrc(this.loadingUrl)
         // 创建一个帮我们加载图片的虚拟Image实例
         const virtualImage = new Image()
         // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
         virtualImage.onload = () => {
            //  this.targetImage.setSrc(targetUrl)
         }
         // 设置src属性，虚拟Image实例开始加载图片
         virtualImage.src = targetUrl
     }
}
const imgNode = document.createElement('img')
document.body.appendChild(imgNode)
const preloadImg = new PreloadImage(imgNode)
const proxyImg = new ProxyImage(preloadImg)
proxyImg.setSrc("https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")