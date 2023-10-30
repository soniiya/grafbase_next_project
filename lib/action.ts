import {GraphQLClient} from 'graphql-request';

import { createProjectMutation, createUserMutation, deleteProjectMutation, updateProjectMutation, getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery, projectsQuery } from "@/graphql";
import { ProjectForm } from "@/common.types";

const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

const client = new GraphQLClient(apiUrl);


const makeGraphQlReuest = async (query:string, variables ={}) => {
    try{
        return await client.request(query, variables)
    }
    catch(error){
        throw error;
    }
}

export const getUser = (email: string) => {
    client.setHeader('x-api-key', apiKey);
    return makeGraphQlReuest(getUserQuery, {email})
}

export const createUser = (name: string, email: string, avatarUrl: string) =>{
    client.setHeader('x-api-key', apiKey);

    const variables = {
        input: {
            name,email,avatarUrl
        }
    }
    return makeGraphQlReuest(createUserMutation, {email})
}