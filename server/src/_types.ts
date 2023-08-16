import { Document, Schema, Types } from 'mongoose';

export interface IItem extends Document {
  user: Types.ObjectId; // user._id
  name: string;
  img_url?: string; // URL to cloudinary link
  value?: number;
  description: string;
  lendable: boolean;
  available: boolean;
  collections: string[];
  borrowed: boolean;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IChat extends Document {
  item: Types.ObjectId; // item._id
  messages: Types.ObjectId[];
  users: Types.ObjectId[];
}

export interface IMessage extends Document {
  body: string;
  from: Types.ObjectId; // A user._id
  to: Types.ObjectId; // B user._id
  seen: boolean;
}

export interface ICollection extends Document {
  name: string;
  items: Types.ObjectId[]; // item._id
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string; // hashed
  address: IAddress;
  geoLocation: IGeoLocation; // or stored geo-location
  credits: number;
  reputation: number;
  collections: Types.ObjectId[]; // collection._id
  inbox: Types.ObjectId[]; // chat._id
}

export interface IGeoLocation {
  lat: number;
  lng: number;
}

export interface IAddress {
  streetName: string;
  streetNumber: string;
  postalCode: string;
  city: string;
}