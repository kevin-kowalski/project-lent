import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IGeoLocation } from '../_types';


dotenv.config();

const secretKey = process.env.JWT_SECRET;

export function generateJWT (userId: string, geoLocation: IGeoLocation) {
  const payload = {
    userId: userId,
    geoLocation: geoLocation
  };
  const token = jwt.sign(payload, secretKey!, {
    expiresIn: '1d'
  });
  console.log(token)
  return token
}