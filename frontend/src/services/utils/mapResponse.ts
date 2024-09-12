import _ from "lodash"

export const mapResponse = (res: any) => {
    return _.get(res, ["data", "data"], {})
}