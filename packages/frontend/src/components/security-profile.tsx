import { Card, CardContent } from "@mui/material";
import Symbol from "./symbol";

type SecurityProfileProps = {
  ticker: string;
  securityName: string;
  country: string;
  sector: string;
};

const SecurityProfile = ({ ticker, securityName, country, sector }: SecurityProfileProps) => {
  return (
    <Card sx={{ width: "100%", minWidth: "100%", margin: "auto" }}>
      <CardContent>
        <ul className="">
          <li className="flex space-x-3">
            <Symbol text={ticker} />
            <span className="font-bold">{securityName}</span>
          </li>
          <li className="space-x-2">
            <span className="text-xs">Sector:</span>
            <span className="text-sm font-semibold">{sector}</span>
          </li>
          <li className="space-x-2">
            <span className="text-xs">Country:</span>
            <span className="text-sm font-semibold">{country}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SecurityProfile;
