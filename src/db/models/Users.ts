import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface UserAttributes {
    id: number;
    primary_profile: number;
    username: string;
    first_name: string;
    last_name:string;
    email: string; 
    phone_no: string;
    password: string;
    status: number;
    kyc_status: number;
    
    
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}

export interface UserOutput extends Required<UserAttributes>{} 

class User
    extends Model<UserAttributes, UserInput>
    implements UserAttributes
{
    public id!: number;
    public primary_profile!: number;
    public username!: string;
    public first_name!:string;
    public last_name!:string;
    public email!: string;
    public phone_no!: string;
    public password!: string;
    public status!:number;
    public kyc_status!:number;
    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        primary_profile :{
            type: DataTypes.INTEGER,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            // allowNull: false,
        },
        email: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        phone_no:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        status:{
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue : 1
        },
        kyc_status:{
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue : 1
            
        }

    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        paranoid: true,
    }
);

export default User;


export const toUser = (user: UserOutput) => {
    return {
        id: user.id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_no: user.phone_no,
        password: user.password,
        status: user.status,
        kyc_status: user.kyc_status,
        
        primary_profile: user.primary_profile,


        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }
}


export type CreateUserDTO = {
    id: number;
    username: string;
    last_name: string;
    first_name: string;
    email: string;
    phone_no: string;
    password: string;
    confirm_password: string;
    primary_profile:number;
    status:number;
    kyc_status:number;
}

export type UpdateUserDTO = Optional<CreateUserDTO,"id" >

export type FilterUserDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export interface CustomUserOutput {
    id:number,
    username:string,
    email:string,
    phone_no:string
}