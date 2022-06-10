import {User} from '../entity/User';
import { AppDataSource } from '../utilities/database';
import { Repository } from 'typeorm';
import { LoginPayload } from '../interface/login.interface';
import { EncryptionHelper } from '../helper/encryption.helper';
import { AddUserPayload } from '../interface/addUser.interface';

const db = AppDataSource
const encrypt = new EncryptionHelper

export const login = async (req:LoginPayload)=>{
    const userRepo = await db.getRepository(User) as Repository<User>;
    const users=await userRepo.findOneBy({username:req.username});
    if(!users){
        return {status:401,body:{message:"Invalid Credentials."}};
    }
    const match=await encrypt.validatePassword(req.password,users.password);
    console.log(match);
    if(!match){
        return {status:401,body:{message:"Invalid Credentials."}};
    }
    return {status:200,body:users};
}
export const getAllUsers = async ()=>{
    const userRepo = await db.getRepository(User) as Repository<User>;
    const users=await userRepo.find({
        select:["id","firstName","lastName","address","mobileNumber","postcode"]
    });
    return {status:200,body:users};
}
export const addUser=async(req:AddUserPayload)=>{
    const user=new User();
    user.address=req.address;
    user.firstName=req.firstName;
    user.lastName=req.lastName;
    user.mobileNumber=req.mobileNumber;
    user.password=await encrypt.encryption(req.password);
    user.postcode=req.postcode;
    user.username=req.username;
    await db.manager.save(user);
    return {status:201,body:{message:"User "+user.username+" has been created."}}
}
export const updateUser=async (req:AddUserPayload,userId:string)=>{
    const userRepo = await db.getRepository(User) as Repository<User>;
    const user=await userRepo.findOneBy({id:userId});
    user.address=req.address;
    user.firstName=req.firstName;
    user.lastName=req.lastName;
    user.mobileNumber=req.mobileNumber;
    user.password=await encrypt.encryption(req.password);
    user.postcode=req.postcode;
    user.username=req.username;
    await db.manager.save(user);
    return {status:200,body:{message:"User "+user.username+" has been updated."}}
}
export const deleteUser=async (userId:string)=>{
    const userRepo = await db.getRepository(User) as Repository<User>;
    await userRepo.delete({id:userId});
    return {status:200,body:{message:"User has been deleted."}};
}