import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import express from "express";

 async function init() {
    const app=express();

const PORT=Number(process.env.PORT) || 8000;
 
app.use(express.json())

//create Graphql Server
const gqlServer = new ApolloServer({
    typeDefs:`
     type Query {
       hello:String 
       say(name:String):String
     }
    `,
    resolvers:{
        Query :{
            hello:()=>`Hey there, I am a graphql server`,
            say:(_,{name}:{name:string})=>`Hey ${name},How are you?`
        }
    }
})

//Start the gql server
await gqlServer.start();

app.get("/",(req,res)=>{
    res.json({message:"Server is up and running"})
})

app.use('/graphql',expressMiddleware(gqlServer))
app.listen(PORT,()=>console.log(`server started at PORT:${PORT}`))
 }

 init();