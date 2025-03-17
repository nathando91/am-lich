import {LunarUtil} from './LunarUtil';
import {SolarUtil} from './SolarUtil';
import {TaoUtil} from './TaoUtil';
import {FotoUtil} from './FotoUtil';
import {NineStarUtil} from './NineStarUtil';
import chs from './locales/chs';
import en from './locales/en';
import vi from './locales/vi';
export class I18n {
    private static _DEFAULT_LANG: string = 'vi';
    private static _LANG: string;
    private static _INIT: boolean = false;

    private static _MESSAGES: {[key: string]: {[key: string]: string}} = {
        'chs': chs,
        'en': en,
        'vi': vi,
    };

    private static _OBJS: {[key: string]: LunarUtil | SolarUtil | TaoUtil | FotoUtil | NineStarUtil} = {
        'LunarUtil': LunarUtil,
        'SolarUtil': SolarUtil,
        'TaoUtil': TaoUtil,
        'FotoUtil': FotoUtil,
        'NineStarUtil': NineStarUtil
    };

    private static _DICT_STRING: {[key: string]: {[key: string]: {[key: string]: string}}} = {
        'LunarUtil': {
            'TIAN_SHEN_TYPE': {},
            'TIAN_SHEN_TYPE_LUCK': {},
            'XIU_LUCK': {},
            'LU': {},
            'XIU': {},
            'SHA': {},
            'POSITION_DESC': {},
            'NAYIN': {},
            'WU_XING_GAN': {},
            'WU_XING_ZHI': {},
            'SHOU': {},
            'GONG': {},
            'FESTIVAL': {},
            'ZHENG': {},
            'ANIMAL': {},
            'SHI_SHEN': {},
            'XIU_SONG': {}
        },
        'SolarUtil': {
            'FESTIVAL': {}
        },
        'TaoUtil': {
            'BA_HUI': {},
            'BA_JIE': {}
        }
    };

    private static _DICT_NUMBER: {[key: string]: {[key: string]: {[key: string]: number}}} = {
        'LunarUtil': {
            'ZHI_TIAN_SHEN_OFFSET': {},
            'CHANG_SHENG_OFFSET': {}
        }
    };

    private static _DICT_ARRAY: {[key: string]: {[key: string]: {[key: string]: string[]}}} = {
        'LunarUtil': {
            'ZHI_HIDE_GAN': {}
        }
    };

    private static _ARRAYS: {[key: string]: {[key: string]: Array<string>}} = {
        'LunarUtil': {
            'GAN': [],
            'ZHI': [],
            'JIA_ZI': [],
            'ZHI_XING': [],
            'XUN': [],
            'XUN_KONG': [],
            'CHONG': [],
            'CHONG_GAN': [],
            'CHONG_GAN_TIE': [],
            'HE_GAN_5': [],
            'HE_ZHI_6': [],
            'SHENGXIAO': [],
            'NUMBER': [],
            'POSITION_XI': [],
            'POSITION_YANG_GUI': [],
            'POSITION_YIN_GUI': [],
            'POSITION_FU': [],
            'POSITION_FU_2': [],
            'POSITION_CAI': [],
            'POSITION_TAI_SUI_YEAR': [],
            'POSITION_GAN': [],
            'POSITION_ZHI': [],
            'JIE_QI': [],
            'JIE_QI_IN_USE': [],
            'TIAN_SHEN': [],
            'SHEN_SHA': [],
            'PENGZU_GAN': [],
            'PENGZU_ZHI': [],
            'MONTH_ZHI': [],
            'CHANG_SHENG': [],
            'HOU': [],
            'WU_HOU': [],
            'POSITION_TAI_DAY': [],
            'POSITION_TAI_MONTH': [],
            'YI_JI': [],
            'LIU_YAO': [],
            'MONTH': [],
            'SEASON': [],
            'DAY': [],
            'YUE_XIANG': []
        },
        'SolarUtil': {
            'WEEK': [],
            'XINGZUO': []
        },
        'TaoUtil': {
            'AN_WU': []
        },
        'FotoUtil': {
            'XIU_27': []
        },
        'NineStarUtil': {
            'NUMBER': [],
            'WU_XING': [],
            'POSITION': [],
            'LUCK_XUAN_KONG': [],
            'YIN_YANG_QI_MEN': [],
            'COLOR': []
        }
    };

