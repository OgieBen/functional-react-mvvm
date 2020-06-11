import logger from './Logger';
import crypto from 'crypto'

export const pErr = (err: Error) => {
    if (err) {
        logger.error(err);
    }
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export function createHashSignature(hashStr: string) {
    return crypto
        .createHash('sha256')
        .update(hashStr)
        .digest('base64')
}

