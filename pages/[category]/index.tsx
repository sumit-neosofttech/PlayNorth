import { NextPage } from "next";
import { useGetGameTilesQuery } from "../../store/apiSlice/gameApi";
import { useState } from "react";
import { GameCard, Spinner } from "../../components";
import { IGameCardProps } from "../../components/GameCard";
import { Box, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { debounce } from "lodash";

const Todo: NextPage = () => {
  const [searchCharacters, setSearchCharacters] = useState("");
  const router = useRouter();

  const { category = "" } = router?.query;
  const {
    data: tilesData,
    isLoading: tilesloading,
    isFetching,
  } = useGetGameTilesQuery({
    pageNumber: "0",
    gameCategories: category,
    search: searchCharacters,
  });
  const debouncedSearch = debounce((criteria) => {
    setSearchCharacters(criteria);
  }, 500);
  async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <TextField
          size="small"
          onChange={handleInputChange}
          label="search"
        ></TextField>
      </Box>
      {tilesloading || isFetching ? (
        <Spinner />
      ) : (
        <>
          <Grid
            container
            display={"flex"}
            spacing={2}
            justifyContent={"space-between"}
            alignContent={"center"}
          >
            {tilesData?.items.length > 0 ? (
              tilesData?.items?.map((tile: IGameCardProps) => (
                <Grid item sm={12} md={3.5}>
                  <GameCard {...tile} />
                </Grid>
              ))
            ) : (
              <Grid
                display={"flex"}
                alignContent={"center"}
                justifyContent={"center"}
                item
              >
                No Data Found
              </Grid>
            )}
          </Grid>
        </>
      )}
    </>
  );
};
export default Todo;
