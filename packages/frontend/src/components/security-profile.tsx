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
          <li className="flex space-x-3 mb-3">
            <Symbol text={ticker} />
            <span className="font-bold">{securityName}</span>
          </li>
          <li className="space-x-2">
            <span className="text-sm">Sector:</span>
            <span className="text-sm">{sector}</span>
          </li>
          <li className="space-x-2">
            <span className="text-sm">Country:</span>
            <span className="text-sm">{country}</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SecurityProfile;
