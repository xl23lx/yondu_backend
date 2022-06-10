import bcrypt from 'bcryptjs'

const saltRounds = 10;

export class EncryptionHelper{
    
    async encryption(password:string){
        return bcrypt.hash(password, saltRounds);
    }

    async validatePassword(password:string, hash: string){
        return bcrypt.compare(password, hash)
    }   
}