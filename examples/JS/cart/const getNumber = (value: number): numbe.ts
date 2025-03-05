const getNumber = (value: number): number | undefined =>
  number.find((element) => element === value);

const getProperty = (key: string, obj: object): unknown | undefined => obj[key];