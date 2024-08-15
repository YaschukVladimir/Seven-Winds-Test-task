import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateRowData, EntityType, ResponseData } from "../types/types";

type CreateRowRequest = {
    eID: number;
    body: CreateRowData;
}

type UpdateRowRequest = {
    eID: number;
    rID: number | null;
    body: CreateRowData;
}

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://185.244.172.108:8081/'}),
    endpoints: (build) => {
        return {
            getEId: build.query({
                query: () => ({
                    url: `/v1/outlay-rows/entity/create`,
                    method: 'POST'
                })
            }),
            getData: build.query<EntityType[], number>({
                query: (id: number) => `/v1/outlay-rows/entity/${id}/row/list`
            }),
            createRow: build.query<ResponseData, CreateRowRequest>({
                query: ({eID, body}) => ({
                    url: `/v1/outlay-rows/entity/${eID}/row/create`,
                    body,
                    method: 'POST'
                })
            }),
            updateRow: build.query<ResponseData, UpdateRowRequest>({
                query: ({eID, rID, body}) => ({
                    url: `/v1/outlay-rows/entity/${eID}/row/${rID}/update`,
                    body,
                    method: 'POST'
                })
            }),
            deleteRow: build.query({
                query: ({eID, rID}) => ({
                    url: `/v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
                    method: 'DELETE'
                }) 
            })

        }
    }
})

export const {
    useGetEIdQuery,
    useGetDataQuery,
    useLazyGetDataQuery,
    useLazyCreateRowQuery,
    useLazyDeleteRowQuery,
    useLazyUpdateRowQuery
 } = dataApi;