let resultString =
  "https://my.agromat.ua/rest/893/eh1mpd7uf8uy4bzg/lists.element.update?";

let resultStringAdd =
  "https://my.agromat.ua/rest/893/eh1mpd7uf8uy4bzg/lists.element.add?";

export const getUrlBitrixString = (paramObject) => {
  let resultUrl = resultString;
  for (const key in paramObject) {
    resultUrl = resultUrl + `${key}=${paramObject[key]}&`;
  }

  return resultUrl;
};

export const getUrlBitrixStringAdd = (paramObject) => {
  let resultUrl = resultStringAdd;
  for (const key in paramObject) {
    resultUrl = resultUrl + `${key}=${paramObject[key]}&`;
  }

  return resultUrl;
};
