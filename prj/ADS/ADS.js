(function() {
    //ADS命名空间 判断window下有没有ADS
    if (!window.ADS) {
        window['ADS'] = {}
    }
    // 确定当前浏览器是否与整个库兼容
    //确定浏览器是否与整个库兼容  
    //例子 alert(ADS.getEvent());  
    function isCompatible(other) {
        //使用能力监测来检查必要条件
        if (other === false ||
            !Array.prototype.push ||
            !Object.hasOwnProperty ||
            !document.createElement ||
            !document.getElementsByTagName
        ) {
            return false;
        }
        return true;
    };
    window['ADS']['isCompatible'] = isCompatible;
    //依据id取得元素  
    //例子 ADS.$('bu1','bu2')  
    function $() {
        var elements = new Array();
        // 查找作为参数提供的所有元素
        for (var i = 0; i < arguments.length; i++) {
            var element = arguments[i];

            //如果该参数是一个字符串那假设他是一个ID
            if (typeof element == 'string') {
                element = document.getElementById(element);
            }
            //如果只提供了一个参数,则立即返回这个元素  
            if (arguments.length == 1) {
                return element;
            }
            // 否则将它添加到数组中

            elements.push(element);
        }
        // 返回包含多个被请求元素的数组
        return elements;
    };
    window['ADS']['$'] = $;

    function addEvent(node, type, listener) {};
    window['ADS']['addEvent'] = addEvent;

    function removeEvent(node, type, listener) {};
    window['ADS']['removeEvent'] = removeEvent;

    function getElementByClassName(className, tag, parent) {};
    window['ADS']['getElementByClassName'] = getElementByClassName;

    function toggleDisplay(node, value) {};
    window['ADS']['toggleDisplay'] = toggleDisplay;

    function insertAfter(node, referenceNode) {};
    window['ADS']['insertAfter'] = insertAfter;

    function removeChildren(parent) {};
    window['ADS']['removeChildren'] = removeChildren;

    function prependChild(parent, newChild) {};
    window['ADS']['prependChild'] = prependChild;


})();