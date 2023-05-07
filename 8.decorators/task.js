//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args);
        let objectInCache = cache.find(item => hash === item.hash);
        if (objectInCache) {
            console.log("Из кэша: " + objectInCache.value);
            return "Из кэша: " + objectInCache.value;
        }
        let result = func(...args);
        cache.push({hash, value: result});
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {
        wrapper.allCount += 1;
        if (timeoutId) {
            clearTimeout(timeoutId);
        } else {
            func(...args);
            wrapper.count += 1;
        }
        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count += 1;
        }, delay)
    }
    wrapper.allCount = 0;
    wrapper.count = 0;
    return wrapper; 
}