    private static updateArray(c: string) {
        const v = I18n._ARRAYS[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const arr = v[k];
            for (let i = 0, j = arr.length; i < j; i++) {
                o[k][i] = arr[i].replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
            }
        }
    }

    private static updateStringDictionary(c: string) {
        const v = I18n._DICT_STRING[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: {[key: string]: string} = v[k];
            for (let key in dict) {
                const i = key.replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
                o[k][i] = dict[key].replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
            }
        }
    }

    private static updateNumberDictionary(c: string) {
        const v = I18n._DICT_NUMBER[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: {[key: string]: number} = v[k];
            for (let key in dict) {
                const i = key.replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
                o[k][i] = dict[key];
            }
        }
    }

    private static updateArrayDictionary(c: string) {
        const v = I18n._DICT_ARRAY[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: {[key: string]: string[]} = v[k];
            for (let key in dict) {
                const x = key.replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
                const arr = dict[key];
                for (let i = 0, j = arr.length; i < j; i++) {
                    arr[i] = arr[i].replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                        return I18n.getMessage($1);
                    });
                }
                o[k][x] = arr;
            }
        }
    }

    private static update() {
        for (let c in I18n._ARRAYS) {
            I18n.updateArray(c);
        }
        for (let c in I18n._DICT_STRING) {
            I18n.updateStringDictionary(c);
        }
        for (let c in I18n._DICT_NUMBER) {
            I18n.updateNumberDictionary(c);
        }
        for (let c in I18n._DICT_ARRAY) {
            I18n.updateArrayDictionary(c);
        }
    }

    static setMessages(lang: string, messages: {[key: string]: string}) {
        if (!messages) {
            return;
        }
        if (!I18n._MESSAGES[lang]) {
            I18n._MESSAGES[lang] = {};
        }
        for (const key in messages) {
            I18n._MESSAGES[lang][key] = messages[key];
        }
        I18n.update();
    }

    static getMessage(key: string): string {
        let s = I18n._MESSAGES[I18n._LANG][key];
        if (undefined == s) {
            s = I18n._MESSAGES[I18n._DEFAULT_LANG][key];
        }
        if (undefined == s) {
            s = key;
        }
        return s;
    }

    static setLanguage(lang: string) {
        if (I18n._MESSAGES[lang]) {
            I18n._LANG = lang;
            I18n.update();
        }
    }

    static getLanguage(): string {
        return I18n._LANG;
    }

    private static initArray(c: string) {
        const v = I18n._ARRAYS[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            v[k].length = 0;
            const arr = o[k];
            for (let i = 0, j = arr.length; i < j; i++) {
                v[k].push(arr[i]);
            }
        }
    }

    private static initArrayDictionary(c: string) {
        const v = I18n._DICT_ARRAY[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: {[key: string]: string[]} = o[k];
            for (let key in dict) {
                v[k][key] = dict[key];
            }
        }
    }

    private static initStringDictionary(c: string) {
        const v = I18n._DICT_STRING[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: {[key: string]: string} = o[k];
            for (let key in dict) {
                v[k][key] = dict[key];
            }
        }
    }

    private static initNumberDictionary(c: string) {
        const v = I18n._DICT_NUMBER[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: { [key: string]: number } = o[k];
            for (let key in dict) {
                v[k][key] = dict[key];
            }
        }
    }

    static init() {
        if (I18n._INIT) {
            return;
        }
        I18n._INIT = true;
        for (let c in I18n._ARRAYS) {
            I18n.initArray(c);
        }
        for (let c in I18n._DICT_STRING) {
            I18n.initStringDictionary(c);
        }
        for (let c in I18n._DICT_NUMBER) {
            I18n.initNumberDictionary(c);
        }
        for (let c in I18n._DICT_ARRAY) {
            I18n.initArrayDictionary(c);
        }
        I18n.setLanguage(I18n._DEFAULT_LANG);
    }

}
