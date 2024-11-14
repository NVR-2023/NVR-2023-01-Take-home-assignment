import { Card, CardContent, CardHeader, List, ListItem, ListItemText } from "@mui/material";

type SecurityProfileProps = {
  ticker: string;
  securityName: string;
  country: string;
  sector: string;
};

const SecurityProfile = ({ ticker, securityName, country, sector }: SecurityProfileProps) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }} className="relative">
      <CardHeader title={securityName} subheader={ticker} />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary="Symbol" secondary={ticker} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Name" secondary={securityName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Country" secondary={country} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sector" secondary={sector} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default SecurityProfile;
