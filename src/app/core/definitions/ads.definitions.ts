interface IContact {
  readonly email: string;
  readonly parsedPhoneNumbers: string[];
}

export interface IAd {
  readonly adId: number;
  readonly address: string;
  readonly price: number;
  readonly image: string;
  readonly currency: string;
  readonly uploadDate: string;
  readonly description: string;
  readonly status: string;
  readonly contact: IContact;
}
