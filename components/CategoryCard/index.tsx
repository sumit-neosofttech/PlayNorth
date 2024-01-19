import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IGameCardProps } from "../GameCard";
import { useRouter } from "next/router";
import { useConvertToCamelCase } from "../../hooks";
import styles from "./CategoryCard.styles";
export const CategoryCard = ({ name, image }: IGameCardProps) => {
  const router = useRouter();
  const camelCaseName = useConvertToCamelCase(name ?? "");
  return (
    <Card
      sx={styles.cardContainer}
      onClick={() => router.push(`/${camelCaseName}`)}
    >
      <Box sx={{ display: "flex" }}>
        <CardContent sx={styles.cardContent}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={styles.cardMedia}
        image={image?.original?.src}
        data-testid="cardImage"
        alt="Live from space album cover"
      />
    </Card>
  );
};
