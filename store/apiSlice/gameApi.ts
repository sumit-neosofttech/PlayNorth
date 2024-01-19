import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const generateQueryStr = (baseString: string, query: Object): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  console.log(queryString);

  return queryString;
};
type RootState = any; // normally inferred from state

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

// API endpoint for fetching data
export const gameApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ` https://casino.api.stg.kansino.nl/v1/kansino/en`,
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getMenuConfig: builder.query<any, Object>({
      // <Type of data the call will return, Type of parameter being passed to the query function>

      query: (queryParams?) => {
        const queryStr = generateQueryStr("cars?", queryParams);

        return { url: `/config` };
      },
    }),
    getGameTiles: builder.query<any, Object>({
      // <Type of data the call will return, Type of parameter being passed to the query function>

      query: (queryParams) => {
        const queryStr = generateQueryStr("?", queryParams);

        return { url: `/games/tiles${queryStr}` };
      },
    }),
  }),
});

export const { useGetMenuConfigQuery, useGetGameTilesQuery } = gameApi;
