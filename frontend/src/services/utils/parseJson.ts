import _ from "lodash";

type OnError = (error: Error, data: string) => void;

export default function parseJSON(data: string, onError?: OnError) {
  if (_.isString(data)) {
    try {
      return JSON.parse(data);
    } catch (e) {
      if (onError) {
        onError(e as Error, data);
        return;
      }
      return data;
    }
  } else {
    return data;
  }
}