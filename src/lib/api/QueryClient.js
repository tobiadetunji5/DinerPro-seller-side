'use client'
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: (error)=>{
                console.log(error.message);
            }
        },
        mutations: {
            onError: (error)=>{
                console.log(error.message);
            }
        }
    }
});

