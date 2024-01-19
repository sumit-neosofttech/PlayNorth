import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
export interface IGameCardProps {
  id: string;
  name?: string;
  gameText: string;
  image: {
    original: {
      src: string;
    };
  };
  key?: string;
}
import styles from "./GameCard.styles";
export const GameCard = ({ gameText, image, key }: IGameCardProps) => {
  return (
    <Card sx={styles.cardContainer} key={key}>
      <CardMedia
        sx={styles.cardMedia}
        image={image?.original?.src}
        title={gameText}
        data-testid="cardImage"
      />
      <CardContent>
        <Typography gutterBottom color={"black"} variant="h5" component="div">
          {gameText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Play</Button>
        <Button size="small">Info</Button>
      </CardActions>
    </Card>
  );
};
