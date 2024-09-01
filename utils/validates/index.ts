type limitString_Type = {
    value: string
    min?: number
    max?: number
    title?: string
}

type isEqual_Type = {
    first: any,
    second: any
}

type checkFile_Type = {
    file: File
    size?: number
    type?: string
}

export const handle_Validate = {
    isEmail: (value: string = '') => {
        const state = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.trim())
        return { status: state, message: state ? 'Check email success!' : 'Invalid email address!' }
    },

    limitString: ({ value = '', min = 3, max = 30, title = 'Text' }: limitString_Type) => {
        const stringValue = String(value).trim().length;
        if (stringValue < max && stringValue > min) {
            return { status: true, message: `Check ${title} success` }
        }
        return { status: false, message: `${title} must be ${min} to ${max} characters` };
    },


    isEqual: ({ first, second }: isEqual_Type) => {
        if (first == undefined || second == undefined) {
            return { status: false, message: `One value is undefined` };
        }
        return { status: first == second, message: first == second ? 'Check equal success!' : 'Two value is not equal' }
    },


    isPhone: (value: string) => {
        if (typeof Number(value) == "number") {
            return {
                status: value.length == 10,
                message: value.length == 10 ? `Check phone success!` : `Phone must be 10 to 11 characters`
            }
        } else {
            return { status: false, message: `Has string on phone` };
        }
    },
    isUrl: (str: string) => {
        try {
            new URL(str)
            return { status: true, message: `this is url` }
        } catch (error) {
            return { status: false, message: `this is't url` }
        }
    },
    checkFile: ({ file, size = -1, type = 'all' }: checkFile_Type) => {
        if (type != 'all') {
            const checkType = file.type.split('/').includes(type)
            if (!checkType) {
                return { status: checkType, message: `file not type ${type}` }
            }

        }
        if (size != -1) {
            if (file.size > size) {
                return { status: false, message: `File size must be under ${size}` }
            }
        }

        return { status: true, message: `Check file success!` }
    }
};
