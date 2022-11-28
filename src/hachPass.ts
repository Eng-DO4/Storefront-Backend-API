import bcrypt from 'bcrypt';
import config from './config'

export const hashPass = (pass: string): string => {
    const salt = +(config.salt as string);
    return bcrypt.hashSync(`${pass}${config.pepper}`, salt);
}