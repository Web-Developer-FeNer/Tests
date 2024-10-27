import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface Items {
    id: number;
    title: string;
    image: string;
    price: number
  }


export const itemsApi = createApi ({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://621cded3768a4e1020b7f289.mockapi.io/'}),
    endpoints: (build) => ({
        getItems: build.query<Items[], number>({
            query: () => ({
                url: `/items`
            })
        })
    })
})

export const {useGetItemsQuery} = itemsApi