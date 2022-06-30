import { caver } from "configs";

const pebToFixed = (peb,fixId) => {
    const toKlay = caver.utils.convertFromPeb(peb);
    const fixed = parseFloat(toKlay).toFixed(fixId);
    return fixed;
}

export {pebToFixed}