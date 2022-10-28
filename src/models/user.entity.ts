export class User {
  static collectionName = 'users';

  id: string;
  familyName: string;
  givenName: string;
  avatar: URL;
}
