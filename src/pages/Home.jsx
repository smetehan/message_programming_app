import { CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useLoginContext } from "../context/LoginProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const { setUser } = useLoginContext();
  const navigate = useNavigate();
  const handleChange1 = (event) => {
    event.preventDefault();
    setChecked1(event.target.checked);
    setUser(true);
    navigate("message/message1");
  };

  const handleChange2 = (event) => {
    event.preventDefault();
    setChecked2(event.target.checked);
    setUser(true);
    navigate("message/message2");
  };

  console.log(checked1);
  console.log(checked2);
  // console.log("user1:", user);
  return (
    <Grid container spacing={12} sx={{}}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 400,
            minHeight: 300,
          }}
        >
          <Box>
            <CardMedia
              component="img"
              maxWidth="300"
              maxHeight="150"
              image="https://www.kindpng.com/picc/m/298-2986271_chats-icon-hd-png-download.png"
              alt="Paella dish"
            />
          </Box>
          <Box>
            <CardMedia
              component="img"
              maxWidth="300"
              maxHeight="50"
              image="https://pembeylebeyaz.files.wordpress.com/2014/03/hosgeldiniz.png"
              alt="Paella dish"
            />
          </Box>

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h6">
              Lütfen Kanal Seçimini Yapınız...
            </Typography>

            <FormGroup
              sx={{
                mt: 4,
              }}
            >
              {!checked2 && (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange1}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Kanal 1"
                />
              )}

              {!checked1 && (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange2}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Kanal 2"
                />
              )}
            </FormGroup>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
