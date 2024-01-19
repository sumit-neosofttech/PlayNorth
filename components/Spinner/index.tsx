import { Box } from "@mui/system";
import { DNA } from "react-loader-spinner";
import styles from "./Spinner.styles";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export const Spinner = () => {
  return (
    <Box sx={styles.container}>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Box>
  );
};
