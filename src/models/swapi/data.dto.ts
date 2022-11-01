export class SWApiData<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
}
