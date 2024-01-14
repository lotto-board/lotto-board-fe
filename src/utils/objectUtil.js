class ObjectUtil {
    static deepFreeze(obj) {
        Object.keys(obj).forEach(prop => {
            if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) {
                this.deepFreeze(obj[prop]);
            }
        });
        return Object.freeze(obj);
    }

    static getAndFreeze(obj) {
        try {
            this.deepFreeze(obj);
            return obj;
        } catch (e) {
            throw new Error('object freeze에 실패하였습니다.');
        }
    }
}



export default ObjectUtil
