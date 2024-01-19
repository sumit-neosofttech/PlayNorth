import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { CategoryCard, Spinner } from "../components";
// import { Spinner } from "../components";
import { useGetMenuConfigQuery } from "../store/apiSlice/gameApi";
import { IGameCardProps } from "../components/GameCard";
import { DNA } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Home: NextPage = () => {
  const { data, isLoading } = useGetMenuConfigQuery({
    limit: "0",
    page: "0",
  });
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid
          container
          display={"flex"}
          spacing={2}
          justifyContent={"space-between"}
        >
          {data?.menu?.lobby?.items?.map((item: IGameCardProps) => (
            <Grid item md={4}>
              <CategoryCard {...item} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
