import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function BasicCard(props) {
  const url = "https://api.chucknorris.io/jokes/random";
  const [joke, setJoke] = React.useState("");
  const [toggle, settoggle] = React.useState(false);
  React.useEffect(() => {
    const fetchjoke = async () => {
      const result = await axios(url);
      console.log(result.data.value);
      setJoke(`${result.data.value}`);
    };
    fetchjoke();
  }, [toggle]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {joke}
        </Typography>
        <Typography variant="body2">{props.content}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => settoggle(!toggle)} size="small">
          NEXT
        </Button>
      </CardActions>
    </Card>
  );
}
