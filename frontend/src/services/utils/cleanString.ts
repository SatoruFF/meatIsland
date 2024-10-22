import _ from "lodash"
export const cleanString = (value: string) => {
    if (!_.isString(value)) return value 
    
    return value.toLowerCase().trim()
}